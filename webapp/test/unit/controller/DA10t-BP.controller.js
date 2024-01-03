/*global QUnit*/

sap.ui.define([
	"ns10/demoapp10t-bp/controller/DA10t-BP.controller"
], function (Controller) {
	"use strict";

	QUnit.module("DA10t-BP Controller");

	QUnit.test("I should test the DA10t-BP controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
