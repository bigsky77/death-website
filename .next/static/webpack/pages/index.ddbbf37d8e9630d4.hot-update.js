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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_photo1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/photo1.jpg */ \"./public/photo1.jpg\");\n/* harmony import */ var _public_photo2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/photo2.jpg */ \"./public/photo2.jpg\");\n/* harmony import */ var _public_photo3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/photo3.jpg */ \"./public/photo3.jpg\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar images = [\n    _public_photo1_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    _public_photo2_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    _public_photo3_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n];\nfunction createImage(index, img) {\n    if (index < imgArr.length) {\n        img = imgArr[index];\n        index++;\n        console.clear();\n        console.log(imgArr[index]);\n    } else {\n        index = 0;\n    }\n    setTimeout(createImage, 3000);\n    return img;\n}\nfunction Header(param) {\n    var title = param.title;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), currentImage = ref[0], setCurrentImage = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var intervalId = setInterval(function() {\n            setCurrentImage(images[Math.floor(Math.random() * items.length)]);\n        }, 5000);\n        return function() {\n            return clearInterval(intervalId);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        src: images[currentIndex],\n        height: 300,\n        width: 300\n    }, void 0, false, {\n        fileName: \"/Users/bigsky/death-website/pages/index.js\",\n        lineNumber: 37,\n        columnNumber: 10\n    }, this);\n}\n_s(Header, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Header;\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n            fileName: \"/Users/bigsky/death-website/pages/index.js\",\n            lineNumber: 46,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bigsky/death-website/pages/index.js\",\n        lineNumber: 45,\n        columnNumber: 12\n    }, _this);\n};\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQThCO0FBQ3VDO0FBQ2pCO0FBQ1I7QUFDRjtBQUNBO0FBQ0E7QUFFMUMsSUFBSVksU0FBUztJQUFDSCwwREFBTUE7SUFBRUMsMERBQU1BO0lBQUVDLDBEQUFNQTtDQUFDO0FBRXJDLFNBQVNFLFlBQVlDLEtBQUssRUFBRUMsR0FBRyxFQUFFO0lBRTlCLElBQUlELFFBQVFFLE9BQU9DLE1BQU0sRUFBRTtRQUN4QkYsTUFBTUMsTUFBTSxDQUFDRixNQUFNO1FBQ25CQTtRQUNBSSxRQUFRQyxLQUFLO1FBQ2JELFFBQVFFLEdBQUcsQ0FBQ0osTUFBTSxDQUFDRixNQUFNO0lBQzVCLE9BQU87UUFDSkEsUUFBUTtJQUNYLENBQUM7SUFFRE8sV0FBV1IsYUFBYTtJQUN4QixPQUFPRTtBQUNWO0FBRUEsU0FBU08sT0FBTyxLQUFPLEVBQUU7UUFBVCxjQUFDQzs7SUFDZCxJQUF3Q2hCLE1BQUFBLCtDQUFRQSxDQUFDLElBQUksR0FBOUNpQixlQUFpQ2pCLFFBQW5Ca0Isa0JBQW1CbEI7SUFFdkNDLGdEQUFTQSxDQUFDLFdBQU07UUFDWixJQUFNa0IsYUFBYUMsWUFBWSxXQUFNO1lBQ2pDRixnQkFBZ0JiLE1BQU0sQ0FBQ2dCLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLQyxNQUFNZCxNQUFNLEVBQUU7UUFDcEUsR0FBRztRQUVILE9BQU87bUJBQU1lLGNBQWNOOztJQUMvQixHQUFHLEVBQUU7SUFFTixxQkFBTSw4REFBQzFCLG1EQUFLQTtRQUNOaUMsS0FBS3JCLE1BQU0sQ0FBQ3NCLGFBQWE7UUFDekJDLFFBQVE7UUFDUkMsT0FBTzs7Ozs7O0FBRWhCO0dBaEJTZDtLQUFBQTtBQWtCVCw2QkFBZTt5QkFDSiw4REFBQ2U7a0JBQ0EsNEVBQUNmOzs7Ozs7Ozs7O0VBRVoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBEb2N1bWVudCwgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0fSBmcm9tICduZXh0L2RvY3VtZW50J1xuaW1wb3J0IGxheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwaG90bzEgZnJvbSAnLi4vcHVibGljL3Bob3RvMS5qcGcnO1xuaW1wb3J0IHBob3RvMiBmcm9tICcuLi9wdWJsaWMvcGhvdG8yLmpwZyc7XG5pbXBvcnQgcGhvdG8zIGZyb20gJy4uL3B1YmxpYy9waG90bzMuanBnJztcblxubGV0IGltYWdlcyA9IFtwaG90bzEsIHBob3RvMiwgcGhvdG8zXTtcblxuZnVuY3Rpb24gY3JlYXRlSW1hZ2UoaW5kZXgsIGltZykge1xuICAgXG4gICBpZiAoaW5kZXggPCBpbWdBcnIubGVuZ3RoKSB7XG4gICAgICBpbWcgPSBpbWdBcnJbaW5kZXhdO1xuICAgICAgaW5kZXgrKztcbiAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgIGNvbnNvbGUubG9nKGltZ0FycltpbmRleF0pO1xuICAgfSBlbHNlIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgIH1cblxuICAgc2V0VGltZW91dChjcmVhdGVJbWFnZSwgMzAwMCk7XG4gICByZXR1cm4gaW1nIFxufVxuXG5mdW5jdGlvbiBIZWFkZXIoe3RpdGxlfSkge1xuICAgY29uc3QgW2N1cnJlbnRJbWFnZSwgc2V0Q3VycmVudEltYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRJbWFnZShpbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaXRlbXMubGVuZ3RoKV0pO1xuICAgICAgICB9LCA1MDAwKVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgfSwgW10pXG4gICBcbiAgIHJldHVybjxJbWFnZSBcbiAgICAgICAgIHNyYz17aW1hZ2VzW2N1cnJlbnRJbmRleF19XG4gICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPEhlYWRlci8+XG4gICAgICAgICAgIDwvbWFpbj5cbilcblxuIl0sIm5hbWVzIjpbIkltYWdlIiwiRG9jdW1lbnQiLCJIdG1sIiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwibGF5b3V0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwaG90bzEiLCJwaG90bzIiLCJwaG90bzMiLCJpbWFnZXMiLCJjcmVhdGVJbWFnZSIsImluZGV4IiwiaW1nIiwiaW1nQXJyIiwibGVuZ3RoIiwiY29uc29sZSIsImNsZWFyIiwibG9nIiwic2V0VGltZW91dCIsIkhlYWRlciIsInRpdGxlIiwiY3VycmVudEltYWdlIiwic2V0Q3VycmVudEltYWdlIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaXRlbXMiLCJjbGVhckludGVydmFsIiwic3JjIiwiY3VycmVudEluZGV4IiwiaGVpZ2h0Iiwid2lkdGgiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});