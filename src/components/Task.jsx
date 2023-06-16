import { useState } from "react";

const Task = ({ task, onChange, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);

    let taskContent;

    if (isEditing) {
        taskContent = (
            <div className="flex">
                <td>
                    <input
                        value={task.text}
                        onChange={(e) => {
                            onChange({ ...task, text: e.target.value });
                        }}
                    />
                </td>
                <td>
                    <button
                        className="text-base rounded-md py-1 px-2 text-white bg-blue-500 flex"
                        onClick={() => setIsEditing(false)}
                        style={{
                            backgroundColor: "dodgerblue",
                            border: "none",
                            borderRadius: "5px",
                        }}>
                        Save
                    </button>
                </td>
            </div>
        );
    } else {
        taskContent = (
            <div
                className="flex gap-5"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingRight: "4px",
                }}>
                <td>{task.text}</td>
                <td>
                    <button
                        className="text-base rounded-md text-black bg-blue-500 py-1 px-2"
                        onClick={() => {
                            setIsEditing(true);
                        }}
                        style={{
                            backgroundColor: "orange",
                            border: "none",
                            borderRadius: "5px",
                        }}>
                        Edit
                    </button>
                </td>
            </div>
        );
    }

    return (
        <>
            <td className="border border-slate-700">
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={(e) => {
                        onChange({ ...task, done: e.target.checked });
                    }}
                />
            </td>
            <td className="border border-slate-500">{taskContent}</td>
            <td className="border border-slate-500">
                <button
                    className="rounded-md text-white bg-red-700 text-sm py-1 px-3 lg:text-xl"
                    onClick={() => onDelete(task.id)}
                    style={{
                        backgroundColor: "red",
                        border: "none",
                        borderRadius: "5px",
                    }}>
                    Hapus
                </button>
            </td>
        </>
    );
};

export default Task;
