"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_photo1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/photo1.jpg */ \"./public/photo1.jpg\");\n/* harmony import */ var _public_photo2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/photo2.jpg */ \"./public/photo2.jpg\");\n/* harmony import */ var _public_photo3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/photo3.jpg */ \"./public/photo3.jpg\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar index = 0;\nvar imgArr = [\n    _public_photo1_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    _public_photo2_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    _public_photo3_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n];\nfunction createImage(index) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), img = ref[0], setState = ref[1];\n    if (index < imgArr.length) {\n        img = imgArr[index];\n        index++;\n        console.clear();\n        console.log(imgArr[index]);\n    } else {\n        index = 0;\n    }\n    return img;\n}\n_s(createImage, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\nfunction onLoadingComplete(index) {\n    setTimeout(createImage, 3000);\n}\nfunction Header(param) {\n    var title = param.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        src: createImage(index),\n        onLoadingComplete: onLoadingComplete(index),\n        height: 300,\n        width: 300\n    }, void 0, false, {\n        fileName: \"/Users/bigsky/death-website/pages/index.js\",\n        lineNumber: 32,\n        columnNumber: 10\n    }, this);\n}\n_c = Header;\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n            fileName: \"/Users/bigsky/death-website/pages/index.js\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bigsky/death-website/pages/index.js\",\n        lineNumber: 41,\n        columnNumber: 12\n    }, _this);\n};\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQThCO0FBQ3VDO0FBQ2pCO0FBQ25CO0FBQ1M7QUFDQTtBQUNBO0FBRTFDLElBQUlXLFFBQVE7QUFDWixJQUFJQyxTQUFTO0lBQUNKLDBEQUFNQTtJQUFFQywwREFBTUE7SUFBRUMsMERBQU1BO0NBQUM7QUFFckMsU0FBU0csWUFBWUYsS0FBSyxFQUFFOztJQUN6QixJQUFzQkosTUFBQUEsK0NBQVFBLENBQUMsSUFBMUJPLE1BQWlCUCxRQUFaUSxXQUFZUjtJQUV0QixJQUFJSSxRQUFRQyxPQUFPSSxNQUFNLEVBQUU7UUFDeEJGLE1BQU1GLE1BQU0sQ0FBQ0QsTUFBTTtRQUNuQkE7UUFDQU0sUUFBUUMsS0FBSztRQUNiRCxRQUFRRSxHQUFHLENBQUNQLE1BQU0sQ0FBQ0QsTUFBTTtJQUM1QixPQUFPO1FBQ0pBLFFBQVE7SUFDWCxDQUFDO0lBRUQsT0FBT0c7QUFDVjtHQWJTRDtBQWVULFNBQVNPLGtCQUFrQlQsS0FBSyxFQUFFO0lBQy9CVSxXQUFXUixhQUFhO0FBQzNCO0FBRUEsU0FBU1MsT0FBTyxLQUFPLEVBQUU7UUFBVCxjQUFDQztJQUNkLHFCQUFNLDhEQUFDdkIsbURBQUtBO1FBQ053QixLQUFLWCxZQUFZRjtRQUNqQlMsbUJBQW1CQSxrQkFBa0JUO1FBQ3JDYyxRQUFRO1FBQ1JDLE9BQU87Ozs7OztBQUVoQjtLQVBTSjtBQVNULDZCQUFlO3lCQUNKLDhEQUFDSztrQkFDQSw0RUFBQ0w7Ozs7Ozs7Ozs7RUFFWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IERvY3VtZW50LCB7IEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHR9IGZyb20gJ25leHQvZG9jdW1lbnQnXG5pbXBvcnQgbGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwaG90bzEgZnJvbSAnLi4vcHVibGljL3Bob3RvMS5qcGcnO1xuaW1wb3J0IHBob3RvMiBmcm9tICcuLi9wdWJsaWMvcGhvdG8yLmpwZyc7XG5pbXBvcnQgcGhvdG8zIGZyb20gJy4uL3B1YmxpYy9waG90bzMuanBnJztcblxubGV0IGluZGV4ID0gMDtcbmxldCBpbWdBcnIgPSBbcGhvdG8xLCBwaG90bzIsIHBob3RvM107XG5cbmZ1bmN0aW9uIGNyZWF0ZUltYWdlKGluZGV4KSB7XG4gICBsZXQgW2ltZywgc2V0U3RhdGVdID0gdXNlU3RhdGUoMCk7XG4gICBcbiAgIGlmIChpbmRleCA8IGltZ0Fyci5sZW5ndGgpIHtcbiAgICAgIGltZyA9IGltZ0FycltpbmRleF07XG4gICAgICBpbmRleCsrO1xuICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgY29uc29sZS5sb2coaW1nQXJyW2luZGV4XSk7XG4gICB9IGVsc2Uge1xuICAgICAgaW5kZXggPSAwO1xuICAgfVxuXG4gICByZXR1cm4gaW1nIFxufVxuXG5mdW5jdGlvbiBvbkxvYWRpbmdDb21wbGV0ZShpbmRleCkge1xuICAgc2V0VGltZW91dChjcmVhdGVJbWFnZSwgMzAwMCk7XG59IFxuXG5mdW5jdGlvbiBIZWFkZXIoe3RpdGxlfSkge1xuICAgcmV0dXJuPEltYWdlIFxuICAgICAgICAgc3JjPXtjcmVhdGVJbWFnZShpbmRleCl9XG4gICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZT17b25Mb2FkaW5nQ29tcGxldGUoaW5kZXgpfVxuICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgICA8L21haW4+XG4pXG5cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkRvY3VtZW50IiwiSHRtbCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsImxheW91dCIsInVzZVN0YXRlIiwicGhvdG8xIiwicGhvdG8yIiwicGhvdG8zIiwiaW5kZXgiLCJpbWdBcnIiLCJjcmVhdGVJbWFnZSIsImltZyIsInNldFN0YXRlIiwibGVuZ3RoIiwiY29uc29sZSIsImNsZWFyIiwibG9nIiwib25Mb2FkaW5nQ29tcGxldGUiLCJzZXRUaW1lb3V0IiwiSGVhZGVyIiwidGl0bGUiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});