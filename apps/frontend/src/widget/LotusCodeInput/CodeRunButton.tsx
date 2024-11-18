import { Button } from '@froxy/design/components';
import { useQueryClient } from '@tanstack/react-query';
import { LotusRunCodeForm } from './LotusRunCodeForm';
import { useCodeRunMutation } from '@/feature/History/query';
import { ModalBox } from '@/shared/components/Overlay';
import { useOverlay } from '@/shared/hooks/useOverlay';

export function CodeRunButton({ lotusId }: { lotusId: string }) {
  const { open, close } = useOverlay();

  const { mutate } = useCodeRunMutation();

  const queryClient = useQueryClient();

  const handleCodeRun = ({ execFileName, inputs }: { execFileName: string; inputs: string[] }) => {
    mutate(
      { lotusId, input: inputs, execFileName },
      {
        onSuccess: () => {
          close();
          console.log('생성!');
          queryClient.invalidateQueries({ queryKey: ['lotus', 'detail', lotusId, 'history'] });
        }
      }
    );
  };

  const handleOpenModal = () =>
    open(
      <ModalBox onClose={close}>
        <LotusRunCodeForm onCancel={() => close()} onSubmit={handleCodeRun} lotusId={lotusId} />
      </ModalBox>
    );

  return <Button onClick={handleOpenModal}>실행하기</Button>;
}
