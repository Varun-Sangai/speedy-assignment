import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
export default function CustomBox({ children, className, ...restProps }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & PropsWithChildren) {
  return <div {...restProps} className={twMerge("w-full shadow-custom overflow-x-hidden bg-white rounded-lg", className)}>{children}</div>
}