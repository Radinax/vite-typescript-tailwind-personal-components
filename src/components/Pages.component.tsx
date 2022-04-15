import Header from "./header/header.component";
import { CSSProperties } from "react";

export interface PageProps {
  className?: string;
  style?: CSSProperties;
}

export const Page: React.FC<PageProps> = ({ children, style }) => {
  return (
    <>
      <Header />

      <div
        style={style}
        className="h-screen max-h-full min-w-0 flex-1 p-6 dark:bg-dark-primary bg-slate-50 transition-all"
      >
        {children}
      </div>
    </>
  );
};
