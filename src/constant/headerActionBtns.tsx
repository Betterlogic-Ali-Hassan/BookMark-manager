import DocumentationIcon from "@/components/svgs/DocumentationIcon";
import ExistIcon from "@/components/svgs/ExistIcon";
import SettingIcon from "@/components/svgs/SettingIcon";

export const btns = [
  {
    label: "Settings",
    icon: <SettingIcon />,
    action: "settings",
  },
  {
    label: "Documentation",
    icon: <DocumentationIcon />,
    action: "documentation",
  },
  { label: "Exit", icon: <ExistIcon />, action: "exit" },
];
