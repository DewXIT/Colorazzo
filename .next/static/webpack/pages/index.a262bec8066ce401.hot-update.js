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

/***/ "./src/components/ExportButton.tsx":
/*!*****************************************!*\
  !*** ./src/components/ExportButton.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@mui/material */ \"__barrel_optimize__?names=Button!=!./node_modules/@mui/material/index.js\");\n\n\n\nconst ExportButton = (param)=>{\n    let { palette } = param;\n    const handleExport = ()=>{\n        const dataStr = \"data:text/json;charset=utf-8,\".concat(encodeURIComponent(JSON.stringify(palette, null, 2)));\n        const downloadAnchorNode = document.createElement('a');\n        downloadAnchorNode.setAttribute('href', dataStr);\n        downloadAnchorNode.setAttribute('download', 'palette.json');\n        downloadAnchorNode.click();\n        downloadAnchorNode.remove();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        onClick: handleExport,\n        variant: \"contained\",\n        color: \"success\",\n        children: \"Export Palette\"\n    }, void 0, false, {\n        fileName: \"/Users/marcin/Desktop/Colorazzo/src/components/ExportButton.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ExportButton;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExportButton);\nvar _c;\n$RefreshReg$(_c, \"ExportButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FeHBvcnRCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDYTtBQVN0QyxNQUFNRSxlQUFlO1FBQUMsRUFBRUMsT0FBTyxFQUFxQjtJQUNsRCxNQUFNQyxlQUFlO1FBQ25CLE1BQU1DLFVBQVUsZ0NBRWQsT0FGOENDLG1CQUM5Q0MsS0FBS0MsU0FBUyxDQUFDTCxTQUFTLE1BQU07UUFFaEMsTUFBTU0scUJBQXFCQyxTQUFTQyxhQUFhLENBQUM7UUFDbERGLG1CQUFtQkcsWUFBWSxDQUFDLFFBQVFQO1FBQ3hDSSxtQkFBbUJHLFlBQVksQ0FBQyxZQUFZO1FBQzVDSCxtQkFBbUJJLEtBQUs7UUFDeEJKLG1CQUFtQkssTUFBTTtJQUMzQjtJQUVBLHFCQUNFLDhEQUFDYiw4RUFBTUE7UUFBQ2MsU0FBU1g7UUFBY1ksU0FBUTtRQUFZQyxPQUFNO2tCQUFVOzs7Ozs7QUFJdkU7S0FqQk1mO0FBbUJOLGlFQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyIvVXNlcnMvbWFyY2luL0Rlc2t0b3AvQ29sb3JhenpvL3NyYy9jb21wb25lbnRzL0V4cG9ydEJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcblxuaW50ZXJmYWNlIEV4cG9ydEJ1dHRvblByb3BzIHtcbiAgcGFsZXR0ZToge1xuICAgIHNoYWRlOiBzdHJpbmdcbiAgICBjb2xvcjogc3RyaW5nXG4gIH1bXVxufVxuXG5jb25zdCBFeHBvcnRCdXR0b24gPSAoeyBwYWxldHRlIH06IEV4cG9ydEJ1dHRvblByb3BzKSA9PiB7XG4gIGNvbnN0IGhhbmRsZUV4cG9ydCA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRhU3RyID0gYGRhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICBKU09OLnN0cmluZ2lmeShwYWxldHRlLCBudWxsLCAyKSxcbiAgICApfWBcbiAgICBjb25zdCBkb3dubG9hZEFuY2hvck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBkb3dubG9hZEFuY2hvck5vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgZGF0YVN0cilcbiAgICBkb3dubG9hZEFuY2hvck5vZGUuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsICdwYWxldHRlLmpzb24nKVxuICAgIGRvd25sb2FkQW5jaG9yTm9kZS5jbGljaygpXG4gICAgZG93bmxvYWRBbmNob3JOb2RlLnJlbW92ZSgpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlRXhwb3J0fSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzdWNjZXNzXCI+XG4gICAgICBFeHBvcnQgUGFsZXR0ZVxuICAgIDwvQnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4cG9ydEJ1dHRvblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiRXhwb3J0QnV0dG9uIiwicGFsZXR0ZSIsImhhbmRsZUV4cG9ydCIsImRhdGFTdHIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZG93bmxvYWRBbmNob3JOb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2xpY2siLCJyZW1vdmUiLCJvbkNsaWNrIiwidmFyaWFudCIsImNvbG9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ExportButton.tsx\n"));

/***/ })

});