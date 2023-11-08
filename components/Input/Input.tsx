import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  type: string;
  id?: string;
  placeholder?: string;
  big?: boolean;
  className?: string;
  register?: UseFormRegisterReturn;
};

function Input({
  id,
  type,
  big = false,
  className = "",
  placeholder = "",
  register,
}: InputProps) {
  return (
    <input
      {...register}
      type={type}
      id={id}
      placeholder={placeholder}
      className={`
        w-full 
        rounded-md
        border 
        border-slate-300 
        bg-white 
        p-3
        pt-6
        font-light
        text-black
        placeholder-slate-400
        shadow-sm 
        outline-none 
        ${big ? "w-[400px] pb-[6rem]" : ""} 
        focus:border-yellow-200 
        focus:outline-none 
        focus:ring-1 
        focus:ring-yellow-300
        ${className}   
      `}
    />
  );
}

export default Input;
