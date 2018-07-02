# Minimum Express Boilerplate for Brasilcap

Boilerplate suggested to work in Brasilcap with RESTful APIs

##Folder and file structure

To begin with, the important parts of the structure for now are:

```
package.json
app.js
config/
|express.js
|log4js.json
node_modules/
app/
|-controllers/
|-log/
|-middlewares/
|-models/
|-routes/
|-utils/
|-services/
|-validations/ 
```

* **package.json**: Holds project configuration.
* **app.js**: The starting point for the API.
* **config**: Application level configuration files.
* **node_modules/**: All modules described in `package.json` will be automatically placed here using `npm`commands such as `npm install cors --save`.
* **app/**: Our source code base folder.
* **app/controllers/**: Controllers modules/files.
* **app/log/**: Holds the applicatino logs.
* **app/middlewares/**: Holds modules/files that deals with different code environments.
* **app/models/**: Modules/files abstraction of our database schema.
* **app/routes/**: Modules/files that know which controllers should handle the incoming requests.
* **app/services/**: Modules/files that handle business related rules.
* **app/utils/**: Help us with mixins methods.
* **app/validations/**: Knows how the incoming request should behave.

