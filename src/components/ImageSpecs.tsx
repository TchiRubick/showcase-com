import React from "react";
import Image from "next/image";
import room from "../image/room.jpg";

const ImageSpecs: React.FC = () => {

  return (
    <Image className="sm:h-full"
      src={room}
      alt="room"
    />
  );
};

export default ImageSpecs;