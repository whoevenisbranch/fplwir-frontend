import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="flex justify-center items-center bg-base-200">
      <a href="/">
        <img src={logo} alt="Logo" className="h-24 w-32" />
      </a>
    </header>
  );
}

export default Header;
