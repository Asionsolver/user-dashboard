import { motion } from "framer-motion";

const EmptyState = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-16 bg-muted/30 rounded-xl shadow-sm"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Illustration */}
      <motion.div
        className="mb-6 text-6xl"
        animate={{ rotate: [0, -10, 10, -10, 0] }} // wobble effect
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        🔍
      </motion.div>

      {/* Message */}
      <motion.p
        className="text-lg font-medium text-gray-700 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        No users found matching{" "}
        <span className="text-primary">&quot;{searchTerm}&quot;</span>
      </motion.p>

      {/* CTA Button */}
      <motion.button
        onClick={() => setSearchTerm("")}
        className="mt-6 px-5 py-2 rounded-lg bg-primary text-white shadow hover:bg-primary/90 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Clear Search
      </motion.button>
    </motion.div>
  );
};

export default EmptyState;
