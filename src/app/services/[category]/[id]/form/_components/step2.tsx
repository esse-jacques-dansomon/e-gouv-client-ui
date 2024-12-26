"use client"
import React from 'react';

// components/steps/Step2.js
const Step2 = ({ nextStep, prevStep }: { nextStep: () => void; prevStep: () => void }) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Filiation</h2>
            <form>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Nom du père</label>
                        <input type="text" className="input-field" placeholder="Nom du père" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Prénoms du père</label>
                        <input type="text" className="input-field" placeholder="Prénoms du père" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Nationalité du père</label>
                        <input type="text" className="input-field" placeholder="Nationalité du père" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Nom de la mère</label>
                        <input type="text" className="input-field" placeholder="Nom de la mère" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Prénoms de la mère</label>
                        <input type="text" className="input-field" placeholder="Prénoms de la mère" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Nationalité de la mère</label>
                        <input type="text" className="input-field" placeholder="Nationalité de la mère" required />
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

export default Step2;
