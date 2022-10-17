import { IButtonProps } from "../types"

const Button = ({ children, onClick, className }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        `
          py-2 
          px-3
        bg-sky-500/75
        text-white 
          text-sm 
          font-semibold 
          rounded-md 
          shadow 
          focus:outline-none
          ${className}
        `
      }
    >
      {children}
    </button>
  )
}

export default Button