## doc-it-api
This repo contains an API used within the [PX Blue Home](https://pxblue.github.io) documentation website and an admin script used to maintain the underlying database.
The API and Database are hosted by Firebase.

### admin
The admin folder contains a node.js script that is used to insert data into the Firestore Database that the API reads from.

To build the admin script, run:
```
yarn build
```
To insert data into the `roadmap` collection found in the database, run: 
```
yarn insert:roadmap
```

### api
This API is a firebase function used to fetch Roadmap information for PX Blue Home's [Roadmap page](https://pxblue.github.io/roadmap).

To develop the API locally, run:
```
yarn serve
```
To deploy the API to firebase, run:
```
yarn deploy
```






