import type { ButtonProps, ButtonSize } from "../interface/ButtonProps";

export const Button = ({
  className = "",
  size = "default",
  children,
  onClick,
  type = "button",
}: ButtonProps) => {
  const baseClass = "...";

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const classes = `${baseClass} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} onClick={onClick} type={type}>
      <span className="relative flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};
