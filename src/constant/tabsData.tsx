export type TabItem = {
  id: number;
  icon: string;
  title: string;
  path: string;
  des: string;
  tags: { id: number; name: string }[];
};

export const tabsData: TabItem[] = Array.from({ length: 70 }, (_, index) => {
  const baseItems: Omit<TabItem, "id" | "tags">[] = [
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://podscan.fm//&size=32",
      title: "Podscan.fm",
      path: "https://podscan.fm/",
      des: "Search podcasts and get notified about mentions",
    },
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://aistudio.google.com//&size=32",
      title: "Google AI Studio",
      path: "https://aistudio.google.com/",
      des: "Design and build AI-powered web and mobile applications",
    },
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://n8n.io//&size=32",
      title: "n8n",
      path: "https://n8n.io/",
      des: "A simple, open-source, and self-hosted workflow automation tool",
    },
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://blog.hubspot.com/marketing/internet-marketing/&size=32",
      title: "HubSpot Marketing Guide",
      path: "https://blog.hubspot.com/marketing",
      des: "HubSpot's marketing best practices and resources",
    },
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.midjourney.com//&size=32",
      title: "Midjourney",
      path: "https://www.midjourney.com/",
      des: "A generative AI tool for creating original content",
    },
  ];

  // Tags array with IDs
  const tags = [
    { id: 1, name: "AI" },
    { id: 2, name: "API" },
    { id: 3, name: "Audio" },
    { id: 4, name: "Automation" },
    { id: 5, name: "Book" },
    { id: 6, name: "Buy" },
    { id: 7, name: "Community" },
    { id: 8, name: "Design" },
    { id: 9, name: "Directory" },
    { id: 10, name: "Documentation" },
    { id: 11, name: "Engineering" },
    { id: 12, name: "Entertainment" },
    { id: 13, name: "Event" },
    { id: 14, name: "Forum" },
    { id: 15, name: "Game" },
    { id: 16, name: "Health" },
    { id: 17, name: "Inspiration" },
    { id: 18, name: "Investing" },
    { id: 19, name: "Learn" },
    { id: 20, name: "Marketing" },
    { id: 21, name: "Mental Models" },
    { id: 22, name: "Mindset" },
    { id: 23, name: "News" },
    { id: 24, name: "Podcast" },
    { id: 25, name: "Research" },
    { id: 26, name: "SEO" },
    { id: 27, name: "Science" },
    { id: 28, name: "Startups" },
    { id: 29, name: "Tools" },
    { id: 30, name: "Trending" },
    { id: 31, name: "Tutorial" },
    { id: 32, name: "Video" },
    { id: 33, name: "Web Development" },
    { id: 34, name: "Writing" },
  ];

  const item = baseItems[index % baseItems.length];

  return {
    id: index + 1,
    icon: item.icon,
    title: item.title,
    path: item.path,
    des: item.des,
    tags: [tags[index % tags.length], tags[(index + 1) % tags.length]],
  };
});
