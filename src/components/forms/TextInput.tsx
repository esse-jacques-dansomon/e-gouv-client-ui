// components/TextInput.js
const TextInput = ({ label, name, placeholder, value, onChange, type = "text" }: { label: string, name: string, placeholder: string, value: string, onChange: (value: string) => void, type?: string }) => {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-1 text-gray-600">{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="input-field"
            />
        </div>
    );
};

export default TextInput;
