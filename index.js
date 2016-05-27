/**
  * Copyright (C) 2016 yanni4night.com
  * index.js
  *
  * changelog
  * 2016-05-27[18:01:40]:revised
  *
  * @author yanni4night@gmail.com
  * @version 1.0.0
  * @since 1.0.0
  */
'use strict';

const React = require('react');
const util = require('util');

class AntiarisComponent extends React.Component {
    constructor(props, appName, displayName) {
        super(props);
        this.appName = appName;
        this.displayName = displayName;
        this.collectResource();
    }
    /**
     * 收集一个 Component 目录下的所有静态资源。
     * 
     */
    collectResource() {
        const  {appName, displayName, props} = this;
        const {add} = props;
        if (util.isFunction(add)) {
            add(`${appName}/component/${displayName}`);
        }
    }
}

module.exports = AntiarisComponent;