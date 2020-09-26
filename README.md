# GreenSplit Project v1.2.0
YARN is used to manage dependencies
# Backend Node.js
*requirements :*
- node >= 8.11.3
- sequelize-cli
- mysql-server

first run `yarn`

add `.env` file in the backend folder of project and add following lines
```text
DB_USERNAME='root'
DB_PASSWORD=''
DB_NAME='greensplit_db_dev'
JWT_SECRET='greenpassw0rd'
DB_HOSTNAME=127.0.0.1
HOST=127.0.0.1:5000
```
after you can run
```shell
npx sequelize-cli db:create # Run db creation
npx sequelize-cli db:migrate # Runn migrations

node seeds/01_users.js && node seeds/02_companies.js && node seeds/03_runers.js && node seeds/04_products.js && node seeds/05_deliveries.js # Run seeds

nodemon # Start server
```
Now you are ready to use this backend project

# Mobile-app React-native
*requirements :*
- node >= 8.11.3 & < 14
- expo-cli

first run `yarn`

write your ipv4 in utils/url.js

run `yarn start`

Then Signup & Signin with your created credentials.
<!-- you can now use `backend/seeds/01_users.js` credentials -->
