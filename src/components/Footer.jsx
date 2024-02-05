
const Footer = () => {
  return (
    <footer className="bg-transparent pb-16 px-3">
      <div className="container mx-auto pt-8 border-top lg:flex justify-between items-center">
        <p>All rights reserved © 2024</p>
        <p className="text-white font-poppins font-bold lg:py-0 py-4">GOTOEGYPT.</p>
        <ul className="flex lg:flex-row flex-col gap-x-8 gap-y-4 list-none">
          <li>Privacy</li>
          <li>Disclaimer</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
