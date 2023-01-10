import React from "react";

type tProps = {
  img0: string;
  img1: string;
  img2: string;
};

const Image3: React.FC<tProps> = (props) => {
  const { img0, img1, img2 } = props;

  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-start-3 col-span-4">
        <img className="w-2/3 h-auto" src="https://www.maison-travaux.fr/wp-content/uploads/sites/8/2017/04/comment-amenager-l-interieur-de-sa-maison-en-bois.jpg" alt="room" />
      </div>
      <div className="col-start-1 col-end-4">
        <img className="w-1/2 h-52" src="https://acheterpourtamaison.com/wp-content/uploads/2020/06/decoration-interieure.jpg" alt="room" />
      </div>
      <div className="col-start-3 col-end-6">
        <img className="w-3/4" src="https://www.renovation-et-decoration.com/wp-content/uploads/2020/04/decoration-maison.jpg" alt="room" />
      </div>
    </div>
  );
};

export default Image3;