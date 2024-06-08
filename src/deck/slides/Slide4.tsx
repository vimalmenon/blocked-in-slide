import React from 'react';
import { BlockedIn } from '../../common';

export const Slide4: React.FC = () => {
  return (
    <section>
      <BlockedIn />
      <div className="text-base subpixel-antialiased">Demo</div>
      <div className="text-base subpixel-antialiased">Contact US</div>
      <p className="text-base subpixel-antialiased">LinkedIn</p>
      <p className="text-base subpixel-antialiased">YouTube</p>
    </section>
  );
};
