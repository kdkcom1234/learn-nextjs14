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
