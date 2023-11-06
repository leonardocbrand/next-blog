import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  type: string;
  id?: string;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  big?: boolean;
  className?: string;
  register?: UseFormRegisterReturn;
};

function Input({
  id,
  type,
  value,
  big = false,
  onChange = () => {},
  className = "",
  placeholder = "",
  register,
}: InputProps) {
  return (
    <input
      {...register}
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        w-full 
        rounded-md
        border 
        border-slate-300 
        bg-white 
        p-3
        pt-6
        text-sm
        font-light
        text-black
        placeholder-slate-400
        shadow-sm 
        outline-none 
        ${big ? "w-[400px] pb-[6rem]" : ""} 
        focus:border-sky-500 
        focus:outline-none 
        focus:ring-1 
        focus:ring-sky-500
        ${className}   
      `}
    />
  );
}

export default Input;
