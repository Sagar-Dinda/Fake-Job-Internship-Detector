@echo off
title ScamShield AI - Development Server
cd /d "%~dp0Frontend"
set "PATH=%~dp0.tools\node;%PATH%"
echo ========================================================
echo  ScamShield AI - Fake Job ^& Internship Detector
echo  Starting Vite Development Server...
echo ========================================================
npm run dev
