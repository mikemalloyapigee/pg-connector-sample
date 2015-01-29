# pg-connector-sample
Sample usage of a volos Postgres connector

## Setup and Installation
Clone this repository to your local machine<br>
From the command line, run "npm install volos-pgsql"<br>
Update the credentials and database name in app.js<br>
Configure query to REST map in queryToRestMap.js<br>
From the command line, run "node app.js"<br>

## Usage
Using the existing query to REST map, usage would be:
<br>
curl http://localhost:9000/orgs?email=some email address or
<br>
curl http://localhost:9000/accounts?org=some org name 
