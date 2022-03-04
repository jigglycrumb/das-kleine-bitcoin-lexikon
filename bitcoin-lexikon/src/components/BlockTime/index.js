import React, { useEffect, useState } from "react";

export default function BlockTime() {
  const [blockTime, setBlockTime] = useState(0);
  const [renderCycle, setRenderCycle] = useState(0);

  let timeout;

  useEffect(() => {
    fetch("https://mempool.space/api/blocks/tip/height")
      .then(res => res.json())
      .then(res => {
        setBlockTime(res);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setRenderCycle(renderCycle + 1);
        }, 30 * 1000);
      });
  }, [renderCycle]);

  return <h4>Aktuelle Blockzeit: {blockTime || "lade…"}</h4>;
}
