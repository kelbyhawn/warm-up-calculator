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
        type="text"
        inputMode="numeric"
        placeholder="100"
        autoFocus={value === 0}
        value={value === 0 ? "" : value}
        onChange={onChange}
      />
    </label>
  );
}

export default WeightInput;
