import React from "react";

interface InputTextProps {
  label?: string;
  required?: boolean;
  type?: string;
  size?: "default" | "sm" | "lg";
  border?: "default" | "danger" | "success";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  isDisabled?: boolean;
  placeholder?: string;
  className?: string;
  icon?: string;
}

const InputText: React.FC<InputTextProps> = ({
  label = "",
  required = false,
  type = "text",
  size = "default",
  border = "default",
  onChange,
  value,
  isDisabled = false,
  placeholder = "",
  className = "",
  icon = "",
}) => {
  const inputSize = {
    default: "",
    sm: "input-sm",
    lg: "input-lg",
  };

  const borderColor = {
    default: "",
    danger: "border-danger",
    success: "border-success",
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
        {label && (
          <label className="form-label max-w-44" htmlFor={label}>
            {label}
            {required && <span className="text-danger">*</span>}
          </label>
        )}
        <div className="relative w-full">
          {icon && (
            <i
              className={`ki-outline ${icon} absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500`}
            ></i>
          )}

          <input
            className={`input w-full ${inputSize[size] || ""} ${
              borderColor[border] || ""
            }`}
            disabled={isDisabled}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

export default InputText;
