"use client"
import React from 'react';

// components/steps/Step4.js
const Step4 = ({ nextStep, prevStep }: { nextStep: () => void; prevStep: () => void }) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Documents</h2>
            <form>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Certificat de naissance :</label>
                        <input type="text" className="input-field" placeholder="Numéro" required />
                        <label className="mt-2 text-gray-600">Fait le :</label>
                        <input type="date" className="input-field" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Certificat de nationalité :</label>
                        <input type="text" className="input-field" placeholder="Numéro" required />
                        <label className="mt-2 text-gray-600">Fait le :</label>
                        <input type="date" className="input-field" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Carte nationale d'identité :</label>
                        <input type="text" className="input-field" placeholder="Numéro" required />
                        <label className="mt-2 text-gray-600">Fait le :</label>
                        <input type="date" className="input-field" required />
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

export default Step4;
