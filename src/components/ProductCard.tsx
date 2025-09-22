import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    price: string;
    originalPrice?: string;
    image: string;
    rating: number;
    reviews: number;
    category: string;
    discount?: string;
    affiliateLink: string;
    featured?: boolean;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-soft hover:shadow-hover transition-smooth">
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {product.featured && (
            <Badge className="bg-primary text-primary-foreground">
              Featured
            </Badge>
          )}
          {product.discount && (
            <Badge className="bg-accent text-accent-foreground">
              {product.discount}
            </Badge>
          )}
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button
            variant="secondary"
            size="sm"
            className="bg-white/90 hover:bg-white text-black"
          >
            Quick View
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Category */}
        <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">
          {product.category}
        </p>

        {/* Title */}
        <h3 className="font-semibold text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-lg font-bold text-primary">
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <Link href={product.affiliateLink} target="_blank">
          <Button
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group"
            size="sm"
          >
            <span>Get it on AliExpress</span>
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
