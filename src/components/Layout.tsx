import React, {type ReactNode} from "react";
import Header from "./Header";
import Footer from "./Footer";

type tprops = {
  children: ReactNode
} 

const Layout: React.FC<tprops> = (props) => {
  const { children } = props
  return(
    <div>
      <div>
        <Header/>
      </div>
      <div>
        {children}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;