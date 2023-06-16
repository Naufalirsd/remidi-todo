import { useState } from "react";

const AddTask = ({ onAddTask }) => {
    const [text, setText] = useState("");

    return (
        <div className="flex gap-4 justify-center">
            <input
                value={text}
                placeholder="Tambahkan Kegiatan Anda"
                onChange={(e) => setText(e.target.value)}
                className="p-2 w-80"
                style={{
                    width: "80%",
                    marginRight: "8px",
                }}></input>
            <button
                className="py-2 px-4 text-white rounded-md"
                onClick={() => {
                    setText("");
                    onAddTask(text);
                }}
                style={{
                    backgroundColor: "dodgerblue",
                    border: "none",
                }}>
                Tambah Kegiatan
            </button>
        </div>
    );
};

export default AddTask;
