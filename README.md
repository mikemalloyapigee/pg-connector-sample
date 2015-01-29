# pg-connector-sample
Sample usage of a volos Postgres connector

## Setup and Installation
Clone this repository to your local machine
From the command line, run "npm install volos-pgsql"
Update the credentials and database name in app.js
Configure query to REST map in queryToRestMap.js
From the command line, run "node app.js"

## Usage
Using the existing query to REST map, usage would be:
curl http://localhost:9000/orgs?email=<some email address> or
curl http://localhost:9000/accounts?org=<some org name> 
