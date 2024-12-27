import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/Card";
import ServicePhoneItem from "@/components/ServicePhoneItem";
import React from "react";

const services = [
  {
    name: "Compagnie Energie Electrique du Sénégal",
    address: "426,. : 42 Dakar Sénégal",
    email: "infodg@ceet.tg",
    website: "https://www.sn.gouv.sn",
    phone: "7736393739"
  },
  {
    name: "Ministère de l’Intérieur",
    address: "Avenue Léopold Sédar Senghor, Dakar",
    email: "contact@interieur.sn",
    website: "https://www.interieur.gouv.sn",
    phone: "338890123"
  },
  {
    name: "Agence Nationale de la Statistique et de la Démographie",
    address: "Rue Aimé Césaire, Point E, Dakar",
    email: "info@ansd.sn",
    website: "https://www.ansd.sn",
    phone: "338212700"
  },
  {
    name: "Ministère de la Santé et de l’Action Sociale",
    address: "Fann Résidence, Dakar",
    email: "contact@sante.sn",
    website: "https://www.sante.gouv.sn",
    phone: "338394000"
  },
  {
    name: "Ministère de l’Enseignement Supérieur, de la Recherche et de l’Innovation",
    address: "Corniche Ouest, Dakar",
    email: "contact@mesr.gouv.sn",
    website: "https://www.mesr.gouv.sn",
    phone: "338697858"
  },
  {
    name: "Ministère des Finances et du Budget",
    address: "Avenue du Sénégal, Dakar",
    email: "info@finances.sn",
    website: "https://www.finances.gouv.sn",
    phone: "338390000"
  },
  {
    name: "Poste de Santé Liberté 6",
    address: "Liberté 6, Dakar",
    email: "liberte6@sante.sn",
    website: "https://www.sante.gouv.sn",
    phone: "338876543"
  },
  {
    name: "Ministère de l’Agriculture et de l’Équipement Rural",
    address: "Route de Rufisque, Dakar",
    email: "contact@agriculture.sn",
    website: "https://www.agriculture.sn",
    phone: "338769000"
  },
  {
    name: "Agence Nationale des Affaires Maritimes",
    address: "Port Autonome, Dakar",
    email: "info@affairesmaritimes.sn",
    website: "https://www.affairesmaritimes.sn",
    phone: "338214321"
  },
  {
    name: "Ministère de la Pêche et de l’Économie Maritime",
    address: "Rue Carnot, Dakar",
    email: "contact@peche.sn",
    website: "https://www.peche.gouv.sn",
    phone: "338760123"
  },
  {
    name: "Ministère de l’Environnement et du Développement Durable",
    address: "Rue Félix Eboué, Dakar",
    email: "info@environnement.sn",
    website: "https://www.environnement.sn",
    phone: "338765432"
  },
  {
    name: "SENELEC",
    address: "Avenue Malick Sy, Dakar",
    email: "support@senelec.sn",
    website: "https://www.senelec.sn",
    phone: "338590000"
  },
  {
    name: "Office National de l’Assainissement du Sénégal",
    address: "Point E, Dakar",
    email: "contact@onas.sn",
    website: "https://www.onas.sn",
    phone: "338910123"
  },
  {
    name: "Société Nationale des Eaux du Sénégal",
    address: "Hann Bel-Air, Dakar",
    email: "info@sones.sn",
    website: "https://www.sones.sn",
    phone: "338715000"
  },
  {
    name: "Ministère des Infrastructures, des Transports Terrestres et du Désenclavement",
    address: "Rue de Thiong, Dakar",
    email: "contact@infrastructures.sn",
    website: "https://www.infrastructures.gouv.sn",
    phone: "338211432"
  },
  {
    name: "Centre des Œuvres Universitaires de Dakar (COUD)",
    address: "Université Cheikh Anta Diop, Dakar",
    email: "info@coud.sn",
    website: "https://www.coud.sn",
    phone: "338245678"
  },
  {
    name: "Ministère des Mines et de la Géologie",
    address: "Hann Maristes, Dakar",
    email: "contact@mines.sn",
    website: "https://www.mines.sn",
    phone: "338907654"
  },
  {
    name: "Ministère de l’Éducation Nationale",
    address: "Corniche Est, Dakar",
    email: "contact@education.sn",
    website: "https://www.education.gouv.sn",
    phone: "338123456"
  },
  {
    name: "Ministère de la Culture et de la Communication",
    address: "Avenue Blaise Diagne, Dakar",
    email: "contact@culture.sn",
    website: "https://www.culture.gouv.sn",
    phone: "338654321"
  },
  {
    name: "Direction Générale des Douanes",
    address: "Place de l’Indépendance, Dakar",
    email: "douanes@douanes.sn",
    website: "https://www.douanes.sn",
    phone: "338340123"
  },
  {
    name: "Ministère de l’Urbanisme, du Logement et de l’Hygiène Publique",
    address: "Rue Jules Ferry, Dakar",
    email: "contact@urbanisme.sn",
    website: "https://www.urbanisme.gouv.sn",
    phone: "338234567"
  },
  {
    name: "Ministère de la Jeunesse",
    address: "Rue G, Dakar",
    email: "info@jeunesse.sn",
    website: "https://www.jeunesse.sn",
    phone: "338987654"
  },
  {
    name: "Ministère du Tourisme et des Transports Aériens",
    address: "Route de l’Aéroport, Dakar",
    email: "contact@tourisme.sn",
    website: "https://www.tourisme.sn",
    phone: "338750123"
  },
  {
    name: "Direction des Passeports",
    address: "Front de Terre, Dakar",
    email: "passeports@interieur.sn",
    website: "https://www.interieur.sn",
    phone: "338601234"
  },
  {
    name: "Agence Nationale pour la Promotion de l’Emploi des Jeunes (ANPEJ)",
    address: "Liberté 6 Extension, Dakar",
    email: "contact@anpej.sn",
    website: "https://www.anpej.sn",
    phone: "338901234"
  },
  {
    name: "Ministère du Commerce et des PME",
    address: "Rue Mohamed V, Dakar",
    email: "contact@commerce.sn",
    website: "https://www.commerce.sn",
    phone: "338760432"
  },
  {
    name: "Ministère du Travail, du Dialogue Social et des Relations avec les Institutions",
    address: "Rue Abdou Karim Bourgi, Dakar",
    email: "contact@travail.sn",
    website: "https://www.travail.sn",
    phone: "338234210"
  },
  {
    name: "Ministère des Sports",
    address: "Point E, Dakar",
    email: "contact@sports.sn",
    website: "https://www.sports.gouv.sn",
    phone: "338213456"
  },
  {
    name: "Ministère des Forces Armées",
    address: "Camp Dial Diop, Dakar",
    email: "info@armees.sn",
    website: "https://www.armees.sn",
    phone: "338213987"
  },
  {
    name: "Ministère des Affaires Étrangères et des Sénégalais de l’Extérieur",
    address: "Rue Nelson Mandela, Dakar",
    email: "contact@diplomatie.sn",
    website: "https://www.diplomatie.sn",
    phone: "338212345"
  }
];

const ServicesAdministratifs = () => {
  return (
    <div className="app-container">
      {/* Breadcrumb */}
      <Breadcrumb
        title={"Annuaire des services administratifs"}
        links={[
          { title: "Annuaire des services administratifs", href: "/phone-book" }
        ]}
      />

      <Card style="flex flex-col gap-5 md:flex-row max-w-screen-lg">
        <div className="md:w-1/2 md:border-r-2 md:border-gray-300 flex flex-col gap-4">
          {services
            .slice(0, Math.ceil(services.length / 2))
            .map((service, index) => (
              <ServicePhoneItem
                key={index}
                name={service.name}
                address={service.address}
                email={service.email}
                website={service.website}
                phone={service.phone}
              />
            ))}
        </div>
        <div className="md:w-1/2">
          {services
            .slice(Math.ceil(services.length / 2))
            .map((service, index) => (
              <ServicePhoneItem
                key={index}
                name={service.name}
                address={service.address}
                email={service.email}
                website={service.website}
                phone={service.phone}
              />
            ))}
        </div>
      </Card>
    </div>
  );
};

export default ServicesAdministratifs;
