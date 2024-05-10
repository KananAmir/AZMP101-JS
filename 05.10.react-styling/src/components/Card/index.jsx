// import asusImg from "../../assets/asus.png";
// import lenovaImg from "../../assets/lenova.webp";

import styles from "./styles";

const CardWrapperStyle = {
  border: "1px solid",
  maxWidth: "300px",
  borderRadius: "20px",
};

const Card = () => {
  return (
    <div className="card" style={CardWrapperStyle}>
      <img
        className="card-img-top"
        src={"../../../public/images/asus.png"}
        alt="Card image cap"
        width={200}
      />
      <div className="card-body">
        <h5
          className="card-title"
          style={{ fontSize: "1.5rem", textDecoration: "underline" }}
        >
          Card title
        </h5>
        <p className="card-text" style={{ fontStyle: "italic" }}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>

        <button className="btn btn-primary" style={styles.BtnStyle}>
          More Info
        </button>
      </div>
    </div>
  );
};

export default Card;
