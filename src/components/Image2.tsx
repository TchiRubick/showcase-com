import React from "react";

const Image2: React.FC = () => {
  return(
    <div className="md:flex sm:w-full mt-16">
      <div className="dropdown dropdown-end w-full">
        <label tabIndex={0} 
          className="btn w-full h-96 bg-cover  -none border-none pt-80 text-white font-semibold" 
          style={{
            backgroundImage:"url('https://www.deubaxxl.fr/media/image/be/88/a6/de_100937d_11_520x520.jpg')"
          }}>
            Outdoor Tarrace
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><img src="https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg" alt="" />
          </li>
          <li> <img src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" alt="" />
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end w-full">
        <label tabIndex={0} className="btn w-full bg-cover  h-96 pt-80 rounded-none border-none text-white font-semibold" style={{
          backgroundImage:"url('https://i0.wp.com/windsorcourthotel.com/wp-content/uploads/2019/04/header-rooms.jpg?resize=480%2C380&ssl=1')"
        }}>
            Author`s Landscamping
        </label>
        <ul tabIndex={0} className="grid grid-cols-2 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60">
          <li><img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" alt="" />
          </li>
          <li>
            <img src="https://cdn.shopify.com/s/files/1/0249/6376/files/pixnio_2eca23e2-54c0-416f-b8f2-10bc88368e76.jpg?v=1557631143" alt="" />
          </li>
          <li>
            <img src="https://sb.kaleidousercontent.com/67418/992x558/7632960ff9/people.png" alt="" />
          </li>
          <li className="btn rounded-full w-12 mx-auto">
            +
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end w-full">
        <label tabIndex={0} className="btn  bg-cover  w-full h-96 pt-80 rounded-none border-none text-white font-semibold" style={{
          backgroundImage:"url('https://www.pwho.com/media/original_images/Hanson.jpg.380x380_q80_crop_focal_area-640%2C480%2C1280%2C960_size_canvas_upscale_zoom-100.jpg')"
        }}>
          Enclosed Area
        </label>
        <ul tabIndex={0} className="grid grid-cols-2 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60">
          <li>
            <img src="https://avatars.mds.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d-4473719-images-taas-consumers&n=27&h=480&w=480" alt="" />
          </li>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" />
          </li>
          <li>
            <img src="https://cdn.shopify.com/s/files/1/0249/6376/files/pixnio_2eca23e2-54c0-416f-b8f2-10bc88368e76.jpg?v=1557631143" alt="" />
          </li>
          <li>
            <img src="https://www.adobe.com/fr/express/feature/image/media_1bef9a6e36bc18212709e29079a44dbd8693477e7.png?width=750&format=png&optimize=medium" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Image2;