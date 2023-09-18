import React from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  type?: 'text' | 'checkbox' | 'textarea' | 'select';
  options?: string[];
  value?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type = 'text',
  options,
  placeholder,
  required,
  
  value,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div>
      {type === 'checkbox' ? (
        <label htmlFor={id} className="text-sm text-gray-700 block mb-1 font-medium flex items-center">
          <input
            type={type}
            id={id}
            className="mr-2"
            onChange={handleChange}
          />
          {label}
        </label>
      ) : (
        <div>
          <label htmlFor={id} className="text-sm text-gray-700 block mb-1 font-medium">
            {label} {required && <span style={{ color: 'red' }}>*</span>}
          </label>

          {type === 'textarea' ? (
            <textarea
              id={id}
              required={required}
              value={value}
              onChange={handleChange}
              className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md transition-colors duration-[500ms] transform focus:border-[#7A2020] focus:ring-[#7A2020] focus:outline-none"
              placeholder={placeholder}
            />
          ) : type === 'select' ? (
            <select
              id={id}
              value={value}
              required={required}
              onChange={handleChange}
              className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md transition-colors duration-[500ms] transform focus:border-[#7A2020] focus:ring-[#7A2020] focus:outline-none"
            >
              <option value="">Selecione</option>
              {options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              value={value}
              id={id}
              required={required}
              onChange={handleChange}
              className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md transition-colors duration-[500ms] transform focus:border-[#7A2020] focus:ring-[#7A2020] focus:outline-none"
              placeholder={placeholder}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default FormField;
