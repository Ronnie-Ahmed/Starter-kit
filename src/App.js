import { ConnectWallet } from "@thirdweb-dev/react";
import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
    </div>
  );
}

export default App;
