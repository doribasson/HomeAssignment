import React, { useEffect, useState } from "react";
import "./home.css";
import Cards from "../cards/Cards";
import SearchBar from "../searchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getFood } from "../../redux/action/food";
import Mypagination from "../pagination/Pagination";
import { Spinner } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const foods = useSelector(state => state.food);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(10);
  const { loading, food, updateFood } = foods;

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const initalCards = food.slice(indexOfFirstCard, indexOfLastCard);
  const filterCards = updateFood.data?.slice(indexOfFirstCard, indexOfLastCard);

  useEffect(() => {
    if (food.length === 0 && []) dispatch(getFood());
  }, [loading, dispatch, food]);

  return (
    <div className="home_container">
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <div>
          <SearchBar food={updateFood} />
          {food.length !== null ? (
            <Cards
              cards={
                !updateFood.searchName || updateFood.data.length === 0
                  ? initalCards
                  : filterCards
              }
              isHome={true}
            />
          ) : (
            <div className="noCards">There is no match </div>
          )}
          <div className="mypagination">
            <Mypagination
              cardPerPage={cardPerPage}
              paginate={paginate}
              totalCards={food.length}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
