# Jewish Bible Calendar v6 - Service Worker Kill Switch

## 원인
이전 service worker가 브라우저에 남아 예전 index.html을 먼저 보여주고 있었습니다.
v5에서 service-worker.js 파일을 제거했지만, 이미 설치된 브라우저에서는 예전 service worker가 계속 살아남을 수 있습니다.

## 해결
이번 v6는 service-worker.js를 없애지 않고, 같은 위치에 '삭제 전용 service worker'를 올립니다.
기존 service worker가 이 파일로 업데이트되면:
- 기존 Cache Storage 삭제
- 자신을 unregister
- 열린 페이지에 최신 새로고침 요청

## 업로드 후 열 주소
https://ok9255-beep.github.io/jewish-bible-calendar/?fresh=jbc-v6-kill-sw-20260628

그래도 예전 화면이 보이면:
https://ok9255-beep.github.io/jewish-bible-calendar/reset-cache.html
