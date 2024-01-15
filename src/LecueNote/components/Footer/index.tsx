import Button from '../../../components/common/Button';
import postLecueNote from '../../api/postLecueNote';
import { FooterProps } from '../../type/lecueNoteType';
import * as S from './Footer.style';

function Footer({ contents, fileName, textColor, bgColor }: FooterProps) {
  const color = textColor === '#FFF' ? 1 : 0;

  const handleClickBtn = () => {
    postLecueNote({
      contents: contents,
      color: color,
      fileName: fileName,
      bgColor: bgColor,
    });
  };

  return (
    <S.Wrapper>
      <Button
        variant="complete"
        disabled={contents.length === 0}
        onClick={handleClickBtn}
      >
        작성 완료
      </Button>
    </S.Wrapper>
  );
}

export default Footer;
