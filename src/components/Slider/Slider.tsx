// import  { useEffect, useRef, memo } from 'react';
//
// const Slider = () => {
//     const container = useRef();
//
//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src =
//             'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
//         script.type = 'text/javascript';
//         script.async = true;
//         script.innerHTML = `
//       {
//         "symbols": [
//           { "proName": "BINANCE:BTCUSDT", "title": "Bitcoin" },
//           { "proName": "BINANCE:ETHUSDT", "title": "Ethereum" },
//           { "proName": "BINANCE:BNBUSDT", "title": "BNB" },
//           { "proName": "BINANCE:XRPUSDT", "title": "XRP" },
//           { "proName": "BINANCE:ADAUSDT", "title": "Cardano" },
//           { "proName": "BINANCE:DOGEUSDT", "title": "Dogecoin" },
//           { "proName": "BINANCE:SOLUSDT", "title": "Solana" },
//           { "proName": "BINANCE:TRXUSDT", "title": "TRON" },
//           { "proName": "BINANCE:DOTUSDT", "title": "Polkadot" },
//           { "proName": "BINANCE:MATICUSDT", "title": "Polygon" }
//         ],
//         "colorTheme": "dark",
//         "locale": "vi_VN",
//         "isTransparent": false,
//         "showSymbolLogo": true,
//         "displayMode": "regular"
//       }`;
//         container.current.appendChild(script);
//
//         return () => {
//             // cleanup khi unmount để tránh bị append trùng script
//             if (container.current) container.current.innerHTML = '';
//         };
//     }, []);
//
//     return (
//         <div className="tradingview-widget-container" ref={container}>
//             <div className="tradingview-widget-container__widget" />
//         </div>
//     );
// };
//
// export default memo(Slider);
