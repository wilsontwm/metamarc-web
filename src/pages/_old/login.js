import { useState, useRef } from "react";
import Web3 from "web3";

export default function Login() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  let web3 = null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formInputs = [...form.current.elements].reduce((accum, currentVal) => {
      if (currentVal.name) accum[currentVal.name] = currentVal.value;
      return accum;
    }, {});

    console.log("ethe", window.ethereum);
    if (!web3) {
      try {
        // Request account access if needed
        await window.ethereum.enable();
        // We don't know window.web3 version, so we use our own instance of Web3
        // with the injected provider given by MetaMask
        web3 = new Web3(window.ethereum);
      } catch (error) {
        window.alert("You need to allow MetaMask.");
        return;
      }
    }

    let currentAccount;
    web3.eth.getAccounts((err, accounts) => {
      if (err) reject(err);
      else if (!accounts.length) reject("No Metamask accounts found");
      else {
        currentAccount = accounts[0];
        console.log("Current account", currentAccount);
      }
    });

    const coinbase = await web3.eth.getCoinbase();
    if (!coinbase) {
      window.alert("Please activate MetaMask first.");
      return;
    }

    console.log("coinbase", coinbase);
    const signature = await web3.eth.personal.sign(
      `I am signing my one-time nonce: ${coinbase}`,
      coinbase,
      "" // MetaMask will ignore the password argument here
    );

    console.log("signature", signature);

    // const resp = await signup({
    //   body: formInputs,
    //   success: () => {
    //     // plugin.showToast("success", "Food moved");
    //   },
    //   error: (e) => {
    //     // fetchMenus();
    //   },
    //   finally: async () => {
    //     setIsLoading(false);
    //   },
    // });
    setIsLoading(false);
  };

  return (
    <div className="min-h-full flex flex-col justify-center py-24 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src="/img/logo.png" alt="Metamarc" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <a href="/signup" className="font-medium text-primary-600 hover:text-primary-500">
            create new account
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" ref={form} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm">
                <a href="/forget-password" className="font-medium text-primary-600 hover:text-primary-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
