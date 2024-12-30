import logo from '../assets/logo.png'
import Wallet from './Wallet'

export default function Header() {
  // body
  return (
    <header className="bg-black bg-opacity-80 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between md:flex-col sm:flex-col ss:flex-col md:justify-center">
        {/* Título */}
        <div className="flex items-center relative z-10">
                <img
                  src={logo}
                  alt="EthLand Logo"
                  className="w-24 h-24 mr-4 
                transition-all duration-300 
                hover:rotate-6 
                hover:scale-110 
                filter hover:drop-shadow-[0_0_10px_rgba(245,158,11,0.7)]"
                />
                <h1
                  className="text-3xl font-bold text-yellow-500 
              bg-clip-text 
              text-transparent 
              bg-gradient-to-r 
              from-yellow-400 
              to-yellow-600 
              drop-shadow-[0_2px_4px_rgba(245,158,11,0.3)] sss:hidden"
                >
                  Cripto-cities
                </h1>
              </div>

        {/* Navegación */}
        <nav>
          <ul className="flex space-x-4 flex-row ss:flex-col ss:space-4 ss:text-center">
            <li>
              <a
                href="/"
                className="hover:text-blue-200 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/cities"
                className="hover:text-blue-200 transition-colors"
              >
                Cities
              </a>
            </li>
            <li>
              <a
                href="/cities"
                className="hover:text-blue-200 transition-colors"
              >
                Terrains
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="hover:text-blue-200 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <Wallet/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
