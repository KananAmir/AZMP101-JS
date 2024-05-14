import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getDataFromLocalStorage, setDataToLocalStorage } from "../../helpers";

export default function ProductCard({ product }) {
  const [value, setValue] = useState(product.raiting);

  const [favsArray, setFavsArray] = useState(
    getDataFromLocalStorage("favs") || []
  );

  const handleFavorite = (id) => {
    let favs = getDataFromLocalStorage("favs") || [];
    const found = favs.find((q) => q === id);

    if (found) {
      favs = [...favs].filter((q) => q !== id);
    } else {
      // favs.splice(idx, 1);
      favs = [...favs, id];
    }

    setDataToLocalStorage("favs", favs);

    setFavsArray(favs);
  };

  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      <CardMedia
        sx={{ height: 340 }}
        image={product.image}
        title="green iguana"
      />
      {product.discount !== 0 && (
        <Typography style={{ position: "absolute", top: 10, left: 10 }}>
          <span style={{ color: "#fff", backgroundColor: "red" }}>
            {product.discount}%
          </span>
        </Typography>
      )}
      {console.log(favsArray)}
      {console.log(favsArray.find((q) => q === product.id))}
      <Typography style={{ position: "absolute", top: 10, right: 10 }}>
        <FavoriteIcon
          style={{
            color: favsArray?.find((q) => q === product.id) && "red",
          }}
          onClick={() => handleFavorite(product.id)}
        />
      </Typography>
      <Typography component="legend"></Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.desc}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span
            className="price"
            style={{ color: "red", marginRight: ".5rem" }}
          >
            {product.price - (product.price * product.discount) / 100}
          </span>
          <span
            className="old-price"
            style={{ textDecoration: "line-through" }}
          >
            ${product.price}
          </span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Add to Card</Button>
      </CardActions>
    </Card>
  );
}
