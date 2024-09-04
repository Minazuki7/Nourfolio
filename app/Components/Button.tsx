import classNames from "classnames";
import Link from "next/link";
import { FC, ReactNode } from "react";

export type FontColor =
  | "blue-dark"
  | "blue"
  | "blue-light"
  | "yellow-light"
  | "yellow"
  | "red"
  | "black"
  | "grey"
  | "grey-lightest"
  | "white";

type ButtonVariant =
  | "contained-yellow"
  | "contained-blue"
  | "contained-white"
  | "contained-all-white"
  | "outlined-blue"
  | "outlined-yellow"
  | "outlined-grey"
  | "text"
  | "text-blue";
type ButtonType = "button" | "submit";
type ButtonIconOrientation = "left" | "right";

interface IButtonTextStyle {
  props: {
    color: FontColor;
  };
  hoverClassName?: string;
}

const buttonTextStyle: Record<ButtonVariant, IButtonTextStyle> = {
  "contained-yellow": {
    props: {
      color: "white",
    },
    hoverClassName: "",
  },
  "contained-white": {
    props: {
      color: "white",
    },
    hoverClassName: "",
  },
  "contained-all-white": {
    props: {
      color: "blue",
    },
    hoverClassName: "",
  },
  "contained-blue": {
    props: {
      color: "white",
    },
    hoverClassName: "",
  },
  "outlined-blue": {
    props: {
      color: "blue",
    },
    hoverClassName: "",
  },
  "outlined-yellow": {
    props: {
      color: "blue",
    },
    hoverClassName: "",
  },
  "outlined-grey": {
    props: {
      color: "grey",
    },
    hoverClassName: "",
  },
  text: {
    props: {
      color: "black",
    },
    hoverClassName: "",
  },
  "text-blue": {
    props: {
      color: "blue",
    },
    hoverClassName: "",
  },
};

interface IButtonProps {
  label?: string;
  icon?: ReactNode;
  iconOrientation?: ButtonIconOrientation;
  variant?: ButtonVariant;
  type?: ButtonType;
  className?: string;

  containerClassName?: string;
  textClassName?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}
const MaybeLink = ({
  href,
  children,
  className,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return href ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
};

const Button: FC<IButtonProps> = ({
  label,
  disabled = false,
  className,
  textClassName,
  containerClassName,
  variant = "contained-blue",
  type = "button",
  iconOrientation = "right",
  href,
  icon,
  ...props
}) => {
  const Classes = classNames(
    "w-fit h-fit transition-all duration-200 ease-in-out flex items-center justify-center gap-[10px] group disabled:opacity-40 disabled:cursor-not-allowed ",
    variant === "contained-blue" &&
      "bg-blue-dark rounded-[7px] py-[16px] px-[15px] ",
    variant === "contained-yellow" &&
      "bg-yellow  rounded-[7px] py-[16px] px-[15px]",
    variant === "outlined-blue" &&
      "bg-transparent rounded-[7px] border border-blue-dark py-[16px] px-[15px]  ",
    variant === "outlined-grey" &&
      "bg-transparent rounded-[10px] border border-grey py-[16px] px-[15px]  ",
    variant === "outlined-yellow" &&
      "bg-transparent border border-yellow rounded-[7px] py-[16px] px-[15px]",
    variant === "text" && "hover:underline",
    variant === "text-blue" && "hover:underline hover:underline-blue",
    variant === "contained-white" &&
      "bg-[white] border rounded-[7px] py-[10px] px-[10px]",
    variant === "contained-all-white" &&
      "bg-[white] border border-none rounded-[7px] py-[16px] px-[15px]",

    className
  );
  return (
    <MaybeLink href={href} className={className}>
      <button
        className={classNames(Classes, containerClassName)}
        type={type}
        disabled={disabled}
        {...props}
      >
        {iconOrientation === "left" && icon && icon}
        {label && <span>{label}</span>}
        {iconOrientation === "right" && icon && icon}
      </button>
    </MaybeLink>
  );
};

export default Button;
