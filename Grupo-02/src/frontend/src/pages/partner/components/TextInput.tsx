import React from 'react';

interface TextInputProps {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
  isPassword?: boolean; // Novo prop para definir se é um campo de senha
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, id, placeholder, required, isPassword, onChange }) => {
  return (
    <div>
      <label htmlFor={id} className="text-sm text-gray-700 block mb-1 font-medium">
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      {isPassword ? (
        <input
          type="password" // Defina o tipo como 'password'
          id={id}
          required={required}
          className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md transition-colors duration-[500ms] transform focus:border-[#7A2020] focus:ring-[#7A2020] focus:outline-none"
          placeholder={placeholder}
          onChange={onChange}
        />
      ) : (
        <input
          type="text"
          id={id}
          required={required}
          className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md transition-colors duration-[500ms] transform focus:border-[#7A2020] focus:ring-[#7A2020] focus:outline-none"
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default TextInput;
