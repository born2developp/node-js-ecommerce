import axios from 'axios';
import toast from 'react-hot-toast';
import UpdateCategoryModel from "./UpdateCategoryModel";

const CategoryItem = ({ category , setCategories }) => {
    const handleDelete = async () => {
        // console.log(category);
        try{
            const request = await axios.delete(`http://localhost:7000/api/admin/delete-category/${category._id}`);
            toast.success('Deleted Successfully!',{duration: 1000});
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="flex items-center space-x-5 pt-3 px-10">
            <div>
                <img width="150px" className="rounded-sm" src={category.image} alt="" />
            </div>
            <div className="flex-1">
                <h1 className="text-gray-800">{category.title}</h1>
            </div>
            <div className="flex items-center space-x-10">
                <UpdateCategoryModel category={category}  setCategories={setCategories}/>
                <svg onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5  cursor-pointer text-gray-900 hover:text-red-600 transition duration-500 ease-in-out">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </div>
        </div>
    );
}

export default CategoryItem;