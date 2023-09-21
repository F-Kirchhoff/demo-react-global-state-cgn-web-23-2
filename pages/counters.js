import InfoBox from "../components/InfoBox";
import Navigation from "../components/Navigation";
import CounterList from "../components/CounterList";
import Link from "../components/Link";

export default function CountersPage({ counters, handleAdd, handleSubtract }) {
  return (
    <>
      <Link href="/">← Back</Link>

      <CounterList
        counters={counters}
        handleAdd={handleAdd}
        handleSubtract={handleSubtract}
      />

      <InfoBox />

      <Navigation />
    </>
  );
}
