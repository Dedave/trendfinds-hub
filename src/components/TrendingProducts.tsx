import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { getTrendingProducts } from "@/app/data/products";
import Link from "next/link";

const TrendingProducts = () => {
  const trendingProducts = getTrendingProducts();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trending Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what's hot right now. These are the most popular items our community loves.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/products">
            <Button
              variant="outline"
              size="lg"
              className="font-semibold px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
