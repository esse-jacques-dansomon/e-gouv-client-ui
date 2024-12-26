"use client";
import React from "react";

// components/steps/Step6.js
const Step6 = ({
  prevStep,
  handleSubmit
}: {
  prevStep: () => void;
  handleSubmit: () => void;
}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Récapitulatif</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="font-semibold text-lg mb-2">À propos de vous</h3>
        {/* Détails des informations personnelles */}
        <p>Nom : Adanhodou</p>
        <p>Prénoms : [Prénom]</p>
        {/* Ajoutez les autres champs pour afficher les informations saisies */}

        <h3 className="font-semibold text-lg mt-4 mb-2">Filiation</h3>
        {/* Détails des informations de filiation */}
        <p>Nom du père : [Nom du père]</p>
        <p>Prénoms du père : [Prénoms du père]</p>
        {/* Ajoutez les autres champs pour afficher les informations saisies */}

        <h3 className="font-semibold text-lg mt-4 mb-2">
          Informations de dépôt
        </h3>
        {/* Détails des informations de dépôt */}
        <p>Zone de formalité de dépôt : Sénégal</p>
        <p>Site de formalité de dépôt : [Site de dépôt]</p>
        {/* Ajoutez les autres champs pour afficher les informations saisies */}

        <h3 className="font-semibold text-lg mt-4 mb-2">Documents</h3>
        {/* Détails des documents fournis */}
        <p>Certificat de naissance : [Numéro]</p>
        <p>Certificat de nationalité : [Numéro]</p>
        {/* Ajoutez les autres champs pour afficher les informations saisies */}

        <h3 className="font-semibold text-lg mt-4 mb-2">Personne à Prévenir</h3>
        {/* Détails de la personne à prévenir */}
        <p>Nom de famille : [Nom]</p>
        <p>Prénom : [Prénom]</p>
        {/* Ajoutez les autres champs pour afficher les informations saisies */}
      </div>
      <div className="flex justify-between mt-6">
        <button type="button" onClick={prevStep} className="btn-secondary">
          Précédent
        </button>
        <button type="button" className="btn-primary">
          Envoyer
        </button>
      </div>
    </div>
  );
};

export default Step6;
