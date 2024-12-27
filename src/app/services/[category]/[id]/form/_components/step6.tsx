"use client";

import React from "react";

interface Step6Props {
  prevStep: () => void;
  handleSubmit: () => void;
}

const Step6: React.FC<Step6Props> = ({ prevStep, handleSubmit }) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="bg-gray-800 text-white py-4 px-6">
        <h2 className="text-2xl font-semibold">Récapitulatif</h2>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          <Section title="À propos de vous">
            <InfoItem label="Nom" value="Adanhodou" />
            <InfoItem label="Prénoms" value="Jean" />
            <InfoItem label="Date de naissance" value="15/05/1985" />
            <InfoItem label="Lieu de naissance" value="Cotonou" />
            <InfoItem label="Nationalité" value="Béninoise" />
          </Section>

          <Section title="Filiation">
            <InfoItem label="Nom du père" value="Adanhodou" />
            <InfoItem label="Prénoms du père" value="Pierre" />
            <InfoItem label="Nom de la mère" value="Kponou" />
            <InfoItem label="Prénoms de la mère" value="Marie" />
          </Section>

          <Section title="Informations de dépôt">
            <InfoItem label="Zone de formalité de dépôt" value="Sénégal" />
            <InfoItem label="Site de formalité de dépôt" value="Dakar" />
            <InfoItem label="Date de dépôt" value="01/06/2023" />
          </Section>

          <Section title="Documents">
            <InfoItem label="Certificat de naissance" value="CN12345" />
            <InfoItem label="Certificat de nationalité" value="NAT67890" />
            <InfoItem label="Passeport" value="PA123456" />
          </Section>

          <Section title="Personne à Prévenir">
            <InfoItem label="Nom de famille" value="Diop" />
            <InfoItem label="Prénom" value="Fatou" />
            <InfoItem label="Relation" value="Épouse" />
            <InfoItem label="Téléphone" value="+221 77 123 45 67" />
          </Section>
        </div>
      </div>
      <div className="bg-gray-100 px-6 py-4 flex justify-between items-center">
        <button
          type="button"
          onClick={prevStep}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
          Précédent
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
          Envoyer
        </button>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children
}) => (
  <div className="border-b border-gray-200 pb-4">
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
  </div>
);

const InfoItem: React.FC<{ label: string; value: string }> = ({
  label,
  value
}) => (
  <div className="flex flex-col">
    <span className="text-sm text-gray-600">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export default Step6;
