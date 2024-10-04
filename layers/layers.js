var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Universidades_3 = new ol.format.GeoJSON();
var features_Universidades_3 = format_Universidades_3.readFeatures(json_Universidades_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Universidades_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Universidades_3.addFeatures(features_Universidades_3);
var lyr_Universidades_3 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Universidades_3, 
                radius: 7 * 2,
                gradient: ['#f1eef6', '#d7b5d8', '#df65b0', '#dd1c77', '#980043'],
                blur: 15,
                shadow: 250,
                title: 'Universidades '
            });
var format_Parques_Industriales_4 = new ol.format.GeoJSON();
var features_Parques_Industriales_4 = format_Parques_Industriales_4.readFeatures(json_Parques_Industriales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parques_Industriales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parques_Industriales_4.addFeatures(features_Parques_Industriales_4);
var lyr_Parques_Industriales_4 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Parques_Industriales_4, 
                radius: 5 * 2,
                gradient: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
                blur: 15,
                shadow: 250,
                title: 'Parques_Industriales '
            });
var format_Hoteles_5 = new ol.format.GeoJSON();
var features_Hoteles_5 = format_Hoteles_5.readFeatures(json_Hoteles_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoteles_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hoteles_5.addFeatures(features_Hoteles_5);
var lyr_Hoteles_5 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Hoteles_5, 
                radius: 7 * 2,
                gradient: ['#2b83ba', '#abdda4', '#ffffbf', '#fdae61', '#d7191c'],
                blur: 15,
                shadow: 250,
                title: 'Hoteles '
            });
var format_Desarrolladores_6 = new ol.format.GeoJSON();
var features_Desarrolladores_6 = format_Desarrolladores_6.readFeatures(json_Desarrolladores_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desarrolladores_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desarrolladores_6.addFeatures(features_Desarrolladores_6);
var lyr_Desarrolladores_6 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Desarrolladores_6, 
                radius: 5 * 2,
                gradient: ['#fafafa', '#050505'],
                blur: 15,
                shadow: 250,
                title: 'Desarrolladores '
            });
var format_Equipoderiego_7 = new ol.format.GeoJSON();
var features_Equipoderiego_7 = format_Equipoderiego_7.readFeatures(json_Equipoderiego_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Equipoderiego_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equipoderiego_7.addFeatures(features_Equipoderiego_7);
var lyr_Equipoderiego_7 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Equipoderiego_7, 
                radius: 6 * 2,
                gradient: ['#feebe2', '#fbb4b9', '#f768a1', '#c51b8a', '#7a0177'],
                blur: 15,
                shadow: 250,
                title: 'Equipo de riego '
            });
var format_Clubs_deportivos_8 = new ol.format.GeoJSON();
var features_Clubs_deportivos_8 = format_Clubs_deportivos_8.readFeatures(json_Clubs_deportivos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clubs_deportivos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clubs_deportivos_8.addFeatures(features_Clubs_deportivos_8);
var lyr_Clubs_deportivos_8 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Clubs_deportivos_8, 
                radius: 5 * 2,
                gradient: ['#faebdd', '#fae8d8', '#fae6d6', '#f9e5d4', '#f9e3d2', '#f9e2d0', '#f9e0cd', '#f9dfcb', '#f9ddc9', '#f8dcc7', '#f8dac5', '#f8d9c3', '#f8d7c0', '#f8d6be', '#f8d4bc', '#f8d3ba', '#f8d1b8', '#f7d0b5', '#f7cfb3', '#f7cdb1', '#f7ccaf', '#f7caac', '#f7c9aa', '#f7c7a8', '#f7c6a6', '#f7c4a4', '#f7c2a2', '#f6c19f', '#f6bf9d', '#f6be9b', '#f6bc99', '#f6bb97', '#f6b995', '#f6b893', '#f6b691', '#f6b48f', '#f6b38d', '#f6b18b', '#f6b089', '#f6ae87', '#f6ad85', '#f6ab83', '#f6a981', '#f6a880', '#f6a67e', '#f6a47c', '#f6a37a', '#f6a178', '#f6a077', '#f69e75', '#f69c73', '#f69b71', '#f59970', '#f5976e', '#f5966c', '#f5946b', '#f59269', '#f59067', '#f58f66', '#f58d64', '#f58b63', '#f58a61', '#f58860', '#f4865e', '#f4845d', '#f4835b', '#f4815a', '#f47f58', '#f47d57', '#f47c55', '#f47a54', '#f37852', '#f37651', '#f37450', '#f3734e', '#f3714d', '#f26f4c', '#f26d4b', '#f26b49', '#f26948', '#f26747', '#f16646', '#f16445', '#f16244', '#f06043', '#f05e42', '#f05c42', '#ef5a41', '#ef5840', '#ef5640', '#ee543f', '#ee523f', '#ed503e', '#ed4e3e', '#ec4c3e', '#ec4a3e', '#eb483e', '#eb463e', '#ea443e', '#e9423e', '#e8403e', '#e83f3f', '#e73d3f', '#e63b40', '#e53940', '#e43841', '#e33641', '#e23442', '#e13342', '#e03143', '#df2f44', '#de2e44', '#dd2c45', '#dc2b46', '#db2946', '#d92847', '#d82748', '#d72549', '#d62449', '#d5224a', '#d3214b', '#d2204c', '#d11f4c', '#cf1e4d', '#ce1d4e', '#cd1c4e', '#cb1b4f', '#ca1a50', '#c81951', '#c71951', '#c51852', '#c41753', '#c21753', '#c11754', '#bf1654', '#bd1655', '#bc1656', '#ba1656', '#b91657', '#b71657', '#b51657', '#b41658', '#b21758', '#b01759', '#af1759', '#ad1759', '#ab185a', '#aa185a', '#a8185a', '#a6195a', '#a4195b', '#a3195b', '#a11a5b', '#9f1a5b', '#9e1a5b', '#9c1b5b', '#9a1b5b', '#981b5b', '#971c5b', '#951c5b', '#931c5b', '#921c5b', '#901d5b', '#8e1d5b', '#8c1d5b', '#8b1d5b', '#891e5b', '#871e5b', '#861e5b', '#841e5a', '#821e5a', '#811e5a', '#7f1e5a', '#7d1f5a', '#7b1f59', '#7a1f59', '#781f59', '#761f58', '#751f58', '#731f58', '#711f57', '#701f57', '#6e1f57', '#6d1f56', '#6b1f56', '#691f55', '#681f55', '#661f54', '#641f54', '#631f53', '#611f53', '#601f52', '#5e1f52', '#5c1e51', '#5b1e51', '#591e50', '#581e4f', '#561e4f', '#541e4e', '#531e4d', '#511e4d', '#501d4c', '#4e1d4b', '#4c1d4b', '#4b1d4a', '#491d49', '#481c48', '#461c48', '#451c47', '#431c46', '#421b45', '#401b44', '#3f1b43', '#3d1a42', '#3c1a42', '#3a1a41', '#381a40', '#37193f', '#35193e', '#34193d', '#33183c', '#31183b', '#30173a', '#2e1739', '#2d1738', '#2b1637', '#2a1636', '#281535', '#271534', '#251433', '#241432', '#221331', '#211330', '#20122e', '#1e122d', '#1d112c', '#1b112b', '#1a102a', '#180f29', '#170f28', '#160e27', '#140e26', '#130d25', '#110c24', '#100b23', '#0e0b22', '#0d0a21', '#0b0920', '#0a091f', '#08081e', '#07071d', '#06071c', '#05061b', '#04051a', '#03051a'],
                blur: 15,
                shadow: 250,
                title: 'Clubs_deportivos '
            });
var format_CamposdeGolf_9 = new ol.format.GeoJSON();
var features_CamposdeGolf_9 = format_CamposdeGolf_9.readFeatures(json_CamposdeGolf_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CamposdeGolf_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CamposdeGolf_9.addFeatures(features_CamposdeGolf_9);
var lyr_CamposdeGolf_9 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_CamposdeGolf_9, 
                radius: 6 * 2,
                gradient: ['#fde725', '#f1e51d', '#e5e419', '#d8e219', '#cae11f', '#bddf26', '#b0dd2f', '#a2da37', '#95d840', '#89d548', '#7cd250', '#70cf57', '#65cb5e', '#5ac864', '#50c46a', '#46c06f', '#3dbc74', '#35b779', '#2eb37c', '#28ae80', '#24aa83', '#21a585', '#1fa188', '#1e9c89', '#1f978b', '#20928c', '#218e8d', '#23898e', '#25848e', '#27808e', '#297b8e', '#2a768e', '#2c718e', '#2e6d8e', '#31688e', '#33638d', '#355e8d', '#38598c', '#3a538b', '#3d4e8a', '#3f4889', '#414287', '#433d84', '#453781', '#46307e', '#472a7a', '#482475', '#481d6f', '#481769', '#471063', '#46085c', '#440154'],
                blur: 15,
                shadow: 250,
                title: 'Campos de Golf '
            });
var format_Contratistas_10 = new ol.format.GeoJSON();
var features_Contratistas_10 = format_Contratistas_10.readFeatures(json_Contratistas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contratistas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contratistas_10.addFeatures(features_Contratistas_10);
var lyr_Contratistas_10 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Contratistas_10, 
                radius: 5 * 2,
                gradient: ['#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d'],
                blur: 15,
                shadow: 250,
                title: 'Contratistas '
            });
var format_Condominiosycotos_11 = new ol.format.GeoJSON();
var features_Condominiosycotos_11 = format_Condominiosycotos_11.readFeatures(json_Condominiosycotos_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Condominiosycotos_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Condominiosycotos_11.addFeatures(features_Condominiosycotos_11);
var lyr_Condominiosycotos_11 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Condominiosycotos_11, 
                radius: 5 * 2,
                gradient: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
                blur: 15,
                shadow: 250,
                title: 'Condominios y cotos '
            });
var format_Cementerios_12 = new ol.format.GeoJSON();
var features_Cementerios_12 = format_Cementerios_12.readFeatures(json_Cementerios_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cementerios_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cementerios_12.addFeatures(features_Cementerios_12);
var lyr_Cementerios_12 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Cementerios_12, 
                radius: 7 * 2,
                gradient: ['#2b83ba', '#abdda4', '#ffffbf', '#fdae61', '#d7191c'],
                blur: 15,
                shadow: 250,
                title: 'Cementerios '
            });
var format_Arquitecturaypaisajeurbano_13 = new ol.format.GeoJSON();
var features_Arquitecturaypaisajeurbano_13 = format_Arquitecturaypaisajeurbano_13.readFeatures(json_Arquitecturaypaisajeurbano_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arquitecturaypaisajeurbano_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arquitecturaypaisajeurbano_13.addFeatures(features_Arquitecturaypaisajeurbano_13);
var lyr_Arquitecturaypaisajeurbano_13 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Arquitecturaypaisajeurbano_13, 
                radius: 5 * 2,
                gradient: ['#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d'],
                blur: 15,
                shadow: 250,
                title: 'Arquitectura y paisaje urbano '
            });
var format_Administraciondebienesraices_14 = new ol.format.GeoJSON();
var features_Administraciondebienesraices_14 = format_Administraciondebienesraices_14.readFeatures(json_Administraciondebienesraices_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administraciondebienesraices_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administraciondebienesraices_14.addFeatures(features_Administraciondebienesraices_14);
var lyr_Administraciondebienesraices_14 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Administraciondebienesraices_14, 
                radius: 5 * 2,
                gradient: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
                blur: 15,
                shadow: 250,
                title: 'Administracion de bienes raices'
            });
var group_Mapasdecalor = new ol.layer.Group({
                                layers: [lyr_Universidades_3,lyr_Parques_Industriales_4,lyr_Hoteles_5,lyr_Desarrolladores_6,lyr_Equipoderiego_7,lyr_Clubs_deportivos_8,lyr_CamposdeGolf_9,lyr_Contratistas_10,lyr_Condominiosycotos_11,lyr_Cementerios_12,lyr_Arquitecturaypaisajeurbano_13,lyr_Administraciondebienesraices_14,],
                                fold: "open",
                                title: "Mapas de calor"});

lyr_OSMStandard_0.setVisible(false);lyr_GoogleMaps_1.setVisible(false);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_Universidades_3.setVisible(false);lyr_Parques_Industriales_4.setVisible(false);lyr_Hoteles_5.setVisible(false);lyr_Desarrolladores_6.setVisible(false);lyr_Equipoderiego_7.setVisible(false);lyr_Clubs_deportivos_8.setVisible(false);lyr_CamposdeGolf_9.setVisible(false);lyr_Contratistas_10.setVisible(false);lyr_Condominiosycotos_11.setVisible(true);lyr_Cementerios_12.setVisible(false);lyr_Arquitecturaypaisajeurbano_13.setVisible(false);lyr_Administraciondebienesraices_14.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_GoogleMaps_1,lyr_GoogleSatelliteHybrid_2,group_Mapasdecalor];
