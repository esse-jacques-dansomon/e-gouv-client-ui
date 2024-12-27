"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface RegisterFormData {
  nom: string;
  prenom: string;
  sexe: string;
  dateNaissance: {
    jour: string;
    mois: string;
    annee: string;
  };
  email: string;
  password: string;
  confirmPassword: string;
  telephone: string;
  typeDocument: string;
  numeroIdentification: string;
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<RegisterFormData>({
    nom: "",
    prenom: "",
    sexe: "",
    dateNaissance: {
      jour: "",
      mois: "",
      annee: ""
    },
    email: "",
    password: "",
    confirmPassword: "",
    telephone: "",
    typeDocument: "",
    numeroIdentification: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Registration attempt:", formData);
  };

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 100; i <= currentYear; i++) {
      years.push(i);
    }
    return years.reverse();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">S enregistrer</h1>
          <p className="mt-2 text-red-500 text-sm">* Champs requis</p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-yellow-700">
            <span className="font-bold">Attention ! </span>
            Vous ne serez plus en mesure de modifier certaines de vos
            informations après inscription. Veuillez renseigner vos informations
            avec le plus grand soin.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="nom"
                className="block text-sm font-medium text-gray-700 text-start">
                Nom <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nom"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                value={formData.nom}
                onChange={(e) =>
                  setFormData({ ...formData, nom: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="prenom"
                className="block text-sm font-medium text-gray-700 text-start">
                Prénom <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="prenom"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                value={formData.prenom}
                onChange={(e) =>
                  setFormData({ ...formData, prenom: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="sexe"
                className="block text-sm font-medium text-gray-700 text-start">
                Sexe <span className="text-red-500">*</span>
              </label>
              <select
                id="sexe"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                value={formData.sexe}
                onChange={(e) =>
                  setFormData({ ...formData, sexe: e.target.value })
                }>
                <option value="">Sélectionnez</option>
                <option value="M">Masculin</option>
                <option value="F">Féminin</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date de naissance <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                <select
                  value={formData.dateNaissance.jour}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dateNaissance: {
                        ...formData.dateNaissance,
                        jour: e.target.value
                      }
                    })
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                  <option value="">Jour</option>
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>

                <select
                  value={formData.dateNaissance.mois}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dateNaissance: {
                        ...formData.dateNaissance,
                        mois: e.target.value
                      }
                    })
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                  <option value="">Mois</option>
                  {[
                    "Janvier",
                    "Février",
                    "Mars",
                    "Avril",
                    "Mai",
                    "Juin",
                    "Juillet",
                    "Août",
                    "Septembre",
                    "Octobre",
                    "Novembre",
                    "Décembre"
                  ].map((month, index) => (
                    <option key={month} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>

                <select
                  value={formData.dateNaissance.annee}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dateNaissance: {
                        ...formData.dateNaissance,
                        annee: e.target.value
                      }
                    })
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                  <option value="">Année</option>
                  {generateYears().map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 text-start">
              Adresse e-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-start"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-md text-start">
            <p className="text-sm text-blue-700 font-medium mb-2">
              Le mot de passe doit comporter un minimum de huit caractères sans
              espaces avec :
            </p>
            <ul className="text-sm text-blue-600 list-disc pl-5">
              <li>Au moins une lettre majuscule</li>
              <li>Au moins une lettre minuscule</li>
              <li>Au moins un chiffre</li>
              <li>Au moins 8 caractères</li>
            </ul>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 text-start">
              Mot de passe <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 text-start">
              Confirmation du mot de passe{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="telephone"
              className="block text-sm font-medium text-gray-700 text-start">
              Numéro de téléphone <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                +221
              </span>
              <input
                type="tel"
                id="telephone"
                required
                className="block w-full text-start px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                value={formData.telephone}
                onChange={(e) =>
                  setFormData({ ...formData, telephone: e.target.value })
                }
                placeholder="70 12 34 56"
              />
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Cliquez sur le drapeau pour choisir l indicatif, puis renseignez
              un numéro valide (il est indispensable pour votre connexion)
            </p>
          </div>

          <div>
            <label
              htmlFor="typeDocument"
              className="block text-sm font-medium text-gray-700 text-start">
              Sélectionnez un document d identification
            </label>
            <select
              id="typeDocument"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              value={formData.typeDocument}
              onChange={(e) =>
                setFormData({ ...formData, typeDocument: e.target.value })
              }>
              <option value="">Sélectionnez</option>
              <option value="cni">Carte Nationale d Identité</option>
              <option value="passport">Passeport</option>
              <option value="permis">Permis de conduire</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="numeroIdentification"
              className="block text-sm font-medium text-gray-700 text-start">
              Numéro d identification
            </label>
            <input
              type="text"
              id="numeroIdentification"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Numéro de votre pièce d'identité"
              value={formData.numeroIdentification}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  numeroIdentification: e.target.value
                })
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <Link
              href="/auth/login"
              className="text-sm text-blue-600 hover:text-blue-500">
              « Retour à la connexion
            </Link>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Enregistrement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
