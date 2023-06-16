import Task from "./Task";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
    return (
        <>
            {tasks.map((task) => (
                <tr key={task.id}>
                    <Task
                        task={task}
                        onChange={onChangeTask}
                        onDelete={onDeleteTask}
                        x
                    />
                </tr>
            ))}
        </>
    );
};

export default TaskList;
