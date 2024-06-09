import React from 'react';
import { BlockedIn } from '../../common';

export const Slide2: React.FC = () => {
  return (
    <section className="flex flex-col gap-2">
      <span className="mb-10">
        <BlockedIn />
      </span>
      <div className="mb-2" style={{ fontSize: '25px' }}>
        Problem application is trying to solve
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
              Transparency with employment history
            </li>
            <li
              className="fragment fade-up text-sm m-5"
              style={{ fontSize: '20px' }}
            >
              A centralized application for all employee data
            </li>
            <li
              className="fragment fade-up text-sm m-5"
              style={{ fontSize: '20px' }}
            >
              Standardize the hiring process, which will help with the
              automation
            </li>
            <li
              className="fragment fade-up text-sm m-5"
              style={{ fontSize: '20px' }}
            >
              Reduce the cost and time to verify employees&apos;
            </li>
            <li
              className="fragment fade-up text-sm m-5"
              style={{ fontSize: '20px' }}
            >
              Prevents malpractices by employees like Moonlighting and many
              other
            </li>
            <li
              className="fragment fade-up text-sm m-5"
              style={{ fontSize: '20px' }}
            >
              Help employers track employees&apos; status from counter offers
            </li>
            <li
              className="fragment fade-up text-sm m-5"
              style={{ fontSize: '20px' }}
            >
              Tokenizing Talent
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
