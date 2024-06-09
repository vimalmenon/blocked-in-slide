import React from 'react';
import { BlockedIn } from '../../common';

export const Slide3: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col gap-2">
        <span className="mb-10">
          <BlockedIn />
        </span>
        <div className="mb-2 text-yellow-100" style={{ fontSize: '1.8rem' }}>
          Completed Feature
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
                Register an employer & employee
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                Complete access to employment history for both parties
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                Hire an candidate
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                Release an employee
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={{ fontSize: '20px' }}
              >
                Link duplicate employees
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
