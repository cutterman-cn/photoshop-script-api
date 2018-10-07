/**
 * Created by xiaoqiang on 2018/10/6.
 */

// some setting
let fileName = 'unittest_document.js';
let current = $.fileName;
let test = current.replace(new RegExp(fileName), '');
$.evalFile(test + './test_base.js');
$.evalFile(test + '../output/photoshop_script_api.js');

// -------------------------------------
// test start

/*
let doc = Document.add(300, 300, "test_abc");
CHECK_EQ(doc.getName(), 'test_abc', 'getName');
CHECK_EQ(doc.getResolution(), 72, 'getResolution');
CHECK_EQ(doc.getSize().width, 300, 'getSize width');
CHECK_EQ(doc.getSize().height, 300, 'getSize height');

// resize
doc.resize(new Size(500, 500));
CHECK_EQ(doc.getSize().width, 500, 'resize width');
CHECK_EQ(doc.getSize().height, 500, 'resize height');

// resize canvas
doc.resizeCanvas(new Size(800, 800));
CHECK_EQ(doc.getSize().width, 800, 'resize canvas width');
CHECK_EQ(doc.getSize().height, 800, 'resize canvas height');

// duplicate
let newDoc = doc.duplicate();
CHECK_EQ(newDoc.getName(), 'test_abc copy', 'duplicate document');
newDoc.close();
doc.close();

// trim transparent
let doc1 = App.open(test + '/assets/document_trim.psd');
CHECK_EQ(doc1.getSize().width, 500, 'origin document width');
doc1.trim();
CHECK_EQ(doc1.getSize().width, 100, 'document width after trim');

// artboards
CHECK_EQ(doc1.hasArtboards(), false, 'no artboard document');
doc1.close();

let doc2 = App.open(test + '/assets/artboard_list.psd');
CHECK_EQ(doc2.hasArtboards(), true, 'has artboard document');
CHECK_EQ(doc2.getArtboardsIndex().length, 3, 'artboard counts');

let artboards = doc2.getArtboardList();
let art = artboards[0];
CHECK_EQ(art.name, 'Artboard 1', 'artboard detail');
doc2.close();
*/

// select layers
let doc3 = App.open(test + '/assets/selected_layers.psd');
let layers = doc3.getSelectedLayers();
CHECK_EQ(layers.length, 1, 'selected layers');

let targets = doc3.getLayersByName('Group 1');
CHECK_EQ(targets.length, 1, 'find layer name Group 1');
CHECK_EQ(targets[0].getName(), 'Group 1', 'equal name after find layer');
let targets2 = doc3.getLayersByName('Rectangle 1');
CHECK_EQ(targets2[0].getBounds().size().width, 201, 'find layer inside group');
//doc3.setSelectedLayers(targets2);
