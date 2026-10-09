"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const COVER_DURATION = 0.5;
const REVEAL_DELAY = 150;
const LAYER_STAGGER = 0.1;

interface TransitionContextValue {
  navigate: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextValue | null>(null);

export const usePageTransition = () => {
  const ctx = useContext(TransitionContext);
  if (!ctx) {
    throw new Error("usePageTransition must be used within TransitionProvider");
  }
  return ctx;
};

export const TransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [covering, setCovering] = useState(false);
  const [loaderVisible, setLoaderVisible] = useState(false);
  const pendingHref = useRef<string | null>(null);

  const navigate = useCallback(
    (href: string) => {
      const targetPath = href.split("#")[0] || "/";
      if (targetPath === pathname) {
        router.push(href);
        return;
      }
      pendingHref.current = href;
      setCovering(true);
    },
    [pathname, router],
  );

  // Once the cover animation has had time to finish, perform the actual navigation.
  const handleCoverComplete = () => {
    if (pendingHref.current) {
      setLoaderVisible(true);
      router.push(pendingHref.current);
    }
  };

  // When the route actually changes underneath the overlay, reveal it.
  useEffect(() => {
    if (!covering) return;
    if (!pendingHref.current) return;
    const targetPath = pendingHref.current.split("#")[0] || "/";
    if (targetPath !== pathname) return;

    const timeout = setTimeout(() => {
      setLoaderVisible(false);
    }, REVEAL_DELAY);
    return () => clearTimeout(timeout);
  }, [pathname, covering]);

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <AnimatePresence>
        {covering && (
          <div className="pointer-events-none fixed inset-0 z-100">
            {/* Accent layer: leads on the way in, trails on the way out */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{
                y: "0%",
                transition: {
                  duration: COVER_DURATION,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0,
                },
              }}
              exit={{
                y: "-100%",
                transition: {
                  duration: COVER_DURATION,
                  ease: [0.76, 0, 0.24, 1],
                  delay: LAYER_STAGGER,
                },
              }}
              className="absolute inset-0 bg-terminal-green"
            />
            {/* Solid layer: follows the accent in, leaves first */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{
                y: "0%",
                transition: {
                  duration: COVER_DURATION,
                  ease: [0.76, 0, 0.24, 1],
                  delay: LAYER_STAGGER,
                },
              }}
              exit={{
                y: "-100%",
                transition: {
                  duration: COVER_DURATION,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0,
                },
              }}
              onAnimationComplete={handleCoverComplete}
              className="absolute inset-0 bg-background"
            />
            <AnimatePresence
              onExitComplete={() => {
                setCovering(false);
                pendingHref.current = null;
              }}
            >
              {loaderVisible && (
                <motion.div
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="absolute inset-0 flex items-center justify-center font-eurostile text-4xl text-terminal-green"
                >
                  <motion.span
                    variants={{
                      hidden: { x: -28, opacity: 0 },
                      show: {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    [
                  </motion.span>
                  <motion.span
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: { duration: 0.2, delay: 0.2 },
                      },
                    }}
                  >
                    <motion.span
                      className="inline-block"
                      animate={{
                        opacity: [1, 0.55, 1],
                        transition: {
                          duration: 0.9,
                          ease: "easeInOut",
                          repeat: Infinity,
                          delay: 0.4,
                        },
                      }}
                    >
                      117
                    </motion.span>
                  </motion.span>
                  <motion.span
                    variants={{
                      hidden: { x: 28, opacity: 0 },
                      show: {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    ]
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
};
