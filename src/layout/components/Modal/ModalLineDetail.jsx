import "./modal.css";

let handleCollapse = (event) => {
    let rootCollapse = document.querySelectorAll("#listCollapse .collapsible");

    

  let element = event.target;
  element.classList.toggle("active");
  var content = element.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
  for(let i = 0; i < rootCollapse.length; i++) {
    if(rootCollapse[i] != event.target) {
        console.log(i);
        console.log(rootCollapse[i].innerHTML);
        console.log(element.nextElementSibling.style.display);
        rootCollapse[i].nextElementSibling.style.display = "none";
    }
  }
};

let ModalLineDetail = ({ children }) => {
  return (
    <div id="ModalLineDetail" className="ModalLineDetail">
      <div className="ModalContent flex flex-col">
        <h1>THONG TIN CHI TIET TUYEN</h1>
        <span className="h-[1px] mx-2 w-auto bg-slate-700"></span>
        {/* <span className="close">&times;</span> */}
        {/* common infomation */}
        <div className="">
          <div className="flex flex-row items-center w-full h-7">
            <div className="w-[200px] mr-2 font-bold">Ma tuyen</div>
            <div>Tuyen abc123</div>
          </div>
          <div className="flex flex-row items-center w-full h-7">
            <div className="w-[200px] mr-2 font-bold">Diem xuat phat</div>
            <div>Tuyen abc123</div>
          </div>
          <div className="flex flex-row items-center w-full h-7">
            <div className="w-[200px] mr-2 font-bold">Thoi gian xuat phat</div>
            <div>Tuyen abc123</div>
          </div>
          <div className="flex flex-row items-center w-full h-7">
            <div className="w-[200px] mr-2 font-bold">Diem ket thuc</div>
            <div>Tuyen abc123</div>
          </div>
          <div className="flex flex-row items-center w-full h-7">
            <div className="w-[200px] mr-2 font-bold">Thoi gian ket thuc</div>
            <div>Tuyen abc123</div>
          </div>
        </div>
        {/* list collapse */}
        <div id="listCollapse" className=" p-3">
          <div
            className="collapsible border-t-2 border-gray-600"
            onClick={handleCollapse}
          >
            Yeu cau tai xe
          </div>
          <div className="content">
            <p>Lorem ipsum...</p>
          </div>
          <div
            className="collapsible border-t-2 border-gray-600"
            onClick={handleCollapse}
          >
            Phan khuc xe
          </div>
          <div className="content">
            <p>Lorem ipsum...</p>
          </div>
          <div
            className="collapsible border-t-2 border-gray-600"
            onClick={handleCollapse}
          >
            Danh sach cac diem giao hang
          </div>
          <div className="content">
            <p>Lorem ipsum...</p>
          </div>
        </div>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};

export default ModalLineDetail;
