"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/app.scss */ \"./styles/app.scss\");\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [cursorPos, setCursorPos] = useState({\n        x: 0,\n        y: 0\n    });\n    useEffect(()=>{\n        const onMouseMove = (e)=>{\n            setCursorPos({\n                x: e.clientX,\n                y: e.clientY\n            });\n        };\n        document.addEventListener(\"mousemove\", onMouseMove);\n        return ()=>{\n            document.removeEventListener(\"mousemove\", onMouseMove);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"circle-cursor\",\n                style: {\n                    left: cursorPos.x,\n                    top: cursorPos.y\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MyApp, \"4nFFgh08PSjDFJXuVD0aqrlOQl8=\");\n_c = MyApp;\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUE0QjtBQUU1QixTQUFTQSxNQUFNLEtBQXdCLEVBQUU7UUFBMUIsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsR0FBeEI7O0lBQ2IsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdDLFNBQVM7UUFBRUMsR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFFeERDLFVBQVUsSUFBTTtRQUNkLE1BQU1DLGNBQWMsQ0FBQ0MsSUFBTTtZQUN6Qk4sYUFBYTtnQkFBRUUsR0FBR0ksRUFBRUMsT0FBTztnQkFBRUosR0FBR0csRUFBRUUsT0FBTztZQUFDO1FBQzVDO1FBRUFDLFNBQVNDLGdCQUFnQixDQUFDLGFBQWFMO1FBRXZDLE9BQU8sSUFBTTtZQUNYSSxTQUFTRSxtQkFBbUIsQ0FBQyxhQUFhTjtRQUM1QztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ1I7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzBCQUN4Qiw4REFBQ2M7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLE9BQU87b0JBQUVDLE1BQU1oQixVQUFVRyxDQUFDO29CQUFFYyxLQUFLakIsVUFBVUksQ0FBQztnQkFBQzs7Ozs7Ozs7QUFJckQ7R0F4QlNQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanN4PzRjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgW2N1cnNvclBvcywgc2V0Q3Vyc29yUG9zXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG9uTW91c2VNb3ZlID0gKGUpID0+IHtcclxuICAgICAgc2V0Q3Vyc29yUG9zKHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZS1jdXJzb3JcIlxyXG4gICAgICAgIHN0eWxlPXt7IGxlZnQ6IGN1cnNvclBvcy54LCB0b3A6IGN1cnNvclBvcy55IH19XHJcbiAgICAgID48L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuICBcclxuICBcclxuXHJcbiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImN1cnNvclBvcyIsInNldEN1cnNvclBvcyIsInVzZVN0YXRlIiwieCIsInkiLCJ1c2VFZmZlY3QiLCJvbk1vdXNlTW92ZSIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImxlZnQiLCJ0b3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n"));

/***/ })

});