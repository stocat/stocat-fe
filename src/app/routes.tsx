
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/shared/ui/Layout";
import { HomePage } from "@/pages/home/ui/Page";
import { AssetPage } from "@/pages/asset/ui/Page";
import { MarketPage } from "@/pages/market/ui/Page";
import { BuyPage } from "@/pages/buy/ui/Page";
import { PortfolioPage } from "@/pages/portfolio/ui/Page";
import { MyInvestmentPage } from "@/pages/my-investment/ui/Page";
import { AnalysisPage } from "@/pages/analysis/ui/Page";
import { LoginPage } from "@/pages/auth/ui/LoginPage";
import { SignupPage } from "@/pages/auth/ui/SignupPage";
import { ProtectedRoute } from "@/app/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "asset/:id",
            element: <AssetPage />,
          },
          {
            path: "market",
            element: <MarketPage />,
          },
          {
            path: "buy/:id",
            element: <BuyPage />,
          },
          {
            path: "portfolio",
            element: <PortfolioPage />,
          },
          {
            path: "my-investment",
            element: <MyInvestmentPage />,
          },
          {
            path: "analysis",
            element: <AnalysisPage />,
          },
        ],
      },
    ],
  },
]);
