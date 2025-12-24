import Mail from "../icons/Mail";
import Phone from "../icons/Phone";

type Props = {
  className?: string;
};

export default function Contact({ className }: Props) {
  const classes = `p-8 py-12 flex flex-col items-center gap-4 bg-custom-red font-semibold text-lg text-custom-white ${className}`;
  return (
    <div className={classes}>
      <p className="text-center">Schnelle Kontaktaufnahme zu Jan Krösche</p>
      <div className="flex items-center gap-4">
        <Phone className="size-6" />
        <span className="text-lg">+49 176 55109383</span>
      </div>
      <div className="flex items-center gap-4">
        <Mail className="size-6" />
        <span className="text-lg">jan@jankroesche.de</span>
      </div>
    </div>
  );
}
