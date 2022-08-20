# Express

## Creating Servers With Express
- Introduction to express
- created first Express App
```
npm i express
```
- The Request and Response object
- Express Routing Basics
- Express Path Parameters
- working with Query Strings
- Auto-Restart with Nodemon
```
npm i -g nodemon
```
It will install nodemon globally

## Creating Dynamic HTML with Templates
- what is Templating?
- Confuring Express for EJS
- Passing Data to Templates
- Serving Static Assets
- Creating Partials
- EJS Loops & Conditionals

## confuring express for ejs
```
npm i ejs
```

## EJS Interpolation syntax
```
<%= code  %>
```

## conditional & loops in EJS
wrapped condition inside `<%= code %>`

## more complext subreddit demo
working with `data.json` file

## serving static assets in express
- give abosolute path so that you can redirect from anywhere

## bootstrap + express
- go to https://jquery.com/download/ & download the compressed production jquery. ctrl+s. and then we head on `bootstrap.min.css` and `bootstrap.min.js`

## EJS & Partials
- as the title suggest, we here breakdown navbar, footer and header. and we need to import it in the same way as we do in react to navbar component. 
- you need to include this line for using partials, its part of EJS Docs
```
<%-inlude "public/navbar" %>
```

## GET vs POST Request
| GET                                         | POST                                                  |
| ------------------------------------------- | ----------------------------------------------------- |
|1. used to retrive information               | 1. used to post data to server                        |
|2. data is sent via query string             | 2. used to write/create/update                        |
|3. information is plainly visible in the URL | 3. data is sent via request body, not a query string! |
|4. limited amount of data can be sent        | 4. can send any sort data(json)                       |
- we working with GET & POST through `Postman`

## defining express post routes
```
npm init -y
```
it will create a package.json file
```
npm i express
```
it will create a package-lock.json & node_modules file

## parsing the request body
- you need to write line from offical https://expressjs.com/en/5x/api.html#req.body site

## Express Redirects
- add a redirect line which will redirect automatically as you submit



## The UUID package
```
npm i uuid
```



## express method override
```
npm i method-override
```






