"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface ExtensionData {
  id: string;
  name: string;
  enabled: boolean;
  iconUrl?: string;
}

interface ExtensionContextProps {
  extensions: ExtensionData[];
  toggleExtension: (id: string) => void;
  refreshExtensions: () => void;
}

const ExtensionContext = createContext<ExtensionContextProps | undefined>(undefined);

export const ExtensionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [extensions, setExtensions] = useState<ExtensionData[]>([]);

  const fetchExtensions = () => {
    if (chrome && chrome.management && typeof chrome.management.getAll === 'function') {
      chrome.management.getAll((exts) => {
        const data: ExtensionData[] = exts.map((ext) => ({
          id: ext.id,
          name: ext.name,
          enabled: ext.enabled,
          iconUrl: ext.icons && ext.icons.length ? ext.icons[ext.icons.length - 1].url : undefined,
        }));
        console.log("Fetched Extensions:", data);
        setExtensions(data);
      });
    } else {
      console.error('chrome.management API not available');
    }
  };

  const toggleExtension = (id: string) => {
    const extension = extensions.find((ext) => ext.id === id);
    if (extension && chrome && chrome.management && typeof chrome.management.setEnabled === 'function') {
      chrome.management.setEnabled(id, !extension.enabled, () => {
        // Refresh extension data after toggling.
        fetchExtensions();
      });
    } else {
      console.error('chrome.management API not available or extension not found');
    }
  };

  const refreshExtensions = () => {
    fetchExtensions();
  };

  useEffect(() => {
    fetchExtensions();
  }, []);

  return (
    <ExtensionContext.Provider value={{ extensions, toggleExtension, refreshExtensions }}>
      {children}
    </ExtensionContext.Provider>
  );
};

export const useExtension = (): ExtensionContextProps => {
  const context = useContext(ExtensionContext);
  if (!context) {
    throw new Error('useExtension must be used within an ExtensionProvider');
  }
  return context;
};
