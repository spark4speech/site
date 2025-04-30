"use client";

import { useState } from "react";

export const Final = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch("/api/submit-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  
    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }

    setEmail("");
  };

  return (
    <div className="bg-gradient-to-t from-black to-[#94491d] text-white p-24 text-center overflow-hidden">
      <div className="container max-w-2xl relative ">
        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
          Join the mailing list
        </h2>
        <p className="text-xl text-white/70 mt-5">
          SPARK is now available on the web and heading toward full launch. Join
          our mailing list to pilot SPARK before its launch, test features
          early, provide feedback, and stay in the loop as we build toward the
          future.
        </p>
        {!submitted ? (
          <form
            className="mt-10 flex flex-col sm:flex-row gap-2.5 max-w-lg mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-white/20 rounded-lg py-3 px-5 outline-none font-medium placeholder:text-[#9CA3AF] flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-white text-black h-12 rounded-lg px-5"
            >
              Join now
            </button>
          </form>
        ) : (
          <p className="mt-20 text-xl text-green-400">
            🎉 You&apos;re on the list! We&apos;ll be in touch soon.
          </p>
        )}
      </div>
    </div>
  );
};
