"use client";
import AgendaItem, { AgendaItemModel } from "@/components/AgendaItem";
import React, { useState, useMemo } from "react";

export const mockAgendaItems: AgendaItemModel[] = [
  {
    id: "1",
    title: "Rendez-vous passeport",
    date: "2023-07-15T10:00:00",
    serviceName: "Service des passeports",
    address: "123 Rue de la République, 75001 Paris",
    status: "upcoming"
  },
  {
    id: "2",
    title: "Renouvellement carte d'identité",
    date: "2023-06-20T14:30:00",
    serviceName: "Mairie centrale",
    address: "45 Avenue des Champs-Élysées, 75008 Paris",
    status: "past"
  },
  {
    id: "3",
    title: "Demande de visa",
    date: "2023-07-05T09:15:00",
    serviceName: "Ambassade",
    address: "78 Rue Bonaparte, 75006 Paris",
    status: "missed"
  },
  {
    id: "4",
    title: "Inscription scolaire",
    date: "2023-08-01T11:00:00",
    serviceName: "Rectorat",
    address: "25 Rue de la Montagne Sainte Geneviève, 75005 Paris",
    status: "upcoming"
  }
];

type FilterStatus = "all" | "upcoming" | "past" | "missed";

const Agenda: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterStatus>("all");

  const filteredAgendaItems = useMemo(() => {
    if (activeFilter === "all") {
      return mockAgendaItems;
    }
    return mockAgendaItems.filter((item) => item.status === activeFilter);
  }, [activeFilter]);

  const filterButtons: { label: string; value: FilterStatus }[] = [
    { label: "Voir tout", value: "all" },
    { label: "À venir", value: "upcoming" },
    { label: "Passé", value: "past" },
    { label: "Raté", value: "missed" }
  ];

  return (
    <section className="h-full w-full overflow-y-auto p-6">
      <div className="flex gap-4 h-full w-full justify-start items-start flex-wrap mb-6">
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
      <div className="w-full flex flex-col gap-4">
        {filteredAgendaItems.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            Aucun événement trouvé
          </div>
        ) : (
          filteredAgendaItems.map((item: any) => (
            <AgendaItem key={item.id} item={item} />
          ))
        )}
      </div>
    </section>
  );
};

export default Agenda;
