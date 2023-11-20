/* eslint-disable react/no-unknown-property */

import Content from "../components/Content/Content";
import SideBar from "../components/SideBar/SideBar";

/* eslint-disable react/prop-types */
let DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <Content />
    </div>
  );
};

export default DefaultLayout;
