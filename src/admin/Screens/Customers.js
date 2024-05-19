import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../API";
import axios from "axios";
import Header from "../Components/Header";
import SideMenu from "../Components/SideMenu";
import Footer from "../Components/Footer";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get("http://127.0.0.1:5000/api/getcustomer")
      .then((res) => {
        setDataSource(res.data);
        setLoading(false);
      })
    
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Name",
            dataIndex: "Name",
          },
          {
            title: "Email",
            dataIndex: "Email",
          },
          {
            title: "Phone",
            dataIndex: "Phone",
          },
          {
            title: "Postal Code",
            dataIndex: "PostalCode",
          },

          {
            title: "address",
            dataIndex: "Address",
          },
          {
            title: "City",
            dataIndex: "City",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
      </div>
      <Footer />
    </div>
    
  );
}
export default Customers;