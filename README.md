<h1 align="center">Welcome to DataSutramApp</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/probhakarroy/DataSutramApp#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/probhakarroy/DataSutramApp/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/probhakarroy/DataSutramApp/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://travis-ci.com/probhakarroy/DataSutramApp">
    <img src="https://travis-ci.com/probhakarroy/DataSutramApp.svg?token=NeVUZKQYZ6CLHH16yWGW&amp;branch=master" alt="Build Status" >
  </a>
</p>

> REST APIs for DataSutram.

### 🏠 [Homepage](https://probhakarroy.github.io/DataSutramApp/)

## Install

```sh
npm install
```

## Add Credentials

Create lib/credentials.js with :-
```sh
module.exports = {
    token_secret: 'Cookie Secret String',
    mongo : {
        development : {
            connection_string: 'Connection String for your development MongoDb Atlas Database'
        },
        production : {
            connection_string: 'Connection String for your production MongoDb Atlas Database'
        },
    }
};
```

## API Reference

Data Format For Path /user/signup :-
```sh
{
  name: 'Full Name',
  username: 'Username',
  password: 'Password',
  dateofbirth: 'YYYY/MM/DD',
}
```

Data Format For Path /user/login :-
```sh
{
  username: 'Username',
  password: 'Password',
}
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **Probhakar Roy**

* Github: [@probhakarroy](https://github.com/probhakarroy)

## 🤝 Contributing

Contributions, issues and feature requests are welcome !<br />Feel free to check [issues page](https://github.com/probhakarroy/DataSutramApp/issues).

## Show your support

Give a ⭐️ if this project helped you !

## 📝 License

Copyright © 2019 [Probhakar Roy](https://github.com/probhakarroy).<br />
This project is [MIT](https://github.com/probhakarroy/DataSutramApp/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_