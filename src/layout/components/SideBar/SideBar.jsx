/* eslint-disable react/prop-types */
import Sider from "antd/es/layout/Sider";
import Menu from "./components/Menu";
import UserInfo from "./components/UserInfo";

let SideBar = ({ children, width }) => {
  return (
    <div className="flex flex-col w-2/12 min-w-[240px] h-[100vh] border-r-[1.5px] border-gray-300 bg-ls-cl ">
      <UserInfo />
      <Menu />
    </div>
  );
};

export default SideBar;
