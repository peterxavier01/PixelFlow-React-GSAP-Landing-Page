import { IconType } from "react-icons/lib";

interface ButtonProps {
  id: string;
  title: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  containerClass: string;
}

const Button = ({
  id,
  title,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  containerClass,
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {LeftIcon && <LeftIcon />}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>

      {RightIcon && <RightIcon />}
    </button>
  );
};

export default Button;
