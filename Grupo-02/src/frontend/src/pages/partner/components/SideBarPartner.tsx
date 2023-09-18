import { Link } from "react-router-dom";
import logo from '/src/assets/icons/SimboloInteli.svg'


export default function SidebarPartner() {
    return (
        <div className="bg-[#2D253F] p-4 flex flex-col h-screen w-[17%] fixed left-0 top-0 ">

            <ul className="flex flex-col space-y-5 items-start">
                {<div className="bg-[#2D253F] p-4 flex flex-col justify-center items-center h-screen w-[17%] fixed left-0 top-0">
                    <Link to="/home-partner">
                        <img
                            src={logo}
                            alt="Logo"
                            className="mt-4 w-11 h-11" />
                    </Link>

                    <div className="flex-grow flex flex-col justify-center items-center">
                        <ul className="flex flex-col space-y-5 items-start">
                            <li className="w-full">
                                <Link
                                    to="/home-partner"
                                    className="text-white hover:text-gray-300 font-poppins text-lg block w-full text-left"
                                >
                                    Página inicial
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    to="/project-registration"
                                    className="text-white hover:text-gray-300 font-poppins text-lg block w-full text-left"
                                >
                                    Cadastrar projeto
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    to="/projects-page"
                                    className="text-white hover:text-gray-300 font-poppins text-lg block w-full text-left"
                                >
                                    Meus projetos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <Link to="/" className="mt-auto">
                        <button className="text-[#fff] py-2 px-4 text-lg w-full">
                            Sair
                        </button>
                    </Link>
                </div>}
            </ul>
        </div>
    );
}
