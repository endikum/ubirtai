@echo off
echo UBIRT.AI Git Sync Tool
echo =======================

echo 1. Pulling latest changes from GitHub...
git pull origin main

echo 2. Staging all local changes...
git add .

echo 3. Committing changes...
set /p msg="Enter commit message (or press enter for 'Auto-sync'): "
if "%msg%"=="" set msg="Auto-sync"
git commit -m "%msg%"

echo 4. Pushing to GitHub...
git push origin main

echo.
echo =======================
echo Sync Complete!
pause
