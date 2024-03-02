import React, { ForwardedRef } from "react";
import { ProductType } from "../../types";
import { Link } from "react-router-dom";

interface Props {
  product: ProductType;
}

const ProductCard = React.forwardRef(
  ({ product }: Props, ref: ForwardedRef<unknown>) => {
    const Notice = (
      <div key={product._id} className="group relative">
        <div className="w-full h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <Link to={`/products/${product.slug}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.title}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.brand.name}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
        </div>
      </div>
    );

    const content = ref ? (
      <article
        className="article basis-2/5"
        ref={ref as React.RefObject<HTMLElement>}
      >
        {Notice}
      </article>
    ) : (
      <article className="article basis-2/5">{Notice}</article>
    );
    return content;
  }
);

export default ProductCard;
