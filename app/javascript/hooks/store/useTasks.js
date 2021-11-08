import { useSelector } from 'react-redux';
import { useTasksActions } from 'slices/TasksSlice';

const useTasks = () => {
  const board = useSelector((state) => state.TasksSlice.board);
  const { loadBoard, updateTaskState, loadColumnMore, loadTaskData, updateTask, createTask, destroyTask } =
    useTasksActions();

  return {
    board,
    loadBoard,
    loadColumnMore,
    updateTaskState,
    loadTaskData,
    updateTask,
    createTask,
    destroyTask,
  };
};

export default useTasks;
