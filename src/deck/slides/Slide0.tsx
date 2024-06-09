import React from 'react';
import { BlockedIn } from '../../common';

export const Slide0: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col gap-2">
        <span>
          <BlockedIn />
        </span>
        <span className="text-yellow-100 text-sm" style={{ fontSize: '25px' }}>
          Web3 Application for End To End Hiring Needs
        </span>
      </div>
    </section>
  );
};
