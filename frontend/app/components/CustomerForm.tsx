"use client";

import { useState } from "react";

type Customer = {
  name: string;
  email: string;
  product: string;
};

export default function CustomerForm({ products }: { products: string[] }) {
  const [form, setForm] = useState<Customer>({
    name: "",
    email: "",
    product: products[0] ?? "",
  });
  const [submitted, setSubmitted] = useState<Customer | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(form);
  }

  const inputClass =
    "w-full rounded border border-zinc-300 px-3 py-2 text-zinc-900 focus:border-blue-700 focus:outline-none";

  return (
    <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold text-zinc-900">고객 등록</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm text-zinc-700">
          이름
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-1 text-sm text-zinc-700">
          이메일
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-1 text-sm text-zinc-700">
          관심 상품
          <select
            value={form.product}
            onChange={(e) => setForm({ ...form, product: e.target.value })}
            className={inputClass}
          >
            {products.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="rounded bg-blue-900 px-4 py-2 font-semibold text-white hover:bg-blue-800"
        >
          등록하기
        </button>
      </form>

      {submitted && (
        <div className="mt-6 rounded bg-zinc-100 p-4 text-sm text-zinc-800">
          <p className="mb-2 font-semibold">등록된 정보</p>
          <p>이름: {submitted.name}</p>
          <p>이메일: {submitted.email}</p>
          <p>관심 상품: {submitted.product}</p>
        </div>
      )}
    </section>
  );
}
