"use client";

import { useState } from "react";

export default function makeshot({ onCreated }: { onCreated?: () => void }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/shots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    });

    setName("");
    setDescription("");
    setLoading(false);

    onCreated?.(); // ✅ safe call
  };

  return (
    <form
      onSubmit={submit}
      className="mx-auto px-10"
    >
      <h1 className="text-center my-5">Make A Shot</h1>
      <input
        className="w-full border p-2 rounded"
        placeholder="Shot name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <textarea
        className="w-full mt-2 border p-2 rounded"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-3 w-full bg-purple-600 text-white py-2 rounded"
      >
        {loading ? "Creating..." : "Create Drink"}
      </button>
    </form>
  );
}
