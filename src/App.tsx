import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';
import { Sidebar } from './components/Sidebar/Sidebar';
import './global.css';
import * as S from './styles'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/drewdevelopment.png',
      name:'Andrew Gerez',
      role: 'Front-end Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Faaala, galera! 🦇',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto de posts e comentários em um feed. O nome do projeto é ThunderFeed. ⚡',},
      { type: 'link', content: 'github.com/drewdevelopment',},
    ],
    publishedAt: new Date('2023-05-30 23:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://i.imgur.com/xxYJAi1.png',
      name:'Drew Developer',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Eai pessoal, tudo certo? 👋',},
      { type: 'paragraph', content: 'Meu nome é Andrew, tenho 18 anos e atuo como Front-End de TVs na Watch Brasil. Espero poder compartilhar e adquirir conhecimento aqui junto com vocês! 🚀',},
      { type: 'link', content: 'github.com/drewdevelopment',},
    ],
    publishedAt: new Date('2023-05-31 18:00:00'),
  },
];

export function App() {

  return (
    <>
      <Header />
      <S.wrapper>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </S.wrapper>
    </>

  )
}
