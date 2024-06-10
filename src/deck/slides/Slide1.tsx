import React from 'react';
import { BlockedIn } from '../../common';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldHalved,
  faMagnifyingGlass,
  faNetworkWired,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

const listItemStyle = {
  fontSize: '1.2rem',
  justifyContent: 'space-between',
  display: 'flex',
  alignItems: 'center',
  margin: '30px 0',
};

const iconStyle = {
  fontSize: '50px',
};
export const Slide1: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col gap-2">
        <span className="mb-10">
          <BlockedIn />
        </span>
        <div className="mb-2 text-yellow-100" style={{ fontSize: '1.8rem' }}>
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
              width: '600px',
              flexDirection: 'column',
              alignItems: 'start',
              gap: 20,
            }}
          >
            <ul style={{ width: '100%' }}>
              <li
                className="fragment fade-up text-sm m-5"
                style={listItemStyle}
              >
                <FontAwesomeIcon icon={faShieldHalved} style={iconStyle} />
                &nbsp; Secure
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={listItemStyle}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} style={iconStyle} />
                &nbsp; Transparency
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={listItemStyle}
              >
                <FontAwesomeIcon icon={faNetworkWired} style={iconStyle} />
                &nbsp; Decentralized
              </li>
              <li
                className="fragment fade-up text-sm m-5"
                style={listItemStyle}
              >
                <FontAwesomeIcon icon={faUserShield} style={iconStyle} />
                &nbsp; Prevents data fraud
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
