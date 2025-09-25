"use client";
import { createContext, useState, useEffect } from "react";

export type SidebarContextValues = {
  isOpen: boolean;
  handleToggle: () => void;
};

export const DEFAULT_SIDEBAR_OPEN = true;
export const DEFAULT_SIDEBAR_COLLAPSED = false;
const SIDEBAR_STORAGE_KEY = "sidebar-state";

// Helper function to get initial value from localStorage
const getInitialSidebarState = (): boolean => {
  if (typeof window === "undefined") {
    return DEFAULT_SIDEBAR_OPEN;
  }

  try {
    const stored = localStorage.getItem(SIDEBAR_STORAGE_KEY);
    return stored !== null ? JSON.parse(stored) : DEFAULT_SIDEBAR_OPEN;
  } catch (error) {
    console.warn("Failed to parse sidebar state from localStorage:", error);
    return DEFAULT_SIDEBAR_OPEN;
  }
};

export const sidebarDefaultValues = (): SidebarContextValues => ({
  isOpen: DEFAULT_SIDEBAR_OPEN,
  handleToggle: () => {},
});

export const SidebarContext = createContext(sidebarDefaultValues());

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(getInitialSidebarState);

  const handleToggle = () => {
    setIsOpen((prev) => {
      const newState = !prev;

      // Store the new state in localStorage
      try {
        localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(newState));
      } catch (error) {
        console.warn("Failed to save sidebar state to localStorage:", error);
      }

      return newState;
    });
  };

  // Optional: Sync with localStorage changes from other tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === SIDEBAR_STORAGE_KEY && e.newValue !== null) {
        try {
          const newState = JSON.parse(e.newValue);
          setIsOpen(newState);
        } catch (error) {
          console.warn(
            "Failed to sync sidebar state from storage event:",
            error
          );
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        handleToggle,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
