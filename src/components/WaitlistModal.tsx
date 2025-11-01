import { motion, AnimatePresence } from 'framer-motion';
import { useState, FormEvent } from 'react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Store email in localStorage
      const waitlist = JSON.parse(localStorage.getItem('deadw3_waitlist') || '[]');

      if (waitlist.includes(email)) {
        setError('This email is already on the waitlist');
        setIsLoading(false);
        return;
      }

      waitlist.push(email);
      localStorage.setItem('deadw3_waitlist', JSON.stringify(waitlist));

      setIsLoading(false);
      setIsSubmitted(true);

      // Reset after 3 seconds
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
        onClose();
      }, 3000);
    }, 1000);
  };

  const handleClose = () => {
    setEmail('');
    setError('');
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            <div className="relative bg-deadw3-charcoal border-2 border-deadw3-purple p-8">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-deadw3-amber" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-deadw3-amber" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-deadw3-amber" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-deadw3-amber" />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-deadw3-amber transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {!isSubmitted ? (
                <>
                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="text-3xl font-mono font-bold text-deadw3-amber mb-2 glow-amber">
                      Join the Archive
                    </h2>
                    <p className="text-gray-400 text-sm font-light italic">
                      Be among the first to preserve what matters
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-mono text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError('');
                        }}
                        className="w-full px-4 py-3 bg-deadw3-dark border border-deadw3-gray text-gray-100 font-mono focus:border-deadw3-purple focus:outline-none transition-colors"
                        placeholder="your@email.com"
                        disabled={isLoading}
                      />
                      {error && (
                        <motion.p
                          className="mt-2 text-red-400 text-sm font-mono"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {error}
                        </motion.p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3 bg-deadw3-purple text-deadw3-amber font-mono font-semibold hover:bg-opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                    >
                      <span className="relative z-10">
                        {isLoading ? 'Joining...' : 'Join Waitlist'}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-deadw3-amber to-deadw3-purple opacity-0 group-hover:opacity-20 transition-opacity"
                        animate={isLoading ? { x: [-100, 100] } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </button>
                  </form>

                  {/* Privacy note */}
                  <p className="mt-4 text-xs text-gray-500 text-center font-mono">
                    We respect your privacy. No spam, ever.
                  </p>
                </>
              ) : (
                /* Success message */
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.div
                    className="text-6xl mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ type: 'spring', duration: 0.6 }}
                  >
                    ✓
                  </motion.div>
                  <h3 className="text-2xl font-mono font-bold text-deadw3-amber mb-2">
                    Welcome to the Archive
                  </h3>
                  <p className="text-gray-400 font-light">
                    You're on the list. We'll be in touch.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
