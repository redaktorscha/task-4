// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"js\\propsorting.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// сортировка массива по возрастанию
exports.propSorting = function (arr, prop) {
    arr.sort(function (x, y) {
        return x[prop] > y[prop] ? 1 : x[prop] < y[prop] ? -1 : 0;
    });
};
},{}],"js\\proprevsorting.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// сортировка массива по убыванию
exports.propRevSorting = function (arr, prop) {
    arr.sort(function (a, b) {
        return b[prop] > a[prop] ? 1 : b[prop] < a[prop] ? -1 : 0;
    });
};
},{}],"js\\remove_table.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// удаление таблицы
exports.removeTable = function () {
    var el = document.getElementById('tbody');
    if (el) {
        el.remove();
    }
    var tbody2 = document.createElement('tbody');
    tbody2.setAttribute('id', 'tbody');
    var table = document.querySelector('#table');
    if (table) {
        table.appendChild(tbody2);
    }
};
},{}],"js\\create_table.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// создание таблицы
exports.createTable = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var tbody = document.getElementById('tbody');
        var row = document.createElement('tr');
        for (var prop in arr[i]) {
            var value = arr[i][prop].toString();
            var cell = document.createElement('td');
            var text = document.createTextNode(value);
            cell.appendChild(text);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
};
},{}],"js\\highlighter.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// подсветка отсортированных колонок
exports.highlighter = function (index) {
    var tbody = document.getElementById('tbody');
    for (var j = 0; j < tbody.rows.length; j++) {
        tbody.rows[j].cells[index].setAttribute('class', 'shadow');
    }
};
},{}],"js\\get_header_index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// поиск номера ячейки таблицы, которую нужно подсветить
exports.getHeaderIndex = function (e) {
    var closest = e.target.closest('th');
    return closest ? closest.cellIndex : -1;
};
},{}],"js\\img_toggle.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// смена картинки на кнопке
exports.imgToggle = function (id, src) {
    var button = document.getElementById(id);
    if (button) {
        button.classList.toggle(src);
    }
};
},{}],"js\\clear_buttons.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// возврат неактивных кнопок к первоначальной картинке
exports.clearButtons = function (nm) {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].id !== nm) {
            buttons[i].setAttribute('class', 'btn');
        }
    }
};
},{}],"js\\table_sort.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var propsorting_1 = require("./propsorting");
var proprevsorting_1 = require("./proprevsorting");
var remove_table_1 = require("./remove_table");
var create_table_1 = require("./create_table");
var highlighter_1 = require("./highlighter");
var get_header_index_1 = require("./get_header_index");
var img_toggle_1 = require("./img_toggle");
var clear_buttons_1 = require("./clear_buttons");
var catsArray = [];
var sorted = {};
// создает массив из объектов

var Cat = function Cat(name, weight, color, gender, age) {
    _classCallCheck(this, Cat);

    this.name = name;
    this.weight = weight;
    this.color = color;
    this.gender = gender;
    this.age = age;
    catsArray.push(this);
};

new Cat('Thomas', 10, 'grey', 'male', 8);
new Cat('Kitty', 5, 'red', 'female', 2);
new Cat('Max', 6, 'white', 'male', 12);
new Cat('Angel', 3, 'black', 'male', 1);
new Cat('Bella', 4, 'white', 'female', 5);
new Cat('Tabby', 7, 'whiskas', 'male', 2);
new Cat('Daisy', 3, 'beige', 'female', 5);
new Cat('Misty', 5, 'grey', 'female', 3);
new Cat('Spotty', 8, 'spotted', 'male', 6);
new Cat('Tiger', 9, 'red', 'male', 4);
// сортировка таблицы по заданным критериям
var sortTable = function sortTable(p) {
    remove_table_1.removeTable();
    if (sorted.prop !== p || !sorted.state) {
        propsorting_1.propSorting(catsArray, p);
        img_toggle_1.imgToggle(p, 'btn_asc');
        sorted.state = true;
    } else {
        proprevsorting_1.propRevSorting(catsArray, p);
        img_toggle_1.imgToggle(p, 'btn_desc');
        sorted.state = false;
    }
    sorted.prop = p;
    create_table_1.createTable(catsArray);
    clear_buttons_1.clearButtons(p);
};
// что происходит по нажатии на конкретную кнопку
var onClick = function onClick(e) {
    if (e.target.id) {
        sortTable(e.target.id);
        highlighter_1.highlighter(get_header_index_1.getHeaderIndex(e));
    }
};
var thead = document.querySelector('#thead');
if (thead) {
    thead.addEventListener('click', function (e) {
        onClick(e);
    });
}
create_table_1.createTable(catsArray);
},{"./propsorting":"js\\propsorting.ts","./proprevsorting":"js\\proprevsorting.ts","./remove_table":"js\\remove_table.ts","./create_table":"js\\create_table.ts","./highlighter":"js\\highlighter.ts","./get_header_index":"js\\get_header_index.ts","./img_toggle":"js\\img_toggle.ts","./clear_buttons":"js\\clear_buttons.ts"}],"..\\..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '59397' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js","js\\table_sort.ts"], null)
//# sourceMappingURL=/table_sort.44c87253.map