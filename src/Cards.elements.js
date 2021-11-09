import styled from "styled-components";

export const Container = styled.section`
  width: 80%;
  margin: auto;
  position: relative;
  transform: scale(1);
`;

export const CardList = styled.div`
  margin-top: 6%;
  position: relative;
  overflow-y: scroll;
  height: 70vh;

  display: grid;
  ${(p) =>
    `width: ${p.grid * 25}%; 
    grid-template-columns: repeat(${p.grid}, 1fr)`};

  // scrollbars
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  background-color: beige;
  width: 18vw;
  height: 20vh;
  border-radius: 8px;
  transform: ${(props) =>
    props.stacked
      ? `rotateZ(${props.order * 0.1 * (-1) ** props.order}deg)
    translateX(-${(props.order % props.grid) * 109}%)
        translateY(-${Math.floor(props.order / props.grid) * 20}vh);`
      : ""};
  z-index: ${(props) => (props.stacked ? `-${props.order}` : "")};
  transition: all ${(p) => p.order * 100}ms;
  margin: 2%;
  border: 1px solid #000000;
  opacity: ${(p) => (p.stacked && p.order > 3 ? 0 : 1)};

  /* position: absolute;
  left: ${(props) =>
    props.stacked
      ? `${props.order / 4}%`
      : `${(props.order % props.grid) * 25}%`};
  top: ${(props) =>
    props.stacked ? 0 : `${Math.floor(props.order / props.grid) * 23}vh`}; */
`;

export const StackButton = styled.p`
  position: fixed;
  top: -15%;
  cursor: pointer;
  z-index: 8;
`;

export const CardL = styled.div`
  width: 38vw;
  height: 70vh;
  position: fixed;
  top: 0;
  right: 0;
  border: 1px solid #000000;
  background-color: beige;
  border-radius: 8px;
  opacity: ${(p) => (p.grid === 4 ? 0 : 1)};
  z-index: ${(p) => (p.grid === 4 ? -1 : 5)};
  /* transition: all 0.5s ease-in-out; */
`;
