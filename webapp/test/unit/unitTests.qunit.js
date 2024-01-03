/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ns10/demoapp10t-bp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
