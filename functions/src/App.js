'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _test = require('./test');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(props) {
    var data = props.data.portfolio[0]['bullet-points'][0].map(function (bpoint, i) {
        return _react2.default.createElement(
            'li',
            { key: i },
            bpoint
        );
    });

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactRouterDom.Router,
            null,
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/test' },
                'test'
            ),
            _react2.default.createElement(
                'ul',
                null,
                data
            ),
            _react2.default.createElement(
                _reactRouterDom.Route,
                null,
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Route,
                        { path: '/test' },
                        _react2.default.createElement(_test2.default, null)
                    )
                )
            )
        )
    );
}

exports.default = App;