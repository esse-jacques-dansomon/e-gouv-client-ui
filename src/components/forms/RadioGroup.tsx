// components/RadioGroup.js
const RadioGroup = ({ label, name, value, onChange, options }: { label: string, name: string, value: string, onChange: (value: string) => void, options: { value: string, label: string }[] }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-1 text-gray-600">{label}</label>
      <div className="flex space-x-4">
        {options.map((option, index) => (
          <label key={index} className="flex items-center">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="mr-2"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
