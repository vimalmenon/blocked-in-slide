import React from 'react';
import { BlockedIn } from '../../common';

export const Slide2: React.FC = () => {
  return (
    <section>
      <BlockedIn />
      <div className="text-base subpixel-antialiased">
        Problem application is trying to solve
      </div>
      <p className="fragment fade-up text-sm">
        Transparency with employment history
      </p>
      <p className="fragment fade-up text-sm">
        A centralized application for all employee data
      </p>
      <p className="fragment fade-up text-sm">
        Standardize the hiring process, which will help with the automation
      </p>
      <p className="fragment fade-up text-sm">
        Reduce the cost and time to verify employees&apos;
      </p>
      <p className="fragment fade-up text-sm">
        Prevents malpractices by employees like Moonlighting and many other
      </p>
      <p className="fragment fade-up text-sm">
        Help employers track employees&apos; status from counter offers
      </p>
      <p className="fragment fade-up text-sm">Tokenizing Talent</p>
    </section>
  );
};
