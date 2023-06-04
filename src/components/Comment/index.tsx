import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import * as S from './styles';

interface CommentProps {
  content: string;
  onDeleteComment(
    commentToDelete: string
  ): void;
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <S.comment>
      <Avatar hasBorder={false} src="https://i.pinimg.com/736x/e7/5c/e4/e75ce4f222634690d1afc38a761fb413.jpg" />

      <S.commentBox>
        <S.commentContent>
          <header>
            <S.authorAndTime>
              <strong>Elliot Alderson</strong>
              <time title="30 de Maio às 23:01" dateTime="2023-05-30 23:01:00">Cerca de 1h atrás</time>
            </S.authorAndTime>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              🗑️
            </button>
          </header>

          <p>{content}</p>
        </S.commentContent>

        <footer>
          <S.LikeButton onClick={handleLikeComment}>
          💜 Reagir 
          <span>{likeCount}</span>  
          </S.LikeButton>

        </footer>
      </S.commentBox>
    </S.comment>
  );
}