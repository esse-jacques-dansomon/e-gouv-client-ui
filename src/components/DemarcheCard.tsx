import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

export interface Demarche {
  id: string;
  numeroDossier: string;
  type: string;
  dateInitiation: string;
  nomDemandeur: string;
  status: "en_cours" | "termine" | "archive";
}
interface DemarcheCardProps {
  demarche: Demarche;
  onCancel?: (id: string) => void;
}

const DemarcheCard: React.FC<DemarcheCardProps> = ({ demarche, onCancel }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return new Intl.DateTimeFormat("fr-FR", options).format(date);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "en_cours":
        return "bg-yellow-200";
      case "termine":
        return "bg-green-200";
      case "archive":
        return "bg-gray-200";
      default:
        return "bg-yellow-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "en_cours":
        return "En cours";
      case "termine":
        return "Terminé";
      case "archive":
        return "Archivé";
      default:
        return "En cours";
    }
  };

  const formattedDate = formatDate(demarche.dateInitiation);
  const [day, month, year] = formattedDate
    .split(" ")
    .filter((part) => part !== "");

  return (
    <Card style="w-full">
      <div className="flex flex-col gap-2 w-full">
        {/* demarcher header */}
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex flex-col text-start">
            <h2 className="text-xl">{demarche.type}</h2>
            <p className="text-primary">No {demarche.numeroDossier}</p>
          </div>

          <div className="flex text-start gap-1 md:flex-col">
            <p>Initée le</p>
            <p>{`${day} ${month}`}</p>
            <p>{year}</p>
          </div>
        </div>
        {/* name of dealer */}
        <div className="border-y-2 border-gray-200 text-start py-3">
          <span>Nom du demandeur</span>{" "}
          <span className="font-bold">{demarche.nomDemandeur}</span>
        </div>
        {/* status/details/cancel buttons */}
        <div className="">
          <div className={`${getStatusColor(demarche.status)} py-2 text-clip`}>
            {getStatusText(demarche.status)}
          </div>
          <div className="justify-between flex flex-row gap-2 mt-3">
            <Link
              href={`/dashboard/demarches/details/${demarche.id}`}
              className="text-center text-white py-1 px-4 bg-primary">
              Détails
            </Link>
            {demarche.status === "en_cours" && (
              <button
                onClick={() => onCancel?.(demarche.id)}
                className="text-start text-white py-1 px-4 bg-sendGreen">
                Annuler
              </button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DemarcheCard;
