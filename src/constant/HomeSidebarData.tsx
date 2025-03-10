import { IoBookmarks } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { MdExtension } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import DocumentationIcon from "@/components/svgs/DocumentationIcon";

import ExistIcon from "@/components/svgs/ExistIcon";
import SettingIcon from "@/components/svgs/SettingIcon";

export const sidebarData = [
  {
    icon: <IoBookmarks size={20} />,
    tooltip: "Bookmarks",
    link: "home",
  },
  {
    icon: <FaHistory size={20} />,
    tooltip: "History",
    link: "history",
  },
  {
    icon: <MdExtension size={20} />,
    tooltip: "Extensions",
    link: "extensions",
  },
  {
    icon: <IoMdDownload size={24} />,
    tooltip: "Downloads",
    link: "downloads",
  },
];
export const sidebarDataBottom = [
  {
    icon: <DocumentationIcon />,
    tooltip: "Documentation",
    link: "documentation",
  },
  {
    icon: <ExistIcon />,
    tooltip: "Logout",
    link: "logout",
  },
  {
    icon: <SettingIcon />,
    tooltip: "Settings",
    link: "settings",
  },
];
