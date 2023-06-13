import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
function App() {
  const [value, setValue] = useState("");

  async function open() {
    // await invoke("open", { name });
    setValue("");
  }

  return (
    <div className="flex flex-col items-center p-10 space-y-20">
      <div className="max-w-screen-md flex flex-col items-center p-10 space-y-20">
        <p className="text-4xl font-bold">Paddle Rent</p>
        <div className="h-20 flex gap-3  justify-between items-center w-full">
          <p className="text-xl font-extrabold bg-zinc-200 rounded-lg flex items-center justify-center w-full h-full">{value}</p>
          <button onClick={() => setValue(value.slice(0, -1))} className=" rounded-lg bg-red-400 p-4 h-full">
            Delete
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {numbers.map((i) => (
            <button onClick={() => setValue(`${value}${i}`)} className="h-20 w-20 rounded-lg flex items-center justify-center bg-slate-500">
              {i}
            </button>
          ))}
          <button onClick={open} className="col-span-2 bg-blue-500 rounded-lg">
            Open
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
