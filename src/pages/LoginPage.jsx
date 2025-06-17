import { useEffect, useState } from "react";
import { User } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { account } from "../appwrite/appwrite";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await account.createEmailPasswordSession(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  console.log(error);
  return (
    <div className="md:w-[500px]  mx-auto md:border-2 mt-20 rounded-xl shadow-md flex flex-col gap-10 py-5 md:bg-[#00292D]">
      {error && (
        <p className="text-red-500 text-center font-semibold">{error}</p>
      )}
      <h1 className="font-semibold flex items-center flex-col text-white text-2xl cursor-pointer">
        <CircleUserRound size={100} />
        USER LOGIN
      </h1>
      <form
        className="w-full px-10 flex flex-col gap-10 mt-5"
        onSubmit={handleLogin}
      >
        <div className="flex gap-2 rounded-full bg-gray-200/20 backdrop-blur-md border-gray-300/30 py-3 px-5 text-slate-200">
          <User />
          <input
            type="email"
            name="user"
            id="user"
            className="bg-transparent flex-1 outline-none text-md"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex gap-2 rounded-full bg-gray-200/20 backdrop-blur-md border-gray-300/30 py-3 px-5 text-slate-200">
          <input
            type="password"
            name="pass"
            id="pass"
            className="bg-transparent flex-1 outline-none text-md"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LockKeyhole />
        </div>
        <div className="mx-auto flex justify-between w-full items-center">
          <input
            type="submit"
            className="px-10 py-2 text-xl bg-slate-200 rounded-full cursor-pointer text-[#00292D] font-bold"
            value={"Login"}
          />
          <a href="" className="text-white font-semibold">
            Forget Password?
          </a>
        </div>
        <div className="mx-auto flex justify-between w-full items-center">
          <p className="text-white font-semibold cursor-pointer">
            Create Account
          </p>
          <input
            type="button"
            className="px-10 py-2 text-xl bg-slate-200 rounded-full cursor-pointer text-[#00292D] font-bold"
            value={"Register"}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
