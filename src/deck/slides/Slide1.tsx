import React from 'react';
import { BlockedIn } from '../../common';

export const Slide1: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col gap-2">
        <span className="mb-10">
          <BlockedIn />
        </span>
        <div className="mb-2 text-yellow-100" style={{ fontSize: '30px' }}>
          Why Blockchain?
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '500px',
              flexDirection: 'column',
              alignItems: 'start',
              gap: 20,
            }}
          >
            <ul>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                Secure
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                Transparency
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                Decentralized
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                Prevents data fraud
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
