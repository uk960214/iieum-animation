import React, { useState } from "react";
import { Card, Container, StackButton } from "./Cards.elements";

const Cards = () => {
  const [stacked, setStacked] = useState(true);

  const handleStack = () => {
    stacked ? setStacked(false) : setStacked(true);
  };

  return (
    <Container>
      <Card
        order={0}
        stacked={stacked}
        onClick={{ stacked } ? handleStack : ""}
      >
        card1
      </Card>
      <Card order={1} stacked={stacked}>
        card2
      </Card>
      <Card order={2} stacked={stacked}>
        card3
      </Card>
      <Card order={3} stacked={stacked}>
        card4
      </Card>
      <Card order={4} stacked={stacked}>
        card5
      </Card>
      <Card order={5} stacked={stacked}>
        card6
      </Card>
      <Card order={6} stacked={stacked}>
        card7
      </Card>
      <Card order={7} stacked={stacked}>
        card8
      </Card>
      <Card order={8} stacked={stacked}>
        card9
      </Card>
      <Card order={9} stacked={stacked}>
        card10
      </Card>
      <Card order={10} stacked={stacked}>
        card11
      </Card>
      <Card order={11} stacked={stacked}>
        card12
      </Card>
      <StackButton onClick={() => handleStack()}>stack</StackButton>
    </Container>
  );
};

export default Cards;
