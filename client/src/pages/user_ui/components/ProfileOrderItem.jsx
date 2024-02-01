const ProfileOrderItem = ({ product }) => {
    return (
        <div className="py-4 flex items-center">
            <div className="flex items-center space-x-7 flex-1">
                <img width="80px" className="rounded" src={product.image} alt="" />
                <div className="">
                    <h1 className="text-gray-800">{product.title}</h1>
                    <p className="text-gray-500 text-sm">{product.category}</p>
                </div>
            </div>
            <div className="flex items-center space-x-7">
                <h1 className="tetx-gray-800">1<small className="text-gray-800 text-sm">x</small></h1>
                <p className="text-gray-500 text-sm">2 - 8 - 2022</p>
            </div>
        </div>
    );
}

export default ProfileOrderItem;