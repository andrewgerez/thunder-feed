import styled from "styled-components";

export const sidebar = styled.div `
  background: var(--gray-800);
  border-radius: 0.5rem;
  overflow: hidden;

  footer {
    border-top: 1px solid var(--gray-600);
    margin-top: 1.5rem;
    padding: 1.5rem 2rem 2rem;
  }

  footer a {
    background: transparent;
    color: var(--blue-500);
    border: 1px solid var(--blue-500);
    border-radius: 8px;
    height: 50px;
    padding: 0 1.5rem;
    font-weight: bold;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.75rem;
  }

  footer a:hover {
    background: var(--blue-500);
    color: var(--white);
    transition: .1s all;
  }
`;

export const cover = styled.img `
  width: 100%;
  height: 4.5rem;
  object-fit: cover;
`;

export const profile = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    margin-top: 1rem;
    color: var(--gray-100);
    line-height: 1.6;
  }

  span {
    font-size: 0.87rem;
    color: var(--gray-400);
    line-height: 1.6;
  }
`;
