# FIFA-23-GraphQL-API

<img src="./gif.gif" width="800" />

This project exposes a GraphQL API which lets you query the entire FIFA 23 players' dataset. You can query top rated players from the entire dataset, or filter out best players from any club or nationality.
You can also check attributes of an individual player by his name. Players can also be filtered out with their weak foot ability or you can filter left or right footed players.
Every player in the dataset has following attributes : 
1. ID
2. Name
3. Overall
4. Club
5. Preferred Foot
6. International Reputation
7. Weak Foot
8. Skill Moves
9. Work Rate
10. Body Type
11. Height
12. Weight
13. Release Clause
14. Kit Number

## `Data : `

Data is taken from Kaggle, you can search up FIFA 23 dataset and download the csv. I created a table in PostgreSQL with the same attributes as the csv file and uploaded the file through pgadmin4.
Then I used the pg package in my Nodejs project to connect with local postgres. you can follow the same process or use any other db of your choice. Make sure to install all the packages in packages.json file. Also make sure to add your own credentials in db.js file in models directory

