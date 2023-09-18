import { Link } from "react-router-dom";
import error from '../../assets/icons/roboError.svg'
export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Error 404 Not Found</h2>
      <img
        src={error}
        alt="Error 404"
        className="w-48 h-48 mb-4"
      />
      <p className="text-lg mb-4">Ocorreu um erro, volte para a página inicial</p>
      <Link to="/">
        <button className=" text-white px-4 py-2 rounded-md" style = {{backgroundColor: '#2D253F'}}>
          Página inicial
        </button>
      </Link>
    </div>
  );
}
