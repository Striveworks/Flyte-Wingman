// source: google/protobuf/unittest_optimize_for.proto
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

var google_protobuf_unittest_pb = require('google-protobuf/google/protobuf/unittest_pb.js');
goog.object.extend(proto, google_protobuf_unittest_pb);
goog.exportSymbol('proto.protobuf_unittest.TestOptimizedForSize', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestOptimizedForSize.FooCase', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestOptionalOptimizedForSize', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestRequiredOptimizedForSize', null, global);
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
proto.protobuf_unittest.TestOptimizedForSize = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 20, null, proto.protobuf_unittest.TestOptimizedForSize.oneofGroups_);
};
goog.inherits(proto.protobuf_unittest.TestOptimizedForSize, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestOptimizedForSize.displayName = 'proto.protobuf_unittest.TestOptimizedForSize';
}

/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldInfo>}
 */
proto.protobuf_unittest.TestOptimizedForSize.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.protobuf_unittest.TestOptimizedForSize.extensionsBinary = {};

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
proto.protobuf_unittest.TestRequiredOptimizedForSize = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestRequiredOptimizedForSize, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestRequiredOptimizedForSize.displayName = 'proto.protobuf_unittest.TestRequiredOptimizedForSize';
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
proto.protobuf_unittest.TestOptionalOptimizedForSize = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestOptionalOptimizedForSize, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestOptionalOptimizedForSize.displayName = 'proto.protobuf_unittest.TestOptionalOptimizedForSize';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.protobuf_unittest.TestOptimizedForSize.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.protobuf_unittest.TestOptimizedForSize.FooCase = {
  FOO_NOT_SET: 0,
  INTEGER_FIELD: 2,
  STRING_FIELD: 3
};

/**
 * @return {proto.protobuf_unittest.TestOptimizedForSize.FooCase}
 */
proto.protobuf_unittest.TestOptimizedForSize.prototype.getFooCase = function() {
  return /** @type {proto.protobuf_unittest.TestOptimizedForSize.FooCase} */(jspb.Message.computeOneofCase(this, proto.protobuf_unittest.TestOptimizedForSize.oneofGroups_[0]));
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
proto.protobuf_unittest.TestOptimizedForSize.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestOptimizedForSize.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestOptimizedForSize} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestOptimizedForSize.toObject = function(includeInstance, msg) {
  var f, obj = {
    i: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    msg: (f = msg.getMsg()) && google_protobuf_unittest_pb.ForeignMessage.toObject(includeInstance, f),
    integerField: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    stringField: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.protobuf_unittest.TestOptimizedForSize.extensions, proto.protobuf_unittest.TestOptimizedForSize.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protobuf_unittest.TestOptimizedForSize}
 */
proto.protobuf_unittest.TestOptimizedForSize.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestOptimizedForSize;
  return proto.protobuf_unittest.TestOptimizedForSize.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestOptimizedForSize} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestOptimizedForSize}
 */
proto.protobuf_unittest.TestOptimizedForSize.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setI(value);
      break;
    case 19:
      var value = new google_protobuf_unittest_pb.ForeignMessage;
      reader.readMessage(value,google_protobuf_unittest_pb.ForeignMessage.deserializeBinaryFromReader);
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIntegerField(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringField(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.protobuf_unittest.TestOptimizedForSize.extensionsBinary,
        proto.protobuf_unittest.TestOptimizedForSize.prototype.getExtension,
        proto.protobuf_unittest.TestOptimizedForSize.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protobuf_unittest.TestOptimizedForSize.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestOptimizedForSize.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestOptimizedForSize} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestOptimizedForSize.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_protobuf_unittest_pb.ForeignMessage.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.protobuf_unittest.TestOptimizedForSize.extensionsBinary, proto.protobuf_unittest.TestOptimizedForSize.prototype.getExtension);
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `testExtension`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.TestOptimizedForSize.testExtension = new jspb.ExtensionFieldInfo(
    1234,
    {testExtension: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestOptimizedForSize.extensionsBinary[1234] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.TestOptimizedForSize.testExtension,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestOptimizedForSize.extensions[1234] = proto.protobuf_unittest.TestOptimizedForSize.testExtension;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `testExtension2`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.TestRequiredOptimizedForSize>}
 */
proto.protobuf_unittest.TestOptimizedForSize.testExtension2 = new jspb.ExtensionFieldInfo(
    1235,
    {testExtension2: 0},
    proto.protobuf_unittest.TestRequiredOptimizedForSize,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.TestRequiredOptimizedForSize.toObject),
    0);

proto.protobuf_unittest.TestOptimizedForSize.extensionsBinary[1235] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.TestOptimizedForSize.testExtension2,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.TestRequiredOptimizedForSize.serializeBinaryToWriter,
    proto.protobuf_unittest.TestRequiredOptimizedForSize.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestOptimizedForSize.extensions[1235] = proto.protobuf_unittest.TestOptimizedForSize.testExtension2;

/**
 * optional int32 i = 1;
 * @return {number}
 */
proto.protobuf_unittest.TestOptimizedForSize.prototype.getI = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestOptimizedForSize} returns this
 */
proto.protobuf_unittest.TestOptimizedForSize.prototype.setI = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestOptimizedForSize} returns this
 */
proto.protobuf_unittest.TestOptimizedForSize.prototype.clearI = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestOptimizedForSize.prototype.hasI = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ForeignMessage msg = 19;
 * @return {?proto.protobuf_unittest.ForeignMessage}
 */
proto.protobuf_unittest.TestOptimizedForSize.prototype.getMsg = function() {
  return /** @type{?proto.protobuf_unittest.ForeignMessage} */ (
    jspb.Message.getWrapperField(this, google_protobuf_unittest_pb.ForeignMessage, 19));
};


/**
 * @param {?proto.protobuf_unittest.ForeignMessage|undefined} value
 * @return {!proto.protobuf_unittest.TestOptimizedForSize} returns this
*/
proto.protobuf_unittest.TestOptimizedForSize.prototype.setMsg = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestOptimizedForSize} returns this
 */
proto.protobuf_unittest.TestOptimizedForSize.prototype.clearMsg = function() {
  return this.setMsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestOptimizedForSize.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional int32 integer_field = 2;
 * @return {number}
 */
proto.protobuf_unittest.TestOptimizedForSize.prototype.getIntegerField = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestOptimizedForSize} returns this
 */
proto.protobuf_unittest.TestOptimizedForSize.prototype.setIntegerField = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.protobuf_unittest.TestOptimizedForSize.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestOptimizedForSize} returns this
 */
proto.protobuf_unittest.TestOptimizedForSize.prototype.clearIntegerField = function() {
  return jspb.Message.setOneofField(this, 2, proto.protobuf_unittest.TestOptimizedForSize.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestOptimizedForSize.prototype.hasIntegerField = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string string_field = 3;
 * @return {string}
 */
proto.protobuf_unittest.TestOptimizedForSize.prototype.getStringField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protobuf_unittest.TestOptimizedForSize} returns this
 */
proto.protobuf_unittest.TestOptimizedForSize.prototype.setStringField = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.protobuf_unittest.TestOptimizedForSize.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestOptimizedForSize} returns this
 */
proto.protobuf_unittest.TestOptimizedForSize.prototype.clearStringField = function() {
  return jspb.Message.setOneofField(this, 3, proto.protobuf_unittest.TestOptimizedForSize.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestOptimizedForSize.prototype.hasStringField = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `testExtension`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.TestOptimizedForSize.testExtension = new jspb.ExtensionFieldInfo(
    1234,
    {testExtension: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestOptimizedForSize.extensionsBinary[1234] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.TestOptimizedForSize.testExtension,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestOptimizedForSize.extensions[1234] = proto.protobuf_unittest.TestOptimizedForSize.testExtension;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `testExtension2`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.TestRequiredOptimizedForSize>}
 */
proto.protobuf_unittest.TestOptimizedForSize.testExtension2 = new jspb.ExtensionFieldInfo(
    1235,
    {testExtension2: 0},
    proto.protobuf_unittest.TestRequiredOptimizedForSize,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.TestRequiredOptimizedForSize.toObject),
    0);

proto.protobuf_unittest.TestOptimizedForSize.extensionsBinary[1235] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.TestOptimizedForSize.testExtension2,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.TestRequiredOptimizedForSize.serializeBinaryToWriter,
    proto.protobuf_unittest.TestRequiredOptimizedForSize.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestOptimizedForSize.extensions[1235] = proto.protobuf_unittest.TestOptimizedForSize.testExtension2;




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
proto.protobuf_unittest.TestRequiredOptimizedForSize.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestRequiredOptimizedForSize.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestRequiredOptimizedForSize} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestRequiredOptimizedForSize.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.TestRequiredOptimizedForSize}
 */
proto.protobuf_unittest.TestRequiredOptimizedForSize.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestRequiredOptimizedForSize;
  return proto.protobuf_unittest.TestRequiredOptimizedForSize.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestRequiredOptimizedForSize} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestRequiredOptimizedForSize}
 */
proto.protobuf_unittest.TestRequiredOptimizedForSize.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
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
proto.protobuf_unittest.TestRequiredOptimizedForSize.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestRequiredOptimizedForSize.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestRequiredOptimizedForSize} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestRequiredOptimizedForSize.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * required int32 x = 1;
 * @return {number}
 */
proto.protobuf_unittest.TestRequiredOptimizedForSize.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestRequiredOptimizedForSize} returns this
 */
proto.protobuf_unittest.TestRequiredOptimizedForSize.prototype.setX = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestRequiredOptimizedForSize} returns this
 */
proto.protobuf_unittest.TestRequiredOptimizedForSize.prototype.clearX = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestRequiredOptimizedForSize.prototype.hasX = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.protobuf_unittest.TestOptionalOptimizedForSize.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestOptionalOptimizedForSize.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestOptionalOptimizedForSize} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestOptionalOptimizedForSize.toObject = function(includeInstance, msg) {
  var f, obj = {
    o: (f = msg.getO()) && proto.protobuf_unittest.TestRequiredOptimizedForSize.toObject(includeInstance, f)
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
 * @return {!proto.protobuf_unittest.TestOptionalOptimizedForSize}
 */
proto.protobuf_unittest.TestOptionalOptimizedForSize.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestOptionalOptimizedForSize;
  return proto.protobuf_unittest.TestOptionalOptimizedForSize.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestOptionalOptimizedForSize} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestOptionalOptimizedForSize}
 */
proto.protobuf_unittest.TestOptionalOptimizedForSize.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protobuf_unittest.TestRequiredOptimizedForSize;
      reader.readMessage(value,proto.protobuf_unittest.TestRequiredOptimizedForSize.deserializeBinaryFromReader);
      msg.setO(value);
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
proto.protobuf_unittest.TestOptionalOptimizedForSize.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestOptionalOptimizedForSize.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestOptionalOptimizedForSize} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestOptionalOptimizedForSize.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getO();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protobuf_unittest.TestRequiredOptimizedForSize.serializeBinaryToWriter
    );
  }
};


/**
 * optional TestRequiredOptimizedForSize o = 1;
 * @return {?proto.protobuf_unittest.TestRequiredOptimizedForSize}
 */
proto.protobuf_unittest.TestOptionalOptimizedForSize.prototype.getO = function() {
  return /** @type{?proto.protobuf_unittest.TestRequiredOptimizedForSize} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.TestRequiredOptimizedForSize, 1));
};


/**
 * @param {?proto.protobuf_unittest.TestRequiredOptimizedForSize|undefined} value
 * @return {!proto.protobuf_unittest.TestOptionalOptimizedForSize} returns this
*/
proto.protobuf_unittest.TestOptionalOptimizedForSize.prototype.setO = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestOptionalOptimizedForSize} returns this
 */
proto.protobuf_unittest.TestOptionalOptimizedForSize.prototype.clearO = function() {
  return this.setO(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestOptionalOptimizedForSize.prototype.hasO = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.protobuf_unittest);
