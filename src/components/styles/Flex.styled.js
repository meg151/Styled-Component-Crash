import styled from 'styled-components';

export const Flex = styled.dev`
  display: flex;
  align-items: ccenter;

  & > div,
  & > ul {
    flex: 1;
  }
`;
