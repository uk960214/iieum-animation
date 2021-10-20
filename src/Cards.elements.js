import styled from "styled-components";

export const Container = styled.section`
  width: 80%;
  margin: auto;
  position: relative;
`;

export const Card = styled.div`
  background-color: beige;
  width: 22%;
  height: 20vh;
  border-radius: 8px;
  position: absolute;
  transform: ${(props) =>
    props.stacked ? `rotate(${props.order * 1}deg)` : ""};
  left: ${(props) => (props.stacked ? 0 : `${(props.order % 4) * 25}%`)};
  top: ${(props) =>
    props.stacked ? 0 : `${Math.floor(props.order / 4) * 23}vh`};
  z-index: ${(props) => `-${props.order}`};
  transition: all 1s;
  margin: 3%;
  border: 1px solid #000000;
`;

export const StackButton = styled.p`
  position: absolute;
  bottom: 0;
  cursor: pointer;
`;
