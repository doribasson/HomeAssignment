import React, { useState } from "react";
import "./card.css";
import { Form } from "react-bootstrap";
import defaultBeer from "../../assets/images/defaultBeer.png";
import { updateFavorites, updateRank } from "../../redux/action/food";
import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";

const Card = ({
  card: {
    image_url,
    description,
    tagline,
    name,
    brewers_tips,
    id,
    selected,
    rank
  },
  isHome
}) => {
  const dispatch = useDispatch();
  // const foods = useSelector(state => state.food);
  // const { food, updateFood } = foods;
  const [modalShow, setModalShow] = useState(false);

  // useEffect(() => {}, [food]);

  return (
    <div className="card">
      {isHome ? (
        <div className="card_header">
          <img
            onClick={() => setModalShow(true)}
            src={image_url || defaultBeer}
            alt="default img beer"
          />

          <i
            className={selected ? "fa fa-star fa-2x" : "far fa-star fa-2x"}
            onClick={() => dispatch(updateFavorites(id))}
          />
        </div>
      ) : (
        <div className="card_header">
          <Form.Group controlId="ControlSelect">
            <Form.Label>Rank</Form.Label>
            <Form.Control
              as="select"
              value={rank}
              onChange={e => {
                const { value } = e.target;
                dispatch(updateRank(id, value));
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Control>
          </Form.Group>

          <img
            onClick={() => setModalShow(true)}
            src={image_url}
            style={{ width: "50px" }}
            alt=""
          />
          <i
            className={selected ? "fa fa-star fa-2x" : "far fa-star fa-2x"}
            onClick={() => {
              dispatch(updateFavorites(id));
            }}
          />
        </div>
      )}

      <div className="card-body">
        <h2>{name}</h2>
        <Modal
          moredata={{ name, description, tagline, brewers_tips }}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
};

export default Card;
