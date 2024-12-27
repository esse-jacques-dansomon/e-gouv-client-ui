"use client";

import React from "react";

interface TimelineItem {
  date: string;
  time: string;
  title: string;
  status: "completed" | "pending";
  actionLabel?: string;
}

export default function PassportTracking() {
  const timelineItems: TimelineItem[] = [
    {
      date: "mercredi 8 mars 2023",
      time: "13:49",
      title: "Soumission de la demande",
      status: "completed",
      actionLabel: "Revoir les informations"
    },
    {
      date: "mercredi 8 mars 2023",
      time: "13:56",
      title: "Formulaire de demande de paiement",
      status: "completed",
      actionLabel: "Revoir les informations"
    },
    {
      date: "mercredi 8 mars 2023",
      time: "14:01",
      title: "Formulaire de vérification de l'état d'avancement",
      status: "pending",
      actionLabel: "Procéder"
    },
    {
      date: "vendredi 26 mai 2023",
      time: "18:05",
      title:
        "Formulaire pour la récupération d'une nouvelle fiche de renseignements",
      status: "pending",
      actionLabel: "Procéder"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <button className="text-blue-600 hover:underline text-sm">
            Retourner aux démarches
          </button>
          <button className="bg-white hover:bg-gray-50 px-4 py-2 rounded-md text-sm border border-gray-200 shadow-sm">
            Générer une nouvelle demande
          </button>
        </div>

        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Demande de passeport
          </h1>
          <p className="text-sm text-gray-600">Dossier N° 554LBB994XYB</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button className="px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-medium">
            Progression de la demande
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800 flex items-center">
            Notifications
            <span className="ml-1 bg-gray-200 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs">
              2
            </span>
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800 flex items-center">
            Paiements
            <span className="ml-1 bg-gray-200 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs">
              1
            </span>
          </button>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-lg shadow">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-100 last:border-b-0 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <span>{item.date}</span>
                    <span>{item.time}</span>
                  </div>
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <div className="mt-1">
                    <span
                      className={`text-sm ${
                        item.status === "completed"
                          ? "text-green-600"
                          : "text-gray-600"
                      }`}>
                      État :{" "}
                      {item.status === "completed"
                        ? "Étape complétée"
                        : "En attente d'information"}
                    </span>
                  </div>
                </div>
                <button
                  className={`px-4 py-2 rounded text-sm font-medium ${
                    item.status === "completed"
                      ? "border border-gray-200 hover:bg-gray-50 text-gray-700"
                      : "bg-red-800 hover:bg-red-900 text-white"
                  }`}>
                  {item.actionLabel}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6">
          <button className="text-blue-600 hover:underline text-sm">
            Signaler une procédure inexacte
          </button>
        </div>
      </div>
    </div>
  );
}
