type SetsOutputProps = {
  weight: number;
};

function SetsOutput({ weight }: SetsOutputProps) {
  const sets = [
    { reps: 5, percent: 40 },
    { reps: 5, percent: 60 },
    { reps: 3, percent: 80 },
  ];

  // Round to the nearest 5
  const getWeight = (weight: number, percent: number) => {
    const raw = weight * (percent / 100);
    return Math.round(raw / 5) * 5;
  };

  return (
    <ul>
      {sets.map((set, i) => (
        <li key={i}>
          <h2>
            {set.reps} Reps • {set.percent}%
          </h2>
          <p>{getWeight(weight, set.percent)}</p>
        </li>
      ))}
    </ul>
  );
}

export default SetsOutput;
