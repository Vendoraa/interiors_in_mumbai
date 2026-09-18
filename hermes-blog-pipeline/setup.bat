@echo off
echo Installing Shrishti Interiors Blog Pipeline for Hermes Agent...
echo.

REM Check if Hermes is installed
where hermes >nul 2>nul
if %errorlevel% neq 0 (
    echo Hermes Agent not found. Installing...
    powershell -Command "iex (irm https://hermes-agent.nousresearch.com/install.ps1)"
    echo.
    echo Please restart your terminal and run this script again.
    pause
    exit /b 0
)

echo Hermes found. Setting up blog pipeline...
echo.

REM Copy skills to Hermes skills directory
set HERMES_SKILLS=%LOCALAPPDATA%\hermes\skills

echo Copying skills to %HERMES_SKILLS%...
xcopy /E /I /Y "skills\blog-content-writer" "%HERMES_SKILLS%\blog-content-writer"
xcopy /E /I /Y "skills\blog-image-generator" "%HERMES_SKILLS%\blog-image-generator"
xcopy /E /I /Y "skills\blog-humanizer" "%HERMES_SKILLS%\blog-humanizer"
xcopy /E /I /Y "skills\blog-quality-reviewer" "%HERMES_SKILLS%\blog-quality-reviewer"
xcopy /E /I /Y "skills\blog-publisher" "%HERMES_SKILLS%\blog-publisher"
xcopy /E /I /Y "skills\blog-orchestrator" "%HERMES_SKILLS%\blog-orchestrator"

echo.
echo Skills installed successfully!
echo.
echo Next steps:
echo 1. Run: hermes setup --portal
echo 2. Merge hermes-config.yaml with your Hermes config
echo 3. Run: hermes
echo 4. Type: Use the blog-orchestrator skill to write a blog about "your topic"
echo.
pause
