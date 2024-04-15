
'use client'
import { useEffect, useRef } from 'react';
import Reveal from "reveal.js";


const MainDeck = () => {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance
  useEffect(() => {
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
    });

    deckRef.current.initialize({ slideNumber: true }).then(() => {
      console.log("Slide initialize")
      // good place for event handlers and plugin setups
    });
    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, [])
  return (
    <div ref={deckDivRef} className="reveal" style={{ height: "100vh" }}>
      <div className="slides" >
        <section>Slide 1</section>
        <section>Slide 2</section>
      </div>
    </div>
  )
}

export default MainDeck;