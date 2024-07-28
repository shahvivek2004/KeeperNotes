# *Welcome Guys*

## *Pre-requirements :*
- PostgreSQL
- Google Auth
  

## *Initial Command for Project Set-Up :*
- Go to your selected folder by `cd` command in terminal and then type below commands:
```
git clone https://github.com/shahvivek2004/KeeperNotes.git
cd KeeperNotes
```

## *This Project have two parts :*
- **Backend**
- **Frontend**

### *Backend :*

- Now first write `cd backend/` command in terminal.
  
- Now after thar write `npm init` in terminal.
  
- Now after write below  thin terminal.
  ```
   npm install nodemon express body-parser pg bcryptjs passport passport-local passport-google-oauth2 express-session dotenv cors connect-flash
  
  ```
  
- After that create `.env` file in `backend/` folder where all your credentials are ther for e.g:-
  ```
   SESSION_SECRET="your_session_secret"
   PG_USER="your_postgres_username"
   PG_HOST="your_postgres_hostname"
   PG_DATABASE="your_postgres_databasename"
   PG_PASSWORD="your_postgres_password"
   PG_PORT="your_postgres_port_detail"
   CLIENT_ID="your_google_client_id"
   CLIENT_SECRET="your_google_client_secret"
   SECRET_GOOGLE_AUTH_PASSWORD="your_decided_password"
   SERVER_PORT="4000"
   CLIENT_LINK="http://localhost:3000"
   SERVER_LINK="http://localhost:4000"
   NODE_ENV="development"
  ```
  
- After all run this in terminal :
  ```
  nodemon Server.js
  
  ```
  


### *Frontend :*

- Now for frontend you have to create new terminal so its like our frontend and backend runs on two different terminal
  
- so by `cd` command locate to your selected folder and then enter
  ```
  cd KeeperNotes/frontend
  npm install
  ```
  
- Ensure that `node_modules` folder you can see in `frontend/` folder and then run
  ```
  npm start
  
  ```
  


## *Contribution :*

- Fork the repository.
- Create your feature branch **(git checkout -b feature/YourFeature)**.
- Commit your changes **(git commit -m 'Add some feature')**.
- Push to the branch **(git push origin feature/YourFeature)**.
- Open a pull request.
