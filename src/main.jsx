import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";


import { WagmiProvider, http } from "wagmi";
import { bsc } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RainbowKitProvider,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";


import "@rainbow-me/rainbowkit/styles.css";


const config = getDefaultConfig({
  appName: "NeuroSpark",
  projectId: "40fb4402e2b27f80bf86d4d4427723a6",
  chains: [bsc],
  transports: {
    [bsc.id]: http(),
  },
});


const queryClient = new QueryClient();


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>
);