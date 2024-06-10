import React from 'react';
import { BlockedIn } from '../../common';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

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
          style={{ fontSize: '1.8rem' }}
        >
          Contact US
        </div>
        <div
          className="text-base subpixel-antialiased"
          style={{ margin: '15px 0' }}
        >
          <a
            href="https://www.linkedin.com/in/vimal-menon-72ab931a/"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'white', fontSize: '1.5rem' }}
          >
            LinkedIn{' '}
            <FontAwesomeIcon icon={faLinkedinIn} style={{ color: 'blue' }} />
          </a>
        </div>

        <div
          className="text-base subpixel-antialiased"
          style={{ margin: '15px 0' }}
        >
          <a
            href="https://www.youtube.com/@i_am_vimalmenon"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'white', fontSize: '1.5rem' }}
          >
            YouTube{' '}
            <FontAwesomeIcon icon={faYoutube} style={{ color: 'red' }} />
          </a>
        </div>
      </div>
    </section>
  );
};
