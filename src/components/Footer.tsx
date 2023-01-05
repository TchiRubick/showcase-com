import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <div className="flex flex-nowrap justify-between mb-10">
        <div>
          <div className="text-2xl text-inherit mb-5">Addresse</div>
          <div>
            <p className="text-sm">Moscow Street A.Pushkin</p>
            <p className="text-sm">123009, 123012</p> 
          </div>
        </div> 
        <div>
          <div className="text-2xl text-inherit mb-5">Telephone</div>
          <p className="text-sm">+88017 81247 285</p>
          <p className="text-sm">+88016 17779 827</p>
        </div>
        <div>
          <div className="text-2xl text-inherit mb-5">Quick Links</div>
          <p className="text-sm">Privacy Police</p>
          <p className="text-sm">Trems Of Service</p>
        </div>
        <div>
          <div className="text-2xl text-inherit mb-5">Email</div>
          <p className="text-sm">
            <a href="mail.com">mollaimran067@gmail.com</a>
          </p>
          <p className="text-sm">
            <a href="mail.com">triolibusinessss@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="divider" />
      <div className="flex flex-nowrap justify-between"> 
        <div>
          <img src="Téléchargements/photo.jpg" alt="Logo" />
        </div>
        <div className="">
          <button className="text-sm text-inherit">Back On Top</button>
        </div>
        <div className="">
          <p className="text-sm text-inherit">CopyRight 2021 By Imran Molla</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
