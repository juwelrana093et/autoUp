"use strict";
(() => {
var exports = {};
exports.id = 903;
exports.ids = [903];
exports.modules = {

/***/ 9326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Layout.tsx
var Layout = __webpack_require__(1313);
// EXTERNAL MODULE: ./utils/sample-api.ts
var sample_api = __webpack_require__(1260);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/ListDetail.tsx


const ListDetail = ({ item: user  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    "Detail for ",
                    user.name
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "ID: ",
                    user.id
                ]
            })
        ]
    });
/* harmony default export */ const components_ListDetail = (ListDetail);

;// CONCATENATED MODULE: ./pages/detail/[id].tsx
// import { NextPageContext } from 'next'




const InitialPropsDetail = ({ item , errors  })=>{
    if (errors) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
            title: `Error | Next.js + TypeScript + Electron Example`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            color: "red"
                        },
                        children: "Error:"
                    }),
                    " ",
                    errors
                ]
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: `${item ? item.name : "Detail"} | Next.js + TypeScript Example`,
        children: item && /*#__PURE__*/ jsx_runtime_.jsx(components_ListDetail, {
            item: item
        })
    });
};
const getStaticPaths = async ()=>{
    const items = await (0,sample_api/* findAll */.Oq)();
    const paths = items.map((item)=>`/detail/${item.id}`);
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const { id  } = params;
    try {
        const item = await (0,sample_api/* findData */.Is)(Array.isArray(id) ? id[0] : id);
        return {
            props: {
                item
            }
        };
    } catch (err) {
        return {
            props: {
                errors: err.message
            }
        };
    }
};
/* harmony default export */ const _id_ = (InitialPropsDetail);


/***/ }),

/***/ 1260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Is": () => (/* binding */ findData),
/* harmony export */   "Oq": () => (/* binding */ findAll)
/* harmony export */ });
/* unused harmony export dataArray */
/** Dummy user data. */ const dataArray = [
    {
        id: 101,
        name: "Alice"
    },
    {
        id: 102,
        name: "Bob"
    },
    {
        id: 103,
        name: "Caroline"
    },
    {
        id: 104,
        name: "Dave"
    }, 
];
/**
 * Calls a mock API which finds a user by ID from the list above.
 *
 * Throws an error if not found.
 */ async function findData(id) {
    const selected = dataArray.find((data)=>data.id === Number(id));
    if (!selected) {
        throw new Error("Cannot find user");
    }
    return selected;
}
/** Calls a mock API which returns the above array to simulate "get all". */ async function findAll() {
    // Throw an error, just for example.
    if (!Array.isArray(dataArray)) {
        throw new Error("Cannot find users");
    }
    return dataArray;
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [424,919,894,313], () => (__webpack_exec__(9326)));
module.exports = __webpack_exports__;

})();