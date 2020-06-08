import styled from 'styled-components';

export const Container = styled.section`
  margin: 30px 0 20px 0;
`;

export const SearchEngine = styled.div`
  display: flex;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #dadada;
  border-radius: 24px;
  background: #fff;

  &:hover {
    -webkit-box-shadow: 0px 0px 6px 0px #a6a6a6;
    -moz-box-shadow: 0px 0px 6px 0px #a6a6a6;
    box-shadow: 0px 0px 6px 0px #a6a6a6;
  }

  &:focus-within {
    -webkit-box-shadow: 0px 0px 6px 0px #ec38dd;
    -moz-box-shadow: 0px 0px 6px 0px #ec38dd;
    box-shadow: 0px 0px 6px 0px #ec38dd;
  }

  input {
    width: 100%;
    min-width: 105px;
    margin: 0 0 0 20px;
    font-size: 15px;
    border: none;
    outline: none;
  }

  svg {
    margin: 5px;
    padding: 10px;
    font-size: 36px;
    color: #a6a6a6;
    cursor: pointer;
  }
`;

export const SearchEngineStickyStyle = {
  padding: '12px 0',
  background:
    'radial-gradient(circle,rgba(33, 34, 28, 1) 60%,rgba(236, 56, 221, 1) 100%)',
};

export const Loader = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);

  svg {
    color: #000;
  }
`;

export const Images = styled.div`
  margin: 50px 20px 30px 20px;
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
