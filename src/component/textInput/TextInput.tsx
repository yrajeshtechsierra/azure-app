import React from 'react'
import Image from "next/image";

interface TextInputProps {
  type?:
    | "input"
    | "textarea"
    | "text"
    | "email"
    | "password"
    | "tel"
    | "url"
    | "number";
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  icon?: React.ReactNode;
  logo?: string | React.ReactNode;
  label?: string;
  disabled?: boolean;
  error?: string;
  rows?: number;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  type = "input",
  placeholder = "Enter text...",
  value = "",
  onChange = () => {},
  icon = null,
  logo = null,
  label = "",
  disabled = false,
  error = "",
  rows = 4,
  className = "",
}) => {
  const baseInputClasses = `
    w-full pl-12 pr-4 py-3 
    border-2 rounded-lg 
    transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-blue-500/20
    disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed
    ${
      error
        ? "border-red-300 focus:border-red-500 bg-red-50/50"
        : "border-gray-200 focus:border-blue-500 bg-white hover:border-gray-300"
    }
  `;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}

      <div className="relative">
        {/* Icon or Logo */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          {logo ? (
            typeof logo === "string" ? (
              <Image
                src={logo}
                alt="Logo"
                width={20}
                height={20}
                className="object-contain"
              />
            ) : (
              <div className="w-5 h-5 flex items-center justify-center">
                {logo}
              </div>
            )
          ) : icon ? (
            <div className="text-gray-400">{icon}</div>
          ) : null}
        </div>

        {/* Input or Textarea */}
        {type === "textarea" ? (
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            rows={rows}
            className={`${baseInputClasses} resize-none pt-3`}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={baseInputClasses}
          />
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
          <span className="w-1 h-1 bg-red-600 rounded-full"></span>
          {error}
        </p>
      )}
    </div>
  );
};

export default TextInput
