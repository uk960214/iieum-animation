import React, { useState } from "react";
import {
  Card,
  CardL,
  Container,
  StackButton,
  CardList,
} from "./Cards.elements";

const Cards = () => {
  const [stacked, setStacked] = useState(true);
  const [grid, setGrid] = useState(4);
  const [content, setContent] = useState("");

  const handleStack = () => {
    stacked ? setStacked(false) : setStacked(true);
    setGrid(4);
  };

  const handleGrid = (e) => {
    if (grid === 4) setGrid(2);
    setContent(e.target.textContent);
  };

  const handleClose = () => {
    setGrid(4);
  };

  return (
    <Container>
      <StackButton onClick={() => handleStack()}>stack</StackButton>
      <CardList grid={grid}>
        <Card
          order={0}
          stacked={stacked}
          onClick={stacked ? handleStack : (e) => handleGrid(e)}
          grid={grid}
        >
          card1
        </Card>
        <Card
          order={1}
          stacked={stacked}
          grid={grid}
          onClick={(e) => handleGrid(e)}
        >
          card2
        </Card>
        <Card
          order={2}
          stacked={stacked}
          grid={grid}
          onClick={(e) => handleGrid(e)}
        >
          card3
        </Card>
        <Card
          order={3}
          stacked={stacked}
          grid={grid}
          onClick={(e) => handleGrid(e)}
        >
          card4
        </Card>
        <Card
          order={4}
          stacked={stacked}
          grid={grid}
          onClick={(e) => handleGrid(e)}
        >
          card5
        </Card>
        <Card
          order={5}
          stacked={stacked}
          grid={grid}
          onClick={(e) => handleGrid(e)}
        >
          card6
        </Card>
        <Card
          order={6}
          stacked={stacked}
          grid={grid}
          onClick={(e) => handleGrid(e)}
        >
          card7
        </Card>
        <Card
          order={7}
          stacked={stacked}
          grid={grid}
          onClick={(e) => handleGrid(e)}
        >
          card8
        </Card>
        <Card
          order={8}
          stacked={stacked}
          grid={grid}
          onClick={(e) => handleGrid(e)}
        >
          card9
        </Card>
        <Card
          order={9}
          stacked={stacked}
          grid={grid}
          onClick={(e) => handleGrid(e)}
        >
          card10
        </Card>
        <Card
          order={10}
          stacked={stacked}
          grid={grid}
          onClick={(e) => handleGrid(e)}
        >
          card11
        </Card>
        <Card
          order={11}
          stacked={stacked}
          grid={grid}
          onClick={(e) => handleGrid(e)}
        >
          card12
        </Card>
        <Card
          order={12}
          stacked={stacked}
          grid={grid}
          onClick={(e) => handleGrid(e)}
        >
          card13
        </Card>
        <Card
          order={13}
          stacked={stacked}
          grid={grid}
          onClick={(e) => handleGrid(e)}
        >
          card14
        </Card>
        <Card
          order={14}
          stacked={stacked}
          grid={grid}
          onClick={(e) => handleGrid(e)}
        >
          card15
        </Card>
      </CardList>
      <CardL grid={grid}>
        {grid === 2 ? content : ""}
        <p onClick={handleClose}>close</p>
      </CardL>
    </Container>
  );
};

export default Cards;
