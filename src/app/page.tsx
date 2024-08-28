'use client'

import { useRouter } from "next/navigation";
import Button from "./components/button";

export default function Home() {
  const router = useRouter(); 

  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <Button onClick={
        ()=>router.push('/dashboard')
      }>Dashboard</Button>
    </main>
  );
}
