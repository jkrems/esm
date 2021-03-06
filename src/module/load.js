// Based on Node's `Module._load` method.
// Copyright Node.js contributors. Released under MIT license:
// https://github.com/nodejs/node/blob/master/lib/module.js

import Module from "../module.js"

import _load from "./_load.js"
import builtinModules from "../builtin-modules.js"

function load(id, parent, isMain) {
  if (id in builtinModules) {
    return builtinModules[id].exports
  }

  const filePath = Module._resolveFilename(id, parent, isMain)
  return _load(filePath, parent, isMain, Module).exports
}

export default load
