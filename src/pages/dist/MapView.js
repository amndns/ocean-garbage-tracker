"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_leaflet_1 = require("react-leaflet");
var GarbageDetail_1 = require("../components/GarbageDetail");
var data = require("../data/data.json");
require("leaflet/dist/leaflet.css");
var markersColor = '#1890FF';
var markers = data.data.map(function (d) { return [d.lat, d.lng]; });
var MapView = function () {
    return (react_1["default"].createElement(react_leaflet_1.Map, { center: { lat: 10, lng: 10 }, zoom: 2 },
        ' ',
        react_1["default"].createElement(react_leaflet_1.TileLayer, { url: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png\t", attribution: '\u00A9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' }),
        markers.map(function (m) { return (react_1["default"].createElement(react_leaflet_1.CircleMarker, { center: m, radius: 1, color: markersColor },
            react_1["default"].createElement(react_leaflet_1.Popup, null,
                react_1["default"].createElement(GarbageDetail_1["default"], null)))); })));
};
exports["default"] = MapView;
