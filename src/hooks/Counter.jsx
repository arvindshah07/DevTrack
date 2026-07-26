import useCounter from "./useCounter";
function Counter(){
  const {num,increment}=useCounter();
  return (
    <>
       <h1>{num}</h1>
       <button onClick={increment}>+</button>
    </>
  )

}