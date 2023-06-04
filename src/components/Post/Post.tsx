import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import * as S from './styles';
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment';

interface Line {
  type: string;
  content: string;
}

interface PostProps {
  author: {
    avatarUrl: string,
    name: string,
    role: string,
  };
  publishedAt: Date;
  content: Line[];
}

export const Post = ({ author, publishedAt, content }: PostProps) => {
  const [comments, setComments] = useState(['Post muito massa, hein?',]);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('');
    setNewCommentText(e.currentTarget.value);
  }

  function handleNewCommentInvalid(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('Esse campo é obrigatório. :/');
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithouDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithouDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <S.post>
      <header>
        <S.author>
          <Avatar hasBorder src={author.avatarUrl} />
          <S.authorInfo>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </S.authorInfo>
        </S.author>

        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <S.content>
        {content.map((line: Line, idx: number) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={idx}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
          return null;
        })}
      </S.content>

      <S.commentForm onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback!</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário:"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <S.PublishButton 
            type="submit" 
            disabled={isNewCommentEmpty}
            disabledButtonStyle={isNewCommentEmpty ? true : false}
          >
            Publicar
          </S.PublishButton>
        </footer>
      </S.commentForm>

      <S.commentList>
        {comments.map((comment) => {
          return (
            <Comment 
              content={comment} 
              key={comment}
              onDeleteComment={deleteComment} 
            />
          )
        })}
      </S.commentList>
    </S.post>
  );
}