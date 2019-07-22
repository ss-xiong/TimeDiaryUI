"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../../../@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../../classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

var _component = require("../../../common/component.js");

var _component2 = _interopRequireDefault(_component);

var _utils = require("../../../common/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtSwiperActionOptions = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtSwiperActionOptions, _AtComponent);

  function AtSwiperActionOptions() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtSwiperActionOptions);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtSwiperActionOptions.__proto__ || Object.getPrototypeOf(AtSwiperActionOptions)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["rootClass", "componentId", "options", "className", "children"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtSwiperActionOptions, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtSwiperActionOptions.prototype.__proto__ || Object.getPrototypeOf(AtSwiperActionOptions.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "trrigerOptionsDomUpadte",
    value: function trrigerOptionsDomUpadte() {
      var _this2 = this;

      (0, _utils.delayQuerySelector)(this, "#swipeActionOptions-" + this.props.componentId).then(function (res) {
        _this2.props.onQueryedDom(res[0]);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.trrigerOptionsDomUpadte();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.options !== this.props.options) {
        this.trrigerOptionsDomUpadte();
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

      var rootClass = (0, _index4.default)('at-swipe-action__options', this.__props.className);

      Object.assign(this.__state, {
        rootClass: rootClass
      });
      return this.__state;
    }
  }]);

  return AtSwiperActionOptions;
}(_component2.default), _class.$$events = [], _class.$$componentPath = "home/bigsomg/project/TimeDiary/node_modules/taro-ui/dist/weapp/components/swipe-action/options/index", _temp2);


AtSwiperActionOptions.defaultProps = {};

AtSwiperActionOptions.propTypes = {};
exports.default = AtSwiperActionOptions;

Component(require('../../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtSwiperActionOptions));