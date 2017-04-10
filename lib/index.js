'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bookmark = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 30px;\n  border-radius: 5px;\n'], ['\n  width: 30px;\n  border-radius: 5px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 20px;\n  filter: invert(100%);\n'], ['\n  width: 20px;\n  filter: invert(100%);\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _platform = require('platform');

var _platform2 = _interopRequireDefault(_platform);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _images = require('./images');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MobileImage = _styledComponents2.default.img(_templateObject);

var Icon = _styledComponents2.default.img(_templateObject2);

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
    }, _this.renderDesktop = function () {
      var _this$props2 = _this.props,
          className = _this$props2.className,
          linkClassName = _this$props2.linkClassName,
          title = _this$props2.title,
          href = _this$props2.href;

      var addToBookmarkLink = function addToBookmarkLink(props) {
        return _react2.default.createElement(
          'a',
          _extends({ className: linkClassName, onClick: _this.handleAddBookmark }, props),
          'Add this page to your bookmarks'
        );
      };

      var commandButton = 'Ctrl';
      if (_platform2.default.os.family && _platform2.default.os.family === 'OS X') {
        commandButton = 'Command (⌘)';
      }

      var bookmarkLink = null;
      if (_platform2.default.name && _platform2.default.name.includes('Firefox')) {
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
    }, _this.renderMobile = function (content) {
      var className = _this.props.className;

      var newContent = content;

      if (_platform2.default.name && _platform2.default.manufacturer && _platform2.default.name.includes('Safari') && _platform2.default.manufacturer.includes('Apple')) {
        newContent = _react2.default.createElement(
          'div',
          null,
          'Press ',
          _react2.default.createElement(MobileImage, { src: _images.SAFARI_SHARE }),
          ' then ',
          _react2.default.createElement(
            'strong',
            null,
            'Add to Home Screen'
          ),
          ' to add this page to your home screen.'
        );
      } else if (_platform2.default.name && (_platform2.default.name.includes('Chrome') || _platform2.default.name.includes('Firefox'))) {
        newContent = _react2.default.createElement(
          'div',
          null,
          'Press ',
          _react2.default.createElement(Icon, { src: _images.MENU_ICON }),
          ' then ',
          _react2.default.createElement(Icon, { src: _images.STAR_ICON }),
          ' to add this page to your bookmarks.'
        );
      }

      return _react2.default.createElement(
        'div',
        { className: className },
        newContent
      );
    }, _this.renderTablet = function (content) {
      var className = _this.props.className;

      var newContent = content;

      if (_platform2.default.name && (_platform2.default.name.includes('Chrome') || _platform2.default.name.includes('Firefox'))) {
        newContent = _react2.default.createElement(
          'div',
          null,
          'Press ',
          _react2.default.createElement(Icon, { src: _images.STAR_ICON }),
          ' next to the address bar to add this page to your bookmarks.'
        );
      }

      return _react2.default.createElement(
        'div',
        { className: className },
        newContent
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Bookmark, [{
    key: 'render',
    value: function render() {
      var content = _react2.default.createElement(
        'div',
        null,
        'Remember to add this page to your bookmarks!'
      );
      if (/Mobile/i.test(navigator.userAgent)) {
        return this.renderMobile(content);
      } else if (/Android/i.test(navigator.userAgent)) {
        return this.renderTablet(content);
      }
      return this.renderDesktop();
    }
  }]);

  return Bookmark;
}(_react.Component);

Bookmark.propTypes = {
  className: _react.PropTypes.string,
  linkClassName: _react.PropTypes.string,
  title: _react.PropTypes.string,
  href: _react.PropTypes.string
};

Bookmark.defaultProps = {
  className: '',
  linkClassName: '',
  title: '',
  href: '#'
};

exports.default = Bookmark;