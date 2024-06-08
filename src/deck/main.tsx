'use client';
import React from 'react';
import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';

import { Slide1, Slide2, Slide3, Slide4, Slide0 } from './slides';

const MainDeck = () => {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance
  useEffect(() => {
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {});

    deckRef.current.initialize({ slideNumber: true }).then(() => {
      console.log('Slide initialize');
      // good place for event handlers and plugin setups
    });
    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn('Reveal.js destroy call failed.');
      }
    };
  }, []);
  return (
    <div ref={deckDivRef} className="reveal" style={{ height: '100vh' }}>
      <div className="slides">
        <Slide0 />
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
      </div>
      <div className="text-base justify-end flex px-4 py-2">
        Vimal Menon (v0.0.0)
      </div>
    </div>
  );
};

export default MainDeck;
