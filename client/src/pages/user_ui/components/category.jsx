const Category = ({ category }) => {
    return (
        <div className="flex flex-col items-center space-y-3 mt-4 cursor-pointer">
            <img src={category.image} className="rounded-sm" width="300px" alt="" />
            <h1 className="text-lg text-gray-700">{category.title}</h1>
        </div>
    );
}

export default Category;