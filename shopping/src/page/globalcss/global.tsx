import { ReactNode } from "react";
import "./global.module.css";

interface Props {
    children: ReactNode
    // any props that come into the component
}
export const GlobalCss = ({ children } : Props) => {
  return <>{children}</>;
};
