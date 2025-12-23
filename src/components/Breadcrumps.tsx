import { FiHome, FiChevronRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

type Props = {
  className?: string;
};

export default function Breadcrumbs({ className }: Props) {
  const location = useLocation();
  // 1. Pfad aufteilen und leere Strings (durch Slashes) entfernen
  // "/geo-berater/check/" -> ["geo-berater", "check"]
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <div className={` ${className}`}>
      <ul className="mx-8 lg:mx-0 flex pl-4 lg:gap-4 text-custom-black items-center">
        {/* Home Icon ist immer der Start */}
        <Link to="/" className="flex gap-2 items-center p-2 flex items-center">
          <FiHome className="hover:text-custom-red "/> <span className="hover:text-custom-red ">HOME</span>
        </Link>
        {pathnames.map((value, index) => {
          // 2. Den Link für dieses Segment zusammenbauen
          // Index 0: /geo-berater
          // Index 1: /geo-berater/kostenloser-geo-check
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          // 3. Namen verschönern (Dashes entfernen & Großschreibung)
          const displayName = value.replace(/-/g, " ").toUpperCase();
          return (
            <div key={to} className="flex items-center gap-4">
              <FiChevronRight />
              {last ? (
                // Die letzte Seite ist aktiv und nicht klickbar
                <span className="text-custom-red p-2 rounded-md">
                  {displayName}
                </span>
              ) : (
                <Link to={to} className="hover:bg-slate-200 p-2 rounded-md">
                  {displayName}
                </Link>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
