const Feature = ({icon , name , description}) => {
    return (
        <div className="flex flex-col items-center space-y-5 py-10 px-3 bg-white shadow-md rounded cursor-pointer hover:-translate-y-3 transition duration-500 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 bg-slate-100 rounded-full p-2">
                <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
            </svg>
            <h1 className="text-md font-semibold">{name}</h1>
            <p className="text-sm text-center text-gray-500">{description}</p>
        </div>
    );
}

export default Feature;