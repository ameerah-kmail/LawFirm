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

/***/ "./components/UserProfile/UserProfile.js":
/*!***********************************************!*\
  !*** ./components/UserProfile/UserProfile.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ \"./api.js\");\n/* harmony import */ var _UserProfile_UserProfile_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UserProfile/UserProfile.css */ \"./components/UserProfile/UserProfile.css\");\n/* harmony import */ var _UserProfile_UserProfile_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_UserProfile_UserProfile_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ProfileSideMenu_ProfileSideMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ProfileSideMenu/ProfileSideMenu */ \"./components/ProfileSideMenu/ProfileSideMenu.js\");\n/* harmony import */ var _icons_Location__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/Location */ \"./icons/Location.js\");\n/* harmony import */ var _icons_PhoneNumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons/PhoneNumber */ \"./icons/PhoneNumber.js\");\n/* harmony import */ var _icons_Email__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../icons/Email */ \"./icons/Email.js\");\n/* harmony import */ var _icons_Star__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../icons/Star */ \"./icons/Star.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst UserProfile = (param)=>{\n    let { id } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const loadUserData = async ()=>{\n            try {\n                const data = await (0,_api__WEBPACK_IMPORTED_MODULE_3__.fetchUserData)(id);\n                setUser(data);\n            } catch (error) {\n                setError('User not found');\n            }\n        };\n        if (id) loadUserData();\n    }, [\n        id\n    ]);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: error\n    }, void 0, false, {\n        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n        lineNumber: 28,\n        columnNumber: 19\n    }, undefined);\n    if (!user) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n        lineNumber: 29,\n        columnNumber: 19\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grayRectangle\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"WhiteRectangle\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: \"Profile\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"profileP\",\n                    children: \"Manage your details and personal preference here\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"profileRectangle\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"profilesideMenu\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProfileSideMenu_ProfileSideMenu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                            lineNumber: 37,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"content\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"section\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        children: \"Basic Information\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"basic-information-section\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"grey-section rating-section section-data\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: user.name\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                        lineNumber: 45,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"icon-with-data\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Star__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                                                fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                                lineNumber: 46,\n                                                                columnNumber: 53\n                                                            }, undefined),\n                                                            \" \",\n                                                            user.rating,\n                                                            \" Rating\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                        lineNumber: 46,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"grey-section location-phone-email-section\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"section-data\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"icon-with-data\",\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Location__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                                                        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                                        lineNumber: 51,\n                                                                        columnNumber: 25\n                                                                    }, undefined),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                        className: \"gery-title location\",\n                                                                        children: \"Location\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                                        lineNumber: 52,\n                                                                        columnNumber: 25\n                                                                    }, undefined)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                                lineNumber: 50,\n                                                                columnNumber: 23\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                children: user.location\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                                lineNumber: 54,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                        lineNumber: 49,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"section-data\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"icon-with-data\",\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_PhoneNumber__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                                                        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                                        lineNumber: 58,\n                                                                        columnNumber: 25\n                                                                    }, undefined),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                        className: \"gery-title\",\n                                                                        children: \"Phone\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                                        lineNumber: 59,\n                                                                        columnNumber: 25\n                                                                    }, undefined)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                                lineNumber: 57,\n                                                                columnNumber: 23\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                children: user.phone\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                                lineNumber: 61,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                        lineNumber: 56,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"section-data\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"icon-with-data\",\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Email__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                                                        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                                        lineNumber: 65,\n                                                                        columnNumber: 25\n                                                                    }, undefined),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                        className: \"gery-title\",\n                                                                        children: \"Email\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                                        lineNumber: 66,\n                                                                        columnNumber: 25\n                                                                    }, undefined)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                                lineNumber: 64,\n                                                                columnNumber: 23\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                children: user.email\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                                lineNumber: 68,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"grey-section description-section section-data\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"gery-title\",\n                                                        children: \"Description\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"\",\n                                                        children: user.description\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n            lineNumber: 33,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\FullStack-Try\\\\lawFirm\\\\frontend\\\\components\\\\UserProfile\\\\UserProfile.js\",\n        lineNumber: 32,\n        columnNumber: 3\n    }, undefined);\n};\n_s(UserProfile, \"FoT8xzvemVmWV60BhcL+ltjm2pQ=\");\n_c = UserProfile;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJQcm9maWxlL1VzZXJQcm9maWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSTtBQUNsQjtBQUNnQjtBQUNGO0FBQ3lCO0FBQ3JCO0FBQ007QUFDWjtBQUNGO0FBRXBDLE1BQU1VLGNBQWM7UUFBQyxFQUFFQyxFQUFFLEVBQUU7O0lBQ3pCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNZLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQUM7SUFFakNELGdEQUFTQSxDQUFDO1FBQ04sTUFBTWUsZUFBZTtZQUNuQixJQUFJO2dCQUNGLE1BQU1DLE9BQU8sTUFBTWIsbURBQWFBLENBQUNPO2dCQUNqQ0UsUUFBUUk7WUFDVixFQUFFLE9BQU9ILE9BQU87Z0JBQ2RDLFNBQVM7WUFDWDtRQUNGO1FBQ0EsSUFBSUosSUFBSUs7SUFDVixHQUFHO1FBQUNMO0tBQUc7SUFFYixJQUFJRyxPQUFPLHFCQUFPLDhEQUFDSTtrQkFBR0o7Ozs7OztJQUN0QixJQUFJLENBQUNGLE1BQU0scUJBQU8sOERBQUNNOzs7OztJQUVuQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNIO29CQUFFRSxXQUFVOzhCQUFXOzs7Ozs7OEJBQ3hCLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDZix3RUFBZUE7Ozs7Ozs7Ozs7c0NBRWxCLDhEQUFDYzs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDRTtrREFBRzs7Ozs7O2tEQUNGLDhEQUFDSDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNEO2dEQUFJQyxXQUFVOztrRUFDYiw4REFBQ0Q7a0VBQUtQLEtBQUtXLElBQUk7Ozs7OztrRUFDZiw4REFBQ0o7d0RBQUlDLFdBQVU7OzBFQUFpQiw4REFBQ1gsbURBQUlBOzs7Ozs0REFBRzs0REFBRUcsS0FBS1ksTUFBTTs0REFBQzs7Ozs7Ozs7Ozs7OzswREFFeEQsOERBQUNMO2dEQUFJQyxXQUFVOztrRUFDYiw4REFBQ0Q7d0RBQUlDLFdBQVU7OzBFQUNiLDhEQUFDRDtnRUFBSUMsV0FBVTs7a0ZBQ2IsOERBQUNkLHVEQUFRQTs7Ozs7a0ZBQ1QsOERBQUNhO3dFQUFJQyxXQUFVO2tGQUFzQjs7Ozs7Ozs7Ozs7OzBFQUV2Qyw4REFBQ0Q7MEVBQUtQLEtBQUthLFFBQVE7Ozs7Ozs7Ozs7OztrRUFFckIsOERBQUNOO3dEQUFJQyxXQUFVOzswRUFDYiw4REFBQ0Q7Z0VBQUlDLFdBQVU7O2tGQUNiLDhEQUFDYiwwREFBV0E7Ozs7O2tGQUNaLDhEQUFDWTt3RUFBSUMsV0FBVTtrRkFBYTs7Ozs7Ozs7Ozs7OzBFQUU5Qiw4REFBQ0Q7MEVBQUtQLEtBQUtjLEtBQUs7Ozs7Ozs7Ozs7OztrRUFFbEIsOERBQUNQO3dEQUFJQyxXQUFVOzswRUFDYiw4REFBQ0Q7Z0VBQUlDLFdBQVU7O2tGQUNiLDhEQUFDWixvREFBS0E7Ozs7O2tGQUNOLDhEQUFDVzt3RUFBSUMsV0FBVTtrRkFBYTs7Ozs7Ozs7Ozs7OzBFQUU5Qiw4REFBQ0Q7MEVBQUtQLEtBQUtlLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswREFHcEIsOERBQUNSO2dEQUFJQyxXQUFVOztrRUFDYiw4REFBQ0Q7d0RBQUlDLFdBQVU7a0VBQWE7Ozs7OztrRUFDNUIsOERBQUNEO3dEQUFJQyxXQUFVO2tFQUFJUixLQUFLZ0IsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN2RDtHQXRFTWxCO0tBQUFBO0FBd0VOLGlFQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS9Vc2VyUHJvZmlsZS5qcz9mNjdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgZmV0Y2hVc2VyRGF0YSB9IGZyb20gJy4uLy4uL2FwaSc7XHJcbmltcG9ydCAnLi4vVXNlclByb2ZpbGUvVXNlclByb2ZpbGUuY3NzJztcclxuaW1wb3J0IFByb2ZpbGVTaWRlTWVudSBmcm9tICcuLi9Qcm9maWxlU2lkZU1lbnUvUHJvZmlsZVNpZGVNZW51JztcclxuaW1wb3J0IExvY2F0aW9uIGZyb20gJy4uLy4uL2ljb25zL0xvY2F0aW9uJztcclxuaW1wb3J0IFBob25lTnVtYmVyIGZyb20gJy4uLy4uL2ljb25zL1Bob25lTnVtYmVyJztcclxuaW1wb3J0IEVtYWlsIGZyb20gJy4uLy4uL2ljb25zL0VtYWlsJztcclxuaW1wb3J0IFN0YXIgZnJvbSAnLi4vLi4vaWNvbnMvU3Rhcic7XHJcblxyXG5jb25zdCBVc2VyUHJvZmlsZSA9ICh7IGlkIH0pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9hZFVzZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoVXNlckRhdGEoaWQpO1xyXG4gICAgICAgICAgICBzZXRVc2VyKGRhdGEpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoaWQpIGxvYWRVc2VyRGF0YSgpO1xyXG4gICAgICB9LCBbaWRdKTtcclxuXHJcbmlmIChlcnJvcikgcmV0dXJuIDxwPntlcnJvcn08L3A+O1xyXG5pZiAoIXVzZXIpIHJldHVybiA8cD48L3A+O1xyXG5cclxucmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImdyYXlSZWN0YW5nbGVcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiV2hpdGVSZWN0YW5nbGVcIj5cclxuICAgICAgPGg1PlByb2ZpbGU8L2g1PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlUFwiPk1hbmFnZSB5b3VyIGRldGFpbHMgYW5kIHBlcnNvbmFsIHByZWZlcmVuY2UgaGVyZTwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlUmVjdGFuZ2xlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlc2lkZU1lbnVcIj5cclxuICAgICAgICAgIDxQcm9maWxlU2lkZU1lbnUgLz5cclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPiAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGg0PkJhc2ljIEluZm9ybWF0aW9uPC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzaWMtaW5mb3JtYXRpb24tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyZXktc2VjdGlvbiByYXRpbmctc2VjdGlvbiBzZWN0aW9uLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt1c2VyLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLXdpdGgtZGF0YVwiPjxTdGFyIC8+IHt1c2VyLnJhdGluZ30gUmF0aW5nPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyZXktc2VjdGlvbiBsb2NhdGlvbi1waG9uZS1lbWFpbC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi13aXRoLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VyeS10aXRsZSBsb2NhdGlvblwiPkxvY2F0aW9uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3VzZXIubG9jYXRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi13aXRoLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBob25lTnVtYmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VyeS10aXRsZVwiPlBob25lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3VzZXIucGhvbmV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi13aXRoLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVtYWlsIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VyeS10aXRsZVwiPkVtYWlsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3VzZXIuZW1haWx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyZXktc2VjdGlvbiBkZXNjcmlwdGlvbi1zZWN0aW9uIHNlY3Rpb24tZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VyeS10aXRsZVwiPkRlc2NyaXB0aW9uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj57dXNlci5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJmZXRjaFVzZXJEYXRhIiwiUHJvZmlsZVNpZGVNZW51IiwiTG9jYXRpb24iLCJQaG9uZU51bWJlciIsIkVtYWlsIiwiU3RhciIsIlVzZXJQcm9maWxlIiwiaWQiLCJ1c2VyIiwic2V0VXNlciIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkVXNlckRhdGEiLCJkYXRhIiwicCIsImRpdiIsImNsYXNzTmFtZSIsImg1IiwiaDQiLCJuYW1lIiwicmF0aW5nIiwibG9jYXRpb24iLCJwaG9uZSIsImVtYWlsIiwiZGVzY3JpcHRpb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UserProfile/UserProfile.js\n"));

/***/ })

});