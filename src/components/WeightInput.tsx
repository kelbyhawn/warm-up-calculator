type WeightInputProps = {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function WeightInput({ value, onChange }: WeightInputProps) {
  return (
    <label>
      Working Weight (lbs)
      <input
        name="weight-input"
        type="number"
        placeholder="100"
        value={value === 0 ? "" : value}
        onChange={onChange}
      />
    </label>
  );
}

export default WeightInput;
