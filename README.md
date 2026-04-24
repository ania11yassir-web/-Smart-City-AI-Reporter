Smart City AI Reporter

Track: Smart Cities

Team Members:

- ANI YASSIR MOHAMED 

- AYA ABUALGASIM ABDALLA

- HANAN NASR ZAHER
## Problem

Citizens struggle to report urban issues quickly, and authorities may respond slowly.

## Solution

PulseCity lets users:

- Upload/report city issues

- Get AI issue classification

- Assign urgency level

- Route reports to the correct department

- Predict flood risk from clustered reports

## Features

- AI-powered issue detection

- Flood risk alerts

- Smart department routing

- Citizen reporting dashboard

- Real-time alerts

## Tech Stack

Frontend:

- React

Backend:

- Node.js

- Express

AI:

- Gemini API

Tools:

- GitHub

- ngrok

## API Endpoints

POST /api/classify  

Returns:

- issue_type

- urgency

- description

- recommended_department

POST /api/predict  

Returns:

- flood risk prediction

## Run Locally

Backend:

npm install

node server.js

Frontend:

npm install

npm start

## Demo

Example AI classification:

Flood  

Urgency: High  

Routed to: Disaster Management

## Future Improvements

- Real image-based detection

- Live city dashboards

- Predictive urban analytics

- Government integration
