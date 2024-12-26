// components/SelectInput.js
const SelectInput = ({ label, name, value, onChange, options }: { label: string, name: string, value: string, onChange: (value: string) => void, options: { value: string, label: string }[] }) => {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-1 text-gray-600">{label}</label>
            <select
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="input-field"
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
