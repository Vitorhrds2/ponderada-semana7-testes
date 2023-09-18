import React from 'react';

interface SelectInputProps {
  label: string;
  id: string;
  options: string[];
  required?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({ label, id, options, required }) => {
  return (
    <div>
      <label htmlFor={id} className="text-sm text-gray-700 block mb-1 font-medium">
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      <select
        id={id}
        required={required}
        className="text-sm bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
      >
        <option value="">Selecione</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;