# 프로젝트 구성

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
  },
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