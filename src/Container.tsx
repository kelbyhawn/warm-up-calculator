"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import WeightInput from "./components/WeightInput";
import SetsOutput from "./components/SetsOutput";
import Footer from "./components/Footer";

function Container() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [weight, setWeight] = useState(Number(searchParams.get("weight") ?? 0));
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWeight(Number(value));

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // Wait to sync the url until typing stops
    debounceRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      params.set("weight", value);
      router.replace(`?${params.toString()}`, { scroll: false });
    }, 500);
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  return (
    <main>
      <section>
        <span>🏋🏻‍♀️</span>
        <h1>Warm-Up Calculator</h1>
        <WeightInput value={weight} onChange={handleOnChange} />
        <SetsOutput weight={weight} />
        <Footer />
      </section>
    </main>
  );
}

export default Container;
