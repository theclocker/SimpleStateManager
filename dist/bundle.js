/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StoreFactory_1 = __webpack_require__(1);
var store = new StoreFactory_1.StoreFactory('counter');
StoreFactory_1.StoreFactory.getStore('counter').subscribe(function (value) {
    console.log(value);
});
StoreFactory_1.StoreFactory.getStore('counter').set("key", "value");
console.log(StoreFactory_1.StoreFactory.stores);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StoreInstance_1 = __webpack_require__(2);
var StoreFactory = /** @class */ (function () {
    function StoreFactory(name) {
        StoreFactory.stores[name] = new StoreInstance_1.default();
    }
    StoreFactory.getStore = function (name) {
        return StoreFactory.stores[name];
    };
    StoreFactory.stores = {};
    return StoreFactory;
}());
exports.StoreFactory = StoreFactory;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StoreInstance = /** @class */ (function () {
    function StoreInstance() {
        this.properties = {};
    }
    StoreInstance.prototype.subscribe = function (callback) {
        StoreInstance.callbacks.push(function () { return callback; });
    };
    StoreInstance.prototype.set = function (key, value) {
        this.properties[key] = value;
        StoreInstance.notify();
    };
    StoreInstance.notify = function () {
        StoreInstance.callbacks.map(function (callback) {
            callback();
        });
    };
    StoreInstance.callbacks = [];
    return StoreInstance;
}());
exports.default = StoreInstance;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzQxYWMyYzA2MWM0Y2FlNmQzYjgiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL1N0b3JlRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvU3RvcmVJbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REEsNENBQXdEO0FBR3hELElBQUksS0FBSyxHQUFHLElBQUksMkJBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN4QywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFzQjtJQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsMkJBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7Ozs7QUNSakMsNkNBQStEO0FBRS9EO0lBSUksc0JBQW1CLElBQVk7UUFFM0IsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLHVCQUFhLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBRWEscUJBQVEsR0FBdEIsVUFBdUIsSUFBWTtRQUMvQixNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBVGEsbUJBQU0sR0FBcUMsRUFBRSxDQUFDO0lBV2hFLG1CQUFDO0NBQUE7QUFiWSxvQ0FBWTs7Ozs7Ozs7OztBQ0V6QjtJQUFBO1FBRVksZUFBVSxHQUFvQixFQUFFLENBQUM7SUFrQjdDLENBQUM7SUFmRyxpQ0FBUyxHQUFULFVBQVUsUUFBeUM7UUFDL0MsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBTSxlQUFRLEVBQVIsQ0FBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLDJCQUFHLEdBQVYsVUFBVyxHQUFXLEVBQUUsS0FBVTtRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM3QixhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVnQixvQkFBTSxHQUF2QjtRQUNJLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFRO1lBQ2hDLFFBQVEsRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQWZnQix1QkFBUyxHQUE4QixFQUFFLENBQUM7SUFpQi9ELG9CQUFDO0NBQUE7a0JBcEJvQixhQUFhIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM0MWFjMmMwNjFjNGNhZTZkM2I4IiwiaW1wb3J0IHsgU3RvcmVGYWN0b3J5IH0gZnJvbSAnLi9zcmMvc3RvcmUvU3RvcmVGYWN0b3J5JztcbmltcG9ydCB7IFN0b3JlUHJvcGVydGllcyB9IGZyb20gXCIuL3NyYy9zdG9yZS9TdG9yZUluc3RhbmNlXCI7XG5cbmxldCBzdG9yZSA9IG5ldyBTdG9yZUZhY3RvcnkoJ2NvdW50ZXInKTtcblN0b3JlRmFjdG9yeS5nZXRTdG9yZSgnY291bnRlcicpLnN1YnNjcmliZSgodmFsdWU6IFN0b3JlUHJvcGVydGllcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbn0pO1xuU3RvcmVGYWN0b3J5LmdldFN0b3JlKCdjb3VudGVyJykuc2V0KFwia2V5XCIsIFwidmFsdWVcIik7XG5jb25zb2xlLmxvZyhTdG9yZUZhY3Rvcnkuc3RvcmVzKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC50cyIsImltcG9ydCBTdG9yZUluc3RhbmNlLCB7U3RvcmVQcm9wZXJ0aWVzfSBmcm9tIFwiLi9TdG9yZUluc3RhbmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBTdG9yZUZhY3Rvcnkge1xuXG4gICAgcHVibGljIHN0YXRpYyBzdG9yZXM6IHtbbmFtZTogc3RyaW5nXSA6IFN0b3JlSW5zdGFuY2V9ID0ge307XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cbiAgICAgICAgU3RvcmVGYWN0b3J5LnN0b3Jlc1tuYW1lXSA9IG5ldyBTdG9yZUluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRTdG9yZShuYW1lOiBzdHJpbmcpOiBTdG9yZUluc3RhbmNlIHtcbiAgICAgICAgcmV0dXJuIFN0b3JlRmFjdG9yeS5zdG9yZXNbbmFtZV07XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvU3RvcmVGYWN0b3J5LnRzIiwiZXhwb3J0IGludGVyZmFjZSBTdG9yZVByb3BlcnRpZXMge1xuICAgIFtrOiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlSW5zdGFuY2Uge1xuXG4gICAgcHJpdmF0ZSBwcm9wZXJ0aWVzOiBTdG9yZVByb3BlcnRpZXMgPSB7fTtcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGNhbGxiYWNrczogKCgpID0+IFN0b3JlUHJvcGVydGllcylbXSA9IFtdO1xuXG4gICAgc3Vic2NyaWJlKGNhbGxiYWNrOiAodmFsdWU6IFN0b3JlUHJvcGVydGllcykgPT4gYW55KSB7XG4gICAgICAgIFN0b3JlSW5zdGFuY2UuY2FsbGJhY2tzLnB1c2goKCkgPT4gY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgU3RvcmVJbnN0YW5jZS5ub3RpZnkoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3RhdGljIG5vdGlmeSgpIHtcbiAgICAgICAgU3RvcmVJbnN0YW5jZS5jYWxsYmFja3MubWFwKGNhbGxiYWNrID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL1N0b3JlSW5zdGFuY2UudHMiXSwic291cmNlUm9vdCI6IiJ9