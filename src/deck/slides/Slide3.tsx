import React from 'react';
import { BlockedIn } from '../../common';

export const Slide3: React.FC = () => {
  return (
    <section>
      <BlockedIn />
      <div>
        <div className="text-base subpixel-antialiased">Completed Feature</div>
        <p className="fragment fade-up text-sm">
          Register an employer & employee
        </p>
        <p className="fragment fade-up text-sm">
          Employers will be able to hire an employee
        </p>
        <p className="fragment fade-up text-sm">
          The employee will have a complete employment history
        </p>
        <p className="fragment fade-up text-sm">Release an employee</p>
        <p className="fragment fade-up text-sm">Link employee&apos;s</p>
        <div className="text-base subpixel-antialiased">Future Scope</div>
        <p className="fragment fade-up text-sm">
          Robust verification of education history
        </p>
        <p className="fragment fade-up text-sm">Appreciate employee</p>
        <p className="fragment fade-up text-sm">Add skills for employee</p>
        <p className="fragment fade-up text-sm">Token&apos;s</p>
        <p className="fragment fade-up text-sm">NFT</p>
        <p className="fragment fade-up text-sm">
          Integration with other applications
        </p>
        <p className="fragment fade-up text-sm">Track Employees status</p>
        <p className="fragment fade-up text-sm">IPFS</p>
      </div>
    </section>
  );
};
