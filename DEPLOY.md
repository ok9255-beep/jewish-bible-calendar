# 배포 안내

이 버전은 GitHub Pages 안전 배포용입니다.

- index.html 안에 CSS/JS가 들어 있어 화면이 글자만 나오는 문제를 줄입니다.
- manifest.webmanifest와 service-worker.js는 PWA 설치와 캐시를 위해 유지합니다.
- assets, data, src 폴더도 함께 포함되어 있습니다.

업로드 후:
1. GitHub 저장소 Code 화면에서 Add file → Upload files
2. 이 폴더 안의 전체 파일/폴더 업로드
3. Commit changes
4. 1~3분 후 앱 주소에서 Ctrl + F5
