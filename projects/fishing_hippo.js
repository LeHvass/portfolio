(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 900,
	height: 699,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Fishing_Hippo_atlas_.png", id:"Fishing_Hippo_atlas_"},
		{src:"sounds/_48412__luftrum__oceanwavescrushing.mp3", id:"_48412__luftrum__oceanwavescrushing"},
		{src:"sounds/TourettesGuyhitshisheadmp3copy.mp3", id:"TourettesGuyhitshisheadmp3copy"}
	]
};



lib.ssMetadata = [
		{name:"Fishing_Hippo_atlas_", frames: [[801,701,123,81],[0,0,900,699],[953,0,61,125],[953,127,32,183],[0,701,337,112],[902,0,49,160],[506,701,293,59],[506,762,152,32],[902,312,79,28],[902,368,63,21],[902,162,34,20],[987,127,23,34],[339,701,165,161],[987,163,32,16],[902,391,66,16],[987,181,25,16],[960,342,56,24],[902,342,56,24]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Armvenstre = function() {
	this.spriteSheet = ss["Fishing_Hippo_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Backgrounduelementer = function() {
	this.spriteSheet = ss["Fishing_Hippo_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Fisk = function() {
	this.spriteSheet = ss["Fishing_Hippo_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Fiskelinevenstre = function() {
	this.spriteSheet = ss["Fishing_Hippo_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Fiskestangvenstre = function() {
	this.spriteSheet = ss["Fishing_Hippo_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Lanterne = function() {
	this.spriteSheet = ss["Fishing_Hippo_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Layer1 = function() {
	this.spriteSheet = ss["Fishing_Hippo_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Layer2 = function() {
	this.spriteSheet = ss["Fishing_Hippo_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Layer3 = function() {
	this.spriteSheet = ss["Fishing_Hippo_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Layer4 = function() {
	this.spriteSheet = ss["Fishing_Hippo_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Mundglad = function() {
	this.spriteSheet = ss["Fishing_Hippo_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Mundsur = function() {
	this.spriteSheet = ss["Fishing_Hippo_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Måne = function() {
	this.spriteSheet = ss["Fishing_Hippo_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Øjenbrynhøjre = function() {
	this.spriteSheet = ss["Fishing_Hippo_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Øjenbrynsur = function() {
	this.spriteSheet = ss["Fishing_Hippo_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Øjenbrynvenstre = function() {
	this.spriteSheet = ss["Fishing_Hippo_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Øjneglad = function() {
	this.spriteSheet = ss["Fishing_Hippo_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Øjnesur = function() {
	this.spriteSheet = ss["Fishing_Hippo_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Øjenbrynsur_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Øjenbrynsur();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66,16);


(lib.Tween1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("The End", "85px 'Forte'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 95;
	this.text.lineWidth = 897;
	this.text.parent = this;
	this.text.setTransform(0,-86);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450.3,-88,900.7,176.1);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Joy of Fishing", "85px 'Forte'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 95;
	this.text.lineWidth = 897;
	this.text.parent = this;
	this.text.setTransform(0,-86);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450.3,-88,900.7,176.1);


(lib.Skyerobject = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer1();
	this.instance.parent = this;
	this.instance.setTransform(172,91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Layer2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(137,145);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 3
	this.instance_2 = new lib.Layer3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,92);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 4
	this.instance_3 = new lib.Layer4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,141);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,91,465,86);


(lib.PlayButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{PlayButton:0,"PlayButton":1});

	// Layer 1
	this.text = new cjs.Text("Play", "33px 'Forte'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 152;
	this.text.parent = this;
	this.text.setTransform(0,-19.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s("#FFFFFF").ss(1,1,1).rr(-79,-24,158,48,5);
	this.shape.setTransform(0,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s("#FFFFFF").ss(1,1,1).rr(-79,-24,158,48,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-23,160,50);


(lib.Lanternesymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Lanterne();
	this.instance.parent = this;
	this.instance.setTransform(-24.5,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-80,49,160);


(lib.Gladeøjenbryn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Øjenbrynhøjre();
	this.instance.parent = this;
	this.instance.setTransform(47,3);

	this.instance_1 = new lib.Øjenbrynvenstre();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,19);


(lib.Fiskeline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Fiskelinevenstre();
	this.instance.parent = this;
	this.instance.setTransform(-16,-167.5,1,1.831);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-167.5,32,335.1);


(lib.Fisksymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Fisk();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61,125);


(lib.Armogfiskestang = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Armvenstre();
	this.instance.parent = this;
	this.instance.setTransform(56.2,31.2);

	this.instance_1 = new lib.Fiskestangvenstre();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-127,-128,1,1,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.1,-128,358.4,256);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.ikNode_2 = new lib.Fiskeline();
	this.ikNode_2.parent = this;
	this.ikNode_2.setTransform(43.4,252.8);

	this.ikNode_1 = new lib.Armogfiskestang();
	this.ikNode_1.parent = this;
	this.ikNode_1.setTransform(179.2,128);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_1},{t:this.ikNode_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,358.4,420.3);


// stage content:
(lib.FishingHippo3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("_48412__luftrum__oceanwavescrushing");
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(2);
		}
	}
	this.frame_238 = function() {
		playSound("TourettesGuyhitshisheadmp3copy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(238).call(this.frame_238).wait(47));

	// Layer 20
	this.button_1 = new lib.PlayButton();
	this.button_1.parent = this;
	this.button_1.setTransform(427.9,439.4);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).to({alpha:0},24).to({_off:true},1).wait(260));

	// The End
	this.instance = new lib.Tween1copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(450,349.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(263).to({_off:false},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.381},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.476},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.619},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.762},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:1},0).wait(1));

	// Text layer
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(450.4,317.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.958},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.792},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.708},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.542},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.458},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.292},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.208},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(260));

	// Fade in layer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("EhHAA3KMAAAhuTMCOAAAAMAAABuTg");
	this.shape.setTransform(453.1,351.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.773)").s().p("EhG/A3JMAAAhuSMCOAAAAMAAABuSg");
	this.shape_1.setTransform(452.9,351.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.745)").s().p("EhHAA3KMAAAhuSMCOAAAAMAAABuSg");
	this.shape_2.setTransform(452.7,351.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.722)").s().p("EhG/A3KMAAAhuTMCOAAAAMAAABuTg");
	this.shape_3.setTransform(452.4,351.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.694)").s().p("EhHAA3JMAAAhuRMCOAAAAMAAABuRg");
	this.shape_4.setTransform(452.2,351.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.667)").s().p("EhG/A3KMAAAhuTMCOAAAAMAAABuTg");
	this.shape_5.setTransform(452,351.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.639)").s().p("EhG/A3JMAAAhuRMCOAAAAMAAABuRg");
	this.shape_6.setTransform(451.7,351.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.616)").s().p("EhG/A3KMAAAhuTMCOAAAAMAAABuTg");
	this.shape_7.setTransform(451.5,352);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.588)").s().p("EhG/A3KMAAAhuTMCOAAAAMAAABuTg");
	this.shape_8.setTransform(451.3,352);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.561)").s().p("EhG/A3JMAAAhuRMCOAAAAMAAABuRg");
	this.shape_9.setTransform(451.1,352);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.533)").s().p("EhG/A3KMAAAhuTMCOAAAAMAAABuTg");
	this.shape_10.setTransform(450.8,352.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.51)").s().p("EhHAA3JMAAAhuSMCOAAAAMAAABuSg");
	this.shape_11.setTransform(450.6,352.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.482)").s().p("EhG/A3JMAAAhuRMCOAAAAMAAABuRg");
	this.shape_12.setTransform(450.4,352.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.455)").s().p("EhHAA3KMAAAhuTMCOAAAAMAAABuTg");
	this.shape_13.setTransform(450.1,352.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.427)").s().p("EhG/A3JMAAAhuRMCOAAAAMAAABuRg");
	this.shape_14.setTransform(449.9,352.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.404)").s().p("EhHAA3KMAAAhuTMCOAAAAMAAABuTg");
	this.shape_15.setTransform(449.7,352.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.376)").s().p("EhHAA3JMAAAhuRMCOAAAAMAAABuRg");
	this.shape_16.setTransform(449.4,352.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.349)").s().p("EhHAA3KMAAAhuTMCOAAAAMAAABuTg");
	this.shape_17.setTransform(449.2,352.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.322)").s().p("EhHAA3JMAAAhuRMCOAAAAMAAABuRg");
	this.shape_18.setTransform(449,352.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.294)").s().p("EhHAA3KMAAAhuTMCOAAAAMAAABuTg");
	this.shape_19.setTransform(448.8,352.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.271)").s().p("EhHAA3JMAAAhuSMCOAAAAMAAABuSg");
	this.shape_20.setTransform(448.5,352.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.243)").s().p("EhG/A3JMAAAhuRMCOAAAAMAAABuRg");
	this.shape_21.setTransform(448.3,352.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.216)").s().p("EhHAA3KMAAAhuTMCOAAAAMAAABuTg");
	this.shape_22.setTransform(448.1,352.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.188)").s().p("EhG/A3KMAAAhuTMCOAAAAMAAABuTg");
	this.shape_23.setTransform(447.8,352.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.165)").s().p("EhHAA3JMAAAhuRMCOAAAAMAAABuRg");
	this.shape_24.setTransform(447.6,352.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.137)").s().p("EhG/A3KMAAAhuTMCOAAAAMAAABuTg");
	this.shape_25.setTransform(447.4,352.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.11)").s().p("EhG/A3JMAAAhuRMCOAAAAMAAABuRg");
	this.shape_26.setTransform(447.1,352.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.082)").s().p("EhG/A3KMAAAhuTMCOAAAAMAAABuTg");
	this.shape_27.setTransform(446.9,352.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.059)").s().p("EhG/A3JMAAAhuRMCOAAAAMAAABuRg");
	this.shape_28.setTransform(446.7,352.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.031)").s().p("EhG/A3KMAAAhuTMCOAAAAMAAABuTg");
	this.shape_29.setTransform(446.5,353);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.004)").s().p("EhG/A3JMAAAhuSMCOAAAAMAAABuSg");
	this.shape_30.setTransform(446.2,353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[]},1).wait(254));

	// Fade out layer
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.004)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_31.setTransform(450,349.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.024)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_32.setTransform(450,349.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.039)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_33.setTransform(450,349.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.059)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_34.setTransform(450,349.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.078)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_35.setTransform(450,349.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.098)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_36.setTransform(450,349.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.114)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_37.setTransform(450,349.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.133)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_38.setTransform(450,349.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.153)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_39.setTransform(450,349.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.169)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_40.setTransform(450,349.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.188)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_41.setTransform(450,349.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.208)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_42.setTransform(450,349.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.224)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_43.setTransform(450,349.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.243)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_44.setTransform(450,349.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.263)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_45.setTransform(450,349.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.282)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_46.setTransform(450,349.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.298)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_47.setTransform(450,349.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.318)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_48.setTransform(450,349.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.337)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_49.setTransform(450,349.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.353)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_50.setTransform(450,349.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.373)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_51.setTransform(450,349.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.392)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_52.setTransform(450,349.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.408)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_53.setTransform(450,349.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.427)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_54.setTransform(450,349.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.447)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_55.setTransform(450,349.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.467)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_56.setTransform(450,349.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.482)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_57.setTransform(450,349.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.502)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_58.setTransform(450,349.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.522)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_59.setTransform(450,349.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.537)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_60.setTransform(450,349.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.557)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_61.setTransform(450,349.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.576)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_62.setTransform(450,349.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,0,0.596)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_63.setTransform(450,349.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,0,0.612)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_64.setTransform(450,349.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.631)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_65.setTransform(450,349.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,0,0.651)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_66.setTransform(450,349.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.667)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_67.setTransform(450,349.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.686)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_68.setTransform(450,349.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.706)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_69.setTransform(450,349.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.722)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_70.setTransform(450,349.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.741)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_71.setTransform(450,349.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.761)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_72.setTransform(450,349.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.78)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_73.setTransform(450,349.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.796)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_74.setTransform(450,349.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.816)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_75.setTransform(450,349.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.835)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_76.setTransform(450,349.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.851)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_77.setTransform(450,349.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,0,0,0.871)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_78.setTransform(450,349.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.89)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_79.setTransform(450,349.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(0,0,0,0.906)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_80.setTransform(450,349.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(0,0,0,0.925)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_81.setTransform(450,349.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(0,0,0,0.945)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_82.setTransform(450,349.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(0,0,0,0.965)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_83.setTransform(450,349.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(0,0,0,0.98)").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_84.setTransform(450,349.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("EhGTA2nMAAAhtNMCMnAAAMAAABtNg");
	this.shape_85.setTransform(450,349.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31}]},230).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).wait(1));

	// Arm
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(522.8,339.2,1,1,0,0,0,329.1,178.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:179.2,regY:210.1,rotation:-0.2,x:373,y:371.5},0).wait(1).to({rotation:-0.3,y:371.9},0).wait(1).to({rotation:-0.5,x:373.1,y:372.3},0).wait(1).to({rotation:-0.6,x:373.2,y:372.7},0).wait(1).to({rotation:-0.8,x:373.3,y:373.2},0).wait(1).to({rotation:-1,x:373.4,y:373.5},0).wait(1).to({rotation:-1.1,x:373.5,y:374},0).wait(1).to({rotation:-1.3,x:373.6,y:374.4},0).wait(1).to({rotation:-1.4,x:373.7,y:374.8},0).wait(1).to({rotation:-1.6,x:373.8,y:375.2},0).wait(1).to({rotation:-1.8,x:373.9,y:375.6},0).wait(1).to({rotation:-1.9,x:374,y:376.1},0).wait(1).to({rotation:-2.1,x:374.1,y:376.5},0).wait(1).to({rotation:-2.2,x:374.2,y:376.9},0).wait(1).to({rotation:-2.4,x:374.3,y:377.3},0).wait(1).to({rotation:-2.6,x:374.4,y:377.7},0).wait(1).to({rotation:-2.7,x:374.5,y:378.1},0).wait(1).to({rotation:-2.9,x:374.6,y:378.6},0).wait(1).to({rotation:-3,x:374.8,y:379},0).wait(1).to({rotation:-2.9,x:374.6,y:378.6},0).wait(1).to({rotation:-2.7,x:374.5,y:378.2},0).wait(1).to({rotation:-2.6,x:374.4,y:377.8},0).wait(1).to({rotation:-2.4,x:374.3,y:377.4},0).wait(1).to({rotation:-2.3,x:374.2,y:377},0).wait(1).to({rotation:-2.1,x:374.1,y:376.6},0).wait(1).to({rotation:-2,y:376.2},0).wait(1).to({rotation:-1.8,x:373.9,y:375.8},0).wait(1).to({rotation:-1.7,x:373.8,y:375.4},0).wait(1).to({rotation:-1.5,x:373.7,y:375},0).wait(1).to({rotation:-1.4,x:373.6,y:374.6},0).wait(1).to({rotation:-1.2,x:373.5,y:374.2},0).wait(1).to({rotation:-1.1,x:373.4,y:373.8},0).wait(1).to({rotation:-0.9,y:373.4},0).wait(1).to({rotation:-0.8,x:373.3,y:373},0).wait(1).to({rotation:-0.6,x:373.2,y:372.7},0).wait(1).to({rotation:-0.5,x:373.1,y:372.3},0).wait(1).to({rotation:-0.3,x:373,y:371.8},0).wait(1).to({rotation:-0.2,x:372.9,y:371.5},0).wait(1).to({rotation:0,y:371.1},0).wait(1).to({regX:329.1,regY:178.2,x:522.8,y:339.2},0).wait(1).to({regX:179.2,regY:210.1,rotation:-0.2,x:372.9,y:371.5},0).wait(1).to({rotation:-0.3,x:373.1,y:371.9},0).wait(1).to({rotation:-0.5,y:372.4},0).wait(1).to({rotation:-0.7,x:373.2,y:372.8},0).wait(1).to({rotation:-0.8,x:373.4,y:373.2},0).wait(1).to({rotation:-1,y:373.7},0).wait(1).to({rotation:-1.2,x:373.5,y:374.1},0).wait(1).to({rotation:-1.4,x:373.6,y:374.6},0).wait(1).to({rotation:-1.5,x:373.7,y:375},0).wait(1).to({rotation:-1.7,x:373.8,y:375.4},0).wait(1).to({rotation:-1.9,x:373.9,y:375.9},0).wait(1).to({rotation:-2,x:374.1,y:376.3},0).wait(1).to({rotation:-2.2,x:374.2,y:376.8},0).wait(1).to({rotation:-2.4,x:374.3,y:377.2},0).wait(1).to({rotation:-2.5,x:374.4,y:377.7},0).wait(1).to({rotation:-2.7,x:374.5,y:378.1},0).wait(1).to({rotation:-2.9,x:374.6,y:378.6},0).wait(1).to({rotation:-3,x:374.8,y:379},0).wait(1).to({rotation:-2.9,x:374.6,y:378.6},0).wait(1).to({rotation:-2.8,y:378.2},0).wait(1).to({rotation:-2.6,x:374.4,y:377.8},0).wait(1).to({rotation:-2.5,y:377.4},0).wait(1).to({rotation:-2.3,x:374.3,y:377.1},0).wait(1).to({rotation:-2.2,x:374.1,y:376.7},0).wait(1).to({rotation:-2,y:376.3},0).wait(1).to({rotation:-1.9,x:374,y:376},0).wait(1).to({rotation:-1.7,x:373.9,y:375.6},0).wait(1).to({rotation:-1.6,x:373.8,y:375.2},0).wait(1).to({rotation:-1.4,x:373.7,y:374.8},0).wait(1).to({rotation:-1.3,x:373.6,y:374.5},0).wait(1).to({rotation:-1.2,x:373.5,y:374.1},0).wait(1).to({rotation:-1,x:373.4,y:373.7},0).wait(1).to({rotation:-0.9,y:373.3},0).wait(1).to({rotation:-0.7,x:373.3,y:373},0).wait(1).to({rotation:-0.6,x:373.2,y:372.6},0).wait(1).to({rotation:-0.4,x:373.1,y:372.2},0).wait(1).to({rotation:-0.3,x:373,y:371.8},0).wait(1).to({rotation:-0.1,y:371.4},0).wait(1).to({rotation:0,x:372.9,y:371.1},0).wait(1).to({regX:329.1,regY:178.2,x:522.8,y:339.2},0).wait(1).to({regX:179.2,regY:210.1,rotation:-0.2,x:373,y:371.5},0).wait(1).to({rotation:-0.3,y:371.9},0).wait(1).to({rotation:-0.5,x:373.1,y:372.3},0).wait(1).to({rotation:-0.6,x:373.2,y:372.7},0).wait(1).to({rotation:-0.8,x:373.3,y:373.2},0).wait(1).to({rotation:-1,x:373.4,y:373.5},0).wait(1).to({rotation:-1.1,x:373.5,y:374},0).wait(1).to({rotation:-1.3,x:373.6,y:374.4},0).wait(1).to({rotation:-1.4,x:373.7,y:374.8},0).wait(1).to({rotation:-1.6,x:373.8,y:375.2},0).wait(1).to({rotation:-1.8,x:373.9,y:375.6},0).wait(1).to({rotation:-1.9,x:374,y:376.1},0).wait(1).to({rotation:-2.1,x:374.1,y:376.5},0).wait(1).to({rotation:-2.2,x:374.2,y:376.9},0).wait(1).to({rotation:-2.4,x:374.3,y:377.3},0).wait(1).to({rotation:-2.6,x:374.4,y:377.7},0).wait(1).to({rotation:-2.7,x:374.5,y:378.1},0).wait(1).to({rotation:-2.9,x:374.6,y:378.6},0).wait(1).to({rotation:-3,x:374.8,y:379},0).wait(1).to({rotation:-2.3,x:374.2,y:377},0).wait(1).to({rotation:-1.5,x:373.7,y:375},0).wait(1).to({rotation:-0.8,x:373.3,y:373},0).wait(1).to({rotation:0,x:372.9,y:371.1},0).wait(1).to({regX:329.1,regY:178.2,x:522.8,y:339.2},0).wait(41).to({regX:179.2,regY:210.1,rotation:-0.2,x:373,y:371.6},0).wait(1).to({rotation:-0.4,x:373.1,y:372.2},0).wait(1).to({rotation:-0.7,x:373.2,y:372.8},0).wait(1).to({rotation:-0.9,x:373.4,y:373.3},0).wait(1).to({rotation:-1.1,x:373.5,y:373.9},0).wait(1).to({rotation:-1.3,x:373.6,y:374.5},0).wait(1).to({rotation:-1.5,x:373.7,y:375},0).wait(1).to({rotation:-1.7,x:373.9,y:375.6},0).wait(1).to({rotation:-2,x:374,y:376.1},0).wait(1).to({rotation:-2.2,x:374.1,y:376.7},0).wait(1).to({rotation:-2.4,x:374.3,y:377.3},0).wait(1).to({rotation:-2.6,x:374.4,y:377.8},0).wait(1).to({rotation:-2.8,x:374.6,y:378.4},0).wait(1).to({rotation:-3,x:374.8,y:379},0).wait(1).to({rotation:-2.8,x:374.6,y:378.5},0).wait(1).to({rotation:-2.6,x:374.5,y:377.9},0).wait(1).to({rotation:-2.4,x:374.3,y:377.4},0).wait(1).to({rotation:-2.2,x:374.2,y:376.9},0).wait(1).to({rotation:-2,x:374.1,y:376.3},0).wait(1).to({rotation:-1.8,x:373.9,y:375.8},0).wait(1).to({rotation:-1.6,x:373.8,y:375.3},0).wait(1).to({rotation:-1.4,x:373.7,y:374.8},0).wait(1).to({rotation:-1.2,x:373.5,y:374.2},0).wait(1).to({rotation:-1,x:373.4,y:373.7},0).wait(1).to({rotation:-0.8,x:373.3,y:373.2},0).wait(1).to({rotation:-0.6,x:373.2,y:372.7},0).wait(1).to({rotation:-0.4,x:373.1,y:372.1},0).wait(1).to({rotation:-0.2,x:373,y:371.6},0).wait(1).to({rotation:0,x:372.9,y:371.1},0).wait(1).to({regX:329.1,regY:178.2,x:522.8,y:339.2},0).wait(1).to({regX:179.2,regY:210.1,rotation:-0.2,x:373,y:371.6},0).wait(1).to({rotation:-0.4,x:373.1,y:372.2},0).wait(1).to({rotation:-0.7,x:373.2,y:372.8},0).wait(1).to({rotation:-0.9,x:373.4,y:373.3},0).wait(1).to({rotation:-1.1,x:373.5,y:373.9},0).wait(1).to({rotation:-1.3,x:373.6,y:374.5},0).wait(1).to({rotation:-1.5,x:373.7,y:375},0).wait(1).to({rotation:-1.7,x:373.9,y:375.6},0).wait(1).to({rotation:-2,x:374,y:376.1},0).wait(1).to({rotation:-2.2,x:374.1,y:376.7},0).wait(1).to({rotation:-2.4,x:374.3,y:377.3},0).wait(1).to({rotation:-2.6,x:374.4,y:377.8},0).wait(1).to({rotation:-2.8,x:374.6,y:378.4},0).wait(1).to({rotation:-3,x:374.8,y:379},0).wait(1).to({rotation:-2.8,x:374.6,y:378.5},0).wait(1).to({rotation:-2.6,x:374.5,y:377.9},0).wait(1).to({rotation:-2.4,x:374.3,y:377.4},0).wait(1).to({rotation:-2.2,x:374.2,y:376.9},0).wait(1).to({rotation:-2,x:374.1,y:376.3},0).wait(1).to({rotation:-1.8,x:373.9,y:375.8},0).wait(1).to({rotation:-1.6,x:373.8,y:375.3},0).wait(1).to({rotation:-1.4,x:373.7,y:374.8},0).wait(1).to({rotation:-1.2,x:373.5,y:374.2},0).wait(1).to({rotation:-1,x:373.4,y:373.7},0).wait(1).to({rotation:-0.8,x:373.3,y:373.2},0).wait(1).to({rotation:-0.6,x:373.2,y:372.7},0).wait(1).to({rotation:-0.4,x:373.1,y:372.1},0).wait(1).to({rotation:-0.2,x:373,y:371.6},0).wait(1).to({rotation:0,x:372.9,y:371.1},0).wait(1).to({regX:329.1,regY:178.2,x:522.8,y:339.2},0).wait(1).to({regX:179.2,regY:210.1,rotation:-0.2,x:373,y:371.6},0).wait(1).to({rotation:-0.5,x:373.1,y:372.3},0).wait(1).to({rotation:-0.7,x:373.2,y:372.9},0).wait(1).to({rotation:-0.9,x:373.4,y:373.5},0).wait(1).to({rotation:-1.2,x:373.5,y:374.1},0).wait(1).to({rotation:-1.4,x:373.7,y:374.7},0).wait(1).to({rotation:-1.6,x:373.8,y:375.3},0).wait(1).to({rotation:-1.9,x:374,y:375.9},0).wait(1).to({rotation:-2.1,x:374.1,y:376.5},0).wait(1).to({rotation:-2.3,x:374.3,y:377.1},0).wait(1).to({rotation:-2.6,x:374.4,y:377.7},0).wait(1).to({rotation:-2.8,x:374.6,y:378.4},0).wait(1).to({rotation:-3,x:374.8,y:379},0).wait(1).to({rotation:-2.8,x:374.6,y:378.4},0).wait(1).to({rotation:-2.6,x:374.4,y:377.7},0).wait(1).to({rotation:-2.3,x:374.3,y:377.1},0).wait(1).to({rotation:-2.1,x:374.1,y:376.5},0).wait(1).to({rotation:-1.9,x:374,y:375.9},0).wait(1).to({rotation:-1.6,x:373.8,y:375.3},0).wait(1).to({rotation:-1.4,x:373.7,y:374.7},0).wait(1).to({rotation:-1.2,x:373.5,y:374.1},0).wait(1).to({rotation:-0.9,x:373.4,y:373.5},0).wait(1).to({rotation:-0.7,x:373.2,y:372.9},0).wait(1).to({rotation:-0.5,x:373.1,y:372.3},0).wait(1).to({rotation:-0.2,x:373,y:371.6},0).wait(1).to({rotation:0,x:372.9,y:371.1},0).wait(1).to({regX:329.1,regY:178.2,x:522.8,y:339.2},0).wait(1).to({regX:179.2,regY:210.1,rotation:-0.2,x:373,y:371.6},0).wait(1).to({rotation:-0.5,x:373.1,y:372.3},0).wait(1).to({rotation:-0.7,x:373.2,y:372.9},0).wait(1).to({rotation:-0.9,x:373.4,y:373.5},0).wait(1).to({rotation:-1.2,x:373.5,y:374.1},0).wait(1).to({rotation:-1.4,x:373.7,y:374.7},0).wait(1).to({rotation:-1.6,x:373.8,y:375.3},0).wait(1).to({rotation:-1.9,x:374,y:375.9},0).wait(1).to({rotation:-2.1,x:374.1,y:376.5},0).wait(1).to({rotation:-2.3,x:374.3,y:377.1},0).wait(1).to({rotation:-2.6,x:374.4,y:377.7},0).wait(1).to({rotation:-2.8,x:374.6,y:378.4},0).wait(1).to({rotation:-3,x:374.8,y:379},0).wait(1).to({rotation:-2.8,x:374.6,y:378.4},0).wait(1).to({rotation:-2.6,x:374.4,y:377.7},0).wait(1).to({rotation:-2.3,x:374.3,y:377.1},0).wait(1).to({rotation:-2.1,x:374.1,y:376.5},0).wait(1).to({rotation:-1.9,x:374,y:375.9},0).wait(1).to({rotation:-1.6,x:373.8,y:375.3},0).wait(1).to({rotation:-1.4,x:373.7,y:374.7},0).wait(1).to({rotation:-1.2,x:373.5,y:374.1},0).wait(1).to({rotation:-0.9,x:373.4,y:373.5},0).wait(1).to({rotation:-0.7,x:373.2,y:372.9},0).wait(1).to({rotation:-0.5,x:373.1,y:372.3},0).wait(1).to({rotation:-0.2,x:373,y:371.6},0).wait(1).to({rotation:0,x:372.9,y:371.1},0).wait(1).to({regX:329.1,regY:178.2,x:522.8,y:339.2},0).wait(1).to({regX:179.2,regY:210.1,rotation:-0.2,x:373,y:371.6},0).wait(1).to({rotation:-0.5,x:373.1,y:372.3},0).wait(1).to({rotation:-0.7,x:373.2,y:372.9},0).wait(1).to({rotation:-0.9,x:373.4,y:373.5},0).wait(1).to({rotation:-1.2,x:373.5,y:374.1},0).wait(1).to({rotation:-1.4,x:373.7,y:374.7},0).wait(1).to({rotation:-1.6,x:373.8,y:375.3},0).wait(1).to({rotation:-1.9,x:374,y:375.9},0).wait(1).to({rotation:-2.1,x:374.1,y:376.5},0).wait(1).to({rotation:-2.3,x:374.3,y:377.1},0).wait(1).to({rotation:-2.6,x:374.4,y:377.7},0).wait(1).to({rotation:-2.8,x:374.6,y:378.4},0).wait(1).to({rotation:-3,x:374.8,y:379},0).wait(1).to({rotation:-2.8,x:374.6,y:378.4},0).wait(1).to({rotation:-2.6,x:374.4,y:377.7},0).wait(1).to({rotation:-2.3,x:374.3,y:377.1},0).wait(1).to({rotation:-2.1,x:374.1,y:376.5},0).wait(1).to({rotation:-1.9,x:374,y:375.9},0).wait(1).to({rotation:-1.6,x:373.8,y:375.3},0).wait(1).to({rotation:-1.4,x:373.7,y:374.7},0).wait(1).to({rotation:-1.2,x:373.5,y:374.1},0).wait(1).to({rotation:-0.9,x:373.4,y:373.5},0).wait(1).to({rotation:-0.7,x:373.2,y:372.9},0).wait(1).to({rotation:-0.5,x:373.1,y:372.3},0).wait(1).to({rotation:-0.2,x:373,y:371.6},0).wait(1).to({rotation:0,x:372.9,y:371.1},0).wait(1));

	// Sure øjenbryn
	this.instance_3 = new lib.Øjenbrynsur_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(614,194,1,1,0,0,0,33,8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(118).to({_off:false},0).wait(1).to({y:194.3},0).wait(1).to({y:194.7},0).wait(1).to({y:195},0).wait(1).to({y:195.3},0).wait(1).to({y:195.7},0).wait(1).to({y:196},0).wait(1).to({y:196.3},0).wait(1).to({y:196.6},0).wait(1).to({y:197.3},0).wait(1).to({y:198.8},0).wait(1).to({y:200.3},0).wait(1).to({y:201.8},0).wait(1).to({y:203.3},0).wait(1).to({y:204.8},0).wait(1).to({y:206.3},0).wait(1).to({y:207.8},0).wait(1).to({y:209.3},0).wait(1).to({y:210.7},0).wait(1).to({y:211.5},0).wait(148));

	// Glade øjenbryn
	this.instance_4 = new lib.Øjenbrynhøjre();
	this.instance_4.parent = this;
	this.instance_4.setTransform(624,200);

	this.instance_5 = new lib.Øjenbrynvenstre();
	this.instance_5.parent = this;
	this.instance_5.setTransform(577,197);

	this.instance_6 = new lib.Gladeøjenbryn();
	this.instance_6.parent = this;
	this.instance_6.setTransform(616.5,206.5,1,1,0,0,0,39.5,9.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).to({state:[{t:this.instance_6}]},88).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(167));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(88).to({_off:false},0).wait(1).to({y:204.4},0).wait(1).to({y:202.4},0).wait(1).to({y:200.4},0).wait(1).to({y:199},0).wait(25).to({_off:true},1).wait(167));

	// Surmule
	this.instance_7 = new lib.Mundglad();
	this.instance_7.parent = this;
	this.instance_7.setTransform(598.3,313,1.715,1,180);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(153).to({_off:false},0).to({_off:true},89).wait(7).to({_off:false},0).wait(36));

	// Sur mund
	this.instance_8 = new lib.Mundsur();
	this.instance_8.parent = this;
	this.instance_8.setTransform(558,279);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(88).to({_off:false},0).to({_off:true},65).wait(89).to({_off:false,scaleX:2.74,scaleY:1.71,x:538,y:267},0).to({_off:true},7).wait(36));

	// Glad mund
	this.instance_9 = new lib.Mundglad();
	this.instance_9.parent = this;
	this.instance_9.setTransform(552,286);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},88).wait(197));

	// Sure øjne
	this.instance_10 = new lib.Øjnesur();
	this.instance_10.parent = this;
	this.instance_10.setTransform(581,211);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24).to({_off:false},0).to({_off:true},29).wait(35).to({_off:false},0).to({_off:true},65).wait(32).to({_off:false},0).to({_off:true},25).wait(75));

	// Glade øjne
	this.instance_11 = new lib.Øjneglad();
	this.instance_11.parent = this;
	this.instance_11.setTransform(581,211);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(285));

	// Fisk
	this.instance_12 = new lib.Fisksymbol();
	this.instance_12.parent = this;
	this.instance_12.setTransform(105.3,761.5,1,1,0,0,0,30.5,62.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(71).to({_off:false},0).wait(1).to({rotation:2.1,x:106.7,y:736.9},0).wait(1).to({rotation:3.4,x:108.6,y:712.3},0).wait(1).to({rotation:4.6,x:111.1,y:687.8},0).wait(1).to({rotation:5.9,x:114.2,y:663.4},0).wait(1).to({rotation:7.4,x:117.8,y:639},0).wait(1).to({rotation:9.1,x:122,y:614.7},0).wait(1).to({rotation:11,x:127.1,y:590.7},0).wait(1).to({rotation:13.4,x:133.1,y:566.7},0).wait(1).to({rotation:16.4,x:140.1,y:543.1},0).wait(1).to({rotation:20.2,x:148.6,y:520},0).wait(1).to({rotation:25.6,x:158.8,y:497.6},0).wait(1).to({rotation:33.4,x:171.6,y:476.5},0).wait(1).to({rotation:45.6,x:187.7,y:457.9},0).wait(1).to({rotation:64.5,x:208.1,y:444.4},0).wait(1).to({rotation:87.7,x:232.1,y:439.4},0).wait(1).to({rotation:112.1,x:254.1,y:446.3},0).wait(1).to({rotation:122.1,x:276.8,y:458.6},0).wait(1).to({rotation:136.7,x:295.6,y:474.9},0).wait(1).to({rotation:152.2,x:307.1,y:492.9},0).wait(1).to({rotation:155.3,x:318.4,y:517.6},0).wait(1).to({rotation:158.2,x:327.6,y:540.9},0).wait(1).to({rotation:162.2,x:335.3,y:564.7},0).wait(1).to({rotation:166.9,x:340.4,y:585.6},0).wait(1).to({rotation:168.4,x:345.3,y:612.3},0).wait(1).to({rotation:169.8,x:349.3,y:637.1},0).wait(1).to({rotation:171.9,x:352.5,y:661.8},0).wait(1).to({rotation:177.7,x:353.7,y:683.2},0).wait(1).to({rotation:178.8,y:710.3},0).wait(1).to({rotation:179.3,x:353.3,y:735.6},0).wait(1).to({rotation:179.6,x:352.7,y:761.5},0).wait(1).to({rotation:180.4,x:352,y:784.6},0).to({_off:true},1).wait(76).to({_off:false,rotation:360},0).wait(1).to({rotation:359.2,x:352.7,y:761.5},0).wait(1).to({rotation:358.8,x:353.3,y:735.7},0).wait(1).to({rotation:358.4,x:353.6,y:710.3},0).wait(1).to({rotation:357.3,x:353.7,y:683.3},0).wait(1).to({rotation:351.5,x:352.5,y:661.8},0).wait(1).to({rotation:349.4,x:349.3,y:637.1},0).wait(1).to({rotation:348,x:345.3,y:612.4},0).wait(1).to({rotation:346.5,x:340.4,y:585.7},0).wait(1).to({rotation:341.9,x:335.3,y:564.7},0).wait(1).to({rotation:337.9,x:327.6,y:541},0).wait(1).to({rotation:334.9,x:318.4,y:517.6},0).wait(1).to({rotation:331.8,x:307.1,y:492.9},0).wait(1).to({rotation:316.8,x:295.6,y:474.9},0).wait(1).to({rotation:301.9,x:276.8,y:458.6},0).wait(1).to({rotation:291.9,x:254.2,y:446.3},0).wait(1).to({rotation:267.9,x:232.1,y:439.4},0).wait(1).to({rotation:244.6,x:208.2,y:444.4},0).wait(1).to({rotation:225.5,x:187.7,y:457.9},0).wait(1).to({rotation:213.2,x:171.5,y:476.5},0).wait(1).to({rotation:205.3,x:158.9,y:497.6},0).wait(1).to({rotation:199.9,x:148.5,y:520},0).wait(1).to({rotation:196,x:140.1,y:543.1},0).wait(1).to({rotation:193,x:133.1,y:566.7},0).wait(1).to({rotation:190.6,x:127.1,y:590.6},0).wait(1).to({rotation:188.7,x:122,y:614.7},0).wait(1).to({rotation:187,x:117.8,y:639},0).wait(1).to({rotation:185.5,x:114.1,y:663.4},0).wait(1).to({rotation:184.2,x:111.1,y:687.8},0).wait(1).to({rotation:182.9,x:108.6,y:712.3},0).wait(1).to({rotation:181.7,x:106.6,y:736.9},0).wait(1).to({rotation:179.6,x:105.3,y:761.5},0).to({_off:true},1).wait(74));

	// Lanterne
	this.instance_13 = new lib.Lanternesymbol();
	this.instance_13.parent = this;
	this.instance_13.setTransform(398.4,186.9,1,1,2.6,0,0,9.7,-70.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:0,regY:0,rotation:2.5,x:385.6,y:257.2},0).wait(1).to({rotation:2.3,x:385.9},0).wait(1).to({rotation:2.1,x:386.1,y:257.3},0).wait(1).to({rotation:1.8,x:386.4},0).wait(1).to({rotation:1.6,x:386.7,y:257.4},0).wait(1).to({rotation:1.4,x:386.9},0).wait(1).to({rotation:1.2,x:387.2},0).wait(1).to({rotation:1,x:387.5,y:257.5},0).wait(1).to({rotation:0.8,x:387.7},0).wait(1).to({rotation:0.6,x:388,y:257.6},0).wait(1).to({rotation:0.4,x:388.3},0).wait(1).to({rotation:0.1,x:388.5},0).wait(1).to({rotation:-0.1,x:388.8,y:257.7},0).wait(1).to({rotation:-0.3,x:389},0).wait(1).to({rotation:-0.5,x:389.3},0).wait(1).to({rotation:-0.7,x:389.6,y:257.8},0).wait(1).to({rotation:-0.9,x:389.8},0).wait(1).to({rotation:-1.1,x:390.1},0).wait(1).to({rotation:-1.4,x:390.4,y:257.9},0).wait(1).to({rotation:-1.6,x:390.6},0).wait(1).to({rotation:-1.8,x:390.9},0).wait(1).to({rotation:-2,x:391.2,y:258},0).wait(1).to({rotation:-2.2,x:391.4},0).wait(1).to({rotation:-2.4,x:391.7},0).wait(1).to({rotation:-2.6,x:392},0).wait(1).to({rotation:-2.9,x:392.2,y:258.1},0).wait(1).to({rotation:-3.1,x:392.5},0).wait(1).to({rotation:-3.3,x:392.8},0).wait(1).to({rotation:-3.5,x:393},0).wait(1).to({rotation:-3.7,x:393.3},0).wait(1).to({rotation:-3.9,x:393.6,y:258.2},0).wait(1).to({rotation:-4.1,x:393.8},0).wait(1).to({rotation:-4.4,x:394.1},0).wait(1).to({rotation:-4.6,x:394.4},0).wait(1).to({rotation:-4.8,x:394.6},0).wait(1).to({rotation:-5,x:394.9},0).wait(1).to({rotation:-4.8,x:394.7},0).wait(1).to({rotation:-4.6,x:394.4},0).wait(1).to({rotation:-4.5,x:394.2},0).wait(1).to({rotation:-4.3,x:394},0).wait(1).to({rotation:-4.1,x:393.8},0).wait(1).to({rotation:-3.9,x:393.6},0).wait(1).to({rotation:-3.7,x:393.3,y:258.1},0).wait(1).to({rotation:-3.6,x:393.1},0).wait(1).to({rotation:-3.4,x:392.9},0).wait(1).to({rotation:-3.2,x:392.7},0).wait(1).to({rotation:-3,x:392.4},0).wait(1).to({rotation:-2.8,x:392.2},0).wait(1).to({rotation:-2.7,x:392,y:258},0).wait(1).to({rotation:-2.5,x:391.8},0).wait(1).to({rotation:-2.3,x:391.5},0).wait(1).to({rotation:-2.1,x:391.3},0).wait(1).to({rotation:-2,x:391.1},0).wait(1).to({rotation:-1.8,x:390.9,y:257.9},0).wait(1).to({rotation:-1.6,x:390.7},0).wait(1).to({rotation:-1.4,x:390.4},0).wait(1).to({rotation:-1.2,x:390.2},0).wait(1).to({rotation:-1.1,x:390,y:257.8},0).wait(1).to({rotation:-0.9,x:389.8},0).wait(1).to({rotation:-0.7,x:389.6},0).wait(1).to({rotation:-0.5,x:389.3,y:257.7},0).wait(1).to({rotation:-0.3,x:389.1},0).wait(1).to({rotation:-0.2,x:388.9},0).wait(1).to({rotation:0,x:388.7},0).wait(1).to({rotation:0.2,x:388.4,y:257.6},0).wait(1).to({rotation:0.4,x:388.2},0).wait(1).to({rotation:0.6,x:388},0).wait(1).to({rotation:0.7,x:387.8,y:257.5},0).wait(1).to({rotation:0.9,x:387.6},0).wait(1).to({rotation:1.1,x:387.3},0).wait(1).to({rotation:1.3,x:387.1,y:257.4},0).wait(1).to({rotation:1.5,x:386.9},0).wait(1).to({rotation:1.6,x:386.7},0).wait(1).to({rotation:1.8,x:386.5,y:257.3},0).wait(1).to({rotation:2,x:386.2},0).wait(1).to({rotation:2.2,x:386,y:257.2},0).wait(1).to({rotation:2.3,x:385.8},0).wait(1).to({rotation:2.5,x:385.6},0).wait(1).to({rotation:2.7,x:385.4,y:257.1},0).wait(1).to({regX:9.7,regY:-70.8,rotation:2.6,x:398.5,y:186.9},0).wait(1).to({regX:0,regY:0,rotation:2.5,x:385.7,y:257.1},0).wait(1).to({rotation:2.3,x:385.9,y:257.2},0).wait(1).to({rotation:2.1,x:386.2},0).wait(1).to({rotation:1.8,x:386.5,y:257.3},0).wait(1).to({rotation:1.6,x:386.7},0).wait(1).to({rotation:1.4,x:387},0).wait(1).to({rotation:1.2,x:387.2,y:257.4},0).wait(1).to({rotation:1,x:387.5},0).wait(1).to({rotation:0.8,x:387.8,y:257.5},0).wait(1).to({rotation:0.6,x:388},0).wait(1).to({rotation:0.4,x:388.3},0).wait(1).to({rotation:0.1,x:388.6,y:257.6},0).wait(1).to({rotation:-0.1,x:388.8},0).wait(1).to({rotation:-0.3,x:389.1,y:257.7},0).wait(1).to({rotation:-0.5,x:389.4},0).wait(1).to({rotation:-0.7,x:389.6},0).wait(1).to({rotation:-0.9,x:389.9,y:257.8},0).wait(1).to({rotation:-1.1,x:390.2},0).wait(1).to({rotation:-1.4,x:390.4},0).wait(1).to({rotation:-1.6,x:390.7},0).wait(1).to({rotation:-1.8,x:390.9,y:257.9},0).wait(1).to({rotation:-2,x:391.2},0).wait(1).to({rotation:-2.2,x:391.5},0).wait(1).to({rotation:-2.4,x:391.7,y:258},0).wait(1).to({rotation:-2.6,x:392},0).wait(1).to({rotation:-2.9,x:392.3},0).wait(1).to({rotation:-3.1,x:392.5},0).wait(1).to({rotation:-3.3,x:392.8},0).wait(1).to({rotation:-3.5,x:393.1,y:258.1},0).wait(1).to({rotation:-3.7,x:393.3},0).wait(1).to({rotation:-3.9,x:393.6},0).wait(1).to({rotation:-4.1,x:393.9},0).wait(1).to({rotation:-4.4,x:394.1},0).wait(1).to({rotation:-4.6,x:394.4,y:258.2},0).wait(1).to({rotation:-4.8,x:394.7},0).wait(1).to({rotation:-5,x:394.9},0).wait(1).to({rotation:-4.8,x:394.7},0).wait(1).to({rotation:-4.6,x:394.5},0).wait(1).to({rotation:-4.5,x:394.3,y:258.1},0).wait(1).to({rotation:-4.3,x:394},0).wait(1).to({rotation:-4.1,x:393.8},0).wait(1).to({rotation:-3.9,x:393.6},0).wait(1).to({rotation:-3.7,x:393.4},0).wait(1).to({rotation:-3.6,x:393.2},0).wait(1).to({rotation:-3.4,x:392.9},0).wait(1).to({rotation:-3.2,x:392.7,y:258},0).wait(1).to({rotation:-3,x:392.5},0).wait(1).to({rotation:-2.8,x:392.3},0).wait(1).to({rotation:-2.7,x:392},0).wait(1).to({rotation:-2.5,x:391.8},0).wait(1).to({rotation:-2.3,x:391.6,y:257.9},0).wait(1).to({rotation:-2.1,x:391.4},0).wait(1).to({rotation:-2,x:391.2},0).wait(1).to({rotation:-1.8,x:390.9},0).wait(1).to({rotation:-1.6,x:390.7},0).wait(1).to({rotation:-1.4,x:390.5,y:257.8},0).wait(1).to({rotation:-1.2,x:390.3},0).wait(1).to({rotation:-1.1,x:390},0).wait(1).to({rotation:-0.9,x:389.8,y:257.7},0).wait(1).to({rotation:-0.7,x:389.6},0).wait(1).to({rotation:-0.5,x:389.4},0).wait(1).to({rotation:-0.3,x:389.2},0).wait(1).to({rotation:-0.2,x:388.9,y:257.6},0).wait(1).to({rotation:0,x:388.7},0).wait(1).to({rotation:0.2,x:388.5},0).wait(1).to({rotation:0.4,x:388.3,y:257.5},0).wait(1).to({rotation:0.6,x:388.1},0).wait(1).to({rotation:0.7,x:387.8},0).wait(1).to({rotation:0.9,x:387.6,y:257.4},0).wait(1).to({rotation:1.1,x:387.4},0).wait(1).to({rotation:1.3,x:387.2},0).wait(1).to({rotation:1.5,x:386.9,y:257.3},0).wait(1).to({rotation:1.6,x:386.7},0).wait(1).to({rotation:1.8,x:386.5},0).wait(1).to({rotation:2,x:386.3,y:257.2},0).wait(1).to({rotation:2.2,x:386.1},0).wait(1).to({rotation:2.3,x:385.8},0).wait(1).to({rotation:2.5,x:385.6,y:257.1},0).wait(1).to({rotation:2.7,x:385.4},0).wait(1).to({regX:9.7,regY:-70.8,rotation:2.6,x:398.5,y:186.9},0).wait(1).to({regX:0,regY:0,rotation:2.5,x:385.7,y:257.1},0).wait(1).to({rotation:2.3,x:385.9,y:257.2},0).wait(1).to({rotation:2.1,x:386.2},0).wait(1).to({rotation:1.8,x:386.5,y:257.3},0).wait(1).to({rotation:1.6,x:386.7},0).wait(1).to({rotation:1.4,x:387},0).wait(1).to({rotation:1.2,x:387.2,y:257.4},0).wait(1).to({rotation:1,x:387.5},0).wait(1).to({rotation:0.8,x:387.8,y:257.5},0).wait(1).to({rotation:0.6,x:388},0).wait(1).to({rotation:0.4,x:388.3},0).wait(1).to({rotation:0.1,x:388.6,y:257.6},0).wait(1).to({rotation:-0.1,x:388.8},0).wait(1).to({rotation:-0.3,x:389.1,y:257.7},0).wait(1).to({rotation:-0.5,x:389.4},0).wait(1).to({rotation:-0.7,x:389.6},0).wait(1).to({rotation:-0.9,x:389.9,y:257.8},0).wait(1).to({rotation:-1.1,x:390.2},0).wait(1).to({rotation:-1.4,x:390.4},0).wait(1).to({rotation:-1.6,x:390.7},0).wait(1).to({rotation:-1.8,x:390.9,y:257.9},0).wait(1).to({rotation:-2,x:391.2},0).wait(1).to({rotation:-2.2,x:391.5},0).wait(1).to({rotation:-2.4,x:391.7,y:258},0).wait(1).to({rotation:-2.6,x:392},0).wait(1).to({rotation:-2.9,x:392.3},0).wait(1).to({rotation:-3.1,x:392.5},0).wait(1).to({rotation:-3.3,x:392.8},0).wait(1).to({rotation:-3.5,x:393.1,y:258.1},0).wait(1).to({rotation:-3.7,x:393.3},0).wait(1).to({rotation:-3.9,x:393.6},0).wait(1).to({rotation:-4.1,x:393.9},0).wait(1).to({rotation:-4.4,x:394.1},0).wait(1).to({rotation:-4.6,x:394.4,y:258.2},0).wait(1).to({rotation:-4.8,x:394.7},0).wait(1).to({rotation:-5,x:394.9},0).wait(1).to({rotation:-4.8,x:394.7},0).wait(1).to({rotation:-4.6,x:394.5},0).wait(1).to({rotation:-4.5,x:394.3,y:258.1},0).wait(1).to({rotation:-4.3,x:394},0).wait(1).to({rotation:-4.1,x:393.8},0).wait(1).to({rotation:-3.9,x:393.6},0).wait(1).to({rotation:-3.7,x:393.4},0).wait(1).to({rotation:-3.6,x:393.2},0).wait(1).to({rotation:-3.4,x:392.9},0).wait(1).to({rotation:-3.2,x:392.7,y:258},0).wait(1).to({rotation:-3,x:392.5},0).wait(1).to({rotation:-2.8,x:392.3},0).wait(1).to({rotation:-2.7,x:392},0).wait(1).to({rotation:-2.5,x:391.8},0).wait(1).to({rotation:-2.3,x:391.6,y:257.9},0).wait(1).to({rotation:-2.1,x:391.4},0).wait(1).to({rotation:-2,x:391.2},0).wait(1).to({rotation:-1.8,x:390.9},0).wait(1).to({rotation:-1.6,x:390.7},0).wait(1).to({rotation:-1.4,x:390.5,y:257.8},0).wait(1).to({rotation:-1.2,x:390.3},0).wait(1).to({rotation:-1.1,x:390},0).wait(1).to({rotation:-0.9,x:389.8,y:257.7},0).wait(1).to({rotation:-0.7,x:389.6},0).wait(1).to({rotation:-0.5,x:389.4},0).wait(1).to({rotation:-0.3,x:389.2},0).wait(1).to({rotation:-0.2,x:388.9,y:257.6},0).wait(1).to({rotation:0,x:388.7},0).wait(1).to({rotation:0.2,x:388.5},0).wait(1).to({rotation:0.4,x:388.3,y:257.5},0).wait(1).to({rotation:0.6,x:388.1},0).wait(1).to({rotation:0.7,x:387.8},0).wait(1).to({rotation:0.9,x:387.6,y:257.4},0).wait(1).to({rotation:1.1,x:387.4},0).wait(1).to({rotation:1.3,x:387.2},0).wait(1).to({rotation:1.5,x:386.9,y:257.3},0).wait(1).to({rotation:1.6,x:386.7},0).wait(1).to({rotation:1.8,x:386.5},0).wait(1).to({rotation:2,x:386.3,y:257.2},0).wait(1).to({rotation:2.2,x:386.1},0).wait(1).to({rotation:2.3,x:385.8},0).wait(1).to({rotation:2.5,x:385.6,y:257.1},0).wait(1).to({rotation:2.7,x:385.4},0).wait(1).to({regX:9.5,regY:-70.6,rotation:2.6,x:398.4,y:186.9},0).wait(1).to({regX:0,regY:0,rotation:2.5,x:385.8,y:257},0).wait(1).to({rotation:2.3,x:386.1},0).wait(1).to({rotation:2.1,x:386.3,y:257.1},0).wait(1).to({rotation:1.8,x:386.6},0).wait(1).to({rotation:1.6,x:386.9,y:257.2},0).wait(1).to({rotation:1.4,x:387.1},0).wait(1).to({rotation:1.2,x:387.4},0).wait(1).to({rotation:1,x:387.7,y:257.3},0).wait(1).to({rotation:0.8,x:387.9},0).wait(1).to({rotation:0.6,x:388.2,y:257.4},0).wait(1).to({rotation:0.4,x:388.4},0).wait(1).to({rotation:0.1,x:388.7},0).wait(1).to({rotation:-0.1,x:389,y:257.5},0).wait(1).to({rotation:-0.3,x:389.2},0).wait(1).to({rotation:-0.5,x:389.5},0).wait(1).to({rotation:-0.7,x:389.8,y:257.6},0).wait(1).to({rotation:-0.9,x:390},0).wait(1).to({rotation:-1.1,x:390.3},0).wait(1).to({rotation:-1.4,x:390.6,y:257.7},0).wait(1).to({rotation:-1.6,x:390.8},0).wait(1).to({rotation:-1.8,x:391.1},0).wait(1).to({rotation:-2,x:391.4},0).wait(1).to({rotation:-2.2,x:391.6,y:257.8},0).wait(1).to({rotation:-2.4,x:391.9},0).wait(1).to({rotation:-2.6,x:392.1},0).wait(1).to({rotation:-2.9,x:392.4},0).wait(1).to({rotation:-3.1,x:392.7,y:257.9},0).wait(1).to({rotation:-3.3,x:392.9},0).wait(1).to({rotation:-3.5,x:393.2},0).wait(1).to({rotation:-3.7,x:393.5},0).wait(1).to({rotation:-3.9,x:393.7},0).wait(1).to({rotation:-4.1,x:394,y:258},0).wait(1).to({rotation:-4.4,x:394.3},0).wait(1).to({rotation:-4.6,x:394.5},0).wait(1).to({rotation:-4.8,x:394.8},0).wait(1).to({rotation:-5,x:395.1},0).wait(1).to({rotation:-4.8,x:394.8},0).wait(1).to({rotation:-4.6,x:394.6},0).wait(1).to({rotation:-4.5,x:394.4},0).wait(1).to({rotation:-4.3,x:394.2},0).wait(1).to({rotation:-4.1,x:394},0).wait(1).to({rotation:-3.9,x:393.7,y:257.9},0).wait(1).to({rotation:-3.7,x:393.5},0).wait(1).to({rotation:-3.6,x:393.3},0).wait(1));

	// Skyer
	this.instance_14 = new lib.Skyerobject("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(232.5,141.6,1,1,0,0,0,232.5,134);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({x:232},0).wait(1).to({x:231.5},0).wait(1).to({x:231},0).wait(1).to({x:230.5},0).wait(1).to({x:229.9},0).wait(1).to({x:229.4},0).wait(1).to({x:228.9},0).wait(1).to({x:228.4},0).wait(1).to({x:227.8},0).wait(1).to({x:227.3},0).wait(1).to({x:226.8},0).wait(1).to({x:226.3},0).wait(1).to({x:225.8},0).wait(1).to({x:225.2},0).wait(1).to({x:224.7},0).wait(1).to({x:224.2},0).wait(1).to({x:223.7},0).wait(1).to({x:223.1},0).wait(1).to({x:222.6},0).wait(1).to({x:222.1},0).wait(1).to({x:221.6},0).wait(1).to({x:221.1},0).wait(1).to({x:220.5},0).wait(1).to({x:220},0).wait(1).to({x:219.5},0).wait(1).to({x:219},0).wait(1).to({x:218.4},0).wait(1).to({x:217.9},0).wait(1).to({x:217.4},0).wait(1).to({x:216.9},0).wait(1).to({x:216.4},0).wait(1).to({x:215.8},0).wait(1).to({x:215.3},0).wait(1).to({x:214.8},0).wait(1).to({x:214.3},0).wait(1).to({x:213.7},0).wait(1).to({x:213.2},0).wait(1).to({x:212.7},0).wait(1).to({x:212.2},0).wait(1).to({x:211.6},0).wait(1).to({x:211.1},0).wait(1).to({x:210.6},0).wait(1).to({x:210.1},0).wait(1).to({x:209.6},0).wait(1).to({x:209},0).wait(1).to({x:208.5},0).wait(1).to({x:208},0).wait(1).to({x:207.5},0).wait(1).to({x:206.9},0).wait(1).to({x:206.4},0).wait(1).to({x:205.9},0).wait(1).to({x:205.4},0).wait(1).to({x:204.9},0).wait(1).to({x:204.3},0).wait(1).to({x:203.8},0).wait(1).to({x:203.3},0).wait(1).to({x:202.8},0).wait(1).to({x:202.2},0).wait(1).to({x:201.7},0).wait(1).to({x:201.2},0).wait(1).to({x:200.7},0).wait(1).to({x:200.2},0).wait(1).to({x:199.6},0).wait(1).to({x:199.1},0).wait(1).to({x:198.6},0).wait(1).to({x:198.1},0).wait(1).to({x:197.5},0).wait(1).to({x:197},0).wait(1).to({x:196.5},0).wait(1).to({x:196},0).wait(1).to({x:195.4},0).wait(1).to({x:194.9},0).wait(1).to({x:194.4},0).wait(1).to({x:193.9},0).wait(1).to({x:193.4},0).wait(1).to({x:192.8},0).wait(1).to({x:192.3},0).wait(1).to({x:191.8},0).wait(1).to({x:191.3},0).wait(1).to({x:190.7},0).wait(1).to({x:190.2},0).wait(1).to({x:189.7},0).wait(1).to({x:189.2},0).wait(1).to({x:188.7},0).wait(1).to({x:188.1},0).wait(1).to({x:187.6},0).wait(1).to({x:187.1},0).wait(1).to({x:186.6},0).wait(1).to({x:186},0).wait(1).to({x:185.5},0).wait(1).to({x:185},0).wait(1).to({x:184.5},0).wait(1).to({x:184},0).wait(1).to({x:183.4},0).wait(1).to({x:182.9},0).wait(1).to({x:182.4},0).wait(1).to({x:181.9},0).wait(1).to({x:181.3},0).wait(1).to({x:180.8},0).wait(1).to({x:180.3},0).wait(1).to({x:179.8},0).wait(1).to({x:179.3},0).wait(1).to({x:178.7},0).wait(1).to({x:178.2},0).wait(1).to({x:177.7},0).wait(1).to({x:177.2},0).wait(1).to({x:176.6},0).wait(1).to({x:176.1},0).wait(1).to({x:175.6},0).wait(1).to({x:175.1},0).wait(1).to({x:174.5},0).wait(1).to({x:174},0).wait(1).to({x:173.5},0).wait(1).to({x:173},0).wait(1).to({x:172.5},0).wait(1).to({x:171.9},0).wait(1).to({x:171.4},0).wait(1).to({x:170.9},0).wait(1).to({x:170.4},0).wait(1).to({x:169.8},0).wait(1).to({x:169.3},0).wait(1).to({x:168.8},0).wait(1).to({x:168.3},0).wait(1).to({x:167.8},0).wait(1).to({x:167.2},0).wait(1).to({x:166.7},0).wait(1).to({x:166.2},0).wait(1).to({x:165.7},0).wait(1).to({x:165.1},0).wait(1).to({x:164.6},0).wait(1).to({x:164.1},0).wait(1).to({x:163.6},0).wait(1).to({x:163.1},0).wait(1).to({x:162.5},0).wait(1).to({x:162},0).wait(1).to({x:161.5},0).wait(1).to({x:161},0).wait(1).to({x:160.4},0).wait(1).to({x:159.9},0).wait(1).to({x:159.4},0).wait(1).to({x:158.9},0).wait(1).to({x:158.3},0).wait(1).to({x:157.8},0).wait(1).to({x:157.3},0).wait(1).to({x:156.8},0).wait(1).to({x:156.3},0).wait(1).to({x:155.7},0).wait(1).to({x:155.2},0).wait(1).to({x:154.7},0).wait(1).to({x:154.2},0).wait(1).to({x:153.6},0).wait(1).to({x:153.1},0).wait(1).to({x:152.6},0).wait(1).to({x:152.1},0).wait(1).to({x:151.6},0).wait(1).to({x:151},0).wait(1).to({x:150.5},0).wait(1).to({x:150},0).wait(1).to({x:149.5},0).wait(1).to({x:148.9},0).wait(1).to({x:148.4},0).wait(1).to({x:147.9},0).wait(1).to({x:147.4},0).wait(1).to({x:146.9},0).wait(1).to({x:146.3},0).wait(1).to({x:145.8},0).wait(1).to({x:145.3},0).wait(1).to({x:144.8},0).wait(1).to({x:144.2},0).wait(1).to({x:143.7},0).wait(1).to({x:143.2},0).wait(1).to({x:142.7},0).wait(1).to({x:142.2},0).wait(1).to({x:141.6},0).wait(1).to({x:141.1},0).wait(1).to({x:140.6},0).wait(1).to({x:140.1},0).wait(1).to({x:139.5},0).wait(1).to({x:139},0).wait(1).to({x:138.5},0).wait(1).to({x:138},0).wait(1).to({x:137.4},0).wait(1).to({x:136.9},0).wait(1).to({x:136.4},0).wait(1).to({x:135.9},0).wait(1).to({x:135.4},0).wait(1).to({x:134.8},0).wait(1).to({x:134.3},0).wait(1).to({x:133.8},0).wait(1).to({x:133.3},0).wait(1).to({x:132.7},0).wait(1).to({x:132.2},0).wait(1).to({x:131.7},0).wait(1).to({x:131.2},0).wait(1).to({x:130.7},0).wait(1).to({x:130.1},0).wait(1).to({x:129.6},0).wait(1).to({x:129.1},0).wait(1).to({x:128.6},0).wait(1).to({x:128},0).wait(1).to({x:127.5},0).wait(1).to({x:127},0).wait(1).to({x:126.5},0).wait(1).to({x:126},0).wait(1).to({x:125.4},0).wait(1).to({x:124.9},0).wait(1).to({x:124.4},0).wait(1).to({x:123.9},0).wait(1).to({x:123.3},0).wait(1).to({x:122.8},0).wait(1).to({x:122.3},0).wait(1).to({x:121.8},0).wait(1).to({x:121.2},0).wait(1).to({x:120.7},0).wait(1).to({x:120.2},0).wait(1).to({x:119.7},0).wait(1).to({x:119.2},0).wait(1).to({x:118.6},0).wait(1).to({x:118.1},0).wait(1).to({x:117.6},0).wait(1).to({x:117.1},0).wait(1).to({x:116.5},0).wait(1).to({x:116},0).wait(1).to({x:115.5},0).wait(1).to({x:115},0).wait(1).to({x:114.5},0).wait(1).to({x:113.9},0).wait(1).to({x:113.4},0).wait(1).to({x:112.9},0).wait(1).to({x:112.4},0).wait(1).to({x:111.8},0).wait(1).to({x:111.3},0).wait(1).to({x:110.8},0).wait(1).to({x:110.3},0).wait(1).to({x:109.8},0).wait(1).to({x:109.2},0).wait(1).to({x:108.7},0).wait(1).to({x:108.2},0).wait(1).to({x:107.7},0).wait(1).to({x:107.1},0).wait(1).to({x:106.6},0).wait(1).to({x:106.1},0).wait(1).to({x:105.6},0).wait(1).to({x:105.1},0).wait(1).to({x:104.5},0).wait(1).to({x:104},0).wait(1).to({x:103.5},0).wait(1).to({x:103},0).wait(1).to({x:102.4},0).wait(1).to({x:101.9},0).wait(1).to({x:101.4},0).wait(1).to({x:100.9},0).wait(1).to({x:100.3},0).wait(1).to({x:99.8},0).wait(1).to({x:99.3},0).wait(1).to({x:98.8},0).wait(1).to({x:98.3},0).wait(1).to({x:97.7},0).wait(1).to({x:97.2},0).wait(1).to({x:96.7},0).wait(1).to({x:96.2},0).wait(1).to({x:95.6},0).wait(1).to({x:95.1},0).wait(1).to({x:94.6},0).wait(1).to({x:94.1},0).wait(1).to({x:93.6},0).wait(1).to({x:93},0).wait(1).to({x:92.5},0).wait(1).to({x:92},0).wait(1).to({x:91.5},0).wait(1).to({x:90.9},0).wait(1).to({x:90.4},0).wait(1).to({x:89.9},0).wait(1).to({x:89.4},0).wait(1).to({x:88.9},0).wait(1).to({x:88.3},0).wait(1).to({x:87.8},0).wait(1).to({x:87.3},0).wait(1).to({x:86.8},0).wait(1).to({x:86.2},0).wait(1).to({x:85.7},0).wait(1).to({x:85.2},0).wait(1).to({x:84.7},0).wait(1).to({x:84.1},0).wait(1));

	// Baggrund
	this.instance_15 = new lib.Måne();
	this.instance_15.parent = this;
	this.instance_15.setTransform(49,50);

	this.instance_16 = new lib.Backgrounduelementer();
	this.instance_16.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15}]}).wait(285));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(448.6,348.1,909,706);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;