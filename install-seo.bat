@echo off
echo ========================================
echo DevMorphix - Setup Installation
echo ========================================
echo.
echo Installing dependencies...
echo.

call npm install

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo SEO is implemented using native React (no external dependencies)
echo.
echo Next steps:
echo 1. Update the domain URL in components/SEO.tsx
echo 2. Update contact info in config/seoConfig.ts
echo 3. Create social share images in public/
echo 4. Run 'npm run dev' to start development server
echo.
echo For detailed setup instructions, see SETUP.md
echo For SEO documentation, see SEO_IMPLEMENTATION.md
echo.
pause
