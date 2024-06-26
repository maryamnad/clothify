import { Button, Form, Input, Modal, Space, Table, Typography, Upload, Image, Avatar } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { UploadOutlined } from '@ant-design/icons';
import Header from "../Components/Header";
import SideMenu from "../Components/SideMenu";
import Footer from "../Components/Footer";


function Inventory() {
  const imageUrl = "file:///"
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [formData, setFormData] = useState({
    _id: "",
    title: "",
    price: 0,
    stock: "",
    category: "",
    sale:0,
    image: null
  });
  const [deleteProductId, setDeleteProductId] = useState(null);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = () => {
    setLoading(true);
    axios.get("http://127.0.0.1:5000/api/getprod")
      .then((res) => {
        setDataSource(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching inventory:", error);
        setLoading(false);
      });
  };

  const handleAddButtonClick = () => {
    setIsUpdating(false);
    setFormData({ _id: "", title: "", price: 0, stock: "", category: "" ,sale: 0,image: null});
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setDeleteProductId(null);
  };

  const handleFormChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  const handleAddProduct = async (values) => {
    console.log(values)
    const form = new FormData();
  form.append("title", values.title);
  form.append("price", values.price);
  form.append("stock", values.stock);
  form.append("category", values.category);
  console.log(values)

    try {
      await axios.post("http://127.0.0.1:5000/api/newprod", values, {
        
      });
      console.log("Product added successfully");
      setModalVisible(false);
      fetchInventory();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleUpdateProduct = async (values) => {
    console.log(values)


    try {
      await axios.put(`http://127.0.0.1:5000/api/updateprod/${values._id}`, values, {
      });
      console.log("Product updated successfully");
      setModalVisible(false);
      fetchInventory();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDeleteProduct = async () => {
    try {
      await axios.delete(`http://127.0.0.1:5000/api/deleteprod/${deleteProductId}`);
      console.log("Product deleted successfully");
      fetchInventory();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
    setDeleteProductId(null);
    setModalVisible(false);
  };

  const handleUpdate = (record) => {
    setIsUpdating(true);
    setFormData(record);
    setModalVisible(true);
  };

  return (
    <div className="App">
      <Header />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <Space size={20} direction="vertical">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography.Title level={4} style={{ margin: 0 }}>Inventory</Typography.Title>
        <Button type="primary" style={{ marginLeft: 10 }} onClick={handleAddButtonClick}>Add</Button>
      </div>
      
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
            title: "Action",
            key: "action",
            render: (text, record) => (
              <Space size="middle">
                <Button type="primary" onClick={() => handleUpdate(record)}>Update</Button>
                <Button type="primary" onClick={() => setDeleteProductId(record._id)} danger>Delete</Button> 
              </Space>
            ),
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 10,
        }}
      ></Table>
      <Modal
        title={isUpdating ? "Update Product" : "Add Product"}
        visible={modalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <ProductForm
          onChange={handleFormChange}
          onSubmit={isUpdating ? handleUpdateProduct : handleAddProduct}
          formData={formData}
          isUpdating={isUpdating}
        />
      </Modal>
      <Modal
        title="Confirm Deletion"
        visible={!!deleteProductId}
        onOk={handleDeleteProduct}
        onCancel={() => setDeleteProductId(null)}
        okText="Delete"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete this product?</p>
      </Modal>
    </Space>
      </div>
      <Footer />
    </div>
    
  );
}

const ProductForm = ({ onChange, onSubmit, formData, isUpdating }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(formData);
  }, [formData, form]);

  const onFinish = (values) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onValuesChange={onChange}
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: "Please enter the title" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true, message: "Please enter the price" }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="stock"
        label="Stock"
        rules={[{ required: true, message: "Please enter the stock" }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="category"
        label="Category"
        rules={[{ required: true, message: "Please enter the category" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="sale"
        label="sale"
        rules={[{ required: true, message: "Please enter the discount" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="image"
        label="Image"
        valuePropName="fileList"
        getValueFromEvent={e => e && e.fileList}
        rules={[{ required: !isUpdating, message: "Please upload an image" }]}
      >
        <Upload listType="picture" maxCount={1} beforeUpload={() => false}>
          <Button icon={<UploadOutlined />}>Upload Image</Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">{isUpdating ? "Update Product" : "Add Product"}</Button>
      </Form.Item>
    </Form>
  );
};

export default Inventory;
