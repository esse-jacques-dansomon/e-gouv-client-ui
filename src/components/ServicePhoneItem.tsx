interface ServicePhoneItemProps {
  name: string;
  address: string;
  email: string;
  website: string;
  phone: string;
}

const ServicePhoneItem: React.FC<ServicePhoneItemProps> = ({
  name,
  address,
  email,
  website,
  phone
}) => {
  return (
    <div className="flex flex-col items-start justify-between gap-4">
      <h2 className="text-xl font-bold text-start">{name}</h2>
      <p className="text-start">{address}</p>
      <div className="text-start">
        {email} <br />
        {website} <br />
        {phone} <br />
      </div>
    </div>
  );
};

export default ServicePhoneItem;
