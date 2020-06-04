import styled from 'styled-components';

export const Container = styled.section`
  margin: 30px 0 20px 0;
`;

export const SearchEngine = styled.div`
  display: flex;
  width: 85%;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #dadada;
  border-radius: 24px;

  &:hover {
    -webkit-box-shadow: 0px 0px 6px 0px #a6a6a6;
    -moz-box-shadow: 0px 0px 6px 0px #a6a6a6;
    box-shadow: 0px 0px 6px 0px #a6a6a6;
  }

  &:focus-within {
    -webkit-box-shadow: 0px 0px 6px 0px #3f518d;
    -moz-box-shadow: 0px 0px 6px 0px #3f518d;
    box-shadow: 0px 0px 6px 0px #3f518d;
  }

  input {
    width: 100%;
    min-width: 105px;
    margin: 0 0 0 20px;
    border: none;
  }

  svg {
    margin: 15px;
    color: #a6a6a6;
  }
`;

export const Loader = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Images = styled.div`
  margin: 30px 20px;
`;

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-auto-rows: minmax(auto, 230px);
  grid-gap: 15px;
  grid-auto-flow: dense;

  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: minmax(auto, 150px);
  }

  a {
    @media (min-width: 480px) {
      &:nth-child(2n) {
        grid-column-start: span 2;
      }

      &:nth-child(4n) {
        grid-row-start: span 2;
        grid-column-start: span 2;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
