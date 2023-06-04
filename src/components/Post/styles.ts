import styled from "styled-components";

export const post = styled.article `
  background: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;
  margin-bottom: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  header time {
    font-size: 0.875rem;
    color: var(--gray-400);
  }
`;

export const content = styled.div `
  line-height: 1.6;
  color: var(--gray-300);
  margin-top: 1.5rem;

  a {
    font-weight: bold;
    color: var(--red-600);
    text-decoration: none;

    :hover {
      color: var(--red-700);
      transition: .1s all;
    }
  }

  p {
    margin-top: 1rem;
  }
`;

export const author = styled.div `
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const authorInfo = styled.div` 

  strong {
    display: block;
    color: var(--gray-100);
    line-height: 1.6;
    cursor: pointer;
  }

  span {
    display: block;
    font-size: 0.875rem;
    color: var(--gray-400);
    line-height: 1.6;
  }
`;

export const commentForm = styled.form `
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--gray-600);

  strong {
    line-height: 1.6;
    color: var(--gray-100);
  }

  textarea {
    width: 100%;
    height: 6rem;
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 8px;
    background: var(--gray-900);
    color: var(--gray-100);
    border: 0;
    resize: none;
    line-height: 1.4;
  }
`;

interface IPublishButton {
  disabledButtonStyle: boolean;
}

export const PublishButton = styled.button<IPublishButton>`
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  border-radius: 8px;
  border: 0;
  background: var(--blue-500);
  color: var(--white);
  font-weight: bold;
  cursor: ${({ disabledButtonStyle }) => disabledButtonStyle === true 
  ? 'not-allowed' 
  : 'pointer'};
  opacity: ${({ disabledButtonStyle }) => disabledButtonStyle === true 
  ? '0.5' 
  : '1'};

  :hover {
    background: var(--blue-300);
    transition: .1s all;
  }

  footer {
    visibility: hidden;
    max-height: 0;
  }

  :focus-within footer {
    visibility: visible;
    max-height: none;
  }
`;

export const commentList = styled.div `
  margin-top: 2rem;
`;