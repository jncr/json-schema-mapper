'use strict';

/*jsl predef:define*/
/*jsl predef:it*/

var Transformer = require('../index');
var should = require('chai').should();

describe("transformer", function() {
    it("removes fields from an object which are undefined in a json schema", function(){
        var schema = {
            "type": "object",
            "properties": {
                "foo": {
                    "type": "string"
                },
                "bar": {
                    "type": "object",
                    "properties": {
                        "bat": {
                            "type": "string"
                        }
                    }
                }
            }
        };

        var instance = {
            "foo": "far",
            "bar": {
                "bat": "asdf",
                "seventyfive": 75
            },
            "additional": "deleted"
        };

        return Transformer.transform(instance, schema).should.deep.equal({
            "foo": "far",
            "bar": {
                "bat": "asdf"
            }
        })

    });
})