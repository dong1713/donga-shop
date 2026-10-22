import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import CustomerForm from "./components/CustomerForm";

const products = [
  { name: "동아고 후드티", price: 35000, color: "bg-blue-800" },
  { name: "텀블러", price: 15000, color: "bg-emerald-600" },
  { name: "에코백", price: 12000, color: "bg-amber-500" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50">
      <Header />
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-10">
        <section>
          <h2 className="mb-4 text-xl font-bold text-zinc-900">상품</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </section>
        <CustomerForm products={products.map((p) => p.name)} />
      </main>
    </div>
  );
}
