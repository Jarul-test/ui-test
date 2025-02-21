import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  classname: string;
};

const Button = ({ label, onClick, classname }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-400 text-white px-4 py-2 rounded ${classname}`}
    >
      {label}
    </button>
  );
};

export default Button;
