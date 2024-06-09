import React from 'react';
import { BlockedIn } from '../../common';

export const Slide4: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col gap-2">
        <span className="mb-10">
          <BlockedIn />
        </span>
        <div className="mb-2 text-yellow-100" style={{ fontSize: '25px' }}>
          Future Scope
        </div>
        <div>
          <p className="fragment fade-up text-sm">
            Robust verification of academic history
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
      </div>
    </section>
  );
};
