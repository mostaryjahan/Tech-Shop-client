const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content dark:bg-gray-300 dark:text-gray-800 flex justify-around">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company </h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">Google</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Twitter</a>
        </nav>
      </footer>

      <footer className="footer footer-center dark:bg-gray-300 dark:text-gray-800 p-4 bg-neutral text-neutral-content t">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Tech-Shop Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
