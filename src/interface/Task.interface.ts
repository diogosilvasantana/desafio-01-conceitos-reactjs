export interface Task {
  id: string;
  name: string;
  completed: boolean;
}

export interface TaskProps {
  content: Task;
  onDeleteTask: (task: Task) => void;
  onCountTaskCompleted: (task: Task) => void;
}