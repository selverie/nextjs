/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/app.scss */ \"./styles/app.scss\");\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const [cursorPos, setCursorPos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [cursorColor, setCursorColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"white\");\n    const [cursorSize, setCursorSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const onMouseMove = (e)=>{\n            setCursorPos({\n                x: e.clientX,\n                y: e.clientY\n            });\n        };\n        const onMouseDown = ()=>{\n            setCursorColor(\"black\");\n            setCursorSize(1.5);\n        };\n        const onMouseUp = ()=>{\n            setCursorColor(\"white\");\n            setCursorSize(1);\n        };\n        document.addEventListener(\"mousemove\", onMouseMove);\n        document.addEventListener(\"mousedown\", onMouseDown);\n        document.addEventListener(\"mouseup\", onMouseUp);\n        return ()=>{\n            document.removeEventListener(\"mousemove\", onMouseMove);\n            document.removeEventListener(\"mousedown\", onMouseDown);\n            document.removeEventListener(\"mouseup\", onMouseUp);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"circle-cursor\",\n                style: {\n                    left: cursorPos.x,\n                    top: cursorPos.y,\n                    backgroundColor: cursorColor,\n                    transform: `scale(${cursorSize})`\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ikhwa\\\\Desktop\\\\nextjs\\\\pages\\\\_app.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFDaEI7QUFFNUIsU0FBU0UsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztRQUFFTyxHQUFHO1FBQUdDLEdBQUc7SUFBRTtJQUN4RCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDVyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTdDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVksY0FBYyxDQUFDQyxJQUFNO1lBQ3pCUixhQUFhO2dCQUFFQyxHQUFHTyxFQUFFQyxPQUFPO2dCQUFFUCxHQUFHTSxFQUFFRSxPQUFPO1lBQUM7UUFDNUM7UUFFQSxNQUFNQyxjQUFjLElBQU07WUFDeEJQLGVBQWU7WUFDZkUsY0FBYztRQUNoQjtRQUVBLE1BQU1NLFlBQVksSUFBTTtZQUN0QlIsZUFBZTtZQUNmRSxjQUFjO1FBQ2hCO1FBRUFPLFNBQVNDLGdCQUFnQixDQUFDLGFBQWFQO1FBQ3ZDTSxTQUFTQyxnQkFBZ0IsQ0FBQyxhQUFhSDtRQUN2Q0UsU0FBU0MsZ0JBQWdCLENBQUMsV0FBV0Y7UUFFckMsT0FBTyxJQUFNO1lBQ1hDLFNBQVNFLG1CQUFtQixDQUFDLGFBQWFSO1lBQzFDTSxTQUFTRSxtQkFBbUIsQ0FBQyxhQUFhSjtZQUMxQ0UsU0FBU0UsbUJBQW1CLENBQUMsV0FBV0g7UUFDMUM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNmO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OzswQkFDeEIsOERBQUNrQjtnQkFDQ0MsV0FBVTtnQkFDVkMsT0FBTztvQkFDTEMsTUFBTXBCLFVBQVVFLENBQUM7b0JBQ2pCbUIsS0FBS3JCLFVBQVVHLENBQUM7b0JBQ2hCbUIsaUJBQWlCbEI7b0JBQ2pCbUIsV0FBVyxDQUFDLE1BQU0sRUFBRWpCLFdBQVcsQ0FBQyxDQUFDO2dCQUNuQzs7Ozs7Ozs7QUFJUjtBQUVBLGlFQUFlVCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2ViLy4vcGFnZXMvX2FwcC5qc3g/NGNiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9hcHAuc2Nzcyc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBbY3Vyc29yUG9zLCBzZXRDdXJzb3JQb3NdID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pO1xyXG4gIGNvbnN0IFtjdXJzb3JDb2xvciwgc2V0Q3Vyc29yQ29sb3JdID0gdXNlU3RhdGUoJ3doaXRlJyk7XHJcbiAgY29uc3QgW2N1cnNvclNpemUsIHNldEN1cnNvclNpemVdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvbk1vdXNlTW92ZSA9IChlKSA9PiB7XHJcbiAgICAgIHNldEN1cnNvclBvcyh7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbk1vdXNlRG93biA9ICgpID0+IHtcclxuICAgICAgc2V0Q3Vyc29yQ29sb3IoJ2JsYWNrJyk7XHJcbiAgICAgIHNldEN1cnNvclNpemUoMS41KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25Nb3VzZVVwID0gKCkgPT4ge1xyXG4gICAgICBzZXRDdXJzb3JDb2xvcignd2hpdGUnKTtcclxuICAgICAgc2V0Q3Vyc29yU2l6ZSgxKTtcclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGUtY3Vyc29yXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgbGVmdDogY3Vyc29yUG9zLngsXHJcbiAgICAgICAgICB0b3A6IGN1cnNvclBvcy55LFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjdXJzb3JDb2xvcixcclxuICAgICAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7Y3Vyc29yU2l6ZX0pYCxcclxuICAgICAgICB9fVxyXG4gICAgICA+PC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3Vyc29yUG9zIiwic2V0Q3Vyc29yUG9zIiwieCIsInkiLCJjdXJzb3JDb2xvciIsInNldEN1cnNvckNvbG9yIiwiY3Vyc29yU2l6ZSIsInNldEN1cnNvclNpemUiLCJvbk1vdXNlTW92ZSIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwibGVmdCIsInRvcCIsImJhY2tncm91bmRDb2xvciIsInRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./styles/app.scss":
/*!*************************!*\
  !*** ./styles/app.scss ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();