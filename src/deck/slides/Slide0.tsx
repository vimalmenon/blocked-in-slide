import React from 'react';
import { BlockedIn } from '../../common';

export const Slide0: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col gap-2">
        <span className="mb-10">
          <BlockedIn />
        </span>
        <div className="text-yellow-100 text-sm" style={{ fontSize: '1.3rem' }}>
          Web3 Application for End To End Hiring Needs
        </div>
      </div>
    </section>
  );
};
