'use client';

import { Header, Sidebar } from '@/components';
import React, { type ReactNode } from 'react';

export const DashboardLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <div className="grid__container__root">
    <Sidebar />
    <Header />
    <div className="main__root">{children}</div>

    <style jsx>{`
      .grid__container__root {
        display: grid;
        position: fixed;
        inset: 0;
        grid-template-columns: 300px 1fr;
        grid-template-rows: 71px 1fr;
        grid-template-areas:
          'sidebar header'
          'sidebar main';
      }

      .main__root {
        grid-area: main;
      }
    `}</style>
  </div>
);

export default DashboardLayout;
