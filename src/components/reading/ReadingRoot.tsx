import { ReactNode } from "react";

interface ReadingRootProps {
  children: ReactNode;
}

export const ReadingRoot = ({ children }: ReadingRootProps) => {
  return <main className="reading-root">{children}</main>;
};
