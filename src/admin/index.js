import { Space } from "antd";
import "./index.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Content from "./Components/Content";
import SideMenu from "./Components/SideMenu";

function index() {
  return (
    <div className="App">
      <Header />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <Content></Content>
      </div>
      <Footer />
    </div>
  );
}
export default index;