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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/app.scss */ \"./styles/app.scss\");\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [cursorPos, setCursorPos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [cursorColor, setCursorColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"white\");\n    const [cursorSize, setCursorSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const onMouseMove = (e)=>{\n            setCursorPos({\n                x: e.clientX,\n                y: e.clientY\n            });\n        };\n        const onMouseDown = ()=>{\n            setCursorColor(\"black\");\n            setCursorSize(1.5);\n        };\n        const onMouseUp = ()=>{\n            setCursorColor(\"white\");\n            setCursorSize(1);\n        };\n        document.addEventListener(\"mousemove\", onMouseMove);\n        document.addEventListener(\"mousedown\", onMouseDown);\n        document.addEventListener(\"mouseup\", onMouseUp);\n        return ()=>{\n            document.removeEventListener(\"mousemove\", onMouseMove);\n            document.removeEventListener(\"mousedown\", onMouseDown);\n            document.removeEventListener(\"mouseup\", onMouseUp);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/about\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/portfolio\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: \"Portfolio\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/contact\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"circle-cursor\",\n                style: {\n                    left: cursorPos.x,\n                    top: cursorPos.y,\n                    backgroundColor: cursorColor,\n                    transform: \"scale(\".concat(cursorSize, \")\")\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MyApp, \"f45IvgYuvUW6mSF3YYNflcsBPTA=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDZjtBQUNEO0FBRTVCLFNBQVNHLE1BQU0sS0FBd0IsRUFBRTtRQUExQixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUF4Qjs7SUFDYixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7UUFBRVEsR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFDeEQsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1ksWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUU3Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1hLGNBQWMsQ0FBQ0MsSUFBTTtZQUN6QlIsYUFBYTtnQkFBRUMsR0FBR08sRUFBRUMsT0FBTztnQkFBRVAsR0FBR00sRUFBRUUsT0FBTztZQUFDO1FBQzVDO1FBRUEsTUFBTUMsY0FBYyxJQUFNO1lBQ3hCUCxlQUFlO1lBQ2ZFLGNBQWM7UUFDaEI7UUFFQSxNQUFNTSxZQUFZLElBQU07WUFDdEJSLGVBQWU7WUFDZkUsY0FBYztRQUNoQjtRQUVBTyxTQUFTQyxnQkFBZ0IsQ0FBQyxhQUFhUDtRQUN2Q00sU0FBU0MsZ0JBQWdCLENBQUMsYUFBYUg7UUFDdkNFLFNBQVNDLGdCQUFnQixDQUFDLFdBQVdGO1FBRXJDLE9BQU8sSUFBTTtZQUNYQyxTQUFTRSxtQkFBbUIsQ0FBQyxhQUFhUjtZQUMxQ00sU0FBU0UsbUJBQW1CLENBQUMsYUFBYUo7WUFDMUNFLFNBQVNFLG1CQUFtQixDQUFDLFdBQVdIO1FBQzFDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0U7OzBCQUNFLDhEQUFDSTswQkFDQyw0RUFBQ0M7O3NDQUNDLDhEQUFDQztzQ0FDQyw0RUFBQ3ZCLGtEQUFJQTtnQ0FBQ3dCLE1BQUs7MENBQ1QsNEVBQUNDOzhDQUFFOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUdQLDhEQUFDRjtzQ0FDQyw0RUFBQ3ZCLGtEQUFJQTtnQ0FBQ3dCLE1BQUs7MENBQ1QsNEVBQUNDOzhDQUFFOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUdQLDhEQUFDRjtzQ0FDQyw0RUFBQ3ZCLGtEQUFJQTtnQ0FBQ3dCLE1BQUs7MENBQ1QsNEVBQUNDOzhDQUFFOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUdQLDhEQUFDRjtzQ0FDQyw0RUFBQ3ZCLGtEQUFJQTtnQ0FBQ3dCLE1BQUs7MENBQ1QsNEVBQUNDOzhDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS1gsOERBQUN2QjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7MEJBQ3hCLDhEQUFDdUI7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLE9BQU87b0JBQ0xDLE1BQU16QixVQUFVRSxDQUFDO29CQUNqQndCLEtBQUsxQixVQUFVRyxDQUFDO29CQUNoQndCLGlCQUFpQnZCO29CQUNqQndCLFdBQVcsU0FBb0IsT0FBWHRCLFlBQVc7Z0JBQ2pDOzs7Ozs7OztBQUlSO0dBckVTVDtLQUFBQTtBQXVFVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzeD80Y2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IFtjdXJzb3JQb3MsIHNldEN1cnNvclBvc10gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XHJcbiAgY29uc3QgW2N1cnNvckNvbG9yLCBzZXRDdXJzb3JDb2xvcl0gPSB1c2VTdGF0ZSgnd2hpdGUnKTtcclxuICBjb25zdCBbY3Vyc29yU2l6ZSwgc2V0Q3Vyc29yU2l6ZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG9uTW91c2VNb3ZlID0gKGUpID0+IHtcclxuICAgICAgc2V0Q3Vyc29yUG9zKHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uTW91c2VEb3duID0gKCkgPT4ge1xyXG4gICAgICBzZXRDdXJzb3JDb2xvcignYmxhY2snKTtcclxuICAgICAgc2V0Q3Vyc29yU2l6ZSgxLjUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbk1vdXNlVXAgPSAoKSA9PiB7XHJcbiAgICAgIHNldEN1cnNvckNvbG9yKCd3aGl0ZScpO1xyXG4gICAgICBzZXRDdXJzb3JTaXplKDEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICA8YT5BYm91dDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3J0Zm9saW9cIj5cclxuICAgICAgICAgICAgICA8YT5Qb3J0Zm9saW88L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgIDxhPkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZS1jdXJzb3JcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBsZWZ0OiBjdXJzb3JQb3MueCxcclxuICAgICAgICAgIHRvcDogY3Vyc29yUG9zLnksXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGN1cnNvckNvbG9yLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoJHtjdXJzb3JTaXplfSlgLFxyXG4gICAgICAgIH19XHJcbiAgICAgID48L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjdXJzb3JQb3MiLCJzZXRDdXJzb3JQb3MiLCJ4IiwieSIsImN1cnNvckNvbG9yIiwic2V0Q3Vyc29yQ29sb3IiLCJjdXJzb3JTaXplIiwic2V0Q3Vyc29yU2l6ZSIsIm9uTW91c2VNb3ZlIiwiZSIsImNsaWVudFgiLCJjbGllbnRZIiwib25Nb3VzZURvd24iLCJvbk1vdXNlVXAiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmF2IiwidWwiLCJsaSIsImhyZWYiLCJhIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n"));

/***/ })

});