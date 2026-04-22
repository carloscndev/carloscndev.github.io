import type { ReactNode } from 'react';
import './MainLayout.css';

interface Props {
  children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="layout-wrapper">
      {children}
    </div>
  );
};