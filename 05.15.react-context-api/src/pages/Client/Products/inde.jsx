import { Button, Card, Col, Row } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { FavoritesContext } from "../../../context/favoritesContext";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "./index.scss";
import { ProductsContext } from "../../../context/productsContext";

const { Meta } = Card;

const Products = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const { products, setProducts } = useContext(ProductsContext);
  const handleFavorite = (product) => {
    const found = favorites.find((q) => q.id === product.id);

    if (found) {
      setFavorites([...favorites].filter((q) => q.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };
  return (
    <div id="products" style={{ padding: "5rem 0" }}>
      <div className="container">
        <div className="products">
          <Row gutter={[16, 16]}>
            {products &&
              products.map((p) => {
                return (
                  <Col
                    className="gutter-row"
                    span={6}
                    xs={24}
                    md={12}
                    lg={8}
                    xl={6}
                    key={p.id}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Card
                      hoverable
                      style={{
                        width: 240,
                        position: "relative",
                      }}
                      cover={
                        <img
                          alt="example"
                          src={p.image}
                          width={100}
                          height={200}
                          style={{ objectFit: "contain" }}
                        />
                      }
                    >
                      <Button
                        style={{
                          position: "absolute",
                          right: 0,
                          top: 0,
                          border: "none",
                          background: "transparent",
                        }}
                        onClick={() => handleFavorite(p)}
                      >
                        {!favorites.find((q) => q.id === p.id) ? (
                          <CiHeart />
                        ) : (
                          <FaHeart />
                        )}
                      </Button>

                      <Link to={`/products/${p.id}`}>
                        <Meta title={p.title} description={`$ ${p.price}`} />
                      </Link>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Products;
