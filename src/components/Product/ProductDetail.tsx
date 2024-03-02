import { useParams } from "react-router-dom";
import { useProductDetail } from "../../hooks/useQueryData";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { data, isSuccess } = useProductDetail(slug as string);
  const productDetail = data?.data;
  const [selectedImage, setSelectedImage] = useState(productDetail?.images[0]);

  useEffect(() => {
    if (isSuccess) {
      setSelectedImage(productDetail?.images[0]);
    }
  }, [isSuccess, productDetail]);

  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto w-full md:flex gap-4">
          <div className="md:w-2/3">
            <img
              alt="product"
              className="w-full h-80 object-cover object-center rounded"
              src={selectedImage}
            />
            <div className="md:grid hidden grid-cols-2 gap-4 mt-4">
              {productDetail?.images
                .filter((image) => image !== selectedImage)
                .map((image, idx) => (
                  <img
                    key={idx}
                    alt="product"
                    className="w-full h-64 object-cover object-center rounded cursor-pointer hover:opacity-75"
                    src={image}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
            </div>
          </div>
          <div className="md:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {productDetail?.brand?.name}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {productDetail?.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    fill={i < productDetail?.ratings ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className={`w-4 h-4 text-indigo-500 ${
                      i < productDetail?.ratings
                        ? "text-indigo-500"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-gray-600 ml-3">
                  {productDetail?.totalRatings} Reviews
                </span>
              </span>
            </div>
            <p
              className="leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: productDetail?.ingredient ?? "",
              }}
            />
            {productDetail?.offPercent > 0 && (
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <s className="title-font font-medium text-2xl text-gray-900">
                  ${productDetail?.strikePrice}
                </s>
                <span className="title-font font-medium text-2xl text-gray-900 ml-4">
                  ${productDetail?.price}
                </span>
                <span className="text-sm text-red-500 ml-3">
                  {productDetail?.offPercent}% Off
                </span>
              </div>
            )}
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              {productDetail?.colorVariants?.length > 0 && (
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {productDetail?.colorVariants?.map((color) => (
                    <button
                      key={color._id}
                      className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
                      style={{ backgroundColor: color.color.colorValue }}
                    />
                  ))}
                </div>
              )}
              {productDetail?.sizeVariants?.length > 0 && (
                <div className="flex ml-6 items-center">
                  <span className="mr-3">{productDetail?.variantType}</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      {productDetail?.sizeVariants?.map((size) => (
                        <option key={size?._id}>{size?.variantName}</option>
                      ))}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="flex">
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Buy
              </button>
              {productDetail?.wished ? (
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              ) : (
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
