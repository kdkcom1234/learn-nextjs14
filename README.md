# PROJECT SETUP

## 프로젝트 초기화

```shell
npm init -y
```

### package.json

```json
{
  "license": "MIT"
}
```

## 의존성 설치

```shell
npm install react@latest react-dom@latest next@latest
```

### package.json

```json
{
  "scripts": {
    "dev": "next dev"
  }
}
```

## 기본 페이지 생성

- app/pages.tsx

```tsx
export default function Tomato() {
  return <h1>Hello NextJS!</h1>;
}
```

## 개발서버 실행

```shell
# typescript 설정 및 필요한 환경 구성 후 localhost:3000에 서버를 띄움
# 첫 페이지는 app/page.tsx가 로딩됨
npm run dev
```

---

# ROUTING

## 파일시스템 기반 라우팅

- 폴더 경로 아래에 page.tsx를 로딩, 없다면 404 응답
  - 예) app/about-us/page.tsx -> /about-us
  - 예) app/about-us/company/sales/page.tsx -> /about-us/company/sales
- page.tsx 파일이 아닌 경우에는 폴더 경로가 있어서 처리하지 않음(404응답)
  - 예) app/about-us/components/avatar.tsx

## not found 페이지

- app/not-found.tsx에 작성

## 페이지 이동 처리

```tsx
import Link from "next/link";
<Link href="/about-us">About Us</Link>;
```

## Route Group

- (루트명)의 형태로 폴더를 생성, 루트를 생성하지 않음
- 논리적으로 경로를 그룹핑하기 위한 것
  https://nextjs.org/docs/app/building-your-application/routing/route-groups
- 예)
  - (marketing)/about -> /about
  - (marketing)/blog -> /blog
  - (shop)/account -> /account

## Dynamic Routes

- [매개변수명]형태의 폴더명으로 작성
- movies/[id]/page.tsx
- {params: {매개변수1, 매개변수2... }} 형태의 props로 받을 수 있음

```tsx
export default function MovieDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <h1>Movie {id}</h1>;
}
```

---

# Layout

## RootLayout

- app/layout.tsx 파일

## ChildLayout

- app/세부경로/layout.tsx 파일
- 예) app/about-us/layout.tsx
  - /about-us, /about-us/company 경로 모두 해당 레이아웃이 적용됨

## Layout 중첩

- RootLayout -> ChildLayout1 > ChildLayout2 .. -> Page

## Metadata

- head영역에 들어가는 메타 태그 속성을 넣을 때 사용
- Layout 또는 Page에 삽입가능
- RootLayout -> ChildLayout -> Page 순으로 병합됩니다.

```tsx
// app/layout
export const metadata: Metadata = {
  // 템플릿을 사용, 하위 경로에 metadata.title 문자열이 %s에 병합됨
  title: { template: "%s | Next Movies", default: "Next Movies" },
  description: "The best moviews on best framework",
};

// app/(home)/page.tsx
// <title>Home | Next Movies</title>
export const metadata: Metadata = {
  title: "Home",
};

// app/about-us/page.tsx
// <title>About us | Next Movies</title>
export const metadata: Metadata = {
  title: "About us",
};
```

---

# Data Fetching

- https://nomad-movies.nomadcoders.workers.dev/

## Server Side Fetching

- API호출 함수를 바로 호출하여 바인딩, 서버 사이드에서 호출됨
- URL이 변경되지 않으면 데이터가 캐시되어 다시 페이지에 왔을 때 이전 데이터가 보여짐

```tsx
async function getMovies() {
  // URL이 변경되지 않으면, 첫번째 호출을 캐싱한 데이터를 사용.
  // const response = await fetch(URL);
  const response = await fetch(URL + "?t=" + new Date().getTime());
  return response.json();
}

export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
```

## Loading Component

- page 파일에 상응하는 경로에 loading.tsx를 추가함으로써 해당 페이지가 로딩 중일때 표시할 수 있음
  - 예) (home)/page.tsx -> /
  - (home)/loading.tsx -> / 경로가 로딩중일 때 페이지의 영역에 표시됨, 레이아웃영역은 바로 표시
- page 컴포넌트가 async 함수여야함. 페이지외의 부분에 대해서 응답을 주고, 페이지 로딩이 끝나면 컨텐츠를 스트리밍함

## Promise all

- 병렬로 모든 promise 함수 실행, 모든 함수가 완료될 때 resolve

```tsx
const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
```

## Suspense

- 컴포넌트가 로딩 중일 때 fallback 컴포넌트를 보여줌

```tsx
// MovieDetailPage
<Suspense fallback={<h1>Loading movie info</h1>}>
  <MovieInfo id={id} />
</Suspense>;

// MovieInfo
import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
```
