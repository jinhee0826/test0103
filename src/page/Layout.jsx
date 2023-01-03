import { Outlet } from "react-router-dom";
import Main from "../components/Main";
const Layout = () => {
  return (  
    <div>
      <Main />
      <Outlet />
    </div>
  );
}
 
export default Layout;
