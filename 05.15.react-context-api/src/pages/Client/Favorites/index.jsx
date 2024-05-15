import { Button, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import { FavoritesContext } from "../../../context/favoritesContext";
const { Meta } = Card;

const Favorites = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const handleFavorite = (product) => {
    setFavorites([...favorites].filter((q) => q.id !== product.id));
  };
  return (
    <div id="favorites" style={{ padding: "5rem 0" }}>
      <div className="container">
        <div className="favorites">
          <Row gutter={[16, 16]}>
            {favorites &&
              favorites.map((p) => {
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
                        <FaHeart />
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

export default Favorites;
