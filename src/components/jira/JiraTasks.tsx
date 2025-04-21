import { IoAddOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { TTaskStatus } from 'src/interfaces';
import { TaskItem } from './TaskItem';

import classNamesLib from 'classnames';

import { useTasks } from 'src/hooks/useTasks';

interface Props {
  title: string;
  status: TTaskStatus;
}

export const JiraTasks = ({ title, status }: Props) => {
  const {
    handleAddTask,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    isDragging,
    onDragOver,
    tasksByStatus,
  } = useTasks(status);

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={classNamesLib(
        '!text-black relative flex flex-col rounded-[20px]  bg-white bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px]',
        {
          'border-blue-500 border-4 border-dotted': isDragging,
          'border-green-500 border-4 border-dotted bg-green-200': isDragging && onDragOver,
        },
      )}
    >
      {/* Task Header */}
      <div className="relative flex flex-row justify-between">
        <div className="flex items-center justify-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100">
            <span className="flex justify-center items-center h-6 w-6 text-brand-500">
              <IoCheckmarkCircleOutline style={{ fontSize: '50px' }} />
            </span>
          </div>

          <h4 className="ml-4 text-xl font-bold text-navy-700">{title}</h4>
        </div>

        <button onClick={handleAddTask}>
          <IoAddOutline />
        </button>
      </div>

      {/* Task Items */}
      <div className="h-full w-full">
        {tasksByStatus.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};
