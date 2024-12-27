"use client";

import React, { useState, useMemo } from "react";
import DemarcheCard, { Demarche } from "@/components/DemarcheCard";
export const mockDemarches: Demarche[] = [
  {
    id: "1",
    numeroDossier: "554LBB994XYB",
    type: "Demande de passeport",
    dateInitiation: "2023-04-15",
    nomDemandeur: "Adanhoudou",
    status: "en_cours"
  },
  {
    id: "2",
    numeroDossier: "554LBB995XYB",
    type: "Demande de passeport",
    dateInitiation: "2023-04-16",
    nomDemandeur: "Koffi",
    status: "termine"
  },
  {
    id: "3",
    numeroDossier: "554LBB996XYB",
    type: "Demande de passeport",
    dateInitiation: "2023-04-17",
    nomDemandeur: "Agbessi",
    status: "en_cours"
  },
  {
    id: "4",
    numeroDossier: "554LBB997XYB",
    type: "Demande de passeport",
    dateInitiation: "2023-04-18",
    nomDemandeur: "Mensah",
    status: "archive"
  }
];

type FilterStatus = "tout" | "en_cours" | "termine" | "archive";

const Demarches = () => {
  const [activeFilter, setActiveFilter] = useState<FilterStatus>("tout");

  const filteredDemarches = useMemo(() => {
    if (activeFilter === "tout") {
      return mockDemarches;
    }
    return mockDemarches.filter((demarche) => demarche.status === activeFilter);
  }, [activeFilter]);

  const handleCancel = (id: string) => {
    // Implement cancel logic here
    console.log("Cancelling demarche:", id);
  };

  const filterButtons: { label: string; value: FilterStatus }[] = [
    { label: "Voir tout", value: "tout" },
    { label: "En cours", value: "en_cours" },
    { label: "Terminé", value: "termine" },
    { label: "Archivé", value: "archive" }
  ];

  return (
    <div className="h-full w-full overflow-y-auto p-6">
      <div className="flex gap-4 h-full w-full justify-start items-start flex-wrap">
        {filterButtons.map((button) => (
          <button
            key={button.value}
            onClick={() => setActiveFilter(button.value)}
            className={`rounded-full px-4 py-2 transition-colors ${
              activeFilter === button.value
                ? "bg-primary text-white"
                : "bg-white hover:bg-gray-100"
            }`}>
            {button.label}
          </button>
        ))}
      </div>

      <div className="w-full pt-4 flex flex-col gap-4">
        {filteredDemarches.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            Aucune démarche trouvée
          </div>
        ) : (
          filteredDemarches.map((demarche) => (
            <DemarcheCard
              key={demarche.id}
              demarche={demarche}
              onCancel={handleCancel}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Demarches;
