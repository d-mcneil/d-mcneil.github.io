// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _projects = require("./scripts/projects");
var _projectsDefault = parcelHelpers.interopDefault(_projects);
var _addProject = require("./scripts/addProject");
var _addProjectDefault = parcelHelpers.interopDefault(_addProject);
var _backgroundGradientGeneratorPng = require("./assets/img/project-img/background-gradient-generator.png");
var _backgroundGradientGeneratorPngDefault = parcelHelpers.interopDefault(_backgroundGradientGeneratorPng);
var _flashcardsStudyApplicationPng = require("./assets/img/project-img/flashcards-study-application.png");
var _flashcardsStudyApplicationPngDefault = parcelHelpers.interopDefault(_flashcardsStudyApplicationPng);
var _flaskPortfolioPng = require("./assets/img/project-img/flask-portfolio.png");
var _flaskPortfolioPngDefault = parcelHelpers.interopDefault(_flaskPortfolioPng);
var _guessTheNumberPng = require("./assets/img/project-img/guess-the-number.png");
var _guessTheNumberPngDefault = parcelHelpers.interopDefault(_guessTheNumberPng);
var _passwordCheckerHaveibeenpwnedPng = require("./assets/img/project-img/password-checker-haveibeenpwned.png");
var _passwordCheckerHaveibeenpwnedPngDefault = parcelHelpers.interopDefault(_passwordCheckerHaveibeenpwnedPng);
var _pokemonBreedingCompatibilityCheckerPng = require("./assets/img/project-img/pokemon-breeding-compatibility-checker.png");
var _pokemonBreedingCompatibilityCheckerPngDefault = parcelHelpers.interopDefault(_pokemonBreedingCompatibilityCheckerPng);
var _pokemonStatCalculatorPng = require("./assets/img/project-img/pokemon-stat-calculator.png");
var _pokemonStatCalculatorPngDefault = parcelHelpers.interopDefault(_pokemonStatCalculatorPng);
var _robofriendsPng = require("./assets/img/project-img/robofriends.png");
var _robofriendsPngDefault = parcelHelpers.interopDefault(_robofriendsPng);
var _scrapeHackerNewsTopStoriesPng = require("./assets/img/project-img/scrape-hacker-news-top-stories.png");
var _scrapeHackerNewsTopStoriesPngDefault = parcelHelpers.interopDefault(_scrapeHackerNewsTopStoriesPng);
var _smartbrainFaceDetectionPng = require("./assets/img/project-img/smartbrain-face-detection.png");
var _smartbrainFaceDetectionPngDefault = parcelHelpers.interopDefault(_smartbrainFaceDetectionPng);
var _tenmoMoneyTransfersPng = require("./assets/img/project-img/tenmo-money-transfers.png");
var _tenmoMoneyTransfersPngDefault = parcelHelpers.interopDefault(_tenmoMoneyTransfersPng);
var _uppercrustPizzaPng = require("./assets/img/project-img/uppercrust-pizza.png");
var _uppercrustPizzaPngDefault = parcelHelpers.interopDefault(_uppercrustPizzaPng);
var _virtualVendingMachinePng = require("./assets/img/project-img/virtual-vending-machine.png");
var _virtualVendingMachinePngDefault = parcelHelpers.interopDefault(_virtualVendingMachinePng);
var _websiteLayoutCssGridPng = require("./assets/img/project-img/website-layout-css-grid.png");
var _websiteLayoutCssGridPngDefault = parcelHelpers.interopDefault(_websiteLayoutCssGridPng);
var _email = require("./scripts/email");
var _emailDefault = parcelHelpers.interopDefault(_email);
var _copyEmail = require("./scripts/copyEmail");
var _copyEmailDefault = parcelHelpers.interopDefault(_copyEmail);
var _scrollReveal = require("./scripts/scrollReveal");
var _scrollRevealDefault = parcelHelpers.interopDefault(_scrollReveal);
var _tiltAnimation = require("./scripts/tiltAnimation");
var _tiltAnimationDefault = parcelHelpers.interopDefault(_tiltAnimation);
var _scrollRevealConfig = require("./data/scrollRevealConfig");
(0, _projectsDefault.default).forEach((project)=>(0, _addProjectDefault.default)(project));
(0, _copyEmailDefault.default)((0, _emailDefault.default));
(0, _scrollRevealDefault.default)((0, _scrollRevealConfig.targetElements), (0, _scrollRevealConfig.defaultProps));
(0, _tiltAnimationDefault.default)();

},{"./scripts/projects":"XG5WM","./scripts/addProject":"aYYwH","./scripts/email":"dK53n","./scripts/copyEmail":"fCGR5","./scripts/scrollReveal":"54rka","./scripts/tiltAnimation":"72kAb","./data/scrollRevealConfig":"5aORV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./assets/img/project-img/background-gradient-generator.png":"8oxxJ","./assets/img/project-img/flashcards-study-application.png":"1JGGF","./assets/img/project-img/flask-portfolio.png":"2U9Wf","./assets/img/project-img/guess-the-number.png":"51a0b","./assets/img/project-img/password-checker-haveibeenpwned.png":"91ofb","./assets/img/project-img/pokemon-breeding-compatibility-checker.png":"2F99l","./assets/img/project-img/pokemon-stat-calculator.png":"8TFH9","./assets/img/project-img/robofriends.png":"745rP","./assets/img/project-img/scrape-hacker-news-top-stories.png":"bK6Nb","./assets/img/project-img/smartbrain-face-detection.png":"jrvKx","./assets/img/project-img/tenmo-money-transfers.png":"joEZz","./assets/img/project-img/virtual-vending-machine.png":"2nW00","./assets/img/project-img/website-layout-css-grid.png":"Va8MV","./assets/img/project-img/uppercrust-pizza.png":"ikWyZ"}],"XG5WM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const projects = [
    {
        title: "UpperCrust Pizza",
        description: "Developed Vue front end of a mobile-first, responsively designed, full-stack web application for a hypothetical pizza shop, enabling customers to place orders and employees to manage menu. Instituted routing with Vue Router and managed state with Vuex. Maintained close communication with back-end team to ensure seamless integration between client and server.",
        highlights: "Vue, Vuex, Vue Router, Java, Spring Boot, PostgreSQL, JSON Web Tokens (JWT), RESTful API, Responsive",
        imagePath: "uppercrust-pizza.d2e8b87c.png",
        seeLiveLink: "https://d-mcneil.github.io/uppercrust-pizza",
        firstSourceCodeLink: "https://github.com/d-mcneil/uppercrust-pizza/tree/main/vue",
        firstSourceCodeLabel: "Source Code - Front",
        secondSourceCodeLink: "https://github.com/d-mcneil/uppercrust-pizza/tree/main/java",
        secondSourceCodeLabel: "Source Code - Back"
    },
    {
        title: "Flashcards Study Application",
        description: "Engineered a full-stack, progressive web application with responsive design using React, Redux, Node, Express, and PostgreSQL that lets users create, store, modify, study, and delete their own flashcard decks. Incorporated the JavaScript Web Speech API to add read-aloud functionality.",
        highlights: "React, Redux, Node, Express, PostgreSQL, CRUD, PWA, Responsive",
        imagePath: "flashcards-study-application.1abcfa40.png",
        seeLiveLink: "https://d-mcneil.github.io/flashcards",
        firstSourceCodeLink: "https://github.com/d-mcneil/flashcards",
        firstSourceCodeLabel: "Source Code - Front",
        secondSourceCodeLink: "https://github.com/d-mcneil/flashcards-api",
        secondSourceCodeLabel: "Source Code - Back"
    },
    {
        title: "TEnmo Money Transfers",
        description: "Employed pair programming methodology to collaboratively develop a Java Spring Boot application that models money transfers between users. Secured REST API endpoints using JSON Web Tokens (JWT) for authentication. Encapsulated interactions with PostgreSQL database utilizing the DAO design pattern. Performed integration testing and data validation to maintain data integrity.",
        highlights: "Java, Spring Boot, PostgreSQL, JSON Web Tokens (JWT), RESTful API, Integration Testing, JUnit, DAO Design Pattern, Object-Oriented Programming (OOP)",
        imagePath: "tenmo-money-transfers.ab953f30.png",
        firstSourceCodeLink: "https://github.com/d-mcneil/tenmo-transfers",
        firstSourceCodeLabel: "Source Code",
        imageLink: "https://github.com/d-mcneil/tenmo-transfers"
    },
    {
        title: "Virtual Vending Machine",
        description: "Collaborated with a fellow software developer to design a Java-based, virtual vending machine. Demonstrated proficiency in applying the 4 main principles of object-oriented programming, resulting in an extensible, maintainable codebase. Utilized file I/O operations effectively to track inventory and log user activity. Wrote unit tests to ensure proper functionality.",
        highlights: "Java, Unit Testing, JUnit, OOP",
        imagePath: "virtual-vending-machine.c218e313.png",
        seeLiveLink: "https://replit.com/@dmcneil/vending-machine?v=1",
        firstSourceCodeLink: "https://github.com/d-mcneil/vending-machine",
        firstSourceCodeLabel: "Source Code"
    },
    {
        title: "Pok\xe9mon Stat Calculator",
        description: "Created a front-end, mobile-first, progressive web application with responsive design using React and Redux. Implemented client-side routing with React Router. Connected to the Pok\xe9API to automatically populate input fields.",
        highlights: "React, Redux, React Router, PWA, Responsive",
        imagePath: "pokemon-stat-calculator.c37739b7.png",
        seeLiveLink: "https://d-mcneil.github.io/pokemon-calculator/",
        firstSourceCodeLink: "https://github.com/d-mcneil/pokemon-calculator",
        firstSourceCodeLabel: "Source Code"
    },
    {
        title: "SmartBrain Face Detection",
        description: "Developed a full-stack web application with responsive design using React, Node, Express, and PostgreSQL as part of Zero to Mastery Academy’s Complete Web Developer curriculum. Integrated Clarifai's API to detect faces in images, the user’s total score is increased, and their rank is displayed compared to all SmartBrain users.",
        highlights: "React, Node, Express, PostgreSQL, CRUD, Responsive",
        imagePath: "smartbrain-face-detection.34cc7675.png",
        seeLiveLink: "https://d-mcneil.github.io/smartbrain",
        firstSourceCodeLink: "https://github.com/d-mcneil/smartbrain",
        firstSourceCodeLabel: "Source Code - Front",
        secondSourceCodeLink: "https://github.com/d-mcneil/smartbrain-face-detection-api",
        secondSourceCodeLabel: "Source Code - Back"
    },
    {
        title: "Pok\xe9mon Breeding Compatibility Checker",
        description: "In the main Pok\xe9mon games, Pok\xe9mon can breed with other Pok\xe9mon in their egg group. This app lets you search by Pok\xe9mon to find those it can breed with.",
        highlights: "React, Redux, Bootstrap, PWA, Responsive",
        // picture from https://www.ign.com/wikis/pokemon-go/Eggstravaganza_Event_-_April_2017
        imagePath: "pokemon-breeding-compatibility-checker.0b46d72c.png",
        seeLiveLink: "https://d-mcneil.github.io/pokemon-breeding-compatibility-checker",
        firstSourceCodeLink: "https://github.com/d-mcneil/pokemon-breeding-compatibility-checker",
        firstSourceCodeLabel: "Source Code"
    },
    {
        title: "RoboFriends",
        description: "Search through all of your friends (personified as robots) to find their contact information.",
        highlights: "React, Redux, PWA, Responsive",
        imagePath: "robofriends.b0f367bb.png",
        seeLiveLink: "https://d-mcneil.github.io/robofriends-redux",
        firstSourceCodeLink: "https://github.com/d-mcneil/robofriends-redux",
        firstSourceCodeLabel: "Source Code"
    },
    {
        title: "Website Layout CSS Grid",
        description: "A sample website layout",
        highlights: "CSS Grid, Responsive",
        imagePath: "website-layout-css-grid.30de2e86.png",
        seeLiveLink: "https://d-mcneil.github.io/website-layout-css-grid",
        firstSourceCodeLink: "https://github.com/d-mcneil/website-layout-css-grid",
        firstSourceCodeLabel: "Source Code"
    },
    {
        title: "Background Gradient Generator",
        description: "Create a simple background gradient and copy the CSS code to use it for your own website. If you aren't feeling inspired, you can generate random gradients until you find one that you like.",
        highlights: "JavaScript, Responsive",
        imagePath: "background-gradient-generator.f5564c70.png",
        seeLiveLink: "https://d-mcneil.github.io/background-gradient-generator",
        firstSourceCodeLink: "https://github.com/d-mcneil/background-gradient-generator",
        firstSourceCodeLabel: "Source Code"
    },
    {
        title: "Password Checker haveibeenpwned.com",
        description: "Check passwords against the haveibeenpwned.com database to see if any of your passwords have been leaked in a data breach. Unlike simply going to haveibeenpwned.com and entering your passwords, this app lets you check passwords without sending them over the Internet (when used locally).",
        highlights: "Python",
        imagePath: "password-checker-haveibeenpwned.c22ad4ce.png",
        seeLiveLink: "https://replit.com/@dmcneil/password-checker-have-i-been-pwned?v=1",
        firstSourceCodeLink: "https://github.com/d-mcneil/password-checker-have-i-been-pwned",
        firstSourceCodeLabel: "Source Code"
    },
    {
        title: "Scrape Hacker News Top Stories",
        description: "This app returns all of the stories on Hacker News that have more than 100 up-votes. You can choose how many pages to scrape from, but there is a 30-second delay between scraping each page.",
        highlights: "Python, Scraper, Beautiful Soup",
        imagePath: "scrape-hacker-news-top-stories.78a55f9b.png",
        seeLiveLink: "https://replit.com/@dmcneil/scrape-hacker-news-top-stories?v=1",
        firstSourceCodeLink: "https://github.com/d-mcneil/scrape-hacker-news-top-stories",
        firstSourceCodeLabel: "Source Code"
    },
    {
        title: "Flask Portfolio",
        description: "This alternative portfolio website was created by taking a template from mashup-template.com, using the Flask framework to program the server, and hosting it on pythonanywhere.com.",
        highlights: "Python, Flask",
        imagePath: "flask-portfolio.a6b17744.png",
        seeLiveLink: "https://dmcneil.pythonanywhere.com/",
        firstSourceCodeLink: "https://github.com/d-mcneil/flask-portfolio",
        firstSourceCodeLabel: "Source Code"
    },
    {
        title: "Guess the Number",
        description: "If you're incredibly bored and have nothing else to do, play this game against the computer where you each take turns guessing the other's number.",
        highlights: "Python",
        imagePath: "guess-the-number.eab515ae.png",
        seeLiveLink: "https://replit.com/@dmcneil/guess-the-number?v=1",
        firstSourceCodeLink: "https://github.com/d-mcneil/guess-the-number",
        firstSourceCodeLabel: "Source Code"
    }, 
];
exports.default = projects;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aYYwH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const addProject = (project)=>{
    const projectRoot = document.querySelector(".project-wrapper");
    const row = document.createElement("div");
    row.classList.add("row");
    // ******************************* ADD PROJECT TEXT & BUTTONS *******************************
    {
        const colTextAndButtons = document.createElement("div");
        colTextAndButtons.classList.add("col-sm-12");
        colTextAndButtons.classList.add("col-lg-4");
        // ******************************* CREATE PROJECT WRAPPER *******************************
        const projectTextWrapper = document.createElement("div");
        projectTextWrapper.classList.add("project-wrapper__text");
        projectTextWrapper.classList.add("load-hidden");
        // ******************************* CREATE PROJECT TITLE *******************************
        const title = document.createElement("h3");
        title.classList.add("project-wrapper__text-title");
        title.innerText = project.title;
        // ******************************* CREATE PROJECT DESCRIPTION *******************************
        const description = document.createElement("p");
        description.classList.add("justify");
        description.innerText = project.description;
        // ******************************* CREATE PROJECT HIGHLIGHTS *******************************
        const highlights = document.createElement("p");
        {
            highlights.classList.add("mb-4");
            const isHighlightsSingular = project.highlights.split(",").length === 1;
            const highlightsTitle = document.createElement("span");
            highlightsTitle.innerText = `Highlight${isHighlightsSingular ? "" : "s"}: `;
            highlightsTitle.classList.add("highlights-title");
            const highlightsText = document.createElement("span");
            highlightsText.innerText = `${project.highlights}`;
            highlightsText.classList.add("highlights");
            highlights.appendChild(highlightsTitle);
            highlights.appendChild(highlightsText);
        }
        // ******************************* CREATE SEE LIVE & SOURCE CODE BUTTONS *******************************
        const buttonWrapper = document.createElement("div");
        {
            buttonWrapper.classList.add("project-button-wrapper");
            const buttons = [];
            let anchorSeeLive;
            let firstSourceCode;
            let secondSourceCode;
            if (project.seeLiveLink) {
                anchorSeeLive = document.createElement("a");
                anchorSeeLive.setAttribute("href", project.seeLiveLink);
                anchorSeeLive.innerText = "See Live";
                buttons.push(anchorSeeLive);
            }
            if (project.firstSourceCodeLink) {
                firstSourceCode = document.createElement("a");
                firstSourceCode.setAttribute("href", project.firstSourceCodeLink);
                firstSourceCode.innerText = project.firstSourceCodeLabel;
                firstSourceCode.classList.add("plain-text-button");
                buttons.push(firstSourceCode);
            }
            if (project.secondSourceCodeLink) {
                secondSourceCode = document.createElement("a");
                secondSourceCode.setAttribute("href", project.secondSourceCodeLink);
                secondSourceCode.innerText = project.secondSourceCodeLabel;
                secondSourceCode.classList.add("plain-text-button");
                buttons.push(secondSourceCode);
            }
            buttons.forEach((button)=>{
                button.setAttribute("rel", "noreferrer");
                button.setAttribute("target", "blank");
                button.classList.add("cta-btn");
                buttonWrapper.appendChild(button);
            });
        }
        // ******************************* FINISH ADDING PROJECT TEXT & BUTTONS *******************************
        projectTextWrapper.appendChild(title);
        projectTextWrapper.appendChild(description);
        projectTextWrapper.appendChild(highlights);
        projectTextWrapper.appendChild(buttonWrapper);
        colTextAndButtons.appendChild(projectTextWrapper);
        row.appendChild(colTextAndButtons);
    }
    // ******************************* ADD PROJECT IMAGE *******************************
    {
        const colImage = document.createElement("div");
        colImage.classList.add("col-sm-12");
        colImage.classList.add("col-lg-8");
        const projectImageWrapper = document.createElement("div");
        projectImageWrapper.classList.add("project-wrapper__image");
        projectImageWrapper.classList.add("load-hidden");
        const anchorImage = document.createElement("a");
        anchorImage.setAttribute("rel", "noreferrer");
        anchorImage.setAttribute("target", "blank");
        anchorImage.setAttribute("href", project.imageLink ? project.imageLink : project.seeLiveLink);
        const jsTiltWrapper = document.createElement("div");
        jsTiltWrapper.classList.add("thumbnail");
        jsTiltWrapper.classList.add("rounded");
        jsTiltWrapper.classList.add("js-tilt");
        jsTiltWrapper.setAttribute("data-tilt", "true");
        jsTiltWrapper.setAttribute("data-tilt-max", "4");
        jsTiltWrapper.setAttribute("data-tilt-glare", "true");
        jsTiltWrapper.setAttribute("data-tilt-max-glare", "0.5");
        const img = document.createElement("img");
        img.setAttribute("alt", `Project Banner Image for ${project.title}`);
        img.classList.add("project-img");
        img.classList.add("img-fluid");
        img.src = `${project.imagePath}`;
        // ******************************* FINISH PROJECT IMAGE *******************************
        jsTiltWrapper.appendChild(img);
        anchorImage.appendChild(jsTiltWrapper);
        projectImageWrapper.appendChild(anchorImage);
        colImage.appendChild(projectImageWrapper);
        row.appendChild(colImage);
    }
    projectRoot.appendChild(row);
};
exports.default = addProject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dK53n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const email = "dean.mcneil.developer@gmail.com";
exports.default = email;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCGR5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// have to create file in same directory: email.js
// the only 2 lines that go in email.js are:
// const email = "<my-email-here>";
// export default email;
const copyEmailButton = document.getElementById("copy-email-button");
const handleCopyEmail = (email)=>{
    navigator.clipboard.writeText(email);
};
const addCopyEmailButtonListener = (email)=>{
    copyEmailButton.addEventListener("click", ()=>handleCopyEmail(email));
};
exports.default = addCopyEmailButtonListener;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"54rka":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function initScrollReveal(targetElements, defaultProps) {
    if (!targetElements.length) return;
    ScrollReveal({
        reset: false
    });
    targetElements.forEach(({ element , animation  })=>{
        ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
    });
}
exports.default = initScrollReveal;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"72kAb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vanillaTilt = require("vanilla-tilt");
var _vanillaTiltDefault = parcelHelpers.interopDefault(_vanillaTilt);
function initTiltAnimation() {
    const elements = document.querySelectorAll(".js-tilt");
    (0, _vanillaTiltDefault.default).init(elements);
}
exports.default = initTiltAnimation;

},{"vanilla-tilt":"jiWzO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jiWzO":[function(require,module,exports) {
"use strict";
var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
};
/**
 * Created by Sergiu Șandor (micku7zu) on 1/27/2017.
 * Original idea: https://github.com/gijsroge/tilt.js
 * MIT License.
 * Version 1.7.2
 */ var VanillaTilt = function() {
    function VanillaTilt(element) {
        var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        classCallCheck(this, VanillaTilt);
        if (!(element instanceof Node)) throw "Can't initialize VanillaTilt because " + element + " is not a Node.";
        this.width = null;
        this.height = null;
        this.clientWidth = null;
        this.clientHeight = null;
        this.left = null;
        this.top = null;
        // for Gyroscope sampling
        this.gammazero = null;
        this.betazero = null;
        this.lastgammazero = null;
        this.lastbetazero = null;
        this.transitionTimeout = null;
        this.updateCall = null;
        this.event = null;
        this.updateBind = this.update.bind(this);
        this.resetBind = this.reset.bind(this);
        this.element = element;
        this.settings = this.extendSettings(settings);
        this.reverse = this.settings.reverse ? -1 : 1;
        this.glare = VanillaTilt.isSettingTrue(this.settings.glare);
        this.glarePrerender = VanillaTilt.isSettingTrue(this.settings["glare-prerender"]);
        this.fullPageListening = VanillaTilt.isSettingTrue(this.settings["full-page-listening"]);
        this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);
        this.gyroscopeSamples = this.settings.gyroscopeSamples;
        this.elementListener = this.getElementListener();
        if (this.glare) this.prepareGlare();
        if (this.fullPageListening) this.updateClientSize();
        this.addEventListeners();
        this.reset();
        this.updateInitialPosition();
    }
    VanillaTilt.isSettingTrue = function isSettingTrue(setting) {
        return setting === "" || setting === true || setting === 1;
    };
    /**
   * Method returns element what will be listen mouse events
   * @return {Node}
   */ VanillaTilt.prototype.getElementListener = function getElementListener() {
        if (this.fullPageListening) return window.document;
        if (typeof this.settings["mouse-event-element"] === "string") {
            var mouseEventElement = document.querySelector(this.settings["mouse-event-element"]);
            if (mouseEventElement) return mouseEventElement;
        }
        if (this.settings["mouse-event-element"] instanceof Node) return this.settings["mouse-event-element"];
        return this.element;
    };
    /**
   * Method set listen methods for this.elementListener
   * @return {Node}
   */ VanillaTilt.prototype.addEventListeners = function addEventListeners() {
        this.onMouseEnterBind = this.onMouseEnter.bind(this);
        this.onMouseMoveBind = this.onMouseMove.bind(this);
        this.onMouseLeaveBind = this.onMouseLeave.bind(this);
        this.onWindowResizeBind = this.onWindowResize.bind(this);
        this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);
        this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind);
        this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind);
        this.elementListener.addEventListener("mousemove", this.onMouseMoveBind);
        if (this.glare || this.fullPageListening) window.addEventListener("resize", this.onWindowResizeBind);
        if (this.gyroscope) window.addEventListener("deviceorientation", this.onDeviceOrientationBind);
    };
    /**
   * Method remove event listeners from current this.elementListener
   */ VanillaTilt.prototype.removeEventListeners = function removeEventListeners() {
        this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind);
        this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind);
        this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind);
        if (this.gyroscope) window.removeEventListener("deviceorientation", this.onDeviceOrientationBind);
        if (this.glare || this.fullPageListening) window.removeEventListener("resize", this.onWindowResizeBind);
    };
    VanillaTilt.prototype.destroy = function destroy() {
        clearTimeout(this.transitionTimeout);
        if (this.updateCall !== null) cancelAnimationFrame(this.updateCall);
        this.reset();
        this.removeEventListeners();
        this.element.vanillaTilt = null;
        delete this.element.vanillaTilt;
        this.element = null;
    };
    VanillaTilt.prototype.onDeviceOrientation = function onDeviceOrientation(event) {
        if (event.gamma === null || event.beta === null) return;
        this.updateElementPosition();
        if (this.gyroscopeSamples > 0) {
            this.lastgammazero = this.gammazero;
            this.lastbetazero = this.betazero;
            if (this.gammazero === null) {
                this.gammazero = event.gamma;
                this.betazero = event.beta;
            } else {
                this.gammazero = (event.gamma + this.lastgammazero) / 2;
                this.betazero = (event.beta + this.lastbetazero) / 2;
            }
            this.gyroscopeSamples -= 1;
        }
        var totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;
        var totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;
        var degreesPerPixelX = totalAngleX / this.width;
        var degreesPerPixelY = totalAngleY / this.height;
        var angleX = event.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero);
        var angleY = event.beta - (this.settings.gyroscopeMinAngleY + this.betazero);
        var posX = angleX / degreesPerPixelX;
        var posY = angleY / degreesPerPixelY;
        if (this.updateCall !== null) cancelAnimationFrame(this.updateCall);
        this.event = {
            clientX: posX + this.left,
            clientY: posY + this.top
        };
        this.updateCall = requestAnimationFrame(this.updateBind);
    };
    VanillaTilt.prototype.onMouseEnter = function onMouseEnter() {
        this.updateElementPosition();
        this.element.style.willChange = "transform";
        this.setTransition();
    };
    VanillaTilt.prototype.onMouseMove = function onMouseMove(event) {
        if (this.updateCall !== null) cancelAnimationFrame(this.updateCall);
        this.event = event;
        this.updateCall = requestAnimationFrame(this.updateBind);
    };
    VanillaTilt.prototype.onMouseLeave = function onMouseLeave() {
        this.setTransition();
        if (this.settings.reset) requestAnimationFrame(this.resetBind);
    };
    VanillaTilt.prototype.reset = function reset() {
        this.event = {
            clientX: this.left + this.width / 2,
            clientY: this.top + this.height / 2
        };
        if (this.element && this.element.style) this.element.style.transform = "perspective(" + this.settings.perspective + "px) " + "rotateX(0deg) " + "rotateY(0deg) " + "scale3d(1, 1, 1)";
        this.resetGlare();
    };
    VanillaTilt.prototype.resetGlare = function resetGlare() {
        if (this.glare) {
            this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)";
            this.glareElement.style.opacity = "0";
        }
    };
    VanillaTilt.prototype.updateInitialPosition = function updateInitialPosition() {
        if (this.settings.startX === 0 && this.settings.startY === 0) return;
        this.onMouseEnter();
        if (this.fullPageListening) this.event = {
            clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
            clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
        };
        else this.event = {
            clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
            clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
        };
        var backupScale = this.settings.scale;
        this.settings.scale = 1;
        this.update();
        this.settings.scale = backupScale;
        this.resetGlare();
    };
    VanillaTilt.prototype.getValues = function getValues() {
        var x = void 0, y = void 0;
        if (this.fullPageListening) {
            x = this.event.clientX / this.clientWidth;
            y = this.event.clientY / this.clientHeight;
        } else {
            x = (this.event.clientX - this.left) / this.width;
            y = (this.event.clientY - this.top) / this.height;
        }
        x = Math.min(Math.max(x, 0), 1);
        y = Math.min(Math.max(y, 0), 1);
        var tiltX = (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2);
        var tiltY = (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2);
        var angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);
        return {
            tiltX: tiltX,
            tiltY: tiltY,
            percentageX: x * 100,
            percentageY: y * 100,
            angle: angle
        };
    };
    VanillaTilt.prototype.updateElementPosition = function updateElementPosition() {
        var rect = this.element.getBoundingClientRect();
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.left = rect.left;
        this.top = rect.top;
    };
    VanillaTilt.prototype.update = function update() {
        var values = this.getValues();
        this.element.style.transform = "perspective(" + this.settings.perspective + "px) " + "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " + "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " + "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")";
        if (this.glare) {
            this.glareElement.style.transform = "rotate(" + values.angle + "deg) translate(-50%, -50%)";
            this.glareElement.style.opacity = "" + values.percentageY * this.settings["max-glare"] / 100;
        }
        this.element.dispatchEvent(new CustomEvent("tiltChange", {
            "detail": values
        }));
        this.updateCall = null;
    };
    /**
   * Appends the glare element (if glarePrerender equals false)
   * and sets the default style
   */ VanillaTilt.prototype.prepareGlare = function prepareGlare() {
        // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
        if (!this.glarePrerender) {
            // Create glare element
            var jsTiltGlare = document.createElement("div");
            jsTiltGlare.classList.add("js-tilt-glare");
            var jsTiltGlareInner = document.createElement("div");
            jsTiltGlareInner.classList.add("js-tilt-glare-inner");
            jsTiltGlare.appendChild(jsTiltGlareInner);
            this.element.appendChild(jsTiltGlare);
        }
        this.glareElementWrapper = this.element.querySelector(".js-tilt-glare");
        this.glareElement = this.element.querySelector(".js-tilt-glare-inner");
        if (this.glarePrerender) return;
        Object.assign(this.glareElementWrapper.style, {
            "position": "absolute",
            "top": "0",
            "left": "0",
            "width": "100%",
            "height": "100%",
            "overflow": "hidden",
            "pointer-events": "none"
        });
        Object.assign(this.glareElement.style, {
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "pointer-events": "none",
            "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
            "transform": "rotate(180deg) translate(-50%, -50%)",
            "transform-origin": "0% 0%",
            "opacity": "0"
        });
        this.updateGlareSize();
    };
    VanillaTilt.prototype.updateGlareSize = function updateGlareSize() {
        if (this.glare) {
            var glareSize = (this.element.offsetWidth > this.element.offsetHeight ? this.element.offsetWidth : this.element.offsetHeight) * 2;
            Object.assign(this.glareElement.style, {
                "width": glareSize + "px",
                "height": glareSize + "px"
            });
        }
    };
    VanillaTilt.prototype.updateClientSize = function updateClientSize() {
        this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };
    VanillaTilt.prototype.onWindowResize = function onWindowResize() {
        this.updateGlareSize();
        this.updateClientSize();
    };
    VanillaTilt.prototype.setTransition = function setTransition() {
        var _this = this;
        clearTimeout(this.transitionTimeout);
        this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
        if (this.glare) this.glareElement.style.transition = "opacity " + this.settings.speed + "ms " + this.settings.easing;
        this.transitionTimeout = setTimeout(function() {
            _this.element.style.transition = "";
            if (_this.glare) _this.glareElement.style.transition = "";
        }, this.settings.speed);
    };
    /**
   * Method return patched settings of instance
   * @param {boolean} settings.reverse - reverse the tilt direction
   * @param {number} settings.max - max tilt rotation (degrees)
   * @param {startX} settings.startX - the starting tilt on the X axis, in degrees. Default: 0
   * @param {startY} settings.startY - the starting tilt on the Y axis, in degrees. Default: 0
   * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets
   * @param {string} settings.easing - Easing on enter/exit
   * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..
   * @param {number} settings.speed - Speed of the enter/exit transition
   * @param {boolean} settings.transition - Set a transition on enter/exit
   * @param {string|null} settings.axis - What axis should be disabled. Can be X or Y
   * @param {boolean} settings.glare - What axis should be disabled. Can be X or Y
   * @param {number} settings.max-glare - the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
   * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise
   * @param {boolean} settings.full-page-listening - If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
   * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events
   * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit
   * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events
   * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..
   * @param {gyroscopeSamples} settings.gyroscopeSamples - How many gyroscope moves to decide the starting position.
   */ VanillaTilt.prototype.extendSettings = function extendSettings(settings) {
        var defaultSettings = {
            reverse: false,
            max: 15,
            startX: 0,
            startY: 0,
            perspective: 1000,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            scale: 1,
            speed: 300,
            transition: true,
            axis: null,
            glare: false,
            "max-glare": 1,
            "glare-prerender": false,
            "full-page-listening": false,
            "mouse-event-element": null,
            reset: true,
            gyroscope: true,
            gyroscopeMinAngleX: -45,
            gyroscopeMaxAngleX: 45,
            gyroscopeMinAngleY: -45,
            gyroscopeMaxAngleY: 45,
            gyroscopeSamples: 10
        };
        var newSettings = {};
        for(var property in defaultSettings){
            if (property in settings) newSettings[property] = settings[property];
            else if (this.element.hasAttribute("data-tilt-" + property)) {
                var attribute = this.element.getAttribute("data-tilt-" + property);
                try {
                    newSettings[property] = JSON.parse(attribute);
                } catch (e) {
                    newSettings[property] = attribute;
                }
            } else newSettings[property] = defaultSettings[property];
        }
        return newSettings;
    };
    VanillaTilt.init = function init(elements, settings) {
        if (elements instanceof Node) elements = [
            elements
        ];
        if (elements instanceof NodeList) elements = [].slice.call(elements);
        if (!(elements instanceof Array)) return;
        elements.forEach(function(element) {
            if (!("vanillaTilt" in element)) element.vanillaTilt = new VanillaTilt(element, settings);
        });
    };
    return VanillaTilt;
}();
if (typeof document !== "undefined") {
    /* expose the class to window */ window.VanillaTilt = VanillaTilt;
    /**
   * Auto load
   */ VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
}
module.exports = VanillaTilt;

},{}],"5aORV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultProps", ()=>defaultProps);
parcelHelpers.export(exports, "targetElements", ()=>targetElements);
const defaultProps = {
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    distance: "30px",
    duration: 1000,
    desktop: true,
    mobile: true
};
const targetElements = [
    {
        element: ".section-title",
        animation: {
            delay: 300,
            distance: "0px",
            origin: "bottom"
        }
    },
    {
        element: ".hero-title",
        animation: {
            delay: 500,
            origin: window.innerWidth > 768 ? "left" : "bottom"
        }
    },
    {
        element: ".hero-cta",
        animation: {
            delay: 1000,
            origin: window.innerWidth > 768 ? "left" : "bottom"
        }
    },
    {
        element: ".about-wrapper__image",
        animation: {
            delay: 600,
            origin: "bottom"
        }
    },
    {
        element: ".about-wrapper__info",
        animation: {
            delay: 1000,
            origin: window.innerWidth > 768 ? "left" : "bottom"
        }
    },
    {
        element: ".project-wrapper__text",
        animation: {
            delay: 500,
            origin: window.innerWidth > 768 ? "left" : "bottom"
        }
    },
    {
        element: ".project-wrapper__image",
        animation: {
            delay: 1000,
            origin: window.innerWidth > 768 ? "right" : "bottom"
        }
    },
    {
        element: ".contact-wrapper",
        animation: {
            delay: 800,
            origin: "bottom"
        }
    }, 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8oxxJ":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "background-gradient-generator.f5564c70.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"1JGGF":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "flashcards-study-application.1abcfa40.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2U9Wf":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "flask-portfolio.a6b17744.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"51a0b":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "guess-the-number.eab515ae.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"91ofb":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "password-checker-haveibeenpwned.c22ad4ce.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2F99l":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "pokemon-breeding-compatibility-checker.0b46d72c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8TFH9":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "pokemon-stat-calculator.c37739b7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"745rP":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "robofriends.b0f367bb.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bK6Nb":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "scrape-hacker-news-top-stories.78a55f9b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"jrvKx":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "smartbrain-face-detection.34cc7675.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"joEZz":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "tenmo-money-transfers.ab953f30.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2nW00":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "virtual-vending-machine.c218e313.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"Va8MV":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "website-layout-css-grid.30de2e86.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"ikWyZ":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "uppercrust-pizza.d2e8b87c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["ShInH","8lqZg"], "8lqZg", "parcelRequire6aa4")

//# sourceMappingURL=index.975ef6c8.js.map
