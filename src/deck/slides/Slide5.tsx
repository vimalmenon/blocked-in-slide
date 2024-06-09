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
          What help I Need?
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
                Help expand this product with the help of investors or companies
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                Sell this product for royalties (Worst case)
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                Onboard companies with the ideas
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                Identify a revenue model
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
