import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import postLecueNote from '../api/postLecueNote';
import { postLecueNoteProps } from '../type/lecueNoteType';

const usePostLecueNote = () => {
  const mutation = useMutation({
    mutationFn: ({
      contents,
      color,
      fileName,
      bgColor,
      isIconClicked,
      setModalOn,
      setUuid,
    }: postLecueNoteProps) => {
      return postLecueNote({
        contents,
        color,
        fileName,
        bgColor,
        isIconClicked,
        setModalOn,
        setUuid,
      });
    },
    onError: (err: AxiosError) => console.log(err),
  });
  return mutation;
};

export default usePostLecueNote;
