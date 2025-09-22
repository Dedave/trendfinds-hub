import Hero from "@/components/Hero";
import TrendingProducts from "@/components/TrendingProducts";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrendingProducts />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
