"use Client";

import { useEffect, useState } from "react";

export interface DownloadDataItem {
  id: number;
  icon: string;
  title: string;
  path: string;
  des: string;
  tags: { id: string; name: string }[];
}

export const useDownloadData = (): {
  downloadData: DownloadDataItem[];
  loading: boolean;
  error: string | null;
} => {
  const [downloadData, setDownloadData] = useState<DownloadDataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (chrome && chrome.downloads) {
      const updateDownloads = () => {
        chrome.downloads.search({}, (items) => {
          if (chrome.runtime.lastError) {
            setError(
              chrome.runtime.lastError.message || "An unknown error occurred."
            );
            setLoading(false);
            return;
          }

          console.log("Raw download items:", items);

          const dataPromises = items.map((item) => {
            return new Promise<DownloadDataItem>((resolve) => {
              const filename = item.filename
                ? item.filename.split(/[/\\]/).pop() || "Unknown"
                : "Unknown";

              chrome.downloads.getFileIcon(item.id, { size: 32 }, (iconUrl) => {
                if (chrome.runtime.lastError) {
                  console.error(
                    "Error retrieving icon for item",
                    item.id,
                    chrome.runtime.lastError.message
                  );
                  resolve({
                    id: item.id,
                    icon: "default_icon.png",
                    title: filename,
                    path: item.filename || "",
                    des: item.referrer || "",
                    tags: []
                  });
                } else {
                  resolve({
                    id: item.id,
                    icon: iconUrl || "default_icon.png",
                    title: filename,
                    path: item.filename || "",
                    des: item.referrer || "",
                    tags: []
                  });
                }
              });
            });
          });

          Promise.all(dataPromises)
            .then((data) => {
              console.log("Transformed Download Data:", data);
              setDownloadData(data);
              setLoading(false);
            })
            .catch((err) => {
              setError(err.message || "Error processing download items.");
              setLoading(false);
            });
        });
      };

      updateDownloads();

      chrome.downloads.onCreated.addListener(updateDownloads);
      chrome.downloads.onChanged.addListener(updateDownloads);
      chrome.downloads.onErased.addListener(updateDownloads);

      return () => {
        chrome.downloads.onCreated.removeListener(updateDownloads);
        chrome.downloads.onChanged.removeListener(updateDownloads);
        chrome.downloads.onErased.removeListener(updateDownloads);
      };
    } else {
      setError("Chrome downloads API is not available.");
      setLoading(false);
    }
  }, []);

  return { downloadData, loading, error };
};
