import React, { useEffect } from "react";
import "./favorite.css";
import Cards from "../cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { clearFavorites } from "../../redux/action/food";
import { Button } from "react-bootstrap";

const Favorite = () => {
  const foods = useSelector(state => state.food);
  const dispatch = useDispatch();

  const { food } = foods;

  useEffect(() => {}, []);

  const isFoodEmpty = food.filter(item => item && item.selected);

  return (
    <div>
      <div>
        {isFoodEmpty.length === 0 ? (
          <span className="header_text">Favorites is empty</span>
        ) : (
          <div>
            <span className="header_text">All your favorites</span>
            <Cards cards={isFoodEmpty} isHome={false} />
            <div className="clearmFavModal">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  if (window.confirm("Clear all favorites?")) {
                    dispatch(clearFavorites());
                  }
                }}
              >
                Clear favorites
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
