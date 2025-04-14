export type TTaskStatus = 'open' | 'in-progress' | 'done';

export interface ITask {
  id: string;
  title: string;
  status: TTaskStatus;
}
