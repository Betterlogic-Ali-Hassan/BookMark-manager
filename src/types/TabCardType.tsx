export type Card = {
  id: number;
  icon?: string;
  title: string;
  path: string;
  tags: {
    id: string;
    name: string;
  }[];
  des: string;
};
