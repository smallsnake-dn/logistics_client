/* eslint-disable no-undef */
import { useRef, useState } from "react";
import Calendar from "react-calendar";
import Row from "./components/Row";

let handleClickCalendar = () => {
  document.querySelector("#calendar").classList.toggle("hidden");
};

let handleSelectAll = (e) => {
    let root = document.querySelector("#content_table").children
    if(e.target.checked == true){
        for (let i = 0; i < root.length; i++) {
            root[i].querySelector("input").setAttribute("checked", true)
        }
    }else{
        console.log("check falseeee");
        for (let i = 0; i < root.length; i++) {
            root[i].querySelector("input").removeAttribute("checked")
        }
   }
}

let Content = ({ children }) => {
  const [value, onChange] = useState(new Date());
    let selectAll = useRef(null);
//   console.log({ selectAll: selectAll.current.children[0].querySelector("input").setAttribute("checked", true) });


    let rowData = {
        matuyen: "t123",
        diemxuatphat: "Xuan Loc Dong Nai VN",
        thoigianbatdau: "07:30 20/11/2023",
        diemketthuc: "Xuan Loc Dong Nai VN",
        thoigianketthuc: "07:30 20/11/2023",
    }

  return (
    <div className="flex flex-col w-full h-[100vh]">
      <div className="text-red-500 text-4xl">
        <p className="h-[68px] p-2">Danh sach tuyen</p>
      </div>
      <span className="h-[1px] mx-2 w-auto bg-slate-700"></span>
      {/* control */}
      <div className=" p-2 h-[130px] flex flex-row">
        {/* calendar button */}
        <div
          className="border border-gray-500 relative w-[120px] h-[42px] rounded-md flex flex-row justify-between items-center p-2"
          onClick={handleClickCalendar}
        >
          <p>{value.toLocaleDateString()}</p>
          <img src="http://localhost:5173/calendar_icon.svg" alt="" />
          <div id="calendar" className="w-96 bg-gray-400 absolute z-10 hidden left-0 top-[42px]">
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
        {/* Calculating */}
        <div
            className="flex flex-row w-[120px] h-[42px] justify-between items-center mx-3 border border-gray-500 p-2 rounded-md"
        >
          <p className="text-xs">CALCULATOR</p>
          <img src="http://localhost:5173/caculating.svg" alt="" />
        </div>
      </div>
      <span className="h-[1px] mx-2 w-auto bg-slate-700"></span>
      <div className=" bg-white m-2 h-full">
        {/* head table */}
        <div className="flex flex-row bg-ct-th p-2 border-y-2 border-gray-600 mr-[6px] font-bold">
          <div className="w-6 h-6 flex justify-center items-center">
            <input type="checkbox" name="check" id="" onChange={handleSelectAll}/>
          </div>
          <span className="ml-1 mr-1 w-[0.5px] h-auto bg-white"></span>
          <div className="w-2/12">Ma tuyen</div>
          <span className="ml-1 mr-1 w-[0.5px] h-auto bg-white"></span>
          <div className="w-3/12">Diem xuat phat</div>
          <span className="ml-1 mr-1 w-[0.5px] h-auto bg-white"></span>
          <div className="w-2/12">Thoi gian xuat phat</div>
          <span className="ml-1 mr-1 w-[0.5px] h-auto bg-white"></span>
          <div className="w-3/12">Diem ket thuc</div>
          <span className="ml-1 mr-1 w-[0.5px] h-auto bg-white"></span>
          <div className="w-2/12">Thoi gian ket thuc</div>
        </div>
        {/* content table */}
        <div className="overflow-y-scroll" id="content_table">
          <Row data={rowData}/>
          <Row data={rowData}/>
        </div>
      </div>
    </div>
  );
};

export default Content;
