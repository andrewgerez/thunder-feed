import * as S from './styles';
import thunderLogo from '../../assets/logo-thunder.png'

export const Header = () => {
  return (
    <S.header>
      <img src={thunderLogo} alt='Logo da Plataforma' />  
    </S.header>
  );
}