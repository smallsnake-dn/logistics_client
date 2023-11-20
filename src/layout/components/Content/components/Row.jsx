/* eslint-disable react/prop-types */


let Row = ({children, data, checked}) => {
    return (
        <div className="flex flex-row p-2">
            <div className="w-6 h-6 flex justify-center items-center">
              <input type="checkbox" name="check" id="" />
            </div>
            <span className="ml-1 mr-1 w-[0.5px] h-auto bg-white"></span>
            <div className="w-2/12">{data.matuyen}</div>
            <span className="ml-1 mr-1 w-[0.5px] h-auto bg-white"></span>
            <div className="w-3/12">{data.diemxuatphat}</div>
            <span className="ml-1 mr-1 w-[0.5px] h-auto bg-white"></span>
            <div className="w-2/12">{data.thoigianbatdau}</div>
            <span className="ml-1 mr-1 w-[0.5px] h-auto bg-white"></span>
            <div className="w-3/12">{data.diemketthuc}</div>
            <span className="ml-1 mr-1 w-[0.5px] h-auto bg-white"></span>
            <div className="w-2/12">{data.thoigianketthuc}</div>
          </div>
    )
}


export default Row