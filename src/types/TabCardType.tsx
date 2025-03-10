export type Card = {
  enabled: any;
  iconUrl: string;
  id: number;
  icon: string;
  title: string;
  path: string;
  tags: {
    id: number;
    name: string;
  }[];
  des: string;
};
