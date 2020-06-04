import styled from 'styled-components';

export const Grid = styled.div`
  @media (min-width: 1260px) {
    display: grid;
    grid-template-columns: 1fr repeat(2, minmax(auto, 38em)) 1fr;
  }
`;

export const GridColumn = styled.div`
  @media (min-width: 1260px) {
    grid-column: 2/4;
  }
`;
