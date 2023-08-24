export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between py-4 lg:pb-24 text-white">
      <div className="w-32">NASA</div>
      <div className="hidden md:block">
        {/* ... existing desktop menu code ... */}
      </div>
      <div className="block md:hidden">
        <p
          className={`absolute top-0 right-0 z-10 p-3 cursor-pointer ${
            isOpen ? "text-red-800" : "text-white"
          }`}
          onClick={toggleMenu}
        >
          {isOpen ? "x" : "Menu"}
        </p>
        <ul
          className={`absolute right-0 top-0 flex flex-col gap-3 bg-white text-red-800 h-screen transition-transform duration-300 ${
            isOpen ? "transform translate-x-0" : "transform translate-x-full"
          }`}
        >
          {/* ... list items ... */}
        </ul>
      </div>
    </div>
  );
}
