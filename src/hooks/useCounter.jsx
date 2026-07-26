import { useState } from "react";

function useCounter(){
   const [num,setNum]=useState(0);
   const increament=(prev)=>setNum(prev+1);
   return {num,increament} ;
}
export default useCounter;