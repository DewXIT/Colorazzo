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

/***/ "./src/components/ColorInput.tsx":
/*!***************************************!*\
  !*** ./src/components/ColorInput.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_best_gradient_color_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-best-gradient-color-picker */ \"./node_modules/react-best-gradient-color-picker/dist/esm/index.js\");\n\n\n\nconst ColorInput = (param)=>{\n    let { baseColor, onChange } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_best_gradient_color_picker__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            value: baseColor,\n            onChange: onChange,\n            hideGradientType: true,\n            hideGradientAngle: true,\n            hideGradientControls: true,\n            hideGradientStop: true,\n            hideAdvancedSliders: true,\n            hideControls: true,\n            hideEyeDrop: true,\n            hideInputType: true,\n            hideOpacity: true,\n            hidePresets: true,\n            disableLightMode: true,\n            disableDarkMode: true,\n            style: {\n                body: {\n                    width: '100%',\n                    backgroundColor: 'red'\n                },\n                rbgcpCanvasWrapper: {\n                    display: 'flex',\n                    width: '100%'\n                }\n            }\n        }, void 0, false, {\n            fileName: \"/Users/marcin/Desktop/Colorazzo/src/components/ColorInput.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/marcin/Desktop/Colorazzo/src/components/ColorInput.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ColorInput;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorInput);\nvar _c;\n$RefreshReg$(_c, \"ColorInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db2xvcklucHV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQ2lDO0FBTzFELE1BQU1FLGFBQWE7UUFBQyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBbUI7SUFDMUQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNMLHdFQUFXQTtZQUNWTSxPQUFPSjtZQUNQQyxVQUFVQTtZQUNWSSxnQkFBZ0I7WUFDaEJDLGlCQUFpQjtZQUNqQkMsb0JBQW9CO1lBQ3BCQyxnQkFBZ0I7WUFDaEJDLG1CQUFtQjtZQUNuQkMsWUFBWTtZQUNaQyxXQUFXO1lBQ1hDLGFBQWE7WUFDYkMsV0FBVztZQUNYQyxXQUFXO1lBQ1hDLGdCQUFnQjtZQUNoQkMsZUFBZTtZQUNmQyxPQUFPO2dCQUNMQyxNQUFNO29CQUNKQyxPQUFPO29CQUNQQyxpQkFBaUI7Z0JBQ25CO2dCQUNBQyxvQkFBb0I7b0JBQ2xCQyxTQUFTO29CQUNUSCxPQUFPO2dCQUNUO1lBQ0Y7Ozs7Ozs7Ozs7O0FBSVI7S0EvQk1wQjtBQWlDTixpRUFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL21hcmNpbi9EZXNrdG9wL0NvbG9yYXp6by9zcmMvY29tcG9uZW50cy9Db2xvcklucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29sb3JQaWNrZXIgZnJvbSAncmVhY3QtYmVzdC1ncmFkaWVudC1jb2xvci1waWNrZXInXG5cbmludGVyZmFjZSBDb2xvcklucHV0UHJvcHMge1xuICBiYXNlQ29sb3I6IHN0cmluZ1xuICBvbkNoYW5nZTogKGNvbG9yOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuY29uc3QgQ29sb3JJbnB1dCA9ICh7IGJhc2VDb2xvciwgb25DaGFuZ2UgfTogQ29sb3JJbnB1dFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICB2YWx1ZT17YmFzZUNvbG9yfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIGhpZGVHcmFkaWVudFR5cGVcbiAgICAgICAgaGlkZUdyYWRpZW50QW5nbGVcbiAgICAgICAgaGlkZUdyYWRpZW50Q29udHJvbHNcbiAgICAgICAgaGlkZUdyYWRpZW50U3RvcFxuICAgICAgICBoaWRlQWR2YW5jZWRTbGlkZXJzXG4gICAgICAgIGhpZGVDb250cm9sc1xuICAgICAgICBoaWRlRXllRHJvcFxuICAgICAgICBoaWRlSW5wdXRUeXBlXG4gICAgICAgIGhpZGVPcGFjaXR5XG4gICAgICAgIGhpZGVQcmVzZXRzXG4gICAgICAgIGRpc2FibGVMaWdodE1vZGVcbiAgICAgICAgZGlzYWJsZURhcmtNb2RlXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICByYmdjcENhbnZhc1dyYXBwZXI6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JJbnB1dFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29sb3JQaWNrZXIiLCJDb2xvcklucHV0IiwiYmFzZUNvbG9yIiwib25DaGFuZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsImhpZGVHcmFkaWVudFR5cGUiLCJoaWRlR3JhZGllbnRBbmdsZSIsImhpZGVHcmFkaWVudENvbnRyb2xzIiwiaGlkZUdyYWRpZW50U3RvcCIsImhpZGVBZHZhbmNlZFNsaWRlcnMiLCJoaWRlQ29udHJvbHMiLCJoaWRlRXllRHJvcCIsImhpZGVJbnB1dFR5cGUiLCJoaWRlT3BhY2l0eSIsImhpZGVQcmVzZXRzIiwiZGlzYWJsZUxpZ2h0TW9kZSIsImRpc2FibGVEYXJrTW9kZSIsInN0eWxlIiwiYm9keSIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwicmJnY3BDYW52YXNXcmFwcGVyIiwiZGlzcGxheSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ColorInput.tsx\n"));

/***/ })

});