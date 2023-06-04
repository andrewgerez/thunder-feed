import styled from "styled-components";

interface IAvatar {
  hasBorder: boolean;
}

export const avatar = styled.img<IAvatar>`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  border: ${({ hasBorder }) => hasBorder 
  ? '4px solid var(--gray-800)' 
  : 0};
  outline: ${({ hasBorder }) => hasBorder 
  ? '2px solid var(--blue-500)' 
  : 'none'};
  cursor: pointer;
`;
