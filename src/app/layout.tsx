import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@redux/StoreProvider";

export const metadata: Metadata = {
  title: "Games App",
  description: "Games list",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
