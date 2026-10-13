@echo off
setlocal enabledelayedexpansion

echo ===================================================
echo   Mozharul Portfolio - GitHub Pages Deploy Helper
echo ===================================================
echo Target Repo: https://github.com/Moz8ha8rul/Moz8ha8rul.github.io
echo.

where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [!] Git is not found in your system PATH.
    echo.
    echo Would you like to automatically install Git using Windows Package Manager (winget)?
    set /p INSTALL_CHOICE="Type Y to install Git, or N to cancel [Y/N]: "
    if /i "!INSTALL_CHOICE!"=="Y" (
        echo Installing Git... please wait.
        winget install --id Git.Git -e --source winget --accept-source-agreements --accept-package-agreements
        echo.
        echo [OK] Git installation complete. Please close this window and run deploy-helper.bat again.
        pause
        exit /b 0
    ) else (
        echo.
        echo [INFO] You can also deploy without Git:
        echo 1. Open https://github.com/Moz8ha8rul/Moz8ha8rul.github.io
        echo 2. Click 'Add file' -^> 'Upload files'
        echo 3. Drag and drop all files from this folder and click 'Commit changes'.
        pause
        exit /b 0
    )
)

echo [1/5] Checking Git repository initialization...
if not exist ".git" (
    git init
    echo [OK] Initialized new Git repository.
) else (
    echo [OK] Existing Git repository detected.
)

echo [2/5] Staging files...
git add .

echo [3/5] Creating commit...
git commit -m "feat: deploy portfolio website with Better Stack theme"

echo [4/5] Configuring main branch & remote...
git branch -M main
git remote remove origin >nul 2>nul
git remote add origin https://github.com/Moz8ha8rul/Moz8ha8rul.github.io.git

echo [5/5] Pushing to GitHub Pages (main branch)...
echo.
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ===================================================
    echo   [SUCCESS] Portfolio successfully pushed to GitHub!
    echo   Your website will be live in 1-2 minutes at:
    echo   👉 https://moz8ha8rul.github.io/
    echo ===================================================
) else (
    echo.
    echo [!] Push encountered an issue. If prompted for GitHub login, please sign in.
    echo Alternatively, if your remote repo has existing files, run:
    echo   git pull origin main --allow-unrelated-histories
    echo   git push -u origin main
)

echo.
pause
