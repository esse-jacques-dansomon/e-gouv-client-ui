
// components/FileInput.js
const FileInput = ({ label, name, onChange }: { label: string, name: string, onChange: (value: File | null) => void }) => {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-1 text-gray-600">{label}</label>
            <input
                type="file"
                name={name}
                onChange={(e) => onChange(e.target?.files ? e.target.files[0] : null)}
                className="input-field"
            />
        </div>
    );
};

export default FileInput;
