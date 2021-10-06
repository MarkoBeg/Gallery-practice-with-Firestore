import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/jpeg", "image/png"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select a valid type png or jpeg");
    }
  };

  return (
    <div className="upload">
      <form>
        <label>
          <input type="file" onChange={changeHandler} />
          <span>+</span>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div className="files">{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile}></ProgressBar>}
        </div>
      </form>
    </div>
  );
}
