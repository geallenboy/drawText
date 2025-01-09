import Hero from "@/components/landing-page/hero";
import Navigtion from "@/components/landing-page/navigation";
import PricingPage from "@/components/landing-page/pricing";
import { getProducts, getUser } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const [user, products] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
  ]);
  // if (user) {
  //   return redirect("/dashboard");
  // }
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <Navigtion />
      <Hero />
      <PricingPage products={products ?? []} />
    </main>
  );
}
