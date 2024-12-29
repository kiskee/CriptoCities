import Header from "../components/Header";

export default function Layaut({ children }) {
  // body
  return (
    <div className="min-h-screen bg-blue-800  px-6 pb-6  flex flex-col ">
      {/* Encabezado con el logo y el título */}
      <Header />

      {/* Dynamic content passed as children */}
      <div className="mt-8">{children}</div>
      {/* Pie de página */}
      <footer className="mt-8 text-gray-200 text-sm relative flex flex-col justify-center">
        <p className="text-center">
          “El éxito no se logra solo con cualidades especiales. Es sobre todo un
          trabajo de mentalidad y actitud positiva. Sigue soñando, sigue
          creyendo.”
        </p>
        <span className="font-bold text-yellow-500 pt-8 right-0"><a href="https://github.com/kiskee">DanMeCoss</a></span>
      </footer>
    </div>
  );
}
