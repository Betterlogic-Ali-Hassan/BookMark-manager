export type Card = {
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
