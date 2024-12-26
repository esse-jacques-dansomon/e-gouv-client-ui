"use client";
import React from "react";

// components/steps/Step3.js
const Step3 = ({
  nextStep,
  prevStep
}: {
  nextStep: () => void;
  prevStep: () => void;
}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Informations de dépôt</h2>
      <form>
        <div className="flex flex-col mb-4">
          <label className="mb-1 text-gray-600">
            Zone de formalité de dépôt
          </label>
          <select className="input-field" required>
            <option>Sénégal</option>
            <option>Hors du Sénégal</option>
          </select>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-1 text-gray-600">
            Site de formalité de dépôt
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="Site de formalité de dépôt"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-1 text-gray-600">Type de demande</label>
          <select className="input-field" required>
            <option>Première demande</option>
            <option>Renouvellement</option>
          </select>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-1 text-gray-600">Type de passeport</label>
          <div className="flex space-x-4">
            <label>
              <input
                type="radio"
                name="passportType"
                value="ordinaire"
                className="mr-2"
                required
              />{" "}
              Ordinaire
            </label>
            <label>
              <input
                type="radio"
                name="passportType"
                value="service"
                className="mr-2"
              />{" "}
              Service
            </label>
            <label>
              <input
                type="radio"
                name="passportType"
                value="diplomatique"
                className="mr-2"
              />{" "}
              Diplomatique
            </label>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button type="button" onClick={prevStep} className="btn-secondary">
            Précédent
          </button>
          <button type="button" onClick={nextStep} className="btn-primary">
            Suivant
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step3;
