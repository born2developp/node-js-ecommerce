const Footer = () => {
    const date = new Date();
    let currentYear = date.getFullYear();

    return (
        <div className=" bg-gray-200  py-4 w-full text-center">
            <p className="text-gray-800">Made With 🖤 By <a className="hover:text-gray-500 transition duration-500 ease-in-out" href="https://ahmed187.netlify.app/" target="_blank">Ahmed</a> {currentYear}</p>
        </div>
    );
}

export default Footer;