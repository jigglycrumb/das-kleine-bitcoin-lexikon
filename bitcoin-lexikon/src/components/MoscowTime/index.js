import React, { useEffect, useState } from "react";

export default function MoscowTime() {
  const [moscowTime, setMoscowTime] = useState(0);
  const [renderCycle, setRenderCycle] = useState(0);

  let timeout;

  useEffect(() => {
    fetch("https://blockchain.info/tobtc?currency=USD&value=1")
      .then(res => res.json())
      .then(res => {
        setMoscowTime(res * 100000000);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setRenderCycle(renderCycle + 1);
        }, 30 * 1000);
      });
  }, [renderCycle]);

  return <h4>Aktuelle Moskau Zeit: {moscowTime}</h4>;
}
