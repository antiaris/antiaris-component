/**
 * Copyright (C) 2016 antiaris.xyz
 * index.js
 *
 * changelog
 * 2016-05-27[18:01:40]:revised
 * 2016-06-21[11:06:53]:change path pattern;remove util dependency
 * 2016-06-26[02:54:03]:fixed component path
 *
 * @author yanni4night@gmail.com
 * @version 2.1.0
 * @since 1.0.0
 */
'use strict';

const React = require('react');

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
        if (typeof add === 'function') {
            add(`${appName}:src/component/${displayName}`);
        }
    }
}

module.exports = AntiarisComponent;