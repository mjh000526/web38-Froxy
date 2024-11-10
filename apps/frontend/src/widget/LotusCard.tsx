// 여기에 로투스 카드 넣기
import { Lotus } from '@/feature/Lotus/Lotus';
import { LotusType } from '@/feature/Lotus/type';

const LotusDummyData: LotusType = {
  link: 'https://example.com',
  title: 'Understanding TypeScript',
  logo: '/src/shared/asset/image/exampleImage.jpeg',
  createAt: new Date('2024-11-10'),
  tags: ['typescript', 'programming', 'tutorial'],
  author: 'Jane Doe'
};

export function LotusCard() {
  return (
    <div className="w-full grid grid-cols-3 gap-[2rem]">
      {new Array(10).fill(0).map((_, index) => (
        <Lotus lotus={LotusDummyData} key={index}>
          <Lotus.Link className="w-full p-5 border-2 border-[#D9D9D9] rounded-[1rem]">
            <Lotus.Title className="text-4xl text-[#1C1D22]" />
            <Lotus.Author className="text-[rgba(28,29,34,0.5)]" />
            <div className="mt-[2rem] w-full flex justify-between items-end">
              <Lotus.CreateDate className="text-[#888DA7] bg-[rgba(136,141,167,0.1)] px-[1rem] py-[0.5rem] rounded-3xl" />
              <Lotus.Logo />
            </div>
          </Lotus.Link>
        </Lotus>
      ))}
    </div>
  );
}
