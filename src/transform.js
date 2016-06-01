var instantiator = require('json-schema-instantiator');
var _ = require('underscore');
_.mixin(require('underscore.deep'));

module.exports.transform = function(response, schema) {
    var instance = instantiator.instantiate(schema);
    var flatInstance = _.deepToFlat(instance);
    for (var key in flatInstance){
        if(!_.deepHas(response, key)) {
            delete flatInstance[key];
        }
    }
    instance = _.deepFromFlat(flatInstance);
    var keys = _.deepKeys(instance);
    var output = _.deepPick(response, keys);
    return output;
}