import { Link } from "react-router-dom";

export default function HomePartner() {
  return (
    <div className="h-full w-full p-4 grid">
      <div className="h-full bg-white shadow-md rounded-10 p-4 relative">

        <div className="ml-[5%] mt-[10%] w-[50%]">
          <h2 className="text-2xl font-bold mb-4">Bem-vindo(a), Parceiro(a)!</h2>
          <p className="text-base mb-4">
            É um prazer tê-lo(a) conosco. Sua criatividade e expertise são
            valiosas para nós. Estamos ansiosos para ouvir suas ideias e
            colaborar em projetos empolgantes.
          </p>
          <p className="text-base mb-4">
            Aproveite para enviar sua ideia de projeto e juntos transformarmos
            conceitos em realidade. Clique no botão abaixo para compartilhar
            sua visão conosco!
          </p>
        </div>

        <Link to="/project-registration">
          <button className="ml-[35%] mt-[12%] mb-0 bg-red-500 shadow-md rounded-[10px] px-6 py-2 text-xl text-white hover:bg-red-600">
            Enviar Ideia de Projeto
          </button>
        </Link>
      </div>

      <img
        src="/src/assets/icons/login-image-partner.svg"
        alt="User Icon"
        className="w-[60%] h-[60%] translate-x-[85%] -translate-y-96"
      />
    </div>
  );
}