let UserInfo = ({children}) => {
    let user = {
        username: "SeeHooon",
        img: "http://localhost:5173/seehoon.jpg",
        email: "seehoon@gmail.com",
      };
    
    return (
        <div className="flex flex-row p-2">
        <div>
          <img
            className="w-12 rounded-[50%] overflow-hidden"
            src={user.img}
            alt={user.username}
          />
        </div>
        <ul className="m-2">
          <li className="text-sm text-[#fdfdfd] font-bold">{user.username}</li>
          <li className="text-xs text-white">{user.email}</li>
        </ul>
      </div>
    )
}

export default UserInfo