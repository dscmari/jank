import { motion } from "framer-motion";
import Bridge from "./Bridge";
import Nub from "./Nub";
import NavPricing from "./NavPricing";
import NavReferences from "./NavReferences";
import NavVideos from "./NavVideos";

const NavContent = ({
  selected,
  dir,
}: {
  selected: number | null;
  dir: null | "l" | "r";
}) => {
    const TABS = [

  {
    title: "Preispakete",
    Component: NavPricing,
  },
    {
    title: "Products",
    Component: NavReferences,
  },
  {
    title: "Blog",
    Component: NavVideos,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-full rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4 z-1000"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

export default NavContent;
