import Layout from "../components/layout/Layout"
import useFetch from "../hooks/useFetch";
function Users(){
 const {data,loading,error}=useFetch(
  "https://jsonplaceholder.typicode.com/users");
   if(loading){
    return <p>Loading...</p>
   }
   if(error) {
    return <p>Error: {error}</p>
  }
  return(
    <Layout>
      <div>
        <h1 className="text-xl font-bold mx-2 ">Users</h1>
        {data?.map((user)=>(
          <div key={user.id}
          className="bg-white shadow-md rounded-lg p-4 mb-4 border">
            <h2 className="text-xl font-semibold"
            >{user.name}</h2>
            <p className="text-gray-600"
            >{user.email}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}
export default Users ;