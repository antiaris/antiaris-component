/**
 * Copyright (C) 2016 yanni4night.com
 * index.js
 *
 * changelog
 * 2016-05-27[18:01:40]:revised
 * 2016-06-21[11:06:53]:change path pattern;remove util dependency
 *
 * @author yanni4night@gmail.com
 * @version 2.0.0
 * @since 1.0.0
 */
'use strict';

const React = require('react');
const isFunction = require('lodash/isFunction');

class AntiarisComponent extends React.Component {
    constructor(props, appName, displayName) {
            super(props);
            this.appName = appName;
            this.displayName = displayName;
            this._collectResource();
        }
        /**
         * 收集一个 Component 目录下的所有静态资源。
         */
    _collectResource() {
        const {
            appName,
            displayName,
            props
        } = this;
        const {
            add
        } = props;
        if (isFunction(add)) {
            add(`${appName}:component/${displayName}`);
        }
    }
}

module.exports = AntiarisComponent;