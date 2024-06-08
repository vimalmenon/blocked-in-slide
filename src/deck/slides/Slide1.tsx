import React from 'react';
import { BlockedIn } from '../../common';

export const Slide1: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col gap-2">
        <span>
          <BlockedIn />
        </span>
        <span className="text-sm">Blockchain Introduction</span>
      </div>
    </section>
  );
};
