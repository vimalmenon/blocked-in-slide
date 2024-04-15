
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

import dynamic from 'next/dynamic'

const MainPage = dynamic(() => import("../deck/main"), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

export default function Home() {
  return (
    <main>
      <MainPage />
    </main>
  );
}
