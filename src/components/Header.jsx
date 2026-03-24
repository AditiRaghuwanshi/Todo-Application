

function Header() {
  return (
    <header className="w-full bg-gray-800 border-b border-blue/60 shadow-lg shadow-black/20">
      <div  className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-center">

        <div className="flex items-center gap-3 group cursor-default">
          
          <h1  className="text-white text-xl font-semibold tracking-tight group-hover:text-violet-300 transition-colors duration-200">
            ToDo List
          </h1>
        </div>

     

      </div>
    </header>
  );
}

export default Header;