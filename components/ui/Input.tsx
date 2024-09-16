interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  max?: number;
  min?: number;
  step?: string;
}

const Input = ({
  name,
  type,
  placeholder,
  value,
  max,
  min,
  step,
}: inputProps) => {
  return (
    <>
      <input
        className="w-full p-2 border-gray-200 border rounded-2xl mr-2"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        max={max}
        min={min}
        step={step}
      />
    </>
  );
};

export default Input;
