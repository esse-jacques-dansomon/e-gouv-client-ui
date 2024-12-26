import React from 'react';

// components/steps/Step1.js
const Step1 = ({ nextStep }: { nextStep: () => void }) => {
    return (
        <div className="w-full">
            <h2 className="text-2xl font-semibold mb-4">À propos de vous</h2>
            <form className="w-full">
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="flex flex-col items-start w-full">
                        <label className="mb-1 text-gray-600">Nom</label>
                        <input type="text" className="input-field w-full" placeholder="Nom" required />
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <label className="mb-1 text-gray-600">Prénom</label>
                        <input type="text" className="input-field w-full" placeholder="Prénom" required />
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <label className="mb-1 text-gray-600">Sexe</label>
                        <div className="flex items-center space-x-4">
                            <label>
                                <input type="radio" name="sexe" value="masculin" className="mr-2" required /> Masculin
                            </label>
                            <label>
                                <input type="radio" name="sexe" value="féminin" className="mr-2" /> Féminin
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <label className="mb-1 text-gray-600">État Civil</label>
                        <select className="input-field w-full" required>
                            <option value="">Sélectionner</option>
                            <option value="single">Célibataire</option>
                            <option value="married">Marié(e)</option>
                            {/* Ajoutez d'autres options si nécessaire */}
                        </select>
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <label className="mb-1 text-gray-600">Nationalité</label>
                        <input type="text" className="input-field w-full" placeholder="Nationalité" required />
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <label className="mb-1 text-gray-600">Pays de naissance</label>
                        <input type="text" className="input-field w-full" placeholder="Pays de naissance" required />
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <label className="mb-1 text-gray-600">Date de naissance</label>
                        <div className="flex space-x-2">
                            <input type="number" className="input-field" placeholder="Jour" min="1" max="31" required />
                            <input type="number" className="input-field" placeholder="Mois" min="1" max="12" required />
                            <input type="number" className="input-field" placeholder="Année" min="1900" required />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Lieu de naissance</label>
                        <input type="text" className="input-field" placeholder="Lieu de naissance" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Adresse courante</label>
                        <input type="text" className="input-field" placeholder="Ville, Quartier, Maison" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Profession</label>
                        <input type="text" className="input-field" placeholder="Profession" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Email</label>
                        <input type="email" className="input-field" placeholder="Email" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Numéro de téléphone</label>
                        <input type="tel" className="input-field" placeholder="Numéro de téléphone" required />
                    </div>
                </div>
                <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary mt-6"
                >
                    Suivant
                </button>
            </form>
        </div>
    );
};

export default Step1;
