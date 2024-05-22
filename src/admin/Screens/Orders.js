import { Avatar, Rate, Space, Table, Typography, Image } from "antd";
import { useEffect, useState } from "react";
import { getInventory, getOrders } from "../API";
import Header from "../Components/Header";
import SideMenu from "../Components/SideMenu";
import Footer from "../Components/Footer";
import axios from 'axios'

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get("http://127.0.0.1:5000/api/order")
      .then((res) => {
        console.log(res.data)
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
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "ID",
            dataIndex: "_id"
          },
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },
          {
            title: "Category",
            dataIndex: "category",
          },
          {
            title: "Sale",
            dataIndex: "sale",
          },
          {
            title: "Image",
            dataIndex: "link",
            render: (link) => <Image src={require(`./../../images/${link}`)} width={50} />,
          },
          {
            title: "Date",
            dataIndex: "date"
          },
          {
            title: "Status",
            dataIndex: "status"
          },
          {
            title: "Mode of Payment",
            dataIndex: "mode"
          }
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
export default Orders;