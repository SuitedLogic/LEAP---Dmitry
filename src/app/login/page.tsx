"use client";

import { useAuthentication } from "@/hooks/authentication.hook";
import router from "next/router";
import { useState } from "react";
import { ErrorMessage } from "./components/ErrorMessage";
import { FormInput } from "./components/FormInput";
import { SubmitButton } from "./components/SubmitButton";

export default function LoginForm() {
  const { login } = useAuthentication();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username.trim()) {
      setError("Username is required");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }

    setIsSubmitting(true);

    try {
      await login({ username, password });
      router.push("/dashboard");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Invalid username or password"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <ErrorMessage message={error} />

          <div className="rounded-md shadow-sm -space-y-px">
            <FormInput
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isSubmitting}
              autoComplete="username"
              required
              className="rounded-t-md"
            />
            <FormInput
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isSubmitting}
              autoComplete="current-password"
              required
              className="rounded-b-md"
            />
          </div>

          <div>
            <SubmitButton
              isSubmitting={isSubmitting}
              text="Sign in"
              submittingText="Signing in..."
            />
          </div>
        </form>
      </div>
    </div>
  );
}
