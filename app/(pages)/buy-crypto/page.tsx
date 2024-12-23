import Header from "@/components/wallet-analytics/Header";
import React from "react";

const ButCrypto = () => {
  return (
    <main>
      <Header />
      <main className="w-10/12 mx-auto mt-10">
        <header>
          <h1 className="uppercase text-xl font-semibold">
            Buy Crypto currencies
          </h1>
        </header>
        <iframe
          className="h-[700px] w-full "
          src="https://global-stg.transak.com/?apiKey=b42f80c6-09e3-4995-a781-660fc5a2c8f4"
        />
      </main>
    </main>
  );
};

export default ButCrypto;
