"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile/[id]",{

/***/ "./pages/profile/[id].js":
/*!*******************************!*\
  !*** ./pages/profile/[id].js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header/Header */ \"./components/Header/Header.js\");\n/* harmony import */ var _components_SideMenu_SideMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SideMenu/SideMenu */ \"./components/SideMenu/SideMenu.js\");\n/* harmony import */ var _components_UserProfile_UserProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UserProfile/UserProfile */ \"./components/UserProfile/UserProfile.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ \"./api.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Profile() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id } = router.query;\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const style = {\n        height: '100vh'\n    };\n    // npm install @next/font\n    // npm install @fontsource/poppins\n    //npm install @fontsource/inter\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const loadUserData = async ()=>{\n            try {\n                const data = await (0,_api__WEBPACK_IMPORTED_MODULE_6__.fetchUserData)(id);\n                setUser(data);\n            } catch (error) {\n                console.error(\"Error fetching user data:\", error);\n                setUser(null);\n            }\n        };\n        if (id) loadUserData();\n    }, [\n        id\n    ]);\n    if (!id) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\pages\\\\profile\\\\[id].js\",\n        lineNumber: 33,\n        columnNumber: 19\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: style,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                user: user\n            }, void 0, false, {\n                fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\pages\\\\profile\\\\[id].js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: flexstyle,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideMenu_SideMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\pages\\\\profile\\\\[id].js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserProfile_UserProfile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        id: id\n                    }, void 0, false, {\n                        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\pages\\\\profile\\\\[id].js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\pages\\\\profile\\\\[id].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\pages\\\\profile\\\\[id].js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(Profile, \"C1U3W1/GLXpNOs2elmI/sE+Rt18=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Profile;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlL1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1k7QUFDTTtBQUNTO0FBQ3ZCO0FBQ0Y7QUFFMUMsU0FBU087O0lBQ1AsTUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVMsRUFBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDM0IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1RLFFBQVE7UUFDWEMsUUFBUTtJQUNYO0lBRUEseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQywrQkFBK0I7SUFFL0JWLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcsZUFBZTtZQUNuQixJQUFJO2dCQUNGLE1BQU1DLE9BQU8sTUFBTVYsbURBQWFBLENBQUNHO2dCQUNqQ0csUUFBUUk7WUFDVixFQUFFLE9BQU9DLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO2dCQUMzQ0wsUUFBUTtZQUNWO1FBQ0Y7UUFDQSxJQUFJSCxJQUFJTTtJQUNWLEdBQUc7UUFBQ047S0FBRztJQUVQLElBQUksQ0FBQ0EsSUFBSSxxQkFBTyw4REFBQ1U7Ozs7O0lBRWpCLHFCQUNFLDhEQUFDQztRQUFJUCxPQUFPQTs7MEJBQ1YsOERBQUNaLGlFQUFNQTtnQkFBQ1UsTUFBTUE7Ozs7OzswQkFDZCw4REFBQ1M7Z0JBQUlQLE9BQU9ROztrQ0FDViw4REFBQ25CLHFFQUFRQTs7Ozs7a0NBQ1QsOERBQUNDLDJFQUFXQTt3QkFBQ00sSUFBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl6QjtHQXBDU0Y7O1FBQ1FQLGtEQUFTQTs7O0tBRGpCTztBQXNDVCxpRUFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3Byb2ZpbGUvW2lkXS5qcz9mZWRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBTaWRlTWVudSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NpZGVNZW51L1NpZGVNZW51JztcclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUvVXNlclByb2ZpbGUnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBmZXRjaFVzZXJEYXRhIH0gZnJvbSAnLi4vLi4vYXBpJztcclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGUoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgIGhlaWdodDogJzEwMHZoJyAsIFxyXG4gIH07XHJcbiAgXHJcbiAgLy8gbnBtIGluc3RhbGwgQG5leHQvZm9udFxyXG4gIC8vIG5wbSBpbnN0YWxsIEBmb250c291cmNlL3BvcHBpbnNcclxuICAvL25wbSBpbnN0YWxsIEBmb250c291cmNlL2ludGVyXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkVXNlckRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoVXNlckRhdGEoaWQpO1xyXG4gICAgICAgIHNldFVzZXIoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXIgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBpZiAoaWQpIGxvYWRVc2VyRGF0YSgpO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICBpZiAoIWlkKSByZXR1cm4gPHA+PC9wPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgPEhlYWRlciB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICA8ZGl2IHN0eWxlPXtmbGV4c3R5bGV9PlxyXG4gICAgICAgIDxTaWRlTWVudSAvPlxyXG4gICAgICAgIDxVc2VyUHJvZmlsZSBpZD17aWR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkhlYWRlciIsIlNpZGVNZW51IiwiVXNlclByb2ZpbGUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZldGNoVXNlckRhdGEiLCJQcm9maWxlIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZXIiLCJzZXRVc2VyIiwic3R5bGUiLCJoZWlnaHQiLCJsb2FkVXNlckRhdGEiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwicCIsImRpdiIsImZsZXhzdHlsZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile/[id].js\n"));

/***/ })

});