import React from 'react';
import TextInput from '../components/TextInput';

interface ProfileEditProps {
  // Defina as propriedades necessárias para o formulário de edição de perfil
  // Por exemplo: user, onSave, onCancel, etc.
}

const ProfileEdit: React.FC<ProfileEditProps> = ({ /* Passe as propriedades aqui */ }) => {
  return (
    <div className="flex flex-col flex-grow mt-[10%] ml-auto items-center justify-center-auto text-xl">
      <div className="bg-white p-8 rounded-lg shadow-md  h-full w-[90%]">
        <h2 className="text-2xl font-semibold mb-4">Editar Perfil</h2>
        <form>
        <div className="mb-4">
            <label htmlFor="profileImage" className="block text-gray-600 font-large mb-1">
              Imagem de Perfil
            </label>
            <label
              htmlFor="profileImage"
              className="block cursor-pointer w-40 h-40 bg-gray-300 rounded-full border border-gray-300 hover:bg-blue-200 flex items-center justify-center"
            >
              <input
                type="file"
                id="profileImage"
                className="hidden"
              />
              <img src="/src/assets/icons/edit-photo-icon.svg" className="ml-4 h-20 w-20 text-gray-300" />
            </label>

            <div className=''>
              <TextInput label="Nome" id="name" placeholder="seuemail@provedor.com" required />
              <TextInput label="Email" id="email" placeholder="Nome" required />
              <TextInput label="Telefone" id="phone" placeholder="Telefone" required />
          </div>

          </div>
          
          <div className="flex justify-left gap-4">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded-md py-2 px-4 focus:outline-none"
            >
              Salvar
            </button>
            <button
              type="button"
              className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;