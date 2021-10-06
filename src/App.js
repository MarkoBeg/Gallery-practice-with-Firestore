import React, { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Title from "./comps/Title";
import Upload from "./comps/Upload";
import Modal from "./comps/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <Upload></Upload>
      <ImageGrid setSelectedImg={setSelectedImg}></ImageGrid>
      {selectedImg && (
        <Modal
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
        ></Modal>
      )}
    </div>
  );
}

export default App;
