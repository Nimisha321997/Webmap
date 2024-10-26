ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32643").setExtent([273708.136382, 2115010.070703, 274673.357315, 2115785.114442]);
var wms_layers = [];

var format_LandUse_0 = new ol.format.GeoJSON();
var features_LandUse_0 = format_LandUse_0.readFeatures(json_LandUse_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_LandUse_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandUse_0.addFeatures(features_LandUse_0);
var lyr_LandUse_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandUse_0, 
                style: style_LandUse_0,
                popuplayertitle: "LandUse",
                interactive: true,
                title: '<img src="styles/legend/LandUse_0.png" /> LandUse'
            });
var format_BuildingFootprints_1 = new ol.format.GeoJSON();
var features_BuildingFootprints_1 = format_BuildingFootprints_1.readFeatures(json_BuildingFootprints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_BuildingFootprints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuildingFootprints_1.addFeatures(features_BuildingFootprints_1);
var lyr_BuildingFootprints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuildingFootprints_1, 
                style: style_BuildingFootprints_1,
                popuplayertitle: "Building Footprints",
                interactive: true,
                title: '<img src="styles/legend/BuildingFootprints_1.png" /> Building Footprints'
            });
var format_Buildingsheightgreaterthan5_2 = new ol.format.GeoJSON();
var features_Buildingsheightgreaterthan5_2 = format_Buildingsheightgreaterthan5_2.readFeatures(json_Buildingsheightgreaterthan5_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Buildingsheightgreaterthan5_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildingsheightgreaterthan5_2.addFeatures(features_Buildingsheightgreaterthan5_2);
var lyr_Buildingsheightgreaterthan5_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildingsheightgreaterthan5_2, 
                style: style_Buildingsheightgreaterthan5_2,
                popuplayertitle: "Buildings height greater than 5",
                interactive: true,
                title: '<img src="styles/legend/Buildingsheightgreaterthan5_2.png" /> Buildings height greater than 5'
            });
var format_ELU14isR_3 = new ol.format.GeoJSON();
var features_ELU14isR_3 = format_ELU14isR_3.readFeatures(json_ELU14isR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_ELU14isR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELU14isR_3.addFeatures(features_ELU14isR_3);
var lyr_ELU14isR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ELU14isR_3, 
                style: style_ELU14isR_3,
                popuplayertitle: "ELU 14 is R",
                interactive: true,
                title: '<img src="styles/legend/ELU14isR_3.png" /> ELU 14 is R'
            });
var format_BuildingsonGaothanwithflatroof_4 = new ol.format.GeoJSON();
var features_BuildingsonGaothanwithflatroof_4 = format_BuildingsonGaothanwithflatroof_4.readFeatures(json_BuildingsonGaothanwithflatroof_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_BuildingsonGaothanwithflatroof_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuildingsonGaothanwithflatroof_4.addFeatures(features_BuildingsonGaothanwithflatroof_4);
var lyr_BuildingsonGaothanwithflatroof_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuildingsonGaothanwithflatroof_4, 
                style: style_BuildingsonGaothanwithflatroof_4,
                popuplayertitle: "Buildings on Gaothan with flat roof",
                interactive: true,
                title: '<img src="styles/legend/BuildingsonGaothanwithflatroof_4.png" /> Buildings on Gaothan with flat roof'
            });
var format_buildingsthathaveREDEVasYandELU14asR_5 = new ol.format.GeoJSON();
var features_buildingsthathaveREDEVasYandELU14asR_5 = format_buildingsthathaveREDEVasYandELU14asR_5.readFeatures(json_buildingsthathaveREDEVasYandELU14asR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_buildingsthathaveREDEVasYandELU14asR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildingsthathaveREDEVasYandELU14asR_5.addFeatures(features_buildingsthathaveREDEVasYandELU14asR_5);
var lyr_buildingsthathaveREDEVasYandELU14asR_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildingsthathaveREDEVasYandELU14asR_5, 
                style: style_buildingsthathaveREDEVasYandELU14asR_5,
                popuplayertitle: " buildings that have REDEV as Y and  ELU'14 as R",
                interactive: true,
                title: '<img src="styles/legend/buildingsthathaveREDEVasYandELU14asR_5.png" />  buildings that have REDEV as Y and  ELU\'14 as R'
            });
var format_Buildingongaothanolderthan100years_6 = new ol.format.GeoJSON();
var features_Buildingongaothanolderthan100years_6 = format_Buildingongaothanolderthan100years_6.readFeatures(json_Buildingongaothanolderthan100years_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Buildingongaothanolderthan100years_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildingongaothanolderthan100years_6.addFeatures(features_Buildingongaothanolderthan100years_6);
var lyr_Buildingongaothanolderthan100years_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildingongaothanolderthan100years_6, 
                style: style_Buildingongaothanolderthan100years_6,
                popuplayertitle: "Building on gaothan older than 100 years",
                interactive: true,
                title: '<img src="styles/legend/Buildingongaothanolderthan100years_6.png" /> Building on gaothan older than 100 years'
            });
var format_Buildingisheritage_7 = new ol.format.GeoJSON();
var features_Buildingisheritage_7 = format_Buildingisheritage_7.readFeatures(json_Buildingisheritage_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Buildingisheritage_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildingisheritage_7.addFeatures(features_Buildingisheritage_7);
var lyr_Buildingisheritage_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildingisheritage_7, 
                style: style_Buildingisheritage_7,
                popuplayertitle: "Building is heritage",
                interactive: true,
                title: '<img src="styles/legend/Buildingisheritage_7.png" /> Building is heritage'
            });
var group_withinproject = new ol.layer.Group({
                                layers: [lyr_Buildingsheightgreaterthan5_2,lyr_ELU14isR_3,lyr_BuildingsonGaothanwithflatroof_4,lyr_buildingsthathaveREDEVasYandELU14asR_5,lyr_Buildingongaothanolderthan100years_6,lyr_Buildingisheritage_7,],
                                fold: "open",
                                title: "within project"});
var group_OriginalLayers = new ol.layer.Group({
                                layers: [lyr_LandUse_0,lyr_BuildingFootprints_1,],
                                fold: "open",
                                title: "Original Layers"});

lyr_LandUse_0.setVisible(true);lyr_BuildingFootprints_1.setVisible(true);lyr_Buildingsheightgreaterthan5_2.setVisible(true);lyr_ELU14isR_3.setVisible(true);lyr_BuildingsonGaothanwithflatroof_4.setVisible(true);lyr_buildingsthathaveREDEVasYandELU14asR_5.setVisible(true);lyr_Buildingongaothanolderthan100years_6.setVisible(true);lyr_Buildingisheritage_7.setVisible(true);
var layersList = [group_OriginalLayers,group_withinproject];
lyr_LandUse_0.set('fieldAliases', {'id': 'id', 'CTS Number': 'CTS Number', 'Gaothan ?': 'Gaothan ?', 'LU-DP\'67': 'LU-DP\'67', 'LU-DP\'81': 'LU-DP\'81', 'LU-ELU\'14': 'LU-ELU\'14', 'LU-DP\'1634': 'LU-DP\'1634', 'LU-OnSite': 'LU-OnSite', });
lyr_BuildingFootprints_1.set('fieldAliases', {'ID': 'ID', 'BLDG_HT': 'Height of building (in no. of storeys)', 'BLDG_COND': 'Condition of building', 'BLDG_USE': 'Current use of building', 'HERITAGE': 'Is it a classified heritage building ?', 'GRADE': 'Heritage grade of the building ', 'AGE': 'Age of the building in decades', 'REDEV': 'Has the building undergone redevelopment ?', 'OCCUPIED': 'Occupied or not ? (Y/N)', 'ROOF_TYPE': 'Type of roof ', 'MODIF': 'Has the building undergone modifications ?', 'NUMBER_FAM': 'Number of families occupying the building', 'NUMBER_SHO': 'Number of shops in the building', 'SEMIPUBLIC': 'Does the building have a semi-public interface ? (verandah, balcao, etc)', 'BLDG_OWNER': 'Ownership of the building', 'COMMUNITY': 'Community occupying the building', 'REMARKS': 'Remarks', });
lyr_Buildingsheightgreaterthan5_2.set('fieldAliases', {'ID': 'ID', 'BLDG_HT': 'BLDG_HT', 'BLDG_COND': 'BLDG_COND', 'BLDG_USE': 'BLDG_USE', 'HERITAGE': 'HERITAGE', 'GRADE': 'GRADE', 'AGE': 'AGE', 'REDEV': 'REDEV', 'OCCUPIED': 'OCCUPIED', 'ROOF_TYPE': 'ROOF_TYPE', 'MODIF': 'MODIF', 'NUMBER_FAM': 'NUMBER_FAM', 'NUMBER_SHO': 'NUMBER_SHO', 'SEMIPUBLIC': 'SEMIPUBLIC', 'BLDG_OWNER': 'BLDG_OWNER', 'COMMUNITY': 'COMMUNITY', 'REMARKS': 'REMARKS', });
lyr_ELU14isR_3.set('fieldAliases', {'ID': 'ID', 'BLDG_HT': 'BLDG_HT', 'BLDG_COND': 'BLDG_COND', 'BLDG_USE': 'BLDG_USE', 'HERITAGE': 'HERITAGE', 'GRADE': 'GRADE', 'AGE': 'AGE', 'REDEV': 'REDEV', 'OCCUPIED': 'OCCUPIED', 'ROOF_TYPE': 'ROOF_TYPE', 'MODIF': 'MODIF', 'NUMBER_FAM': 'NUMBER_FAM', 'NUMBER_SHO': 'NUMBER_SHO', 'SEMIPUBLIC': 'SEMIPUBLIC', 'BLDG_OWNER': 'BLDG_OWNER', 'COMMUNITY': 'COMMUNITY', 'REMARKS': 'REMARKS', });
lyr_BuildingsonGaothanwithflatroof_4.set('fieldAliases', {'ID': 'ID', 'BLDG_HT': 'BLDG_HT', 'BLDG_COND': 'BLDG_COND', 'BLDG_USE': 'BLDG_USE', 'HERITAGE': 'HERITAGE', 'GRADE': 'GRADE', 'AGE': 'AGE', 'REDEV': 'REDEV', 'OCCUPIED': 'OCCUPIED', 'ROOF_TYPE': 'ROOF_TYPE', 'MODIF': 'MODIF', 'NUMBER_FAM': 'NUMBER_FAM', 'NUMBER_SHO': 'NUMBER_SHO', 'SEMIPUBLIC': 'SEMIPUBLIC', 'BLDG_OWNER': 'BLDG_OWNER', 'COMMUNITY': 'COMMUNITY', 'REMARKS': 'REMARKS', });
lyr_buildingsthathaveREDEVasYandELU14asR_5.set('fieldAliases', {'ID': 'ID', 'BLDG_HT': 'BLDG_HT', 'BLDG_COND': 'BLDG_COND', 'BLDG_USE': 'BLDG_USE', 'HERITAGE': 'HERITAGE', 'GRADE': 'GRADE', 'AGE': 'AGE', 'REDEV': 'REDEV', 'OCCUPIED': 'OCCUPIED', 'ROOF_TYPE': 'ROOF_TYPE', 'MODIF': 'MODIF', 'NUMBER_FAM': 'NUMBER_FAM', 'NUMBER_SHO': 'NUMBER_SHO', 'SEMIPUBLIC': 'SEMIPUBLIC', 'BLDG_OWNER': 'BLDG_OWNER', 'COMMUNITY': 'COMMUNITY', 'REMARKS': 'REMARKS', });
lyr_Buildingongaothanolderthan100years_6.set('fieldAliases', {'ID': 'ID', 'BLDG_HT': 'BLDG_HT', 'BLDG_COND': 'BLDG_COND', 'BLDG_USE': 'BLDG_USE', 'HERITAGE': 'HERITAGE', 'GRADE': 'GRADE', 'AGE': 'AGE', 'REDEV': 'REDEV', 'OCCUPIED': 'OCCUPIED', 'ROOF_TYPE': 'ROOF_TYPE', 'MODIF': 'MODIF', 'NUMBER_FAM': 'NUMBER_FAM', 'NUMBER_SHO': 'NUMBER_SHO', 'SEMIPUBLIC': 'SEMIPUBLIC', 'BLDG_OWNER': 'BLDG_OWNER', 'COMMUNITY': 'COMMUNITY', 'REMARKS': 'REMARKS', });
lyr_Buildingisheritage_7.set('fieldAliases', {'ID': 'ID', 'BLDG_HT': 'BLDG_HT', 'BLDG_COND': 'BLDG_COND', 'BLDG_USE': 'BLDG_USE', 'HERITAGE': 'HERITAGE', 'GRADE': 'GRADE', 'AGE': 'AGE', 'REDEV': 'REDEV', 'OCCUPIED': 'OCCUPIED', 'ROOF_TYPE': 'ROOF_TYPE', 'MODIF': 'MODIF', 'NUMBER_FAM': 'NUMBER_FAM', 'NUMBER_SHO': 'NUMBER_SHO', 'SEMIPUBLIC': 'SEMIPUBLIC', 'BLDG_OWNER': 'BLDG_OWNER', 'COMMUNITY': 'COMMUNITY', 'REMARKS': 'REMARKS', });
lyr_LandUse_0.set('fieldImages', {'id': 'TextEdit', 'CTS Number': 'TextEdit', 'Gaothan ?': 'TextEdit', 'LU-DP\'67': 'TextEdit', 'LU-DP\'81': 'TextEdit', 'LU-ELU\'14': 'TextEdit', 'LU-DP\'1634': 'TextEdit', 'LU-OnSite': 'TextEdit', });
lyr_BuildingFootprints_1.set('fieldImages', {'ID': 'TextEdit', 'BLDG_HT': 'TextEdit', 'BLDG_COND': 'TextEdit', 'BLDG_USE': 'TextEdit', 'HERITAGE': 'TextEdit', 'GRADE': 'TextEdit', 'AGE': 'TextEdit', 'REDEV': 'TextEdit', 'OCCUPIED': 'TextEdit', 'ROOF_TYPE': 'TextEdit', 'MODIF': 'TextEdit', 'NUMBER_FAM': 'TextEdit', 'NUMBER_SHO': 'TextEdit', 'SEMIPUBLIC': 'TextEdit', 'BLDG_OWNER': 'TextEdit', 'COMMUNITY': 'TextEdit', 'REMARKS': 'TextEdit', });
lyr_Buildingsheightgreaterthan5_2.set('fieldImages', {'ID': '', 'BLDG_HT': '', 'BLDG_COND': '', 'BLDG_USE': '', 'HERITAGE': '', 'GRADE': '', 'AGE': '', 'REDEV': '', 'OCCUPIED': '', 'ROOF_TYPE': '', 'MODIF': '', 'NUMBER_FAM': '', 'NUMBER_SHO': '', 'SEMIPUBLIC': '', 'BLDG_OWNER': '', 'COMMUNITY': '', 'REMARKS': '', });
lyr_ELU14isR_3.set('fieldImages', {'ID': '', 'BLDG_HT': '', 'BLDG_COND': '', 'BLDG_USE': '', 'HERITAGE': '', 'GRADE': '', 'AGE': '', 'REDEV': '', 'OCCUPIED': '', 'ROOF_TYPE': '', 'MODIF': '', 'NUMBER_FAM': '', 'NUMBER_SHO': '', 'SEMIPUBLIC': '', 'BLDG_OWNER': '', 'COMMUNITY': '', 'REMARKS': '', });
lyr_BuildingsonGaothanwithflatroof_4.set('fieldImages', {'ID': '', 'BLDG_HT': '', 'BLDG_COND': '', 'BLDG_USE': '', 'HERITAGE': '', 'GRADE': '', 'AGE': '', 'REDEV': '', 'OCCUPIED': '', 'ROOF_TYPE': '', 'MODIF': '', 'NUMBER_FAM': '', 'NUMBER_SHO': '', 'SEMIPUBLIC': '', 'BLDG_OWNER': '', 'COMMUNITY': '', 'REMARKS': '', });
lyr_buildingsthathaveREDEVasYandELU14asR_5.set('fieldImages', {'ID': '', 'BLDG_HT': '', 'BLDG_COND': '', 'BLDG_USE': '', 'HERITAGE': '', 'GRADE': '', 'AGE': '', 'REDEV': '', 'OCCUPIED': '', 'ROOF_TYPE': '', 'MODIF': '', 'NUMBER_FAM': '', 'NUMBER_SHO': '', 'SEMIPUBLIC': '', 'BLDG_OWNER': '', 'COMMUNITY': '', 'REMARKS': '', });
lyr_Buildingongaothanolderthan100years_6.set('fieldImages', {'ID': '', 'BLDG_HT': '', 'BLDG_COND': '', 'BLDG_USE': '', 'HERITAGE': '', 'GRADE': '', 'AGE': '', 'REDEV': '', 'OCCUPIED': '', 'ROOF_TYPE': '', 'MODIF': '', 'NUMBER_FAM': '', 'NUMBER_SHO': '', 'SEMIPUBLIC': '', 'BLDG_OWNER': '', 'COMMUNITY': '', 'REMARKS': '', });
lyr_Buildingisheritage_7.set('fieldImages', {'ID': 'TextEdit', 'BLDG_HT': 'TextEdit', 'BLDG_COND': 'TextEdit', 'BLDG_USE': 'TextEdit', 'HERITAGE': 'TextEdit', 'GRADE': 'TextEdit', 'AGE': 'TextEdit', 'REDEV': 'TextEdit', 'OCCUPIED': 'TextEdit', 'ROOF_TYPE': 'TextEdit', 'MODIF': 'TextEdit', 'NUMBER_FAM': 'TextEdit', 'NUMBER_SHO': 'TextEdit', 'SEMIPUBLIC': 'TextEdit', 'BLDG_OWNER': 'TextEdit', 'COMMUNITY': 'TextEdit', 'REMARKS': 'TextEdit', });
lyr_LandUse_0.set('fieldLabels', {'id': 'no label', 'CTS Number': 'no label', 'Gaothan ?': 'no label', 'LU-DP\'67': 'no label', 'LU-DP\'81': 'no label', 'LU-ELU\'14': 'no label', 'LU-DP\'1634': 'no label', 'LU-OnSite': 'no label', });
lyr_BuildingFootprints_1.set('fieldLabels', {'ID': 'no label', 'BLDG_HT': 'no label', 'BLDG_COND': 'no label', 'BLDG_USE': 'no label', 'HERITAGE': 'no label', 'GRADE': 'no label', 'AGE': 'no label', 'REDEV': 'no label', 'OCCUPIED': 'no label', 'ROOF_TYPE': 'no label', 'MODIF': 'no label', 'NUMBER_FAM': 'no label', 'NUMBER_SHO': 'no label', 'SEMIPUBLIC': 'no label', 'BLDG_OWNER': 'no label', 'COMMUNITY': 'no label', 'REMARKS': 'no label', });
lyr_Buildingsheightgreaterthan5_2.set('fieldLabels', {'ID': 'no label', 'BLDG_HT': 'no label', 'BLDG_COND': 'no label', 'BLDG_USE': 'no label', 'HERITAGE': 'no label', 'GRADE': 'no label', 'AGE': 'no label', 'REDEV': 'no label', 'OCCUPIED': 'no label', 'ROOF_TYPE': 'no label', 'MODIF': 'no label', 'NUMBER_FAM': 'no label', 'NUMBER_SHO': 'no label', 'SEMIPUBLIC': 'no label', 'BLDG_OWNER': 'no label', 'COMMUNITY': 'no label', 'REMARKS': 'no label', });
lyr_ELU14isR_3.set('fieldLabels', {'ID': 'no label', 'BLDG_HT': 'no label', 'BLDG_COND': 'no label', 'BLDG_USE': 'no label', 'HERITAGE': 'no label', 'GRADE': 'no label', 'AGE': 'no label', 'REDEV': 'no label', 'OCCUPIED': 'no label', 'ROOF_TYPE': 'no label', 'MODIF': 'no label', 'NUMBER_FAM': 'no label', 'NUMBER_SHO': 'no label', 'SEMIPUBLIC': 'no label', 'BLDG_OWNER': 'no label', 'COMMUNITY': 'no label', 'REMARKS': 'no label', });
lyr_BuildingsonGaothanwithflatroof_4.set('fieldLabels', {'ID': 'no label', 'BLDG_HT': 'no label', 'BLDG_COND': 'no label', 'BLDG_USE': 'no label', 'HERITAGE': 'no label', 'GRADE': 'no label', 'AGE': 'no label', 'REDEV': 'no label', 'OCCUPIED': 'no label', 'ROOF_TYPE': 'no label', 'MODIF': 'no label', 'NUMBER_FAM': 'no label', 'NUMBER_SHO': 'no label', 'SEMIPUBLIC': 'no label', 'BLDG_OWNER': 'no label', 'COMMUNITY': 'no label', 'REMARKS': 'no label', });
lyr_buildingsthathaveREDEVasYandELU14asR_5.set('fieldLabels', {'ID': 'no label', 'BLDG_HT': 'no label', 'BLDG_COND': 'no label', 'BLDG_USE': 'no label', 'HERITAGE': 'no label', 'GRADE': 'no label', 'AGE': 'no label', 'REDEV': 'no label', 'OCCUPIED': 'no label', 'ROOF_TYPE': 'no label', 'MODIF': 'no label', 'NUMBER_FAM': 'no label', 'NUMBER_SHO': 'no label', 'SEMIPUBLIC': 'no label', 'BLDG_OWNER': 'no label', 'COMMUNITY': 'no label', 'REMARKS': 'no label', });
lyr_Buildingongaothanolderthan100years_6.set('fieldLabels', {'ID': 'no label', 'BLDG_HT': 'no label', 'BLDG_COND': 'no label', 'BLDG_USE': 'no label', 'HERITAGE': 'no label', 'GRADE': 'no label', 'AGE': 'no label', 'REDEV': 'no label', 'OCCUPIED': 'no label', 'ROOF_TYPE': 'no label', 'MODIF': 'no label', 'NUMBER_FAM': 'no label', 'NUMBER_SHO': 'no label', 'SEMIPUBLIC': 'no label', 'BLDG_OWNER': 'no label', 'COMMUNITY': 'no label', 'REMARKS': 'no label', });
lyr_Buildingisheritage_7.set('fieldLabels', {'ID': 'no label', 'BLDG_HT': 'no label', 'BLDG_COND': 'no label', 'BLDG_USE': 'no label', 'HERITAGE': 'no label', 'GRADE': 'no label', 'AGE': 'no label', 'REDEV': 'no label', 'OCCUPIED': 'no label', 'ROOF_TYPE': 'no label', 'MODIF': 'no label', 'NUMBER_FAM': 'no label', 'NUMBER_SHO': 'no label', 'SEMIPUBLIC': 'no label', 'BLDG_OWNER': 'no label', 'COMMUNITY': 'no label', 'REMARKS': 'no label', });
lyr_Buildingisheritage_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});