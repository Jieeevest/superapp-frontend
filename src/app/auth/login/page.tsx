"use client";
import { Card, InputText } from "@/components/atoms";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useLoginMutation } from "@/services/authApi";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const [urls, setUrls] = useState<string | null>(null);

  useEffect(() => {
    /** Access the 'urls' parameter directly from the searchParams */
    const urlsParam = searchParams.get("urls");
    if (urlsParam) {
      setUrls(`https://${urlsParam}`);
    }
  }, [searchParams]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();
      const { token } = response?.data;

      /** Save the token securely */
      localStorage.setItem("accessToken", token);

      alert("Success");

      /** Redirect after success */
      setTimeout(() => {
        /** Redirect to the URL if available */
        if (urls) {
          router.push(`${urls}?token=${token}`);
        } else {
          /** Default redirect if no URL */
          router.push(`/workspace/teams`);
        }
      }, 1000);
    } catch (err: any) {
      alert("Error");
    }
  };

  return (
    <div
      className="w-full h-screen absolute overflow-hidden flex justify-center items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(159, 18, 28, 0.8), rgba(159, 18, 28, 0.8)), url('/siap-background-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="w-[500px] rounded-lg shadow-lg"
        style={{
          backgroundImage:
            "linear-gradient(rgba(159, 18, 28, 0.8), rgba(159, 18, 28, 0.8)), url('/siap-background-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Card isScrollable={true} height="500px">
          <div className="w-full px-10 my-10 flex justify-center">
            <Image
              src="/siap-logo.png"
              alt="SIAP Logo"
              width={100}
              height={100}
            />
          </div>
          <form
            className="w-full h-full flex flex-col px-10"
            onSubmit={handleLogin}
          >
            <h1 className="text-xl font-bold text-gray-800 mb-5 text-left">
              Welcome Back!
            </h1>
            <div className="flex flex-col gap-4 w-full">
              <label className="text-gray-700 font-semibold">
                Work Email<span className="text-danger">*</span>
              </label>
              <InputText
                className="w-full rounded-md"
                type="email"
                size="lg"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-4 w-full mt-4">
              <label className="text-gray-700 font-semibold">
                Password<span className="text-danger">*</span>
              </label>
              <InputText
                className="w-full rounded-md"
                type="password"
                size="lg"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full py-2 mt-6 rounded-md ${
                isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
              } text-white`}
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
}
