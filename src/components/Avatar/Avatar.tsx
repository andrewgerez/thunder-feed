import * as S from './styles'

interface AvatarProps {
  hasBorder: boolean;
  src: string;
}

export const Avatar = ({ hasBorder, src }: AvatarProps) => {
  return (
    <S.avatar src={src} hasBorder={hasBorder} />
  );
}