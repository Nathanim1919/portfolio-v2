const Footer = () => {
  return (
    <footer
      className="my-10 w-full h-[100px] flex items-center justify-center rounded-md mt-6
    "
    >
      <div className="text-white relative w-full h-full backdrop-blur-md z-20 grid place-items-center py-10">
        <h2>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{"  "}
          & 
          <span role="img" aria-label="coffee">
            ☕
          </span>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/nathanim-tadele-762099247/"
            target="_blank"
            className="text-orange-500"
            rel="noreferrer"
          >
            Nathanim Tadele
          </a>
        </h2>
        <p className="">© 2024 Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
