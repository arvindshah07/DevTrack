import Layout from "../components/layout/Layout";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCard from "../components/dashboard/StatsCard";
import RecentActivity from "../components/dashboard/RecentActivity";
import { useContext } from "react";
import UserContext from "../context/UserContext";
function Dashboard() {
  const {user}=useContext(UserContext);
  return (
    <Layout>
      <WelcomeCard username={user?.name}/>
      
    <div className="flex flex-wrap gap-6 mt-8">
      <StatsCard title={"Projects"} value={0}/>
      <StatsCard title={"Completed"} value={0}/>
      <StatsCard title={"Pending"} value={0}/>
    </div>
    <RecentActivity/>
    </Layout>
  );
}

export default Dashboard;