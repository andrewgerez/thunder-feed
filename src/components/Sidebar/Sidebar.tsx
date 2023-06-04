import { Avatar } from '../Avatar/Avatar';
import * as S from './styles';

export const Sidebar = () => {
  return (
    <S.sidebar>
      <S.cover src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />

      <S.profile>
        <Avatar hasBorder src="https://i.pinimg.com/736x/e7/5c/e4/e75ce4f222634690d1afc38a761fb413.jpg" />

        <strong>Elliot Alderson</strong>
        <span>CyberSecurity Engineer</span>
      </S.profile>

      <footer>
        <a href="#">
          ✏️
          Editar seu perfil
        </a>
      </footer>
    </S.sidebar>
  );
}