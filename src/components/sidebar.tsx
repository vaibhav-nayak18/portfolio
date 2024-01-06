import { AnimatePresence, motion } from "framer-motion";
import { GiCrossedSabres } from "react-icons/gi";
import { ToggleButton } from ".";
type Props = {
  isOpen: boolean;
  toggleBtn: () => void;
};
export default function Sidebar({ isOpen, toggleBtn }: Props) {
  return (
    <AnimatePresence>
      <motion.section
        className={`fixed flex md:hidden bg-gray-600 z-20 right-4 left-4 bottom-0 top-0`}
        initial={{ x: isOpen ? "120%" : "0" }} // Initial position (before animation)
        animate={{ x: !isOpen ? "120%" : "0" }} // Target position (after animation)
        transition={{ duration: 0.6 }} // Animation duration in seconds
      >
        <div className="">
          <ToggleButton toggleSidebar={toggleBtn}>
            <GiCrossedSabres className={"text-2xl  "} />
          </ToggleButton>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
