import UserContext from '../../context/UserContext'
import { useContext} from 'react'
function WelcomeCard() {
  const {user}=useContext(UserContext);
  return (
    <>
     <div className='bg-white rounded-xl shadow-md p-6'>
      <h1 className='text-3xl font-bold'>
        Welcome, {user?.name} 👋 
        </h1>
      <p className='text-gray-600 mt-2'>
        Start managing your projects efficiently .
        </p>
        <p className='text-sm text-gray-500 mt-2'>
          Role:{user?.role}
        </p>
     </div>
    </>
  )
}

export default WelcomeCard