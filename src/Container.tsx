"use client";
import { useRouter, useSearchParams } from "next/navigation";
import WeightInput from "./components/WeightInput";
import SetsOutput from "./components/SetsOutput";

function Container() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const weight = Number(searchParams.get("weight") ?? 0);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set("weight", e.target.value);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <main>
      <section>
        <h1>🏋🏻‍♀️ Warm-Up Calculator</h1>
        <WeightInput value={weight} onChange={handleOnChange} />
        <SetsOutput weight={weight} />
      </section>
    </main>
  );
}

export default Container;
