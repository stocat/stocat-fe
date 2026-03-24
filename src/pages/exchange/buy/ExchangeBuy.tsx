import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getExchangePreview } from "@/apis/exchange/exchange.api";
import { useExecuteExchange } from "@/hooks/mutations/useExecuteExchange";
import { useCashBalance } from "@/hooks/queries/useCashBalance";
import type { ExchangePreview, ExchangeResult } from "@/apis/exchange/exchange.types";
import AmountInput from "./components/AmountInput/AmountInput";
import NumberKeypad from "./components/NumberKeypad/NumberKeypad";
import ConfirmSheet from "./components/ConfirmSheet/ConfirmSheet";
import CompleteScreen from "./components/CompleteScreen/CompleteScreen";
import * as styles from "./ExchangeBuy.css";

type Step = "input" | "confirm" | "loading" | "complete";

export default function ExchangeBuy() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("input");
  const [amount, setAmount] = useState("");
  const [exchangeRate, setExchangeRate] = useState(0);
  const [preview, setPreview] = useState<ExchangePreview | null>(null);
  const [result, setResult] = useState<ExchangeResult | null>(null);
  const [isPreviewing, setIsPreviewing] = useState(false);

  const { data: krwBalance } = useCashBalance("KRW");
  const { data: usdBalance } = useCashBalance("USD");
  const executeExchange = useExecuteExchange();

  useEffect(() => {
    getExchangePreview({
      fromCurrency: "KRW",
      toCurrency: "USD",
      fromAmount: 1000,
    })
      .then((p) => setExchangeRate(p.exchangeRate))
      .catch(() => {});
  }, []);

  const numericAmount = Number(amount) || 0;
  const availableKrw = krwBalance?.availableAmount ?? 0;
  const availableUsd = usdBalance?.availableAmount ?? 0;
  const isInsufficient = availableKrw > 0 && numericAmount > availableKrw;

  function handleKeyPress(key: string) {
    if (key === "←") {
      setAmount((prev) => prev.slice(0, -1));
      return;
    }
    if (key === "00") {
      setAmount((prev) => (prev === "" ? "" : prev + "00"));
      return;
    }
    if (amount === "" && key === "0") return;
    setAmount((prev) => prev + key);
  }

  async function handleBuyPress() {
    if (numericAmount <= 0 || isInsufficient) return;
    setIsPreviewing(true);
    try {
      const previewData = await getExchangePreview({
        fromCurrency: "KRW",
        toCurrency: "USD",
        fromAmount: numericAmount,
      });
      setPreview(previewData);
      setStep("confirm");
    } finally {
      setIsPreviewing(false);
    }
  }

  function handleConfirm() {
    if (!preview) return;
    setStep("loading");
    executeExchange.mutate(
      { rateLockKey: preview.rateLockKey },
      {
        onSuccess: (data) => {
          setResult(data);
          setStep("complete");
        },
        onError: () => {
          setStep("input");
        },
      }
    );
  }

  if (step === "complete" && result) {
    return <CompleteScreen result={result} onReturn={() => navigate("/exchange")} />;
  }

  return (
    <div className={styles.container}>
      <AmountInput
        amount={amount}
        exchangeRate={exchangeRate}
        isInsufficient={isInsufficient}
        maxKrwAmount={availableKrw}
      />
      <NumberKeypad
        onPress={handleKeyPress}
        onBuyPress={handleBuyPress}
        isBuyEnabled={numericAmount > 0 && !isInsufficient && !isPreviewing}
      />
      {step === "confirm" && preview && (
        <ConfirmSheet
          preview={preview}
          krwBalance={availableKrw}
          usdBalance={availableUsd}
          onConfirm={handleConfirm}
          onBack={() => setStep("input")}
        />
      )}
    </div>
  );
}
