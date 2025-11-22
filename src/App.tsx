import { useState } from "react";

interface loginType {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="bg-linear-to-r from-pink-900 to-slate-900 h-screen flex justify-center items-center">
      <div className="bg-white lg:w-4/8 lg:h-8/12 w-full h-full overflow-scroll flex md:flex-row flex-col relative">
        <div className={`md:w-full md:h-full md:flex ${login && "hidden"}`}>
          <SignUp login={login} setLogin={setLogin} />
        </div>
        <div className={`md:w-full md:h-full md:flex ${!login && "hidden"}`}>
          <SignIn login={login} setLogin={setLogin} />
        </div>
        <div
          className={`hidden md:flex w-1/2 h-full ${
            login ? "bg-pink-900" : "bg-slate-900"
          }  flex flex-col gap-4 items-center justify-center absolute transition-transform duration-700 ease-in-out ${
            login ? "md:translate-x-full" : "md:translate-x-0"
          }`}
        >
          {" "}
          {!login ? (
            <div className="text-center text-white px-6">
              <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
              <p className="text-sm opacity-90">
                We're happy to see you again. Log in to continue your journey
                with us.
              </p>
            </div>
          ) : (
            <div className="text-center text-white px-6">
              <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
              <p className="text-sm opacity-90">
                Enter your details and start your new adventure with us today.
              </p>
            </div>
          )}
          <button
            onClick={() => setLogin(!login)}
            className="border border-white text-white px-4 w-1/3 py-2  rounded-md cursor-pointer"
          >
            {login ? "Sing In" : "Sing Up"}
          </button>
        </div>
      </div>
    </div>
  );
}

function SignUp({ login, setLogin }: loginType) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Create Account</h2>

      <form className="flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder="Full Name"
          className="p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button className="mt-2 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
          Sign Up
        </button>
      </form>

      <p className="text-sm text-gray-700 mt-4">
        Already have an account?{" "}
        <span
          onClick={() => setLogin(!login)}
          className="text-black font-medium cursor-pointer hover:underline"
        >
          Sign In
        </span>
      </p>
    </div>
  );
}

function SignIn({ login, setLogin }: loginType) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome Back</h2>

      <form className="flex flex-col gap-4 w-80">
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button className="mt-2 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
          Sign In
        </button>
      </form>

      <p className="text-sm text-gray-700 mt-4">
        Don’t have an account?{" "}
        <span
          onClick={() => setLogin(!login)}
          className="text-black font-medium cursor-pointer hover:underline"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}

export default App;
