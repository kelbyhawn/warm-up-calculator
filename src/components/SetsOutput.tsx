type SetsOutputProps = {
  weight: number;
};

function SetsOutput({ weight }: SetsOutputProps) {
  const percents = [40, 60, 80];

  // Round to the nearest 5
  const getWeight = (weight: number, percent: number) => {
    const raw = weight * (percent / 100);
    return Math.round(raw / 5) * 5;
  };

  return (
    <ul>
      {percents.map((percent) => (
        <li key={percent}>
          <h2>Reps @ {percent}%</h2>
          <p>{getWeight(weight, percent)}</p>
        </li>
      ))}
    </ul>
  );
}

export default SetsOutput;
