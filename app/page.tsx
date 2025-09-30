'use client';

import { Sidebar, Header } from '@/components';

export default function Home() {
  return (
    <div className="grid__container">
      <Sidebar />
      <Header />
      <div className="main__root"></div>

      <style jsx>{`
        .grid__container {
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
          background-color: green;
        }
      `}</style>
    </div>
  );
}
