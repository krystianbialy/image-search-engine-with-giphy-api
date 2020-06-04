import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 80px;
  color: #fff;
  background: radial-gradient(
    circle,
    rgba(33, 34, 28, 1) 60%,
    rgba(236, 56, 221, 1) 100%
  );

  @media (min-width: 480px) {
    background: radial-gradient(
      circle,
      rgba(33, 34, 28, 1) 40%,
      rgba(236, 56, 221, 1) 100%
    );
  }
`;

export const HeaderTitle = styled.h1`
  text-align: center;
  padding-top: 20px;
`;
