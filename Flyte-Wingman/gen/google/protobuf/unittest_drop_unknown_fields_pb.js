// source: google/protobuf/unittest_drop_unknown_fields.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.unittest_drop_unknown_fields.Foo', null, global);
goog.exportSymbol('proto.unittest_drop_unknown_fields.Foo.NestedEnum', null, global);
goog.exportSymbol('proto.unittest_drop_unknown_fields.FooWithExtraFields', null, global);
goog.exportSymbol('proto.unittest_drop_unknown_fields.FooWithExtraFields.NestedEnum', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.unittest_drop_unknown_fields.Foo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.unittest_drop_unknown_fields.Foo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unittest_drop_unknown_fields.Foo.displayName = 'proto.unittest_drop_unknown_fields.Foo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.unittest_drop_unknown_fields.FooWithExtraFields = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.unittest_drop_unknown_fields.FooWithExtraFields, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unittest_drop_unknown_fields.FooWithExtraFields.displayName = 'proto.unittest_drop_unknown_fields.FooWithExtraFields';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.unittest_drop_unknown_fields.Foo.prototype.toObject = function(opt_includeInstance) {
  return proto.unittest_drop_unknown_fields.Foo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unittest_drop_unknown_fields.Foo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unittest_drop_unknown_fields.Foo.toObject = function(includeInstance, msg) {
  var f, obj = {
    int32Value: jspb.Message.getFieldWithDefault(msg, 1, 0),
    enumValue: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.unittest_drop_unknown_fields.Foo}
 */
proto.unittest_drop_unknown_fields.Foo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unittest_drop_unknown_fields.Foo;
  return proto.unittest_drop_unknown_fields.Foo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unittest_drop_unknown_fields.Foo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unittest_drop_unknown_fields.Foo}
 */
proto.unittest_drop_unknown_fields.Foo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInt32Value(value);
      break;
    case 2:
      var value = /** @type {!proto.unittest_drop_unknown_fields.Foo.NestedEnum} */ (reader.readEnum());
      msg.setEnumValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.unittest_drop_unknown_fields.Foo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unittest_drop_unknown_fields.Foo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unittest_drop_unknown_fields.Foo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unittest_drop_unknown_fields.Foo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInt32Value();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getEnumValue();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.unittest_drop_unknown_fields.Foo.NestedEnum = {
  FOO: 0,
  BAR: 1,
  BAZ: 2
};

/**
 * optional int32 int32_value = 1;
 * @return {number}
 */
proto.unittest_drop_unknown_fields.Foo.prototype.getInt32Value = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.unittest_drop_unknown_fields.Foo} returns this
 */
proto.unittest_drop_unknown_fields.Foo.prototype.setInt32Value = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional NestedEnum enum_value = 2;
 * @return {!proto.unittest_drop_unknown_fields.Foo.NestedEnum}
 */
proto.unittest_drop_unknown_fields.Foo.prototype.getEnumValue = function() {
  return /** @type {!proto.unittest_drop_unknown_fields.Foo.NestedEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.unittest_drop_unknown_fields.Foo.NestedEnum} value
 * @return {!proto.unittest_drop_unknown_fields.Foo} returns this
 */
proto.unittest_drop_unknown_fields.Foo.prototype.setEnumValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.unittest_drop_unknown_fields.FooWithExtraFields.prototype.toObject = function(opt_includeInstance) {
  return proto.unittest_drop_unknown_fields.FooWithExtraFields.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unittest_drop_unknown_fields.FooWithExtraFields} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unittest_drop_unknown_fields.FooWithExtraFields.toObject = function(includeInstance, msg) {
  var f, obj = {
    int32Value: jspb.Message.getFieldWithDefault(msg, 1, 0),
    enumValue: jspb.Message.getFieldWithDefault(msg, 2, 0),
    extraInt32Value: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.unittest_drop_unknown_fields.FooWithExtraFields}
 */
proto.unittest_drop_unknown_fields.FooWithExtraFields.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unittest_drop_unknown_fields.FooWithExtraFields;
  return proto.unittest_drop_unknown_fields.FooWithExtraFields.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unittest_drop_unknown_fields.FooWithExtraFields} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unittest_drop_unknown_fields.FooWithExtraFields}
 */
proto.unittest_drop_unknown_fields.FooWithExtraFields.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInt32Value(value);
      break;
    case 2:
      var value = /** @type {!proto.unittest_drop_unknown_fields.FooWithExtraFields.NestedEnum} */ (reader.readEnum());
      msg.setEnumValue(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExtraInt32Value(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.unittest_drop_unknown_fields.FooWithExtraFields.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unittest_drop_unknown_fields.FooWithExtraFields.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unittest_drop_unknown_fields.FooWithExtraFields} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unittest_drop_unknown_fields.FooWithExtraFields.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInt32Value();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getEnumValue();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getExtraInt32Value();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.unittest_drop_unknown_fields.FooWithExtraFields.NestedEnum = {
  FOO: 0,
  BAR: 1,
  BAZ: 2,
  QUX: 3
};

/**
 * optional int32 int32_value = 1;
 * @return {number}
 */
proto.unittest_drop_unknown_fields.FooWithExtraFields.prototype.getInt32Value = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.unittest_drop_unknown_fields.FooWithExtraFields} returns this
 */
proto.unittest_drop_unknown_fields.FooWithExtraFields.prototype.setInt32Value = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional NestedEnum enum_value = 2;
 * @return {!proto.unittest_drop_unknown_fields.FooWithExtraFields.NestedEnum}
 */
proto.unittest_drop_unknown_fields.FooWithExtraFields.prototype.getEnumValue = function() {
  return /** @type {!proto.unittest_drop_unknown_fields.FooWithExtraFields.NestedEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.unittest_drop_unknown_fields.FooWithExtraFields.NestedEnum} value
 * @return {!proto.unittest_drop_unknown_fields.FooWithExtraFields} returns this
 */
proto.unittest_drop_unknown_fields.FooWithExtraFields.prototype.setEnumValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 extra_int32_value = 3;
 * @return {number}
 */
proto.unittest_drop_unknown_fields.FooWithExtraFields.prototype.getExtraInt32Value = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.unittest_drop_unknown_fields.FooWithExtraFields} returns this
 */
proto.unittest_drop_unknown_fields.FooWithExtraFields.prototype.setExtraInt32Value = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.unittest_drop_unknown_fields);
