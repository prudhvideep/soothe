import { useState } from "react";
import {  Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import SootheLogo from "../assets/SootheLogo.png";
import useUserStore from "@/store/userStore";
import User from "@/types/types";
import { useNavigate } from "react-router";
import useThemeStore from "@/store/themeStore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser, setPatientTab } = useUserStore();
  const { theme, setTheme } = useThemeStore();
  const navigate = useNavigate();

  function handleLogin() {
    if (email === "patient@test.com" && password === "test") {
      let user: User = {
        email: email,
        type: "patient",
        isActive: true,
      };
      
      setPatientTab("Home");
      setCurrentUser(user);

      navigate("/patient");
    } else if (email === "nurse@test.com" && password === "test") {
      let user: User = {
        email: email,
        type: "nurse",
        isActive: true,
      };

      setCurrentUser(user);

      navigate("/nurse");
    } else {
      alert("Invalid credentials!!");
    }
  }

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen h-screen overflow-auto`}
    >
      <header className="p-6 flex justify-between items-center">
        <img src={SootheLogo} alt="Logo" className="w-40 h-20" />

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`${
              theme === "dark" ? "hover:bg-neutral-700" : "hover:bg-neutral-200"
            } p-2 rounded-md hover:cursor-pointer`}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>
      <div className="h-4/5 flex items-center justify-center ">
        <div className=" flex w-full flex-col items-center justify-center p-4 md:p-10 gap-6">
          {/* Login Form */}
          <motion.div
            className="w-full max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className=" flex flex-col gap-6">
              <div className="rounded-xl border border-neutral-800 bg-card text-card-foreground shadow">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div
                    className={`${
                      theme === "dark" ? "text-neutral-200" : "text-neutral-800"
                    } font-semibold tracking-tight text-2xl `}
                  >
                    Login
                  </div>
                  <div
                    className={`${
                      theme === "dark" ? "text-neutral-300" : "text-neutral-800"
                    } text-sm `}
                  >
                    Enter your email below to login to your account
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <form>
                    <div className="flex flex-col gap-6">
                      <div className="grid gap-2">
                        <label
                          className={`${
                            theme === "dark"
                              ? "text-neutral-200"
                              : "text-neutral-800"
                          } text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e: any) => setEmail(e.target.value)}
                          className={`flex h-9 w-full rounded-md border border-input border-neutral-700 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${
                            theme === "dark"
                              ? "text-neutral-200"
                              : "text-neutral-800"
                          }`}
                          id="email"
                          placeholder="m@example.com"
                        />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center">
                          <label
                            className={`${
                              theme === "dark"
                                ? "text-neutral-200"
                                : "text-neutral-800"
                            } text-sm  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                            itemType="password"
                          >
                            Password
                          </label>
                          <a
                            href="#"
                            className={`${
                              theme === "dark"
                                ? "text-neutral-200"
                                : "text-neutral-800"
                            } ml-auto inline-block text-sm underline-offset-4 hover:underline`}
                          >
                            Forgot your password?
                          </a>
                        </div>
                        <div className="relative">
                          <input
                            type={"password"}
                            value={password}
                            onChange={(e: any) => setPassword(e.target.value)}
                            className={`flex h-9 w-full rounded-md border border-input border-neutral-700 bg-transparent px-3 py-1 text-base  shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${
                              theme === "dark"
                                ? "text-neutral-200"
                                : "text-neutral-800"
                            }`}
                            id="password"
                            required
                          />
                        </div>
                      </div>
                      <motion.button
                        className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow hover:bg-primary/90 h-9 px-4 py-2 w-full  hover:cursor-pointer ${
                          theme === "dark"
                            ? "text-neutral-200 bg-neutral-800"
                            : "text-neutral-200 bg-gray-800"
                        }`}
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleLogin}
                      >
                        Login
                      </motion.button>
                      <motion.button
                        className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full   hover:cursor-pointer  ${
                          theme === "dark"
                            ? "text-neutral-200 bg-inherit"
                            : "text-neutral-800 border-gray-500"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Login with Google
                      </motion.button>
                    </div>
                    <div
                      className={`mt-4 text-center text-sm  ${
                        theme === "dark"
                          ? "text-neutral-200 bg-inherit"
                          : "text-neutral-800 "
                      }`}
                    >
                      Don't have an account <span> </span>
                      <a href="#" className="underline underline-offset-4">
                        Sign up
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
