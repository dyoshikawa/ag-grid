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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@ag-grid-community/core");
var chartBuilder_1 = require("../../../../charts/chartBuilder");
var cartesianChartProxy_1 = require("./cartesianChartProxy");
var BarChartProxy = /** @class */ (function (_super) {
    __extends(BarChartProxy, _super);
    function BarChartProxy(params) {
        var _this = _super.call(this, params) || this;
        _this.initChartOptions();
        var builderFunction;
        if (_this.isColumnChart()) {
            builderFunction = params.grouping ? 'createGroupedColumnChart' : 'createColumnChart';
        }
        else {
            builderFunction = params.grouping ? 'createGroupedBarChart' : 'createBarChart';
        }
        _this.chart = chartBuilder_1.ChartBuilder[builderFunction](params.parentElement, _this.chartOptions);
        var barSeries = chartBuilder_1.ChartBuilder.createSeries(_this.getSeriesDefaults());
        if (barSeries) {
            _this.chart.addSeries(barSeries);
        }
        return _this;
    }
    BarChartProxy.prototype.update = function (params) {
        var chart = this.chart;
        var barSeries = chart.series[0];
        var _a = this.overriddenPalette || this.chartProxyParams.getSelectedPalette(), fills = _a.fills, strokes = _a.strokes;
        barSeries.data = params.data;
        barSeries.xKey = params.category.id;
        barSeries.xName = params.category.name;
        barSeries.yKeys = params.fields.map(function (f) { return f.colId; });
        barSeries.yNames = params.fields.map(function (f) { return f.displayName; });
        barSeries.fills = fills;
        barSeries.strokes = strokes;
        this.updateLabelRotation(params.category.id, !this.isColumnChart());
    };
    BarChartProxy.prototype.getDefaultOptions = function () {
        var isColumnChart = this.isColumnChart();
        var fontOptions = this.getDefaultFontOptions();
        var options = this.getDefaultCartesianChartOptions();
        options.xAxis.label.rotation = isColumnChart ? 335 : 0;
        options.yAxis.label.rotation = isColumnChart ? 0 : 335;
        options.seriesDefaults = __assign(__assign({}, options.seriesDefaults), { tooltip: {
                enabled: true,
            }, label: __assign(__assign({}, fontOptions), { enabled: false }), shadow: this.getDefaultDropShadowOptions() });
        return options;
    };
    BarChartProxy.prototype.isColumnChart = function () {
        return core_1._.includes([core_1.ChartType.GroupedColumn, core_1.ChartType.StackedColumn, core_1.ChartType.NormalizedColumn], this.chartType);
    };
    BarChartProxy.prototype.getSeriesDefaults = function () {
        var chartType = this.chartType;
        var isGrouped = chartType === core_1.ChartType.GroupedColumn || chartType === core_1.ChartType.GroupedBar;
        var isNormalized = chartType === core_1.ChartType.NormalizedColumn || chartType === core_1.ChartType.NormalizedBar;
        return __assign(__assign({}, this.chartOptions.seriesDefaults), { type: 'bar', grouped: isGrouped, normalizedTo: isNormalized ? 100 : undefined });
    };
    return BarChartProxy;
}(cartesianChartProxy_1.CartesianChartProxy));
exports.BarChartProxy = BarChartProxy;
