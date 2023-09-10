import styled from 'styled-components';

export const InputComponent = styled.input`
  font-family: fantasy;
  letter-spacing: 1px;
  font-size: 24px;
  input: focus;
  select: focus;
  textarea: focus;
  button:focus {
    background-color: transparent;
    outline: none;
  }
  @media (max-width: 980px) {
    font-size: 90px;
  }
`;
