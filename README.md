[![npm][npm]][npm-url]

# Logger

> Client logger library for enhanced logging

Client library for enhancing browser's console. It allows you to define logging level and therefore control
what get's logged and what not.

## Installation

In terminal run:
 
```bash
npm install --save @mjamsek/logger
```

## Usage

To use logger, all you need to do is to use this call:

```javascript
Logger.getInstance().log("Hello world!");
// outputs: Hello world!
```

### Log level

By default, log level is set to **INFO**. You can change the level with call:

```javascript
Logger.setLogLevel(LogLevel.WARN);
```

Available log levels:
* DEBUG
* FINEST
* FINE
* INFO *(default)*
* WARN
* ERROR
* OFF *(disables logging)*

Setting log level means all lower levels will not be logging messages anymore.

```javascript
Logger.setLogLevel(LogLevel.DEBUG);
Logger.getInstance().debug("Hello debug!");
Logger.getInstance().info("Hello info!");
// outputs:
// Hello debug!
// Hello info!

Logger.setLogLevel(LogLevel.INFO);
Logger.getInstance().debug("Hello debug!");
Logger.getInstance().info("Hello info!");
// outputs:
// Hello info!
```

### Prefix

You can also set prefix to separate your logs from other logs that may be used in application.

```javascript
Logger.setPrefix("MyApp");
Logger.getInstance().info("Hello world!");
// outputs: [MyApp] Hello world!
```

## Changelog

Recent changes can be viewed on Github on the [Releases Page](https://github.com/Jamsek-m/logger-js/releases)

## Contribute

See the [contributing docs](https://github.com/Jamsek-m/logger-js/blob/master/CONTRIBUTING.md)

When submitting an issue, please follow the [guidelines](https://github.com/Jamsek-m/logger-js/blob/master/CONTRIBUTING.md#bugs).

## License

MIT


[npm]: https://img.shields.io/npm/v/webpack.svg
[npm-url]: https://npmjs.com/package/webpack
