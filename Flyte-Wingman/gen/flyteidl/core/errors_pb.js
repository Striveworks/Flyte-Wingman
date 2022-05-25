// source: flyteidl/core/errors.proto
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

var flyteidl_core_execution_pb = require('../../flyteidl/core/execution_pb.js');
goog.object.extend(proto, flyteidl_core_execution_pb);
goog.exportSymbol('proto.flyteidl.core.ContainerError', null, global);
goog.exportSymbol('proto.flyteidl.core.ContainerError.Kind', null, global);
goog.exportSymbol('proto.flyteidl.core.ErrorDocument', null, global);
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
proto.flyteidl.core.ContainerError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.core.ContainerError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.ContainerError.displayName = 'proto.flyteidl.core.ContainerError';
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
proto.flyteidl.core.ErrorDocument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.core.ErrorDocument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.ErrorDocument.displayName = 'proto.flyteidl.core.ErrorDocument';
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
proto.flyteidl.core.ContainerError.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.ContainerError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.ContainerError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.ContainerError.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 3, 0),
    origin: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.flyteidl.core.ContainerError}
 */
proto.flyteidl.core.ContainerError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.ContainerError;
  return proto.flyteidl.core.ContainerError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.ContainerError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.ContainerError}
 */
proto.flyteidl.core.ContainerError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {!proto.flyteidl.core.ContainerError.Kind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 4:
      var value = /** @type {!proto.flyteidl.core.ExecutionError.ErrorKind} */ (reader.readEnum());
      msg.setOrigin(value);
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
proto.flyteidl.core.ContainerError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.ContainerError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.ContainerError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.ContainerError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getOrigin();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.flyteidl.core.ContainerError.Kind = {
  NON_RECOVERABLE: 0,
  RECOVERABLE: 1
};

/**
 * optional string code = 1;
 * @return {string}
 */
proto.flyteidl.core.ContainerError.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.core.ContainerError} returns this
 */
proto.flyteidl.core.ContainerError.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.flyteidl.core.ContainerError.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.core.ContainerError} returns this
 */
proto.flyteidl.core.ContainerError.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Kind kind = 3;
 * @return {!proto.flyteidl.core.ContainerError.Kind}
 */
proto.flyteidl.core.ContainerError.prototype.getKind = function() {
  return /** @type {!proto.flyteidl.core.ContainerError.Kind} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.flyteidl.core.ContainerError.Kind} value
 * @return {!proto.flyteidl.core.ContainerError} returns this
 */
proto.flyteidl.core.ContainerError.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional ExecutionError.ErrorKind origin = 4;
 * @return {!proto.flyteidl.core.ExecutionError.ErrorKind}
 */
proto.flyteidl.core.ContainerError.prototype.getOrigin = function() {
  return /** @type {!proto.flyteidl.core.ExecutionError.ErrorKind} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.flyteidl.core.ExecutionError.ErrorKind} value
 * @return {!proto.flyteidl.core.ContainerError} returns this
 */
proto.flyteidl.core.ContainerError.prototype.setOrigin = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
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
proto.flyteidl.core.ErrorDocument.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.ErrorDocument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.ErrorDocument} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.ErrorDocument.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && proto.flyteidl.core.ContainerError.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.core.ErrorDocument}
 */
proto.flyteidl.core.ErrorDocument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.ErrorDocument;
  return proto.flyteidl.core.ErrorDocument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.ErrorDocument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.ErrorDocument}
 */
proto.flyteidl.core.ErrorDocument.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.flyteidl.core.ContainerError;
      reader.readMessage(value,proto.flyteidl.core.ContainerError.deserializeBinaryFromReader);
      msg.setError(value);
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
proto.flyteidl.core.ErrorDocument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.ErrorDocument.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.ErrorDocument} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.ErrorDocument.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.flyteidl.core.ContainerError.serializeBinaryToWriter
    );
  }
};


/**
 * optional ContainerError error = 1;
 * @return {?proto.flyteidl.core.ContainerError}
 */
proto.flyteidl.core.ErrorDocument.prototype.getError = function() {
  return /** @type{?proto.flyteidl.core.ContainerError} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.ContainerError, 1));
};


/**
 * @param {?proto.flyteidl.core.ContainerError|undefined} value
 * @return {!proto.flyteidl.core.ErrorDocument} returns this
*/
proto.flyteidl.core.ErrorDocument.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.ErrorDocument} returns this
 */
proto.flyteidl.core.ErrorDocument.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.ErrorDocument.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.flyteidl.core);
