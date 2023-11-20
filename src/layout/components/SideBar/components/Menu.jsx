let Menu = ({children}) => {
    let items = [

    ]
    return (
        <div className="bg-ls-nav h-[100%] border-t-[1px] border-zinc-600">
        <ul className="mt-3">
          <li className="flex flex-row p-1 items-center text-[#788095] border-l-4 border-slate-600 bg-slate-800 pt-2 pb-2 pl-2">
            <div className="w-8 h-8 rounded-[50%] bg-slate-600 flex justify-center items-center">
                <img className="w-5" src="http://localhost:5173/route.svg" alt="okela" />
            </div>
            <p className="ml-2 font-medium text-xs ">DANH SÁNH TUYẾN</p>
          </li>
          <li className="flex flex-row p-1 items-center text-[#788095] border-l-4 border-ls-cl pt-2 pb-2 pl-2">
            <img className="w-5" src="http://localhost:5173/route.svg" alt="okela" />
            <p className="ml-2 font-medium text-xs ">GỢI Ý ĐƠN VỊ VẬN CHUYỂN</p>
          </li>
          <li className="flex flex-row p-1 items-center text-[#788095] border-l-4 border-ls-cl pt-2 pb-2 pl-2">
            <img className="w-5" src="http://localhost:5173/route.svg" alt="okela" />
            <p className="ml-2 font-medium text-xs ">BẢNG GIÁ DỊCH VỤ VẬN CHUYỂN</p>
          </li>
          <li className="flex flex-row p-1 items-center text-[#788095] border-l-4 border-ls-cl pt-2 pb-2 pl-2">
            <img className="w-5" src="http://localhost:5173/route.svg" alt="okela" />
            <p className="ml-2 font-medium text-xs ">CÀI ĐẶT</p>
          </li>
        </ul>
      </div>
    )
}

export default Menu