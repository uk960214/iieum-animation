import styled from "styled-components";

export const Container = styled.section`
  width: 80%;
  margin: auto;
  position: relative;
  display: flex;
  transform: scale(1);
`;

export const Card = styled.div`
  background-color: beige;
  width: 18vw;
  height: 20vh;
  border-radius: 8px;
  position: absolute;
  transform: ${(props) =>
    props.stacked ? `rotate(${props.order * 1}deg)` : ""};
  left: ${(props) =>
    props.stacked
      ? `${props.order / 4}%`
      : `${(props.order % props.grid) * 25}%`};
  top: ${(props) =>
    props.stacked ? 0 : `${Math.floor(props.order / props.grid) * 23}vh`};
  z-index: ${(props) => (props.stacked ? `-${props.order}` : "")};
  transition: all 1s;
  margin: 2%;
  border: 1px solid #000000;
  opacity: ${(p) => (p.stacked && p.order > 3 ? 0 : 1)};
`;

export const StackButton = styled.p`
  position: fixed;
  top: 0;
  cursor: pointer;
`;

export const CardL = styled.div`
  width: 38vw;
  height: 70vh;
  position: fixed;
  top: 0;
  right: 0;
  border: 1px solid #000000;
  background-color: beige;
  margin-top: 8%;
  border-radius: 8px;
  opacity: ${(p) => (p.grid === 4 ? 0 : 1)};
  z-index: ${(p) => (p.grid === 4 ? -1 : 5)};
  transition: all 0.5s ease-in-out;
`;

export const CardList = styled.div`
  margin-top: 6%;
  position: relative;
  overflow-y: scroll;
  height: 70vh;
  width: 100%;
  // scrollbars
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;
