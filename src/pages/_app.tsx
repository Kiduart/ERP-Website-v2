import type { AppProps } from "next/app";
import { AppShell } from "@/App";
import "@/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
}
