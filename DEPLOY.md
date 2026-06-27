# 유대력 성경 달력 PWA 공개 배포 v1

이 폴더는 공개 배포용 PWA 구조입니다.

## 폴더 구조

```text
jewish-bible-calendar-pwa-public-v1/
  index.html
  manifest.webmanifest
  service-worker.js
  .nojekyll
  assets/
    icon.svg
    icon-192.png
    icon-512.png
    parchment.svg
  data/
    nt-fulfillment-plan.sample.json
  src/
    app.js
    styles.css
```

## 로컬 테스트

압축을 푼 폴더 안에서 터미널을 열고 실행하세요.

```bash
python -m http.server 8080
```

브라우저에서 엽니다.

```text
http://localhost:8080
```

## GitHub Pages 배포

1. GitHub에서 새 저장소를 만듭니다.
2. 이 폴더 안의 파일 전체를 저장소 루트에 업로드합니다.
3. 저장소 Settings → Pages로 이동합니다.
4. Branch를 `main`, folder를 `/root`로 선택합니다.
5. 몇 분 후 공개 주소가 생성됩니다.

## Firebase Hosting 배포

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

`public` 폴더를 물어보면 이 폴더를 기준으로 배포하거나, 이 폴더 내용을 Firebase의 public 폴더 안에 넣어 배포하세요.

## 공개 전 확인할 것

- 영어/한국어 메뉴 전환
- 주간 보기 / 달력 보기
- 하단 탭 이동 표시
- 메뉴 버튼 열림/닫힘
- 저작권/출처 문구
- 모바일 홈 화면 추가
- Hebcal API 데이터 로딩

## 현재 Stage 1 범위

- 유대력 절기 및 날짜별 성경 읽기 범위 표시
- 한국어/영어 UI
- 공개 배포 가능한 PWA 기본 구조
- 성경 본문 전체는 아직 포함하지 않음
