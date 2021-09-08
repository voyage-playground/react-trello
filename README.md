# Trello Clone Voyage Example App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running

```
npm i
npm start
```

## About

This is a simple Trello clone application. The board is pre-populated with tasks. If you alter the board all changes are logged as an activity log to a redis instance. All new tickets trigger a GCP Pub/Sub message that in turn triggers a cloud function to deliver a slack notification. This application is backed by a Mongo DB.

Voyage has been integrated into this application in the `.voyage` folder. This repositiory is acting as the "primary" trigger for deploying Voyage meaning that pushes to this repo will trigger re-builds.

This application is configured to deploy it's backend API from https://github.com/voyage-playground/react-trello-api.

This application utlizes isolated containers deployed via Voyage and connects to some external GCP services. GCP auth is made possible via a service account that is set via an environment variable in the Voyage UI and then mapped to a file in the API container startup script.

## Application Architecture Diagram

![Diagram](/diagram.png)
