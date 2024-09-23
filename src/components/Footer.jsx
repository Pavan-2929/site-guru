const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-24">
      <div className=" mx-auto text-center bg-white py-8">
        <div className="max-w-7xl mx-auto w-full md:px-8 sm:px-6 px-3  flex md:flex-row flex-col space-y-6 md:space-y-0 justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} XYZ Solutions. All rights
            reserved.
          </p>
          <p>Email: info@xyzsolutions.com | Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
