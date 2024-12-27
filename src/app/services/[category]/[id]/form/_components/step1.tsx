import React from "react";

interface Step1Props {
  nextStep: () => void;
}

const Step1: React.FC<Step1Props> = ({ nextStep }) => {
  return (
    <div className="w-full mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        À propos de vous
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
        className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="nom"
              className="block text-sm font-medium text-gray-700 mb-1">
              Nom
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nom"
            />
          </div>
          <div>
            <label
              htmlFor="prenom"
              className="block text-sm font-medium text-gray-700 mb-1">
              Prénom
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Prénom"
            />
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700 mb-1">
              Sexe
            </span>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="sexe"
                  value="masculin"
                  required
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">Masculin</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="sexe"
                  value="feminin"
                  required
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">Féminin</span>
              </label>
            </div>
          </div>
          <div>
            <label
              htmlFor="etatCivil"
              className="block text-sm font-medium text-gray-700 mb-1">
              État Civil
            </label>
            <select
              id="etatCivil"
              name="etatCivil"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">Sélectionner</option>
              <option value="single">Célibataire</option>
              <option value="married">Marié(e)</option>
              <option value="divorced">Divorcé(e)</option>
              <option value="widowed">Veuf/Veuve</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="nationalite"
              className="block text-sm font-medium text-gray-700 mb-1">
              Nationalité
            </label>
            <input
              type="text"
              id="nationalite"
              name="nationalite"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nationalité"
            />
          </div>
          <div>
            <label
              htmlFor="paysNaissance"
              className="block text-sm font-medium text-gray-700 mb-1">
              Pays de naissance
            </label>
            <input
              type="text"
              id="paysNaissance"
              name="paysNaissance"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Pays de naissance"
            />
          </div>
          <div>
            <label
              htmlFor="dateNaissance"
              className="block text-sm font-medium text-gray-700 mb-1">
              Date de naissance
            </label>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="number"
                id="jourNaissance"
                name="jourNaissance"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Jour"
                min="1"
                max="31"
              />
              <input
                type="number"
                id="moisNaissance"
                name="moisNaissance"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Mois"
                min="1"
                max="12"
              />
              <input
                type="number"
                id="anneeNaissance"
                name="anneeNaissance"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Année"
                min="1900"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lieuNaissance"
              className="block text-sm font-medium text-gray-700 mb-1">
              Lieu de naissance
            </label>
            <input
              type="text"
              id="lieuNaissance"
              name="lieuNaissance"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Lieu de naissance"
            />
          </div>
          <div>
            <label
              htmlFor="adresse"
              className="block text-sm font-medium text-gray-700 mb-1">
              Adresse courante
            </label>
            <input
              type="text"
              id="adresse"
              name="adresse"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ville, Quartier, Maison"
            />
          </div>
          <div>
            <label
              htmlFor="profession"
              className="block text-sm font-medium text-gray-700 mb-1">
              Profession
            </label>
            <input
              type="text"
              id="profession"
              name="profession"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Profession"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email"
            />
          </div>
          <div>
            <label
              htmlFor="telephone"
              className="block text-sm font-medium text-gray-700 mb-1">
              Numéro de téléphone
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Numéro de téléphone"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out">
            Suivant
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
