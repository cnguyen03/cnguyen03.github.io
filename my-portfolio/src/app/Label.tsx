type LabelProps = {
    name: string;
  };
  
export default function Label({ name }: LabelProps) {
  return <div className="font-playfair font-bold text-4xl">{name}</div>;
};
  