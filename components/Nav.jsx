const links = [
  {
    name: "About Us",
    path: "/",
  },
  {
    name: "Blog",
    path: "/",
  },
  {
    name: "FAQ",
    path: "/",
  },
  {
    name: "Contact Us",
    path: "/",
  },
];

const Nav = () => {
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <div
            key={index}
            className="capitalize font-medium hover:text-accent traslation-all"
          >
            {link.name}
          </div>
        );
      })}
    </nav>
  );
};

export default Nav;
