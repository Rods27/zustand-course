import classNames from 'classnames';
import { IoReorderTwoOutline } from 'react-icons/io5';
import { ITask } from 'src/interfaces/tasks';
import { useTaskStore } from 'src/stores';

export const TaskItem = ({ task }: { task: ITask }) => {
  const setDraggingTaskId = useTaskStore((state) => state.setDraggingTaskId);
  const isDragging = useTaskStore((state) => state.draggingTaskId);

  return (
    <div
      draggable
      onDragStart={() => setDraggingTaskId(task.id)}
      onDragEnd={() => setDraggingTaskId(undefined)}
      className={classNames(
        'mt-5 flex items-center justify-between p-2 hover:bg-slate-100 transition ease-in-out delay-[0.05s]',
        {
          'cursor-grab': !isDragging,
          'cursor-grabbing': isDragging,
        },
      )}
    >
      <div className="flex items-center justify-center gap-2">
        <p className="text-base font-bold text-navy-700">{task.title}</p>
      </div>

      <span className="h-6 w-6 text-navy-700 cursor-pointer">
        <IoReorderTwoOutline />
      </span>
    </div>
  );
};
