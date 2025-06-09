import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="세계 1위 인공지능 사주팔자 운세박사에서 AI 사주, 해몽, 운세, 작명, 궁합을 봐보세요! 인공지능으로 정확한 운세를 점쳐보세요. 오늘의 운세, 연애운, 애정운, 금전운, 연애상담, 고민상담을 받아보세요."
        />
        <meta
          property="og:title"
          content="운세박사 - AI 사주, 인공지능 운세, 궁합, 작명, 해몽"
        />
        <meta
          property="og:description"
          content="세계 1위 인공지능 사주팔자 운세박사에서 AI 사주, 해몽, 운세, 작명, 궁합을 봐보세요! 인공지능으로 정확한 운세를 점쳐보세요. 오늘의 운세, 연애운, 애정운, 금전운, 연애상담, 고민상담을 받아보세요."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content="Saju Visualizer" />
        <link rel="icon" href="/images/favicon.ico" />
        <meta property="og:image" content="/images/og_1200x630.png" />
        <meta
          property="og:image:alt"
          content="운세박사 - 청담동 점짐, 프리미엄 사주, 신년운세, 오늘의 운세"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
