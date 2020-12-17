import styled from 'styled-components';

export const __PetCardBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

export const __PetCard = styled.figure`
  background-color: #F76C6C;
  width: 60vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 20%;
  bottom: 0%;
  right: 0%;
  left: 20%;
  border-radius: 25px;
  text-align: center;
  box-shadow: 10px 10px 20px black;
`;

export const __TopPetCard = styled.article`
`;

export const __BottomPetCard = styled.article`
`;

export const __InactivePetCard = styled.figure`
  display: flex;
  border: .1em solid red;
  padding: 1em;
  margin: 1.4em .5em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 400ms ease-in-out;
  font-size: 1.75rem;
  &:hover {
    /* transform: scale(1.5); */
    -4-webkit-transform: translate3d(0,0,3);
  }
`;