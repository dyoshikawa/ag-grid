/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components
 * @version v22.0.0
 * @link http://www.ag-grid.com/
 * @license MIT
 */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var beanStub_1 = require("../context/beanStub");
var context_1 = require("../context/context");
var HoverFeature = /** @class */ (function (_super) {
    __extends(HoverFeature, _super);
    function HoverFeature(columns, element) {
        var _this = _super.call(this) || this;
        _this.columns = columns;
        _this.element = element;
        return _this;
    }
    HoverFeature.prototype.postConstruct = function () {
        this.addMouseHoverListeners();
    };
    HoverFeature.prototype.addMouseHoverListeners = function () {
        this.addDestroyableEventListener(this.element, 'mouseout', this.onMouseOut.bind(this));
        this.addDestroyableEventListener(this.element, 'mouseover', this.onMouseOver.bind(this));
    };
    HoverFeature.prototype.onMouseOut = function () {
        this.columnHoverService.clearMouseOver();
    };
    HoverFeature.prototype.onMouseOver = function () {
        this.columnHoverService.setMouseOver(this.columns);
    };
    __decorate([
        context_1.Autowired('columnHoverService')
    ], HoverFeature.prototype, "columnHoverService", void 0);
    __decorate([
        context_1.PostConstruct
    ], HoverFeature.prototype, "postConstruct", null);
    return HoverFeature;
}(beanStub_1.BeanStub));
exports.HoverFeature = HoverFeature;
