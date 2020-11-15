import { AppProps } from "next/app";

import "../index.css";
import "tachyons/css/tachyons.min.css";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
