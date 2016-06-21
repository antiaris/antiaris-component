# antiaris-component
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

继承 `React.Component`，支持静态资源收集。

```js
import AntiarisComponent from 'antiaris-component';

class BaseCompnent extends AntiarisComponent{
    constructor(props, displayName) {
        super(props, 'app', displayName)
    }
}

class CustomCompnent extends BaseCompnent{
    constructor(props) {
        super(props, 'custom');
    }
}
```


[npm-url]: https://npmjs.org/package/antiaris-component
[downloads-image]: http://img.shields.io/npm/dm/antiaris-component.svg
[npm-image]: http://img.shields.io/npm/v/antiaris-component.svg
[travis-url]: https://travis-ci.org/antiaris/antiaris-component
[travis-image]: http://img.shields.io/travis/antiaris/antiaris-component.svg
[david-dm-url]:https://david-dm.org/antiaris/antiaris-component
[david-dm-image]:https://david-dm.org/antiaris/antiaris-component.svg
[david-dm-dev-url]:https://david-dm.org/antiaris/antiaris-component#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/antiaris/antiaris-component/dev-status.svg