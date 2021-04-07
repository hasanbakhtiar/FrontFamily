"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var root = document.getElementById('root');

var InfoData = /*#__PURE__*/function (_React$Component) {
  _inherits(InfoData, _React$Component);

  var _super = _createSuper(InfoData);

  function InfoData() {
    _classCallCheck(this, InfoData);

    return _super.apply(this, arguments);
  }

  _createClass(InfoData, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.title), /*#__PURE__*/React.createElement("p", null, this.props.metn));
    }
  }]);

  return InfoData;
}(React.Component);

var List = /*#__PURE__*/function (_React$Component2) {
  _inherits(List, _React$Component2);

  var _super2 = _createSuper(List);

  function List() {
    _classCallCheck(this, List);

    return _super2.apply(this, arguments);
  }

  _createClass(List, [{
    key: "render",
    value: //2ci
    function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(Item, null)), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(Item, null)), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(Item, null)), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(Item, null)));
    }
  }]);

  return List;
}(React.Component);

var Item = /*#__PURE__*/function (_React$Component3) {
  _inherits(Item, _React$Component3);

  var _super3 = _createSuper(Item);

  function Item() {
    _classCallCheck(this, Item);

    return _super3.apply(this, arguments);
  }

  _createClass(Item, [{
    key: "render",
    value: //3cu 
    function render() {
      return /*#__PURE__*/React.createElement("li", null, "Lorem ipsum dolor sit amet.");
    }
  }]);

  return Item;
}(React.Component);

var infoMetn = {
  item: "Item",
  model: "s10"
};

var Main = /*#__PURE__*/function (_React$Component4) {
  _inherits(Main, _React$Component4);

  var _super4 = _createSuper(Main);

  function Main() {
    _classCallCheck(this, Main);

    return _super4.apply(this, arguments);
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InfoData, {
        title: "React",
        metn: infoMetn.model
      }), /*#__PURE__*/React.createElement(List, null));
    }
  }]);

  return Main;
}(React.Component);

var template = /*#__PURE__*/React.createElement(Main, null);
ReactDOM.render(template, root);
