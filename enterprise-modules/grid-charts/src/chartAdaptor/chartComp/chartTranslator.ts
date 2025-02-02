import { Autowired, Bean, GridOptionsWrapper } from "@ag-grid-community/core";

@Bean("chartTranslator")
export class ChartTranslator {

    @Autowired('gridOptionsWrapper') private gridOptionsWrapper: GridOptionsWrapper;

    private static DEFAULT_TRANSLATIONS: { [name: string]: string } = {
        pivotChartTitle: 'Pivot Chart',
        rangeChartTitle: 'Range Chart',
        settings: 'Settings',
        data: 'Data',
        format: 'Format',
        categories: 'Categories',
        series: 'Series',
        xyValues: 'X Y Values',
        axis: 'Axis',
        color: 'Color',
        thickness: 'Thickness',
        xRotation: 'X Rotation',
        yRotation: 'Y Rotation',
        ticks: 'Ticks',
        width: 'Width',
        length: 'Length',
        padding: 'Padding',
        chart: 'Chart',
        title: 'Title',
        font: 'Font',
        top: 'Top',
        right: 'Right',
        bottom: 'Bottom',
        left: 'Left',
        labels: 'Labels',
        size: 'Size',
        minSize: 'Minimum Size',
        maxSize: 'Maximum Size',
        legend: 'Legend',
        position: 'Position',
        markerSize: 'Marker Size',
        markerStroke: 'Marker Stroke',
        markerPadding: 'Marker Padding',
        itemPaddingX: 'Item Padding X',
        itemPaddingY: 'Item Padding Y',
        strokeWidth: 'Stroke Width',
        offset: 'Offset',
        tooltips: 'Tooltips',
        offsets: 'Offsets',
        callout: 'Callout',
        markers: 'Markers',
        shadow: 'Shadow',
        blur: 'Blur',
        xOffset: 'X Offset',
        yOffset: 'Y Offset',
        lineWidth: 'Line Width',
        normal: 'Normal',
        bold: 'Bold',
        italic: 'Italic',
        boldItalic: 'Bold Italic',
        predefined: 'Predefined',
        fillOpacity: 'Fill Opacity',
        strokeOpacity: 'Line Opacity',
        groupedColumnTooltip: 'Grouped',
        stackedColumnTooltip: 'Stacked',
        normalizedColumnTooltip: '100% Stacked',
        groupedBarTooltip: 'Grouped',
        stackedBarTooltip: 'Stacked',
        normalizedBarTooltip: '100% Stacked',
        pieTooltip: 'Pie',
        doughnutTooltip: 'Doughnut',
        lineTooltip: 'Line',
        groupedAreaTooltip: 'Area',
        stackedAreaTooltip: 'Stacked',
        normalizedAreaTooltip: '100% Stacked',
        scatterTooltip: 'Scatter',
        bubbleTooltip: 'Bubble',
        columnGroup: 'Column',
        barGroup: 'Bar',
        pieGroup: 'Pie',
        lineGroup: 'Line',
        scatterGroup: 'X Y (Scatter)',
        areaGroup: 'Area',
        pivotChartRequiresPivotMode: 'Pivot Chart requires Pivot Mode enabled.',
        noDataToChart: 'No data available to be charted.',
    };

    public translate(toTranslate: string): string {
        const translate = this.gridOptionsWrapper.getLocaleTextFunc();
        const defaultTranslation = ChartTranslator.DEFAULT_TRANSLATIONS[toTranslate];
        return translate(toTranslate, defaultTranslation);
    }
}
