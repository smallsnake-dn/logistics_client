/* eslint-disable react/no-unknown-property */

import Content from "../components/Content/Content";
import ModalLineDetail from "../components/Modal/ModalLineDetail";
import SideBar from "../components/SideBar/SideBar";

/* eslint-disable react/prop-types */
let DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <Content />
      <ModalLineDetail />
    </div>
  );
};

export default DefaultLayout;
