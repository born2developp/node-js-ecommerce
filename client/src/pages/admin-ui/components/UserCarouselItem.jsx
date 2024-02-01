const UserCarouselItem = () => {
    return (
        <div className="flex flex-col justify-center items-center py-10 space-y-5">
            <img class="inline-block h-20 w-20 rounded-full ring-2 ring-white" src="https://images.pexels.com/photos/11977689/pexels-photo-11977689.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="{user.handle}" />
            <h1 className="text-gray-800 text-center">Ahmed Abdullahi</h1>
        </div>
    );
}

export default UserCarouselItem;