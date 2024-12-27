"use client";
import React, { useState } from "react";

// Types
interface Document {
  id: string;
  title: string;
  type: DocumentType;
  service: ServiceType;
  date: string;
  fileUrl: string;
}

type DocumentType = "Photo" | "Document" | "Autre";
type ServiceType = "Service 1" | "Service 2" | "Service 3";

// Mock data
const mockDocuments: Document[] = [
  {
    id: "1",
    title: "Passeport",
    type: "Document",
    service: "Service 1",
    date: "2023-06-15",
    fileUrl: "/documents/passeport.pdf"
  },
  {
    id: "2",
    title: "Photo d'identité",
    type: "Photo",
    service: "Service 2",
    date: "2023-06-10",
    fileUrl: "/documents/photo.jpg"
  },
  {
    id: "3",
    title: "Acte de naissance",
    type: "Document",
    service: "Service 1",
    date: "2023-06-05",
    fileUrl: "/documents/acte_naissance.pdf"
  },
  {
    id: "4",
    title: "Justificatif de domicile",
    type: "Document",
    service: "Service 3",
    date: "2023-06-01",
    fileUrl: "/documents/justificatif_domicile.pdf"
  }
];

const documentTypes: DocumentType[] = ["Photo", "Document", "Autre"];
const serviceTypes: ServiceType[] = ["Service 1", "Service 2", "Service 3"];

// Components
const Card: React.FC<{ style?: string; children: React.ReactNode }> = ({
  style,
  children
}) => (
  <div className={`bg-white shadow-md rounded-lg ${style}`}>{children}</div>
);

interface SelectFormItemProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  showLabel?: boolean;
}

const SelectFormItem: React.FC<SelectFormItemProps> = ({
  label,
  options,
  value,
  onChange,
  showLabel = true
}) => {
  return (
    <div className="flex flex-col w-full">
      {showLabel && (
        <label
          htmlFor={label}
          className="mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Sélectionner</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

interface FileFormFieldProps {
  onChange: (file: File | null) => void;
}

const FileFormField: React.FC<FileFormFieldProps> = ({ onChange }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    onChange(file);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-10 h-10 mb-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
          </svg>
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Cliquez pour télécharger</span> ou
            glissez et déposez
          </p>
          <p className="text-xs text-gray-500">
            SVG, PNG, JPG ou GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

interface DocumentItemProps {
  document: Document;
  onDelete: (id: string) => void;
}

const DocumentItem: React.FC<DocumentItemProps> = ({ document, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow">
      <div className="flex items-center">
        <div className="mr-4">
          {document.type === "Photo" ? (
            <svg
              className="w-8 h-8 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          ) : (
            <svg
              className="w-8 h-8 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{document.title}</h3>
          <p className="text-sm text-gray-600">
            {document.service} - {new Date(document.date).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <a
          href={document.fileUrl}
          download
          className="px-3 py-1 mr-2 text-sm text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200">
          Télécharger
        </a>
        <button
          onClick={() => onDelete(document.id)}
          className="px-3 py-1 text-sm text-red-600 bg-red-100 rounded-full hover:bg-red-200">
          Supprimer
        </button>
      </div>
    </div>
  );
};

// Main component
const DemarchesDocuments: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>(mockDocuments);
  const [newDocumentType, setNewDocumentType] = useState<DocumentType | "">("");
  const [newFile, setNewFile] = useState<File | null>(null);
  const [filterDocumentType, setFilterDocumentType] = useState<
    DocumentType | ""
  >("");
  const [filterService, setFilterService] = useState<ServiceType | "">("");

  const handleAddDocument = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDocumentType && newFile) {
      const newDocument: Document = {
        id: Date.now().toString(),
        title: newFile.name,
        type: newDocumentType,
        service: "Service 1", // You might want to add a service selection for new documents
        date: new Date().toISOString().split("T")[0],
        fileUrl: URL.createObjectURL(newFile)
      };
      setDocuments([newDocument, ...documents]);
      setNewDocumentType("");
      setNewFile(null);
    }
  };

  const handleDeleteDocument = (id: string) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  const filteredDocuments = documents.filter(
    (doc) =>
      (!filterDocumentType || doc.type === filterDocumentType) &&
      (!filterService || doc.service === filterService)
  );

  return (
    <Card style="text-start p-6">
      <h2 className="text-2xl font-bold mb-6 pb-4 border-b-2">Mes documents</h2>

      <form onSubmit={handleAddDocument} className="mb-8">
        <h3 className="text-xl font-bold mb-4">Ajouter un document</h3>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <SelectFormItem
            label="Type de document"
            options={documentTypes}
            value={newDocumentType}
            onChange={setNewDocumentType as (value: string) => void}
          />
          <FileFormField onChange={setNewFile} />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
          disabled={!newDocumentType || !newFile}>
          Enregistrer
        </button>
      </form>

      <h3 className="text-xl font-bold mb-4">Liste des documents</h3>
      <div className="mb-6">
        <p className="text-gray-600 mb-2">
          Filtrer par type de document et service
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <SelectFormItem
            label="Type de document"
            options={documentTypes}
            value={filterDocumentType}
            onChange={setFilterDocumentType as (value: string) => void}
          />
          <SelectFormItem
            label="Service"
            options={serviceTypes}
            value={filterService}
            onChange={setFilterService as (value: string) => void}
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredDocuments.length === 0 ? (
          <p className="text-center text-gray-500">Aucun document trouvé</p>
        ) : (
          filteredDocuments.map((document) => (
            <DocumentItem
              key={document.id}
              document={document}
              onDelete={handleDeleteDocument}
            />
          ))
        )}
      </div>
    </Card>
  );
};

export default DemarchesDocuments;
