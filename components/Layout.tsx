import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./NavBar";

import { Inter } from "next/font/google";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Titolo di default" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={`${inter.className} flex flex-col min-h-screen`}>
      <Navbar />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  </div>
);

export default Layout;
