import React, { useState } from "react";

const ImageSelector = ({ setUrlImagen, urlImagen }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("file", file);
      setUrlImagen(file);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="max-w-10">
        <input
          type="file"
          className="bg-primary text-sm"
          onChange={handleImageChange}
        />
      </div>
      <div className="p-1 flex w-full justify-center items-center">
        {urlImagen && (
          <img
            className="w-20"
            src={URL.createObjectURL(urlImagen)}
            alt="Selected"
          />
        )}
      </div>
      ;
    </div>
  );
};

export default ImageSelector;
