import { createContext,useState} from "react";
const UserContext=createContext();

function UserProvider({children}){
 const [username,setUsername]=useState("Arvind");
 return(
<UserContext.Provider
  value={{
    username,
    setUsername,
  }}
>  
{children}
</UserContext.Provider>
 );
}

export {UserProvider};
export default UserContext ;