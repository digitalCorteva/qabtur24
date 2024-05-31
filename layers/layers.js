var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_Visible_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Visible",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Visible_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-725960.676138, 4437054.836412, -654415.617664, 4473973.921074]
                            })
                        });
var format_30mayoizquierda_2 = new ol.format.GeoJSON();
var features_30mayoizquierda_2 = format_30mayoizquierda_2.readFeatures(json_30mayoizquierda_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_30mayoizquierda_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_30mayoizquierda_2.addFeatures(features_30mayoizquierda_2);
var lyr_30mayoizquierda_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_30mayoizquierda_2, 
                style: style_30mayoizquierda_2,
                popuplayertitle: "30 mayo izquierda",
                interactive: true,
                    title: '<img src="styles/legend/30mayoizquierda_2.png" /> 30 mayo izquierda'
                });
var format_25mayoizquierda_3 = new ol.format.GeoJSON();
var features_25mayoizquierda_3 = format_25mayoizquierda_3.readFeatures(json_25mayoizquierda_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_25mayoizquierda_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_25mayoizquierda_3.addFeatures(features_25mayoizquierda_3);
var lyr_25mayoizquierda_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_25mayoizquierda_3, 
                style: style_25mayoizquierda_3,
                popuplayertitle: "25 mayo izquierda",
                interactive: true,
                    title: '<img src="styles/legend/25mayoizquierda_3.png" /> 25 mayo izquierda'
                });
var format_30mayo_4 = new ol.format.GeoJSON();
var features_30mayo_4 = format_30mayo_4.readFeatures(json_30mayo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_30mayo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_30mayo_4.addFeatures(features_30mayo_4);
var lyr_30mayo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_30mayo_4, 
                style: style_30mayo_4,
                popuplayertitle: "30 mayo",
                interactive: true,
                    title: '<img src="styles/legend/30mayo_4.png" /> 30 mayo'
                });
var format_25mayo_5 = new ol.format.GeoJSON();
var features_25mayo_5 = format_25mayo_5.readFeatures(json_25mayo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_25mayo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_25mayo_5.addFeatures(features_25mayo_5);
var lyr_25mayo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_25mayo_5, 
                style: style_25mayo_5,
                popuplayertitle: "25 mayo",
                interactive: true,
                    title: '<img src="styles/legend/25mayo_5.png" /> 25 mayo'
                });

lyr_GoogleHybrid_0.setVisible(true);lyr_Visible_1.setVisible(true);lyr_30mayoizquierda_2.setVisible(true);lyr_25mayoizquierda_3.setVisible(true);lyr_30mayo_4.setVisible(true);lyr_25mayo_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Visible_1,lyr_30mayoizquierda_2,lyr_25mayoizquierda_3,lyr_30mayo_4,lyr_25mayo_5];
lyr_30mayoizquierda_2.set('fieldAliases', {'id': 'id', 'ha': 'ha', });
lyr_25mayoizquierda_3.set('fieldAliases', {'id': 'id', 'ha': 'ha', });
lyr_30mayo_4.set('fieldAliases', {'id': 'id', 'area': 'area', 'ha': 'ha', });
lyr_25mayo_5.set('fieldAliases', {'id': 'id', 'ha': 'ha', });
lyr_30mayoizquierda_2.set('fieldImages', {'id': 'TextEdit', 'ha': '', });
lyr_25mayoizquierda_3.set('fieldImages', {'id': 'TextEdit', 'ha': '', });
lyr_30mayo_4.set('fieldImages', {'id': 'TextEdit', 'area': '', 'ha': '', });
lyr_25mayo_5.set('fieldImages', {'id': 'TextEdit', 'ha': '', });
lyr_30mayoizquierda_2.set('fieldLabels', {'id': 'hidden field', 'ha': 'no label', });
lyr_25mayoizquierda_3.set('fieldLabels', {'id': 'hidden field', 'ha': 'header label - visible with data', });
lyr_30mayo_4.set('fieldLabels', {'id': 'hidden field', 'area': 'header label - always visible', 'ha': 'header label - visible with data', });
lyr_25mayo_5.set('fieldLabels', {'id': 'hidden field', 'ha': 'header label - visible with data', });
lyr_25mayo_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});