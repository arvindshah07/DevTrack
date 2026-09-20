import { createContext,useState,useEffect} from "react";
const UserContext=createContext();

function UserProvider({children}){
 const [user, setUser] = useState(null);
 const [loading,setLoading]=useState(true);

 useEffect(()=>{
  const getProfile=async ()=>{
    const token=localStorage.getItem("token");
    if(!token){
      setLoading(false);
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
        setUser(null);
        return ;
      }
      setUser(data);
    }
    catch(error){
      console.error("Profile error :",error);
    }finally{
      setLoading(false);
    }
  };
  getProfile();
 },[]);
 return(
<UserContext.Provider
  value={{
    user,
    setUser,
    loading,
  }}
>  
{children}
</UserContext.Provider>
 );
}

export {UserProvider};
export default UserContext ;
