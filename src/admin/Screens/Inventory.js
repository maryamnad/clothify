import { Button, Form, Input, Modal, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [formData, setFormData] = useState({
    _id: "",
    title: "",
    price: "",
    stock: "",
    category: ""
  });
  const [deleteProductId, setDeleteProductId] = useState(null); // New state to track product to be deleted

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
    setFormData({ _id: "", title: "", price: "", stock: "", category: "" });
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setDeleteProductId(null); // Reset deleteProductId when canceling
  };

  const handleFormChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  const handleAddProduct = async (values) => {
    try {
      await axios.post("http://127.0.0.1:5000/api/newprod", values);
      console.log("Product added successfully");
      setModalVisible(false);
      fetchInventory();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleUpdateProduct = async (values) => {
    try {
      await axios.put(`http://127.0.0.1:5000/api/updateprod/${formData._id}`, values);
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
    setDeleteProductId(null); // Reset deleteProductId after deletion
    setModalVisible(false);
  };

  const handleUpdate = (record) => {
    setIsUpdating(true);
    setFormData(record);
    setModalVisible(true);
  };

  return (
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
      <Modal // Confirmation modal
        title="Confirm Deletion"
        visible={!!deleteProductId} // Show modal only if deleteProductId is truthy
        onOk={handleDeleteProduct}
        onCancel={() => setDeleteProductId(null)} // Reset deleteProductId when canceling
        okText="Delete"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete this product?</p>
      </Modal>
    </Space>
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
        name="_id"
        label="ID"
        rules={[{ required: true, message: "Please enter the ID" }]}
      >
        <Input />
      </Form.Item>

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
      <Form.Item>
        <Button type="primary" htmlType="submit">{isUpdating ? "Update Product" : "Add Product"}</Button>
      </Form.Item>
    </Form>
  );
};

export default Inventory;
