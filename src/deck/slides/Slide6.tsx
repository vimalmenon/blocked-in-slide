import React from 'react';
import { BlockedIn } from '../../common';

export const Slide6: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col gap-2">
        <span className="mb-10">
          <BlockedIn />
        </span>
        <div className="text-base subpixel-antialiased">Demo</div>
        <div className="text-base subpixel-antialiased">Contact US</div>
        <p className="text-base subpixel-antialiased">
          <a
            href="https://www.linkedin.com/in/vimal-menon-72ab931a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p className="text-base subpixel-antialiased">YouTube</p>
      </div>
    </section>
  );
};
