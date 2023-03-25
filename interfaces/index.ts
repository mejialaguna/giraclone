export interface Props {
  title?: String;
  children: JSX.Element | JSX.Element[];
}

export interface Entry {
  _id: string;
  description: string;
  createdAt: number;
  status: EntriesStatus;
}

export type EntriesStatus = "pending" | "in-progress" | "finished";
