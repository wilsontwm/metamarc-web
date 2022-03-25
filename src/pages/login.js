import { useEffect, useState, useRef } from "react";
import { injected, walletconnect, walletlink, activateInjectedProvider } from "./../utils/wallet_connector";
import { useWeb3React } from "@web3-react/core";
import { LogoutIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { connectWallet as connectWalletAction, logout } from "./../stores/actions/auth";

export default function Login() {
  const dispatch = useDispatch();
  const { active, account, library, connector, activate, deactivate } = useWeb3React();
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const accountId = useSelector((state) => state.auth.accountId);

  useEffect(() => {
    if (account) {
      dispatch(connectWalletAction({ accountId: account }));
      // TODO: send the account info to backend
    } else {
      dispatch(logout());
    }
  }, [account]);

  const connectWallet = async (connector) => {
    try {
      const resp = await activate(connector);
    } catch (e) {
      console.log("Error:", e);
    }
  };

  const disconnectWallet = async () => {
    deactivate();
  };

  return (
    <div className="min-h-full flex flex-col justify-center py-24 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src="/img/logo.png" alt="Metamarc" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {accountId && (
            <button
              onClick={() => disconnectWallet()}
              className="w-full flex justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-600 hover:text-white hover:bg-primary-500 border-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <LogoutIcon className="w-6 h-6 mr-2" aria-hidden="true" />
              <div>Disconnect</div>
            </button>
          )}
          {!accountId && (
            <>
              <button
                onClick={() => {
                  activateInjectedProvider(); // To select metamask
                  connectWallet(injected);
                }}
                className="w-full flex justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-600 hover:text-white hover:bg-primary-500 border-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <img src="/img/wallet/mm.png" className="w-6 h-6 mr-2" />
                <div>Login with Metamask</div>
              </button>
              <button
                onClick={() => connectWallet(walletlink)}
                className="w-full flex justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-600 hover:text-white hover:bg-primary-500 border-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <img src="/img/wallet/cbw.png" className="w-6 h-6 mr-2" />
                <div>Login with Coinbase Wallet</div>
              </button>
              <button
                onClick={() => connectWallet(walletconnect)}
                className="w-full flex justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-600 hover:text-white hover:bg-primary-500 border-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <img src="/img/wallet/wc.png" className="w-6 h-6 mr-2" />
                <div>Login with Wallet Connect</div>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
