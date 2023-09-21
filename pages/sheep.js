import Counter from "@/components/Counter";

export default function SheepPage({ counters, handleAdd, handleSubtract }) {
  const sheepCounter = counters.find((counter) => counter.name === "Sheep");

  return (
    <>
      <h1>My Sheep</h1>
      <Counter
        animalName={sheepCounter.name}
        value={sheepCounter.value}
        onAdd={() => handleAdd(sheepCounter.id)}
        onSubtract={() => handleSubtract(sheepCounter.id)}
      />
    </>
  );
}
