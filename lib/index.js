'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bookmark = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bookmark = exports.Bookmark = function (_Component) {
  _inherits(Bookmark, _Component);

  function Bookmark() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Bookmark);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bookmark.__proto__ || Object.getPrototypeOf(Bookmark)).call.apply(_ref, [this].concat(args))), _this), _this.handleAddBookmark = function () {
      var _this$props = _this.props,
          title = _this$props.title,
          href = _this$props.href;


      if (window.external && window.external.AddFavourite) {
        window.external.AddFavourite(href, title); // eslint-disable-line new-cap
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Bookmark, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          title = _props.title,
          href = _props.href;

      var addToBookmarkLink = function addToBookmarkLink(props) {
        return _react2.default.createElement(
          'a',
          _extends({ onClick: _this2.handleAddBookmark }, props),
          'Add this page to your bookmarks'
        );
      };

      var commandButton = 'Ctrl';
      if (/Mac/i.test(navigator.userAgent)) {
        commandButton = 'Command (⌘)';
      }

      var bookmarkLink = null;
      if (/Firefox/i.test(navigator.userAgent)) {
        var props = {
          href: href,
          rel: 'sidebar',
          title: title
        };
        bookmarkLink = addToBookmarkLink(props);
      }
      if (window.external && window.external.AddFavourite) {
        bookmarkLink = addToBookmarkLink();
      }

      return _react2.default.createElement(
        'div',
        { className: className },
        bookmarkLink || _react2.default.createElement(
          'span',
          null,
          'Press ',
          _react2.default.createElement(
            'strong',
            null,
            commandButton,
            ' + D'
          ),
          ' to add this page to your bookmarks.'
        )
      );
    }
  }]);

  return Bookmark;
}(_react.Component);

Bookmark.propTypes = {
  className: _react.PropTypes.string,
  title: _react.PropTypes.string,
  href: _react.PropTypes.string
};

Bookmark.defaultProps = {
  className: '',
  title: '',
  href: '#'
};

exports.default = Bookmark;