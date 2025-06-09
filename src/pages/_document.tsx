import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="AI 사주풀이 웹서비스 포트폴리오입니다. 십성, 천간, 지지 정보를 시각적으로 제공합니다."
        />
        <meta property="og:title" content="AI 사주풀이 웹서비스" />
        <meta
          property="og:description"
          content="직관적인 명리 구성표와 사용자 친화적인 인터페이스로 사주 정보를 전달하는 프로젝트입니다."
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
