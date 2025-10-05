'use client';

import { Header, Sidebar } from '@/components';
import React, { useState, type ReactNode } from 'react';
import { SidebarContext } from '@/components/Sidebar/SidebarContext';
import { motion } from 'motion/react';
import css from 'styled-jsx/css';

const sidebarWidth = 300;
const sidebarTransitionDuration = 0.3;

const MotionSidebar = motion.create(Sidebar);

const gridContainerRootStyles = css.resolve`
  div {
    display: grid;
    position: fixed;
    inset: 0;
    grid-template-rows: 71px 1fr;
    grid-template-areas:
      'sidebar header'
      'sidebar main';
  }
`;

export const DashboardLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const showSidebarState = useState(true);
  const [showSidebar, _] = showSidebarState;

  return (
    <motion.div
      className={gridContainerRootStyles.className}
      initial={{
        gridTemplateColumns: `${showSidebar ? sidebarWidth : 0}px 1fr`,
      }}
      animate={{
        gridTemplateColumns: `${showSidebar ? sidebarWidth : 0}px 1fr`,
      }}
      transition={{ duration: sidebarTransitionDuration }}
    >
      <MotionSidebar
        initial={{ x: 0 }}
        animate={{ x: showSidebar ? 0 : -sidebarWidth }}
        transition={{ duration: sidebarTransitionDuration }}
      />
      <SidebarContext value={showSidebarState}>
        <Header />
      </SidebarContext>
      <div className="main__root">{children}</div>

      {gridContainerRootStyles.styles}
      <style jsx>{`
        .main__root {
          grid-area: main;
          padding: 24px;
        }
      `}</style>
    </motion.div>
  );
};

export default DashboardLayout;
