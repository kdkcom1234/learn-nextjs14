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

---

# 라우팅

## 파일시스템 기반 라우팅
- 폴더 경로 아래에 page.tsx를 로딩, 없다면 404 응답
  - 예) app/about-us/page.tsx -> /about-us
  - 예) app/about-us/company/sales/page.tsx -> /about-us/company/sales
- page.tsx 파일이 아닌 경우에는 폴더 경로가 있어서 처리하지 않음(404응답)
  - 예) app/about-us/components/avatar.tsx

