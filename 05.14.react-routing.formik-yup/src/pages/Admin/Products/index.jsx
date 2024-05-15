import { useEffect, useState } from "react";
import { deleteDataById, getAllData } from "../../../api";
import { endpoints } from "../../../api/constant";
import { Button, Table, Tooltip, Popconfirm, message } from "antd";

const AdminProducts = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getAllData(endpoints.products).then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    deleteDataById(endpoints.products, id).then((res) => {
      if (res.status === 200) {
        const filtered = products.filter((q) => q.id !== id);
        setProducts(filtered);
        message.success("Product deleted succesfully!");
      }
    });
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      sorter: (a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
      render: (text, record) => {
        return (
          <Tooltip placement="topLeft" title={text}>
            {text.length > 20
              ? `${text.slice(0, 20)}...`
              : `${text.slice(0, 20)}`}
          </Tooltip>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (text, record) => {
        return <img src={text} width={50} height={50} />;
      },
    },
    {
      title: "Delete",
      dataIndex: "image",
      render: (text, record) => {
        return (
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => handleDelete(record.id)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button>DELETE</Button>
          </Popconfirm>
        );
      },
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <Table
        columns={columns}
        dataSource={products}
        onChange={onChange}
        pagination={{ pageSize: 4 }}
        rowKey={"id"}
      />
    </div>
  );
};

export default AdminProducts;
