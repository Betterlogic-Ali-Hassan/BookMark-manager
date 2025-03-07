import { Card } from "@/types/TabCardType";

export const tabsData: Card[] = Array.from({ length: 150 }, (_, index) => {
  const baseItems: Omit<Card, "id" | "tags">[] = [
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
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.google.com/&size=32",
      title: "Google",
      path: "https://www.google.com/",
      des: "Search the world's information, including webpages, images, videos and more.",
    },
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.facebook.com/&size=32",
      title: "Facebook",
      path: "https://www.facebook.com/",
      des: "Connect with friends and the world around you on Facebook.",
    },
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.youtube.com/&size=32",
      title: "YouTube",
      path: "https://www.youtube.com/",
      des: "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
    },
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.twitter.com/&size=32",
      title: "Twitter",
      path: "https://www.twitter.com/",
      des: "Join the conversation! Twitter is the place to find out what's happening in the world right now.",
    },
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.instagram.com/&size=32",
      title: "Instagram",
      path: "https://www.instagram.com/",
      des: "Create & share photos, stories, & reels with your friends and the world.",
    },
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.linkedin.com/&size=32",
      title: "LinkedIn",
      path: "https://www.linkedin.com/",
      des: "Connect with professionals, grow your network, and advance your career with LinkedIn.",
    },
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.wikipedia.org/&size=32",
      title: "Wikipedia",
      path: "https://www.wikipedia.org/",
      des: "The free encyclopedia that anyone can edit.",
    },
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.amazon.com/&size=32",
      title: "Amazon",
      path: "https://www.amazon.com/",
      des: "Shop online for electronics, clothing, books, and more at Amazon.",
    },
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.netflix.com/&size=32",
      title: "Netflix",
      path: "https://www.netflix.com/",
      des: "Watch TV shows and movies anytime, anywhere. Start your free trial today!",
    },
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.reddit.com/&size=32",
      title: "Reddit",
      path: "https://www.reddit.com/",
      des: "Dive into anything. Find communities and discussions on any topic you love.",
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
