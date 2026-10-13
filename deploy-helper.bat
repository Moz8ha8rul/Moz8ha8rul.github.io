@echo off
setlocal enabledelayedexpansion

echo ===================================================
echo   Mozharul Portfolio - GitHub Pages Deploy Helper
echo ===================================================
echo Target Repo: https://github.com/Moz8ha8rul/Moz8ha8rul.github.io
echo.

set "GIT_CMD=git"
where git >nul 2>nul
if %errorlevel% neq 0 (
    if exist "C:\Users\KHAN GADGET\AppData\Local\Microsoft\WinGet\Packages\Git.MinGit_Microsoft.Winget.Source_8wekyb3d8bbwe\cmd\git.exe" (
        set "GIT_CMD=C:\Users\KHAN GADGET\AppData\Local\Microsoft\WinGet\Packages\Git.MinGit_Microsoft.Winget.Source_8wekyb3d8bbwe\cmd\git.exe"
        echo [OK] Located Git at: !GIT_CMD!
    ) else (
        echo [!] Git was not found in your current PATH.
        echo Installing MinGit...
        winget install --id Git.MinGit -e --source winget --accept-source-agreements --accept-package-agreements
        set "GIT_CMD=C:\Users\KHAN GADGET\AppData\Local\Microsoft\WinGet\Packages\Git.MinGit_Microsoft.Winget.Source_8wekyb3d8bbwe\cmd\git.exe"
    )
)

echo [1/5] Checking Git repository initialization...
if not exist ".git" (
    "!GIT_CMD!" init
    echo [OK] Initialized new Git repository.
) else (
    echo [OK] Existing Git repository detected.
)

"!GIT_CMD!" config user.name "Moz8ha8rul"
"!GIT_CMD!" config user.email "mozharul.dev@gmail.com"

echo [2/5] Staging files...
"!GIT_CMD!" add .

echo [3/5] Creating commit...
"!GIT_CMD!" commit -m "feat: complete portfolio website with Better Stack theme and official brand logos"

echo [4/5] Configuring main branch & remote...
"!GIT_CMD!" branch -M main
"!GIT_CMD!" remote remove origin >nul 2>nul
"!GIT_CMD!" remote add origin https://github.com/Moz8ha8rul/Moz8ha8rul.github.io.git

echo [5/5] Pushing to GitHub Pages (main branch)...
echo.
"!GIT_CMD!" push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ===================================================
    echo   [SUCCESS] Portfolio successfully pushed to GitHub!
    echo   Your website will be live in 1-2 minutes at:
    echo   👉 https://moz8ha8rul.github.io/
    echo ===================================================
) else (
    echo.
    echo [!] If GitHub prompted you to sign in, please complete the sign-in window.
    echo You can also deploy in 10 seconds via GitHub Web Upload:
    echo 1. Open https://github.com/Moz8ha8rul/Moz8ha8rul.github.io
    echo 2. Click 'Add file' -^> 'Upload files'
    echo 3. Drag and drop all files from this folder and click 'Commit changes'.
)

echo.
pause
