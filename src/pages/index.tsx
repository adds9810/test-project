import Head from "next/head";
import Image from "next/image";
import { SajuTable } from "@/components/SajuTable";

export default function Home() {
  return (
    <>
      <Head>
        <title>운세박사 - AI 사주, 인공지능 운세, 궁합, 작명, 해몽</title>
      </Head>
      <div className="flex flex-col text-center w-full max-w-md m-auto">
        {/* 1단락 */}
        <div className="relative w-full pb-[calc(21/375*100%)]">
          <Image
            className="w-full"
            src="/images/1.png"
            alt="1단락 이미지"
            width={375}
            height={752}
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-between pt-[calc(84/375*100%)] text-center">
            <h2 className="flex flex-col gap-[44px] text-[20px] leading-none letter-spacing-[-0.5%] text-white bg-[url('/images/1-2.png')] bg-contain bg-center bg-no-repeat ">
              <span className="font-normal">제 1장</span>
              <span className="font-normal">나의 사주 팔자</span>
            </h2>
            <div className="relative inline-block self-baseline w-[calc(257/375*100%)] pt-[calc(181/375*100%)]  bg-[url('/images/1-1.png')] bg-cover bg-center bg-no-repeat">
              <p className="absolute top-1/2 -translate-y-1/2 left-0 w-full mt-[calc(10/257*100%)] justify-center items-center flex flex-col  text-[16px] leading-normal">
                <span className="block">이제 본격적으로 </span>
                <span className="block">OO님의 사주팔자를 </span>
                <span className="block">분석해볼 차례네요.</span>
              </p>
            </div>
          </div>
        </div>

        {/* 2단락 */}
        <div className="mr-[calc(24/375*100%)]">
          <Image
            className="w-full block"
            src="/images/2.png"
            alt="2단락 이미지"
            width={351}
            height={285}
            priority
          />
        </div>

        {/* 3단락 */}
        <div className="flex flex-col w-full items-center justify-between mt-[calc(-84/375*100%)] pb-[calc(80/375*100%)]">
          <div className="relative inline-block self-baseline w-[calc(281/375*100%)] pt-[calc(181/375*100%)] bg-[url('/images/3-1.png')] bg-cover bg-center bg-no-repeat">
            <p className="absolute top-1/2 -translate-y-1/2 left-0 w-full mt-[calc(-10/257*100%)] justify-center items-center flex flex-col text-[16px] leading-normal ">
              <span className="block">제가 oo님의 사주를 </span>
              <span className="block">보기 쉽게 표로 정리했어요</span>
            </p>
          </div>
          <Image
            className="w-full mt-[calc(-59/375*100%)]"
            src="/images/3.png"
            alt="2단락 이미지"
            width={351}
            height={285}
            priority
          />
          <div
            className="relative z-10 mx-auto w-full max-w-[calc(351/375*100%)] mt-[calc(-24/375*100%)] border-3 border-[#1B2F49] bg-[#F5F3EC] py-[calc(40/375*100%)] px-[calc(20/375*100%)] flex flex-col gap-[26px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] before:absolute before:top-0 before:left-1/2 before:-z-10 before:-translate-x-1/2 before:border-x-1 before:w-[calc(100%-16px)] before:h-full before:border-[#2B557E] before:bg-[url('/images/3-2.jpg')] before:bg-top before:bg-center before:bg-size-[100%] before:bg-no-repeat before:content-['']
    after:absolute after:top-1/2 after:-z-10 after:left-0 after:-translate-y-1/2 after:border-y-1 after:w-full after:h-[calc(100%-16px)] after:border-[#2B557E] after:content-['']
    "
          >
            <div className="flex flex-col gap-3 font-korean text-center leading-none">
              <h3 className="text-[16px]">김로켓님의 사주</h3>
              <p className="font-bold text-[20px]">1980년 8월27일 08:10</p>
            </div>
            <SajuTable />
          </div>
        </div>
      </div>
    </>
  );
}
