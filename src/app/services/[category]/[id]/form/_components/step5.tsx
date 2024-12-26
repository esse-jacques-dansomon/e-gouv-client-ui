"use client"
import React from 'react';

// components/steps/Step5.js
const Step5 = ({ nextStep, prevStep }: { nextStep: () => void; prevStep: () => void }) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Personne à Prévenir</h2>
            <form>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Nom de famille</label>
                        <input type="text" className="input-field" placeholder="Nom de famille" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Prénom</label>
                        <input type="text" className="input-field" placeholder="Prénom" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Numéro de téléphone</label>
                        <input type="tel" className="input-field" placeholder="Numéro de téléphone" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Autre numéro de téléphone</label>
                        <input type="tel" className="input-field" placeholder="Autre numéro de téléphone" />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Genre</label>
                        <div className="flex items-center space-x-4">
                            <label>
                                <input type="radio" name="gender" value="homme" className="mr-2" required /> Homme
                            </label>
                            <label>
                                <input type="radio" name="gender" value="femme" className="mr-2" /> Femme
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Numéro d'une pièce d'identité</label>
                        <input type="text" className="input-field" placeholder="Numéro de pièce d'identité" required />
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

export default Step5;
