"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../../@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../../../../classnames/index.js");

var _index6 = _interopRequireDefault(_index5);

var _isNil2 = require("../../../../../lodash/isNil.js");

var _isNil3 = _interopRequireDefault(_isNil2);

var _isEmpty2 = require("../../../../../lodash/isEmpty.js");

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _inRange2 = require("../../../../../lodash/inRange.js");

var _inRange3 = _interopRequireDefault(_inRange2);

var _isFunction2 = require("../../../../../lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

var _utils = require("../../common/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtSwipeAction = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtSwipeAction, _AtComponent);

  function AtSwipeAction() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtSwipeAction);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtSwipeAction.__proto__ || Object.getPrototypeOf(AtSwipeAction)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp7", "loopArray1", "$compid__367", "componentId", "rootClass", "options", "offsetSize", "_isOpened", "disabled", "autoClose", "className", "isOpened", "children"], _this.computeTransform = function (value) {
      if (_index2.default.getEnv() === _index2.default.ENV_TYPE.ALIPAY) {
        return !(0, _isNil3.default)(value) ? "translate3d(" + value + "px,0,0)" : null;
      }
      return value ? "translate3d(" + value + "px,0,0)" : null;
    }, _this.handleOpened = function () {
      if ((0, _isFunction3.default)(_this.props.onOpened) && !_this.state._isOpened) {
        _this.props.onOpened();
      }
    }, _this.handleClosed = function () {
      if ((0, _isFunction3.default)(_this.props.onClosed) && _this.state._isOpened) {
        _this.props.onClosed();
      }
    }, _this.handleTouchStart = function (e) {
      var _e$touches$ = e.touches[0],
          clientX = _e$touches$.clientX,
          clientY = _e$touches$.clientY;


      if (_this.props.disabled) {
        return;
      }_this.getDomInfo();

      _this.startX = clientX;
      _this.startY = clientY;
      _this.isTouching = true;
    }, _this.handleTouchMove = function (e) {
      if ((0, _isEmpty3.default)(_this.domInfo)) {
        return;
      }

      var _this2 = _this,
          startX = _this2.startX,
          startY = _this2.startY;
      var _this$domInfo = _this.domInfo,
          top = _this$domInfo.top,
          bottom = _this$domInfo.bottom,
          left = _this$domInfo.left,
          right = _this$domInfo.right;
      var _e$touches$2 = e.touches[0],
          clientX = _e$touches$2.clientX,
          clientY = _e$touches$2.clientY,
          pageX = _e$touches$2.pageX,
          pageY = _e$touches$2.pageY;


      var x = Math.abs(clientX - startX);
      var y = Math.abs(clientY - startY);

      var inDom = (0, _inRange3.default)(pageX, left, right) && (0, _inRange3.default)(pageY, top, bottom);

      if (!_this.isMoving && inDom) {
        _this.isMoving = y === 0 || x / y >= Math.tan(45 * Math.PI / 180).toFixed(2);
      }

      if (_this.isTouching && _this.isMoving) {
        e.preventDefault();

        var offsetSize = clientX - _this.startX;
        var isRight = offsetSize > 0;

        if (_this.state.offsetSize === 0 && isRight) {
          return;
        }var value = _this.endValue + offsetSize;
        _this.setState({
          offsetSize: value >= 0 ? 0 : value
        });
      }
    }, _this.handleTouchEnd = function () {
      _this.isTouching = false;

      var offsetSize = _this.state.offsetSize;


      _this.endValue = offsetSize;

      var breakpoint = _this.maxOffsetSize / 2;
      var absOffsetSize = Math.abs(offsetSize);

      if (absOffsetSize > breakpoint) {
        _this._reset(true);
        return _this.handleOpened();
      }

      _this._reset();
      _this.handleClosed();
    }, _this.handleDomInfo = function (_ref2) {
      var width = _ref2.width;
      var _isOpened = _this.state._isOpened;


      _this.maxOffsetSize = width;
      _this._reset(_isOpened);
    }, _this.handleClick = function (item, index) {
      for (var _len2 = arguments.length, arg = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        arg[_key2 - 2] = arguments[_key2];
      }

      var _this$props = _this.props,
          onClick = _this$props.onClick,
          autoClose = _this$props.autoClose;


      if ((0, _isFunction3.default)(onClick)) {
        var _this$props2;

        (_this$props2 = _this.props).onClick.apply(_this$props2, [item, index].concat(arg));
      }
      if (autoClose) {
        _this._reset();
        _this.handleClosed();
      }
    }, _this.customComponents = ["AtSwipeActionOptions"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtSwipeAction, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtSwipeAction.prototype.__proto__ || Object.getPrototypeOf(AtSwipeAction.prototype), "_constructor", this).apply(this, arguments);

      var isOpened = props.isOpened;


      this.endValue = 0;
      this.startX = null;
      this.startY = null;
      this.maxOffsetSize = 0;

      this.domInfo = {};
      this.isMoving = false;
      this.isTouching = false;

      this.state = {
        componentId: (0, _utils.isTest)() ? 'tabs-AOTU2018' : (0, _utils.uuid)(),
        offsetSize: 0,
        _isOpened: isOpened
      };
      this.$$refs = [];
    }
  }, {
    key: "getDomInfo",
    value: function getDomInfo() {
      var _this3 = this;

      this.domInfo = {};
      return Promise.all([(0, _utils.delayGetClientRect)({
        self: this,
        delayTime: 0,
        selectorStr: "#swipeAction-" + this.state.componentId
      }), (0, _utils.delayGetScrollOffset)({ delayTime: 0 })]).then(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            rect = _ref4[0],
            scrollOffset = _ref4[1];

        rect[0].top += scrollOffset[0].scrollTop;
        rect[0].bottom += scrollOffset[0].scrollTop;
        _this3.domInfo = rect[0];
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var isOpened = nextProps.isOpened;
      var _isOpened = this.state._isOpened;


      if (isOpened !== _isOpened) {
        this._reset(isOpened);
      }
    }
  }, {
    key: "_reset",
    value: function _reset(isOpened) {
      this.isMoving = false;
      this.isTouching = false;

      if (isOpened) {
        this.endValue = -this.maxOffsetSize;
        this.setState({
          _isOpened: true,
          offsetSize: -this.maxOffsetSize
        });
      } else {
        this.endValue = 0;
        this.setState({
          offsetSize: 0,
          _isOpened: false
        });
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__367 = (0, _index.genCompid)(__prefix + "$compid__367");

      var _state = this.__state,
          offsetSize = _state.offsetSize,
          componentId = _state.componentId;
      var options = this.__props.options;

      var rootClass = (0, _index6.default)('at-swipe-action', this.__props.className);

      var anonymousState__temp = (0, _index6.default)('at-swipe-action__content', {
        animtion: !this.isTouching
      });
      var anonymousState__temp2 = (0, _index.internal_inline_style)({
        transform: this.computeTransform(offsetSize)
      });
      var anonymousState__temp7 = Array.isArray(options) && options.length > 0;
      var loopArray1 = anonymousState__temp7 ? options.map(function (item, key) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        var $loopState__temp4 = Array.isArray(options) && options.length > 0 ? (0, _index.internal_inline_style)(item.$original.style) : null;
        var $loopState__temp6 = Array.isArray(options) && options.length > 0 ? (0, _index6.default)('at-swipe-action__option', item.$original.className) : null;
        return {
          $loopState__temp4: $loopState__temp4,
          $loopState__temp6: $loopState__temp6,
          $original: item.$original
        };
      }) : [];
      anonymousState__temp7 && _index.propsManager.set({
        "options": options,
        "componentId": componentId,
        "onQueryedDom": this.handleDomInfo
      }, $compid__367);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp7: anonymousState__temp7,
        loopArray1: loopArray1,
        $compid__367: $compid__367,
        rootClass: rootClass,
        options: options
      });
      return this.__state;
    }
  }]);

  return AtSwipeAction;
}(_component2.default), _class.$$events = ["handleTouchMove", "handleTouchEnd", "handleTouchStart", "handleClick"], _class.$$componentPath = "home/bigsomg/project/TimeDiary/node_modules/taro-ui/dist/weapp/components/swipe-action/index", _temp2);


AtSwipeAction.defaultProps = {
  isTest: false,
  options: [],
  isOpened: false,
  disabled: false,
  autoClose: false
};

AtSwipeAction.propTypes = {
  isTest: _index4.default.bool,
  isOpened: _index4.default.bool,
  disabled: _index4.default.bool,
  autoClose: _index4.default.bool,
  options: _index4.default.arrayOf(_index4.default.shape({
    text: _index4.default.string,
    style: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
    className: _index4.default.oneOfType([_index4.default.object, _index4.default.string, _index4.default.array])
  })),

  onClick: _index4.default.func,
  onOpened: _index4.default.func,
  onClosed: _index4.default.func
};
exports.default = AtSwipeAction;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtSwipeAction));