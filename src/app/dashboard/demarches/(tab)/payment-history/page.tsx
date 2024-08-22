import Card from '@/components/Card'
import { stat } from 'fs';
import React from 'react'
 
const TABLE_HEAD = ["Numero", "Service", "Date", "Statut", "Amount"];
 
const TABLE_ROWS = [
  {
    Numero: "John Michael",
    Service: "Manager",
    date: "23/04/18",
    status: "En attente",
    amount : 10000,
  },
  {
    Numero: "Alexa Liras",
    Service: "Developer",
    date: "23/04/18",
    status: "En attente",
    amount : 3000,
  },
  {
    Numero: "Laurent Perrier",
    Service: "Executive",
    date: "19/09/17",
    status: "Payé",
    amount : 5000,
  },
  {
    Numero: "Michael Levi",
    Service: "Developer",
    date: "24/12/08",
    status: "En attente",
    amount : 2000,
  },
  {
    Numero: "Richard Gran",
    Service: "Manager",
    date: "04/10/21",
    status: "Payé",
    amount : 1000,
  },
];
 
const PaymentHistory = () => {
  return (
    <Card style="h-full w-full overflow-scroll">
            <h2 className='text-start font-bold text-xl mb-1 border-b-2 pb-4'>Historique de paiements</h2>

      <table className="w-full min-w-max table-auto text-left ">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 py-4">
                <div
                 
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ Numero, Service, date, status, amount }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "py-4" : "py-2 border-b border-blue-gray-50";
 
            return (
              <tr key={Numero}>
                <td className={classes}>
                  <div color="blue-gray" className="font-normal">
                    {Numero}
                  </div>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <div color="blue-gray" className="font-normal">
                    {Service}
                  </div>
                </td>
                <td className={classes}>
                  <div color="blue-gray" className="font-normal">
                    {date}
                  </div>
                </td>
                <td className={classes}>
                  <div color="blue-gray" className="font-normal">
                    {status}
                  </div>
                </td>
                <td className={classes}>
                  <div color="blue-gray" className="font-normal">
                    {amount.toFixed(2)} F FCA
                  </div>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <div  color="blue-gray" className="font-medium">
                    Edit
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}


export default PaymentHistory