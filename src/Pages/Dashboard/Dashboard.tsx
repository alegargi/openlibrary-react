import { useLocation } from 'react-router-dom';
import CustomDashboard from "../../Components/Dashboard/CustomDashboard";
import CardDashboard from "../../Components/Dashboard/CardDashboard";

export default function Dashboard() {
  const location = useLocation();

  // Controlla se la route attuale è la radice (/) del dashboard
  const isDashboardRoot = location.pathname === '/';
  console.log("Dashboard", location.pathname)
  return (
    <>
      <CustomDashboard />
      {isDashboardRoot && <CardDashboard />}
    </>
  );
}
