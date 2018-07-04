# Minimum Express Boilerplate for Brasilcap

Boilerplate suggested to work in Brasilcap with RESTful APIs

##Folder and file structure

To begin with, the important parts of the structure for now are:

```
package.json
node_modules/
src/
|-config
|-index.js
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
* **node_modules/**: All modules described in `package.json` will be automatically placed here using `npm`commands such as `npm install cors --save`.
* **src/**: Our source code base folder.
* **src/index.js**: The starting point for the API.
* **src/config**: Application level configuration files.
* **src/controllers/**: Controllers modules/files.
* **src/log/**: Holds the application logs.
* **src/middlewares/**: Holds modules/files that deals with different code environments.
* **src/models/**: Modules/files abstraction of our database schema.
* **src/routes/**: Modules/files that know which controllers should handle the incoming requests.
* **src/services/**: Modules/files that handle business related rules.
* **src/utils/**: Help us with mixins methods.
* **src/validations/**: Knows how the incoming request should behave.

