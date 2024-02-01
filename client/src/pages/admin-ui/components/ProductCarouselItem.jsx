const ProductCarouselItem = ({product}) => {
    return (
        <div className="flex flex-col justify-center items-center py-10 space-y-5">
            <img width="300" src={product.image} className="rounded" alt="" />
            <h1 className="text-gray-800">{product.title}</h1>
        </div>
    );
}

export default ProductCarouselItem;