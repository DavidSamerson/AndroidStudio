(function(){'use strict';var a;var d=function(b,e){if(e){var c=document.createEvent("CustomEvent");c.initCustomEvent("ready",!0,!0,e)}else c=document.createEvent("Event"),c.initEvent("ready",!0,!0);b.dispatchEvent(c)};var f=function(){};goog.inherits(f,HTMLElement);a=f.prototype;a.createdCallback=function(){this.a=null;this.c=!1;this.b=[];studio.utils.EnablerAccessor.loadModuleWhenReady(studio.module.ModuleId.CONFIGURABLE,this.g.bind(this))};a.getData=function(){return this.a};a.isDataLoaded=function(){return this.c};a.addDataTransformer=function(b){this.b.push(b)};a.f=function(){this.a&&this.b.forEach(function(b){"function"==typeof b&&b.call(this,this.a,this)},this);this.c=!0;d(this,this.a)};
a.g=function(){studio.sdk.configurable.getConfiguration(function(b){(this.a=b)&&studio.sdk.configurable.binding.addValueChangeListener(this.a,this.f.bind(this));this.f()}.bind(this))};a.attributeChangedCallback=function(){};document.registerElement("gwd-studio-enabler-data-provider",{prototype:f.prototype});}).call(this);
