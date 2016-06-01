'use strict';

var Transformer = module.exports.Transformer = require('./src/transform');

module.exports.transform = function (instance, schema) {
    return Transformer.transform(instance, schema);
};
