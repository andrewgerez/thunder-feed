import styled from "styled-components";

export const comment = styled.div `
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
  }
`;

export const commentBox = styled.div`
  flex: 1;

  footer {
    margin-top: 1rem;
  }
`;

export const LikeButton = styled.button`
  background: transparent;
  border: 0;
  color: var(--gray-400);
  cursor: pointer;
  border-radius: 87px;

  span {
    font-size: 1rem;

    ::before {
      content: "•";
      padding: 0 0.25rem;
    }
  }

  :hover {
    color: var(--blue-300);
    transition: .1s all;
    transform: scale(1.04);
  }
`;

export const commentContent = styled.div `
  background: var(--gray-700);
  border-radius: 8px;
  padding: 1rem;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  
  button {
    height: 20px;
    background: transparent;
    border: 0;
    color: var(--gray-400);
    cursor: pointer;
    line-height: 0;
    border-radius: 4px;

    :hover {
      transform: scale(1.1);
      filter: drop-shadow(0 0 2px black);
      transition: .1s all;
    }

    p {
      margin-top: 1rem;
      color: var(--gray-300);
    }
}
`;

export const authorAndTime = styled.div `
  strong {
    display: block;
    font-size: 0.875rem;
    line-height: 1.6;
    cursor: pointer;
  }

  time {
    display: block;
    font-size: 0.75rem;
    line-height: 1.6;
    color: var(--gray-400);
  }
`;
