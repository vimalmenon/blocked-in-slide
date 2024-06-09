import React from 'react';
import { BlockedIn } from '../../common';

export const Slide5: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col gap-2">
        <span className="mb-10">
          <BlockedIn />
        </span>
        <div className="mb-2 text-yellow-100" style={{ fontSize: '25px' }}>
          Future Scope
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
              width: '700px',
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
                Verify academic history
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                Give value to employee appreciation (Not just a piece of paper)
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                Add skills to employment history
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                Integration with other applications
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                Token
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                NFT
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                IPFS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
