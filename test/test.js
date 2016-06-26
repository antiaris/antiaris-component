/**
 * Copyright (C) 2016 antiaris.xyz
 * test.js
 *
 * changelog
 * 2016-05-27[18:09:02]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
const Component = require('../component');
const assert = require('assert');

describe('Component', () => {
    describe('create', () => {
        it('should collect all the resource', () => {
            const res = [];
            const add = (...args) => res.push(...args);
            const c = new Component({add}, 'app', 'demo');
            assert.deepEqual(res.length, 1);
            assert.ok(res.indexOf('app:src/component/demo') > -1);
        });
    });
});