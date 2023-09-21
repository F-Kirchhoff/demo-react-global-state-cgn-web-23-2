import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialCounters = [
  {
    id: "0",
    name: "Cats",
    value: 0,
  },
  {
    id: "1",
    name: "Dogs",
    value: 0,
  },
  {
    id: "2",
    name: "Sheep",
    value: 42,
  },
  {
    id: "3",
    name: "Dragons",
    value: 0,
  },
  {
    id: "5",
    name: "Ducks",
    value: 8,
  },
];

export default function App({ Component: PageComponent, pageProps }) {
  // Component stands for the individual page that we are visiting

  const [counters, setCounters] = useState(initialCounters);

  function handleAdd(counterId) {
    // "0"
    const updatedCounters = counters.map((counter) => {
      if (counter.id !== counterId) {
        return counter;
      }

      const updatedCounter = {
        ...counter,
        value: counter.value + 1,
      };

      return updatedCounter;
    });

    setCounters(updatedCounters);
  }

  function handleSubtract(counterId) {
    const updatedCounters = counters.map((counter) => {
      if (counter.id !== counterId) {
        return counter;
      }

      const updatedCounter = {
        ...counter,
        value: Math.max(counter.value - 1, 0),
      };

      return updatedCounter;
    });

    setCounters(updatedCounters);
  }

  const dragonCounter = counters.find((counter) => counter.name === "Dragons");
  const countSum = counters
    .map((counter) => counter.value)
    .reduce((acc, current) => acc + current, 0);
  const countAverage = countSum / counters.length;

  return (
    <>
      <GlobalStyle />
      <Layout dragonCount={dragonCounter.value} countSum={countSum}>
        <PageComponent
          {...pageProps}
          counters={counters}
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
          dragonCount={dragonCounter.value}
          countSum={countSum}
          countAverage={countAverage}
        />
      </Layout>
    </>
  );
}

/* 

pageProps:

{
  children: ...
  type: 'default',
  path: '/counters',
}

{...pageProps} => children={pageProps.children} type={pageProps.type}

*/
