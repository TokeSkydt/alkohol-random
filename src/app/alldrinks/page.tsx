// app/shots/page.tsx
import { supabase } from "@/lib/supabase";
type Shot = {
  id: number;
  name: string;
  description: string;
};

async function getDrinks(): Promise<Shot[]> {
  const { data, error } = await supabase
    .from("drinks")
    .select("id, name, description")
    .order("name");

  if (error) {
    console.error(error);
    return [];
  }

  return data as Shot[];
}

export default async function DrinksPage() {
  const drinks = await getDrinks();

  return (
    <div className="mx-auto p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 border-2 border-amber-500 max-w-300">
      {drinks.map((drink) => (
        <div
          key={drink.id}
          className="border-5 border-red-50 rounded-lg p-4 shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold uppercase">
            {drink.name}
          </h2>
          <p className="text-gray-600 mt-2">
            {drink.description}
          </p>
        </div>
      ))}
    </div>
  );
}
