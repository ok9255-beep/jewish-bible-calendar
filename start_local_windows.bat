@echo off
cd /d "%~dp0"
echo Starting Jewish Bible Calendar PWA on http://localhost:8080
echo Keep this window open while testing.
python -m http.server 8080
pause
