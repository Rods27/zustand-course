import { ITask, TTaskStatus } from 'src/interfaces';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { v4 as uuidV4 } from 'uuid';
import { persist } from 'zustand/middleware';

interface ITaskState {
  tasks: ITask[];
  draggingTaskId?: string;
  setDraggingTaskId: (taskId?: string) => void;
  changeTaskStatus: (taskId: string, status: TTaskStatus) => void;
  addTask: (title: string, status: TTaskStatus) => void;
}

const taskStore = immer<ITaskState>((set, get) => ({
  tasks: [
    { id: '1', title: 'Task 1', status: 'open' },
    { id: '2', title: 'Task 2', status: 'in-progress' },
    { id: '3', title: 'Task 3', status: 'open' },
    { id: '4', title: 'Task 4', status: 'open' },
  ],
  draggingTaskId: undefined,
  setDraggingTaskId: (taskId) =>
    set((state) => {
      state.draggingTaskId = taskId;
    }),

  changeTaskStatus: (taskId, status) => {
    set((state) => {
      state.tasks = state.tasks.map((t) => ({
        ...t,
        status: t.id === taskId ? status : t.status,
      }));
    });
  },

  addTask: (title, status) => {
    const newTask = { id: uuidV4(), title, status };

    set((state) => {
      state.tasks = [...state.tasks, newTask];
    });
  },
}));

export const useTaskStore = create<ITaskState>()(persist(taskStore, { name: 'storage-tasks' }));
