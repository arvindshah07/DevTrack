import { createContext,useState,useEffect} from "react";
const UserContext=createContext();

function UserProvider({children}){
 const [user, setUser] = useState(null);
 
 useEffect(()=>{
  const getProfile=async ()=>{
    const token=localStorage.getItem("token");
    if(!token){
      return ;
    }
    try{
      const response=await fetch("http://localhost:3000/users/profile",
        {
          method:"GET",
          headers:{
            Authorization:`Bearer ${token}`,
          },
        }
      );
      const data=await response.json();
      if(!response.ok){
        localStorage.removeItem("token");
        return ;
      }
      setUser(data);
    }
    catch(error){
      console.error("Profile error :",error);
    }
  };
  getProfile();
 },[]);
 return(
<UserContext.Provider
  value={{
    user,
    setUser,
  }}
>  
{children}
</UserContext.Provider>
 );
}

export {UserProvider};
export default UserContext ;
