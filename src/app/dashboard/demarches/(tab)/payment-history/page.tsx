"use client";

import React, { useState, useMemo } from "react";

// Types
interface Payment {
  id: string;
  numero: string;
  service: string;
  date: string;
  status: "En attente" | "Payé" | "Annulé";
  amount: number;
}

// Mock data
const MOCK_PAYMENTS: Payment[] = [
  {
    id: "1",
    numero: "PAY-001-2023",
    service: "Passeport",
    date: "2023-04-18",
    status: "En attente",
    amount: 10000
  },
  {
    id: "2",
    numero: "PAY-002-2023",
    service: "Visa",
    date: "2023-04-18",
    status: "En attente",
    amount: 3000
  },
  {
    id: "3",
    numero: "PAY-003-2023",
    service: "Carte d'identité",
    date: "2023-09-17",
    status: "Payé",
    amount: 5000
  },
  {
    id: "4",
    numero: "PAY-004-2023",
    service: "Permis de conduire",
    date: "2023-12-08",
    status: "En attente",
    amount: 2000
  },
  {
    id: "5",
    numero: "PAY-005-2023",
    service: "Certificat de naissance",
    date: "2023-10-21",
    status: "Payé",
    amount: 1000
  }
];

// Components
const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children
}) => (
  <div className={`bg-white shadow-md rounded-lg ${className}`}>{children}</div>
);

const PaymentHistory: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>(MOCK_PAYMENTS);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<Payment["status"] | "Tous">(
    "Tous"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredPayments = useMemo(() => {
    return payments.filter(
      (payment) =>
        (payment.numero.toLowerCase().includes(search.toLowerCase()) ||
          payment.service.toLowerCase().includes(search.toLowerCase())) &&
        (statusFilter === "Tous" || payment.status === statusFilter)
    );
  }, [payments, search, statusFilter]);

  const paginatedPayments = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredPayments.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredPayments, currentPage]);

  const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const getStatusColor = (status: Payment["status"]) => {
    switch (status) {
      case "En attente":
        return "bg-yellow-100 text-yellow-800";
      case "Payé":
        return "bg-green-100 text-green-800";
      case "Annulé":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="p-6 h-full w-full overflow-hidden">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2">
        Historique de paiements
      </h2>

      <div className="mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Rechercher par numéro ou service..."
          className="p-2 border rounded-md w-full sm:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-2 border rounded-md"
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value as Payment["status"] | "Tous")
          }>
          <option value="Tous">Tous les statuts</option>
          <option value="En attente">En attente</option>
          <option value="Payé">Payé</option>
          <option value="Annulé">Annulé</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {[
                "Numéro",
                "Service",
                "Date",
                "Statut",
                "Montant",
                "Actions"
              ].map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <div className="font-semibold text-blue-gray-700">{head}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedPayments.map((payment, index) => {
              const isLast = index === paginatedPayments.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={payment.id}>
                  <td className={classes}>
                    <div className="font-normal text-blue-gray-800">
                      {payment.numero}
                    </div>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <div className="font-normal text-blue-gray-800">
                      {payment.service}
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="font-normal text-blue-gray-800">
                      {formatDate(payment.date)}
                    </div>
                  </td>
                  <td className={classes}>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        payment.status
                      )}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className={classes}>
                    <div className="font-normal text-blue-gray-800">
                      {payment.amount.toLocaleString("fr-FR", {
                        style: "currency",
                        currency: "XOF"
                      })}
                    </div>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <button className="text-blue-600 hover:text-blue-800 transition-colors">
                      Détails
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {filteredPayments.length > itemsPerPage && (
        <div className="mt-4 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <button
              onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Précédent
            </button>
            <span className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700">
              Page {currentPage} sur {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((page) => Math.min(page + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Suivant
            </button>
          </nav>
        </div>
      )}
    </Card>
  );
};

export default PaymentHistory;
