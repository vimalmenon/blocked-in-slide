import React from 'react';
import { BlockedIn } from '../../common';

export const Slide6: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col gap-2">
        <span className="mb-10">
          <BlockedIn />
        </span>
        {/* <div className="text-base subpixel-antialiased">Demo</div> */}
        <div
          className="mb-2 text-yellow-100 subpixel-antialiased"
          style={{ fontSize: '25px' }}
        >
          Contact US
        </div>
        <div className="text-base subpixel-antialiased">
          <a
            href="https://www.linkedin.com/in/vimal-menon-72ab931a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="text-base subpixel-antialiased">
          <a
            href="https://www.youtube.com/@i_am_vimalmenon"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
};
