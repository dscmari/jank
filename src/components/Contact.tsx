import Mail from "../icons/Mail";
import Phone from "../icons/Phone";

type Props = {
  className?: string;
};

export default function Contact({ className }: Props) {
  const classes = `p-8 py-12 flex flex-col items-center gap-4 bg-custom-red font-semibold text-lg text-custom-white ${className}`;
  return (
    <div className={classes}>
      <p>Schnelle Kontaktaufnahme zu Jan Krösche</p>
      <div className="flex items-center gap-4">
        <Phone className="size-8" />
        <span className="text-3xl">+49 176 55 10 93 83</span>
      </div>
      <div className="flex items-center gap-4">
        <Mail className="size-8" />
        <span className="text-3xl">jan@jankroesche.de</span>
      </div>
    </div>
  );
}
