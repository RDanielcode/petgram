"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpetgram"] = self["webpackChunkpetgram"] || []).push([["src_components_pages_Fav_js"],{

/***/ "./src/components/ListOfFavs/index.js":
/*!********************************************!*\
  !*** ./src/components/ListOfFavs/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListOfFavs\": () => (/* binding */ ListOfFavs)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/ListOfFavs/styles.js\");\n\n\nvar ListOfFavs = function ListOfFavs(_ref) {\n  var favs = _ref.favs;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Grid, null, favs.map(function (fav) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Link, {\n      key: fav.id,\n      to: \"detail/\".concat(fav.id)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Image, {\n      src: fav.src\n    }), \")\");\n  }));\n};\n\n//# sourceURL=webpack://petgram/./src/components/ListOfFavs/index.js?");

/***/ }),

/***/ "./src/components/ListOfFavs/styles.js":
/*!*********************************************!*\
  !*** ./src/components/ListOfFavs/styles.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Grid\": () => (/* binding */ Grid),\n/* harmony export */   \"Image\": () => (/* binding */ Image),\n/* harmony export */   \"Link\": () => (/* binding */ Link)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\n\n\nvar _templateObject, _templateObject2, _templateObject3;\n\n\n\nvar Link = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  border-radius: 8px;\\n  box-shadow: 0 0 8px rgba(0,0,0,.3);\\n  display: inline-block;\\n  margin: 1%;\\n  overflow: hidden;\\n  position: relative;\\n  width: 31.33%;\\n  &:after {\\n      content: '';\\n      display: block;\\n      padding-bottom: 100%;\\n  }\\n\"])));\nvar Grid = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding-top: 32px;\\n\"])));\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  object-fit: cover;\\n  height: 100%;\\n  width: 100%;\\n  position: absolute;\\n\"])));\n\n//# sourceURL=webpack://petgram/./src/components/ListOfFavs/styles.js?");

/***/ }),

/***/ "./src/components/container/GetFavs.js":
/*!*********************************************!*\
  !*** ./src/components/container/GetFavs.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FavsWithQuery\": () => (/* binding */ FavsWithQuery)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/react/hooks/useQuery.js\");\n\n\nvar _templateObject;\n\n\nvar GET_FAVORITES = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nquery getFavs {\\n    favs {\\n      id\\n      categoryId\\n      src\\n      likes\\n      userId\\n    }\\n  }\\n\"])));\n\nvar FavsWithQuery = function FavsWithQuery() {\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(GET_FAVORITES, {\n    fetchPolicy: 'cache-and-network'\n  }),\n      error = _useQuery.error,\n      data = _useQuery.data,\n      loading = _useQuery.loading;\n\n  return {\n    error: error,\n    data: data,\n    loading: loading\n  };\n};\n\n\n\n//# sourceURL=webpack://petgram/./src/components/container/GetFavs.js?");

/***/ }),

/***/ "./src/components/pages/Fav.js":
/*!*************************************!*\
  !*** ./src/components/pages/Fav.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _container_GetFavs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/GetFavs */ \"./src/components/container/GetFavs.js\");\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout */ \"./src/components/Layout/index.js\");\n/* harmony import */ var _ListOfFavs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ListOfFavs */ \"./src/components/ListOfFavs/index.js\");\n\n\n\n\n\nvar Fav = function Fav() {\n  var _FavsWithQuery = (0,_container_GetFavs__WEBPACK_IMPORTED_MODULE_1__.FavsWithQuery)(),\n      loading = _FavsWithQuery.loading,\n      data = _FavsWithQuery.data,\n      error = _FavsWithQuery.error;\n\n  console.log(data);\n  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \" loading...\");\n  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \" error \");\n  var favs = data.favs;\n\n  if (!loading) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n      title: \"Favorites\",\n      subtitle: \"list of favorites pets\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ListOfFavs__WEBPACK_IMPORTED_MODULE_3__.ListOfFavs, {\n      favs: favs\n    }));\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fav);\n\n//# sourceURL=webpack://petgram/./src/components/pages/Fav.js?");

/***/ })

}]);