"use client";
import { useEffect, useState } from "react";

export interface ExtensionDataItem {
  id: string;
  icon: string;
  title: string;
  path: string;
  des: string;
  tags: { id: string; name: string }[];
}

export const useManagementData = (): {
  extensionData: ExtensionDataItem[];
  loading: boolean;
  error: string | null;
} => {
  const [extensionData, setExtensionData] = useState<ExtensionDataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (chrome && chrome.management) {
      chrome.management.getAll((items) => {
        if (chrome.runtime.lastError) {
          setError(chrome.runtime.lastError.message || "An unknown error occurred.");
          setLoading(false);
          return;
        }

        const data = items.map((item) => {
          // Use a default icon if none are provided. Otherwise, choose the largest available icon.
          let iconUrl = "default_extension_icon.png";
          if (item.icons && item.icons.length > 0) {
            const sortedIcons = item.icons.sort((a, b) => b.size - a.size);
            iconUrl = sortedIcons[0].url;
          }

          const transformedItem: ExtensionDataItem = {
            id: item.id,
            icon: iconUrl,
            title: item.name,
            // Prefer homepageUrl or optionsUrl as a link for your extension.
            path: item.homepageUrl || item.optionsUrl || "",
            des: item.description || "",
            tags: [] // Add your own logic to generate tags if needed.
          };

          // Log each transformed extension item individually.
          console.log("Transformed Extension Data Item:", transformedItem);
          return transformedItem;
        });

        // Log the complete array of transformed extension data.
        console.log("Complete Extension Data Array:", data);

        setExtensionData(data);
        setLoading(false);
      });
    } else {
      setError("Chrome management API is not available.");
      setLoading(false);
    }
  }, []);

  return { extensionData, loading, error };
};
