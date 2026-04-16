import * as styles from "./Exchange.css";
import {
  WalletSection,
  ExchangeRateSection,
  RateCardSection,
  HistoryLink,
  NewsSection,
  AnalysisSection,
  CommunitySection,
  ExchangeBottomBar,
} from "./components";
import {
  MOCK_EXCHANGE_WALLET,
  MOCK_EXCHANGE_RATE,
  MOCK_RATE_CARDS,
  MOCK_NEWS,
  MOCK_ANALYSIS,
  MOCK_COMMUNITY,
} from "./Exchange.mock";

export default function Exchange() {
  return (
    <div className={styles.container}>
      <div className={styles.whiteSection}>
        <WalletSection
          timestamp={MOCK_EXCHANGE_WALLET.timestamp}
          won={MOCK_EXCHANGE_WALLET.won}
          dollar={MOCK_EXCHANGE_WALLET.dollar}
        />
        <ExchangeRateSection
          rate={MOCK_EXCHANGE_RATE.rate}
          change={MOCK_EXCHANGE_RATE.change}
          changePercent={MOCK_EXCHANGE_RATE.changePercent}
          date={MOCK_EXCHANGE_RATE.date}
        />
        <RateCardSection
          dollarToWon={MOCK_RATE_CARDS.dollarToWon}
          wonToDollar={MOCK_RATE_CARDS.wonToDollar}
        />
      </div>
      <HistoryLink />
      <NewsSection news={MOCK_NEWS} />
      <AnalysisSection items={MOCK_ANALYSIS} link="잘 모르겠어요" />
      <CommunitySection items={MOCK_COMMUNITY} />
      <ExchangeBottomBar />
    </div>
  );
}
