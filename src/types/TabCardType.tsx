export type Card = {
  id: number;
  icon?: string;
  icon2?: React.ReactNode;
  title: string;
  path: string;
  tags: {
    id: string;
    name: string;
  }[];
  des: string;
};
