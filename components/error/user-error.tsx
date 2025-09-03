import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const UserError = ({ error }: { error: string }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-16 px-6 
                 bg-card text-card-foreground rounded-xl shadow-lg border border-border"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Error Icon */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="mb-6"
      >
        <AlertTriangle className="h-14 w-14 text-destructive" />
      </motion.div>

      {/* Headline */}
      <h2 className="text-xl font-semibold text-destructive mb-2">
        Something went wrong
      </h2>

      {/* Message */}
      <p className="text-sm text-muted-foreground mb-6 max-w-md text-center">
        {error || "We couldn’t load the user data. Please try again."}
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-3">
        <motion.button
          onClick={() => window.location.reload()}
          className="px-5 py-2 rounded-lg bg-destructive text-destructive-foreground 
                     shadow hover:opacity-90 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Try Again
        </motion.button>

        <motion.button
          onClick={() => (window.location.href = "/")}
          className="px-5 py-2 rounded-lg bg-muted text-muted-foreground 
                     hover:bg-accent hover:text-accent-foreground border border-border transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go Home
        </motion.button>
      </div>

      {/* Optional Debug Info */}
      <details className="mt-6 text-xs text-muted-foreground">
        <summary className="cursor-pointer">Technical details</summary>
        <pre className="mt-2 whitespace-pre-wrap">{error}</pre>
      </details>
    </motion.div>
  );
};

export default UserError;
