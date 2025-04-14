import { DragEvent, useState } from 'react';
import { TTaskStatus } from 'src/interfaces/tasks';
import { useTaskStore } from 'src/stores';
import Swal from 'sweetalert2';

export const useTasks = (status: TTaskStatus) => {
  const [onDragOver, setOnDragOver] = useState(false);

  const tasksByStatus = useTaskStore((state) => state.tasks).filter((t) => t.status === status);
  const isDragging = useTaskStore((state) => !!state.draggingTaskId);
  const changeTaskStatus = useTaskStore((state) => state.changeTaskStatus);
  const draggingTaskId = useTaskStore((state) => state.draggingTaskId);
  const setDraggingTaskId = useTaskStore((state) => state.setDraggingTaskId);
  const addTask = useTaskStore((state) => state.addTask);

  const handleAddTask = async () => {
    const { value: title, isConfirmed } = await Swal.fire({
      title: 'New task',
      input: 'text',
      inputLabel: 'Task name',
      inputPlaceholder: 'Task Name',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) return 'The task must have a name.';
      },
    });
    if (!isConfirmed) return;
    addTask(title, status);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDragOver(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    if (!draggingTaskId) return;
    e.preventDefault();
    setOnDragOver(false);
    changeTaskStatus(draggingTaskId, status);
    setDraggingTaskId(undefined);
  };

  return {
    onDragOver,
    isDragging,
    tasksByStatus,
    handleAddTask,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  };
};
