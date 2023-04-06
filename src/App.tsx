import React from "react";
import * as flatbuffers from "flatbuffers";
import "./App.css";

const handleFileRead = (data: ArrayBuffer) => {
  const uData = new Uint8Array(data);
  const buf = new flatbuffers.ByteBuffer(uData);

  console.log(["handleFileRead", data, buf]);
};

export const App: React.FC = () => {
  const handleClick = React.useCallback(() => {
    const input = document.querySelector("#file") as HTMLInputElement;

    if (input && input.files?.length) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        if (e.target && e.target.result instanceof ArrayBuffer) {
          handleFileRead(e.target.result);
        }
      };

      reader.onerror = function (e) {
        console.log("Error : " + e.type);
      };

      reader.readAsArrayBuffer(file);
    }
  }, []);

  return (
    <div className="App">
      <div>
        <input type="file" id="file" />
        <button id="read-file" onClick={handleClick}>
          Read File
        </button>
      </div>
    </div>
  );
};

export default App;
