import isObjectLike from "./is-object-like.js"

const { defineProperty } = Object

function setDescriptor(object, key, descriptor) {
  return isObjectLike(object)
    ? defineProperty(object, key, descriptor)
    : object
}

export default setDescriptor
