import { Button, Checkbox, Form, Input, Col, Divider, Row, Tabs } from "antd";
import Card from "../Card";
const style = {
  background: "#0092ff",
  padding: "8px 0",
};
const AntdComponents = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const items = [
    {
      key: "1",
      label: "Tab 1",
      children: <Card />,
    },
    {
      key: "2",
      label: "Tab 2",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <Button type="primary" danger>
        Primary Button
      </Button>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Divider orientation="center">Horizontal</Divider>
        <Row gutter={[16, 16]}>
          <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={24}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={24}>
            <div style={style}>col-6</div>
          </Col>
        </Row>

        <hr />
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Row>
            <Col span={12}>
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>

          <hr />
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
    </>
  );
};

export default AntdComponents;
