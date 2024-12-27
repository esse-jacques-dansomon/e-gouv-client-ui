import React from "react";
import Card from "@/components/Card";

export interface AgendaItemModel {
  id: string;
  title: string;
  date: string;
  serviceName: string;
  address: string;
  status: "upcoming" | "past" | "missed";
}

interface AgendaItemProps {
  item: AgendaItemModel;
}

const AgendaItem: React.FC<AgendaItemProps> = ({ item }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  return (
    <Card style="flex flex-col w-full hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex flex-col mb-2 sm:mb-0">
          <p className="text-start font-bold text-lg">{item.title}</p>
          <p className="text-start text-gray-500 text-sm">
            {formatDate(item.date)}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-start font-bold text-base">{item.serviceName}</p>
          <p className="text-start text-gray-500 text-sm">{item.address}</p>
        </div>
      </div>
      <hr className="border-gray-200 my-3" />
      <div className="flex justify-between items-center">
        <button className="text-start font-bold text-base text-primary hover:underline">
          Voir l événement
        </button>
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            item.status === "upcoming"
              ? "bg-green-100 text-green-800"
              : item.status === "past"
              ? "bg-gray-100 text-gray-800"
              : "bg-red-100 text-red-800"
          }`}>
          {item.status === "upcoming"
            ? "À venir"
            : item.status === "past"
            ? "Passé"
            : "Raté"}
        </span>
      </div>
    </Card>
  );
};

export default AgendaItem;
