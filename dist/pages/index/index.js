"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/mobx/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _index3.inject)('counterStore'), _dec(_class = (0, _index3.observer)(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp2", "anonymousState__temp3", "$compid__435", "$compid__436", "$compid__437", "$compid__438", "$compid__439", "newDiaryModelShow", "anonymousState__temp", "newDiaryTitle", "newDiaryContent", "counterStore"], _this.config = {
      navigationBarTitleText: '首页'
    }, _this.state = {
      newDiaryModelShow: false,
      newDiaryTitle: '',
      newDiaryContent: ''
    }, _this.clickAddNewDiary = function () {
      _this.setState({
        newDiaryModelShow: true
      });
    }, _this.closeAddNewDiaryModel = function () {
      _this.setState({
        newDiaryModelShow: false
      });
    }, _this.confirmAddNewDiary = function () {
      console.log('确定添加');
      _this.closeAddNewDiaryModel();
    }, _this.newDiaryTitleInput = function (newDiaryTitle) {
      _this.setState({
        newDiaryTitle: newDiaryTitle
      });
    }, _this.newDiaryContentInput = function (newDiaryContent) {
      _this.setState({
        newDiaryContent: newDiaryContent
      });
    }, _this.customComponents = ["AtModal", "AtModalHeader", "AtModalContent", "AtInput", "AtTextarea", "AtModalAction", "AtNavBar", "AtList", "AtSwipeAction", "AtListItem", "AtFab", "AtTabBar"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentWillReact",
    value: function componentWillReact() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}

    // 点击添加按钮


    // 关闭添加蒙层


    // 确定添加


    // 输入日志标题信息


    // 输入日志内容提示

  }, {
    key: "_createAddNewDiaryModeData",
    value: function _createAddNewDiaryModeData(_$uid) {
      var _this2 = this;

      return function () {
        var $compid__432 = (0, _index.genCompid)(_$uid + "$compid__432");
        var $compid__433 = (0, _index.genCompid)(_$uid + "$compid__433");
        var $compid__434 = (0, _index.genCompid)(_$uid + "$compid__434");

        var _state = _this2.state,
            newDiaryTitle = _state.newDiaryTitle,
            newDiaryContent = _state.newDiaryContent;

        _index.propsManager.set({
          "isOpened": true
        }, $compid__432);
        _index.propsManager.set({
          "type": "text",
          "placeholder": "\u7ED9\u4E2A\u6807\u9898\u5427",
          "placeholderStyle": "fontSize:14;",
          "border": false,
          "value": newDiaryTitle,
          "onChange": _this2.newDiaryTitleInput
        }, $compid__433);
        _index.propsManager.set({
          "value": newDiaryContent,
          "onChange": _this2.newDiaryContentInput,
          "maxLength": 100,
          "placeholder": "\u6765\u70B9\u7B80\u77ED\u4ECB\u7ECD\u5417?..."
        }, $compid__434);
        return {
          $compid__432: $compid__432,
          $compid__433: $compid__433,
          $compid__434: $compid__434
        };
      };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__435 = (0, _index.genCompid)(__prefix + "$compid__435");
      var $compid__436 = (0, _index.genCompid)(__prefix + "$compid__436");
      var $compid__437 = (0, _index.genCompid)(__prefix + "$compid__437");
      var $compid__438 = (0, _index.genCompid)(__prefix + "$compid__438");
      var $compid__439 = (0, _index.genCompid)(__prefix + "$compid__439");

      var counter = this.__props.counterStore.counter;
      var newDiaryModelShow = this.__state.newDiaryModelShow;

      var anonymousState__temp = newDiaryModelShow ? this._createAddNewDiaryModeData(__prefix + "dDiOeSRRsj")() : null;

      this.anonymousFunc0 = function (e) {
        console.log(e, 'CCCClik');
      };

      var anonymousState__temp2 = [{
        text: '暂停',
        style: {
          backgroundColor: '#6190E8'
        }
      }, {
        text: '结束',
        style: {
          backgroundColor: '#FF4949'
        }
      }];

      this.anonymousFunc1 = function () {
        console.log('Item click');
      };

      var anonymousState__temp3 = [{ title: '时间', iconType: 'list' },
      // { title: '统计', iconType: 'analytics' },
      { title: '设置', iconType: 'settings' }];

      this.anonymousFunc2 = function () {};

      _index.propsManager.set({
        "border": true,
        "title": "\u65F6\u95F4\u65E5\u5FD7",
        "className": "navibar-top"
      }, $compid__435);
      _index.propsManager.set({
        "onClick": this.anonymousFunc0,
        "options": anonymousState__temp2
      }, $compid__436);
      _index.propsManager.set({
        "title": "\u6807\u9898\u6587\u5B57",
        "extraText": "\u8BE6\u7EC6\u4FE1\u606F",
        "thumb": "http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
        "onClick": this.anonymousFunc1
      }, $compid__437);
      _index.propsManager.set({
        "onClick": this.clickAddNewDiary
      }, $compid__438);
      _index.propsManager.set({
        "fixed": true,
        "color": "#A5A5A5",
        "selectedColor": "#6190E8",
        "tabList": anonymousState__temp3,
        "onClick": this.anonymousFunc2,
        "current": 0
      }, $compid__439);
      Object.assign(this.__state, {
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        $compid__435: $compid__435,
        $compid__436: $compid__436,
        $compid__437: $compid__437,
        $compid__438: $compid__438,
        $compid__439: $compid__439,
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }]);

  return Index;
}(_index.Component), _class2.$$events = ["closeAddNewDiaryModel", "confirmAddNewDiary"], _class2.$$componentPath = "pages/index/index", _temp2)) || _class) || _class);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));