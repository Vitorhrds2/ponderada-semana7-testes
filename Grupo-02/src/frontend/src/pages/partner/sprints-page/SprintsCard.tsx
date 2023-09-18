import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';

interface ModulesCardProps {
  title: string;
  content: string;
}

const ModulesCard: React.FC<ModulesCardProps> = ({ title, content }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer hover:pt-2">
    <Link to="/info-initiative">
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-red-500 mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </Link>
      <div className="px-6 py-4">
        <button
          onClick={toggleDropdown}
          className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          Opções
          <FaAngleDown className="ml-1" />
        </button>
        {isDropdownOpen && (
          <div className="mt-2 p-2 bg-gray-100 rounded-lg shadow-md">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded transition duration-150 ease-in-out"
            >
              Opção 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded transition duration-150 ease-in-out"
            >
              Opção 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded transition duration-150 ease-in-out"
            >
              Opção 3
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModulesCard;
