"use client";

import { useState } from "react";

export const Final = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(
      process.env.NEXT_PUBLIC_NOTIFICATION_API_URL as string,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Title: "SPARK Access Request",
          Priority: "urgent",
          Tags: "rocket",
        },
        body: `A user has requested early access to SPARK! Their email is ${email}. Please review their request as soon as possible.`,
      }
    );

    if (!response.ok) {
      alert(
        "Failed to send access request. Please try again later, or contact us for further assistance."
      );
    }

    setEmail("");
  };

  return (
    <div className="bg-gradient-to-t from-black to-[#94491d] text-white sm:p-24 text-center overflow-hidden">
      <div className="container max-w-2xl relative ">
        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
          Get early access
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Okay, now you&apos;re convinced. While SPARK undergoes public
          development, we are offering early access to the application and
          related services on request. Let&apos;s get you started.
        </p>
        <form
          className="mt-10 flex flex-col sm:flex-row gap-2.5 max-w-lg mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="your@email.com"
            className=" bg-white/20 rounded-lg py-3 px-5 outline-none font-medium placeholder:text-[#9CA3AF] flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-white text-black h-12 rounded-lg px-5"
          >
            Request access
          </button>
        </form>
      </div>
    </div>
  );
};
