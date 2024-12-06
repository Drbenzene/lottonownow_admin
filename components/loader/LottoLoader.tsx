import React from "react";

function LottoLoader() {
  return (
    <div className="relative mt-40 flex items-center justify-center">
      <div className="border-pink absolute h-32 w-32 animate-spin rounded-full border-b-4 border-t-4"></div>
      <img
        src="/images/lock.svg"
        alt="Loader"
        className="h-28 w-28 rounded-full"
      />
    </div>
  );
}

export default LottoLoader;
