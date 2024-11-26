import { useSuspenseQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components';
import { CodeView } from '@/feature/codeView';
import { lotusQueryOptions } from '@/feature/lotus';

export function SuspenseLotusFiles({ id }: { id: string }) {
  const {
    data: { files }
  } = useSuspenseQuery(lotusQueryOptions.detail({ id }));

  const readmeIndex = files.findIndex(({ filename }) => filename === 'README.md');

  const firstMdIndex = files.findIndex(({ filename }) => filename.endsWith('.md'));

  const defaultIndex = readmeIndex > 0 ? readmeIndex : firstMdIndex > 0 ? firstMdIndex : 0;

  return (
    <CodeView value={files} current={defaultIndex}>
      <div className="flex github gap-4 w-full h-[600px] pb-10 px-2 overflow-hidden">
        <CodeView.SideBar className="h-full min-w-48" />
        <CodeView.Viewer className="block h-full" />
      </div>
    </CodeView>
  );
}

export function LotusFileSkeleton() {
  return (
    <div className="flex github gap-4 w-full h-[600px] pb-10 px-2 overflow-hidden">
      <Skeleton className="h-full min-w-48" />
      <Skeleton className="h-full w-full" />
    </div>
  );
}

SuspenseLotusFiles.Skeleton = LotusFileSkeleton;
