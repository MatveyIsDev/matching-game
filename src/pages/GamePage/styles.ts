import styled from 'styled-components';

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-gap: 0.5rem;
  @media (max-width: 980px) {
    grid-template-columns: 200px 200px 200px 200px;
  }
`;
