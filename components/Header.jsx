import Button from "./Button";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="flex md:px-8 px-6 h-[60px] md:h-[80px] items-center">
      <div className="max-w-[1024px] container mx-auto flex items-center gap-6">
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="w-full flex gap-8 justify-between items-center">
          {/* logo */}
          <div className="flex text-4xl font-semibold h-[30px] w-[78.75px] md:h-[40px] md:w-[105px]">
            <img src="assets/Logo Inito.svg" alt="inito" />
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex">
              <Nav />
            </div>
            <Button />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
