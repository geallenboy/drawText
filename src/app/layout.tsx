import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { Nunito } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

const MyAppFont = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DrawText",
  description:
    "是一个简洁、直观且易记的产品名称，非常适合描述一个结合文本编辑（Text）和绘图（Draw）功能的产品"
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      {/* <head>
        <link rel="icon" href="./logo.svg" />
      </head> */}
      <body className={`${MyAppFont.className} font-sans`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster richColors />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
