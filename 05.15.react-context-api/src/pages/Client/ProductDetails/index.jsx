import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDataById } from "../../../api";
import { endpoints } from "../../../api/constant";
import { Button, Col, Row } from "antd";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    getDataById(endpoints.products, id).then((res) => {
      setProduct(res.data);
    });
  }, []);

  console.log(product);

  return (
    <div id="product-details">
      <div className="container">
        <div className="product-details">
          {product && (
            <Row>
              <Col span={12}>
                <img
                  src={product.image}
                  alt={product.title}
                  width={"100%"}
                  height={500}
                  style={{ objectFit: "contain" }}
                />
              </Col>
              <Col
                span={12}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>
                <p>{product.description}</p>
                <Button
                  type="primary"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Go Back
                </Button>
              </Col>
            </Row>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
