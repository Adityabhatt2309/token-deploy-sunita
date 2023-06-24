"use client";
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import Dropdown from "@/components/Dropdown";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { useNetwork, useSwitchNetwork } from "wagmi";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  bsc,
  bscTestnet,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
const { chains, provider } = configureChains(
  [bsc, bscTestnet],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <div className="container mx-auto lg:inline flex flex-col justify-center px-5 py-10 gap-5 items-center ">
              {/* <ConnectButton /> */}
              <Dropdown />
            </div>
            {children}
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
