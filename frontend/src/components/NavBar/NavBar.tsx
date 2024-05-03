const NavBar = () => {
  return (
    <nav className="bg-white z-20 sticky left-0 w-screen top-0 py-4">
      <div className="container mx-auto flex  relative top-0">
        <span>logo</span>
        <div className="hidden md:block md:absolute  -translate-x-1/2 left-1/2 ">
          Controls
        </div>

        <button className="ml-auto">mobile</button>
      </div>
    </nav>
  );
};

export default NavBar;
