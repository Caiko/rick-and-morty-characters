type Props = {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
};

export default function FilterSelect({
  label,
  value,
  onChange,
  options,
}: Props) {
  return (
    <div className="flex flex-col w-[20rem] ">
      <label>{label}</label>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="bg-white p-2 h-[2.5rem]"
      >
        <option value="">All</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
