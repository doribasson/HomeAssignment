import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";

const Mypagination = ({ cardsPerPage, totalCards, paginate }) => {
  const [active, SetActive] = useState(1);
  useEffect(() => {}, [active]);
  let items = [];
  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item
        onClick={() => myfunc(number, active)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  const myfunc = (number, active) => {
    SetActive(number);
    paginate(number);
  };

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
};

export default Mypagination;
