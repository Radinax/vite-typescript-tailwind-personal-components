import { CSSProperties } from "react";

export interface PageProps {
  className?: string;
  style?: CSSProperties;
}

export const Page: React.FC<PageProps> = ({ children, style }) => {
  return (
    <div
      style={style}
      className="h-screen max-h-full min-w-0 flex-1 p-6 bg-slate-600"
    >
      {children}
    </div>
  );
};
