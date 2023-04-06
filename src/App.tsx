import React from "react";

import "./App.css";

const handleFileRead = (data: unknown) => {
  console.log(["data", data]);
};

export const App: React.FC = () => {
  const handleClick = React.useCallback(() => {
    const input = document.querySelector("#file") as HTMLInputElement;

    if (input && input.files?.length) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        if (e.target) {
          handleFileRead(e.target.result);
        }
      };

      reader.onerror = function (e) {
        console.log("Error : " + e.type);
      };

      reader.readAsBinaryString(file);
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
