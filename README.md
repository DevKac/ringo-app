# Ringo App

The aim od this application is to create a ringo diagram (similar to a pie chart) presenting data from a number of endpoints. It should also work correctly if some or all enpoints lag or timeout. App contains both Front-End part written in Angular and Back-End part written in Node.js.

## Getting Started

In order to run this app npm is required. Open npm console and run `npm run install-packages`. After all packages are installed run `npm run start-server` to run Back-End server. App should be available on localhost:8080.

In order to run Dev version of Front-End open another npm console and run `npm run start-app` there to start Front-End. App should be available on localhost:4200.

## Usage

Data which fills ringo can be found in `./json` folder. In order to modify response times modify setTimeout's in `./server.js` file.
