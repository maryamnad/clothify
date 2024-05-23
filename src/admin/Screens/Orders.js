import { Avatar, Rate, Space, Table, Typography, Image, Select } from "antd";
import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "../Components/Header";
import SideMenu from "../Components/SideMenu";
import Footer from "../Components/Footer";

const { Option } = Select;

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get("http://127.0.0.1:5000/api/order")
      .then((res) => {
        console.log(res.data);
        setDataSource(res.data);
        setLoading(false);
      });
  }, []);

  const handleStatusChange = (value, record) => {
    // Update the status in the state
    
    // Optionally, send the updated status to the server
    axios.put(`http://127.0.0.1:5000/api/order/${record._id}`, { status: value })
      .then((res) => {
        console.log('Status updated', res.data);
      })
      .catch((error) => {
        console.error('Error updating status:', error);
      });
      axios.get("http://127.0.0.1:5000/api/order")
      .then((res) => {
        console.log(res.data);
        setDataSource(res.data);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <Header />
      <div className="SideMenuAndPageContent">
        <SideMenu />
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
                dataIndex: "status",
                render: (text, record) => (
                  <Select
                    defaultValue={text}
                    onChange={(value) => handleStatusChange(value, record)}
                  >
                    <Option value="paid">Paid</Option>
                    <Option value="shipped">Shipped</Option>
                    <Option value="delivered">Delivered</Option>
                    <Option value="canceled">Canceled</Option>
                  </Select>
                ),
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
          />
        </Space>
      </div>
      <Footer />
    </div>
  );
}

export default Orders;
