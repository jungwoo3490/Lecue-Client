import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { patchNickname } from '../api/patchNickname';
import { isValidState } from '../page';

interface patchNicknameProps {
  token: string;
  nickname: string;
}

interface usePatchNicknameProps {
  setIsValid: React.Dispatch<React.SetStateAction<isValidState>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const usePatchNickname = (props: usePatchNicknameProps) => {
  const { setIsValid, setIsActive } = props;

  // const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async ({ token, nickname }: patchNicknameProps) => {
      return await patchNickname(token, nickname);
    },
    onError: (err: AxiosError) => {
      const code = err.response?.status;
      if (code === 409) {
        // 중복의 경우
        setIsValid('duplicate');
        setIsActive(false);
      } else {
        console.error('usePatchNickname', err.response?.data);
        // error페이지 띄우기
      }
    },
  });
  return mutation;
};

export default usePatchNickname;
