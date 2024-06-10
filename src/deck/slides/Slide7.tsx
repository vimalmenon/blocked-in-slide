import React from 'react';
import { BlockedIn } from '../../common';

export const Slide7: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col gap-2">
        <span className="mb-10">
          <BlockedIn />
        </span>
        <div className="mb-2 text-yellow-100" style={{ fontSize: '1.8rem' }}>
          Some burning questions
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
                How to incentivize more employees to register?
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                Employee privacy?
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                Identify revenue model
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                How to get more employees onboarded?
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                Cost to the company to backfill data
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
