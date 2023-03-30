# Swatest

Angular version 15.1.6 app with Api (C# az functions) for Azure Static Web apps
Note node18 does not work use 16 or lower

## Development server

npm build --prod
swa start ./dist/swatest --api-location api

## Deployment

npm i -g @azure/static-web-apps-cli
npm build --prod
cd api 
dotnet build -c Release
swa deploy app