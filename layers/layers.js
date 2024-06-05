var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_25True_color_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "25True_color",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/25True_color_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-724546.591115, 4437207.710469, -651167.043961, 4474203.232159]
                            })
                        });
var format_arroz_04_06_2 = new ol.format.GeoJSON();
var features_arroz_04_06_2 = format_arroz_04_06_2.readFeatures(json_arroz_04_06_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arroz_04_06_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arroz_04_06_2.addFeatures(features_arroz_04_06_2);
var lyr_arroz_04_06_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_arroz_04_06_2, 
                style: style_arroz_04_06_2,
                interactive: true,
    title: 'arroz_04_06<br />\
    <img src="styles/legend/arroz_04_06_2_0.png" /> derecha_04_06<br />\
    <img src="styles/legend/arroz_04_06_2_1.png" /> derecha_25_05<br />\
    <img src="styles/legend/arroz_04_06_2_2.png" /> derecha_30_05<br />\
    <img src="styles/legend/arroz_04_06_2_3.png" /> izquierda_04_06<br />\
    <img src="styles/legend/arroz_04_06_2_4.png" /> izquierda_25_05<br />\
    <img src="styles/legend/arroz_04_06_2_5.png" /> izquierda_30_05<br />\
    <img src="styles/legend/arroz_04_06_2_6.png" /> <br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_25True_color_1.setVisible(true);lyr_arroz_04_06_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_25True_color_1,lyr_arroz_04_06_2];
lyr_arroz_04_06_2.set('fieldAliases', {'id': 'id', 'margen': 'margen', 'ha': 'ha', });
lyr_arroz_04_06_2.set('fieldImages', {'id': 'TextEdit', 'margen': 'TextEdit', 'ha': 'TextEdit', });
lyr_arroz_04_06_2.set('fieldLabels', {'id': 'no label', 'margen': 'header label', 'ha': 'header label', });
lyr_arroz_04_06_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});