## Follow the steps
change database connection string in config.env
open terminal
npm install
nodemon index.js


1. Post api
request:
localhost:7070/github
payload:{url:"https://api.github.com/users/mralexgray/repos"}
response:{
    "message": "success"
}
check database for entries
2. Get api
reuest:localhost:7070/github/<id>
response:data from db

** I have used mongodb as database