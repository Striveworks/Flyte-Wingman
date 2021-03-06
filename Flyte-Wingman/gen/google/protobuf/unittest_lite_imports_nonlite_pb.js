// source: google/protobuf/unittest_lite_imports_nonlite.proto
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
goog.exportSymbol('proto.protobuf_unittest.TestLiteImportsNonlite', null, global);
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
proto.protobuf_unittest.TestLiteImportsNonlite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestLiteImportsNonlite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestLiteImportsNonlite.displayName = 'proto.protobuf_unittest.TestLiteImportsNonlite';
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
proto.protobuf_unittest.TestLiteImportsNonlite.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestLiteImportsNonlite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestLiteImportsNonlite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestLiteImportsNonlite.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: (f = msg.getMessage()) && google_protobuf_unittest_pb.TestAllTypes.toObject(includeInstance, f),
    messageWithRequired: (f = msg.getMessageWithRequired()) && google_protobuf_unittest_pb.TestRequired.toObject(includeInstance, f)
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
 * @return {!proto.protobuf_unittest.TestLiteImportsNonlite}
 */
proto.protobuf_unittest.TestLiteImportsNonlite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestLiteImportsNonlite;
  return proto.protobuf_unittest.TestLiteImportsNonlite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestLiteImportsNonlite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestLiteImportsNonlite}
 */
proto.protobuf_unittest.TestLiteImportsNonlite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_unittest_pb.TestAllTypes;
      reader.readMessage(value,google_protobuf_unittest_pb.TestAllTypes.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 2:
      var value = new google_protobuf_unittest_pb.TestRequired;
      reader.readMessage(value,google_protobuf_unittest_pb.TestRequired.deserializeBinaryFromReader);
      msg.setMessageWithRequired(value);
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
proto.protobuf_unittest.TestLiteImportsNonlite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestLiteImportsNonlite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestLiteImportsNonlite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestLiteImportsNonlite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_unittest_pb.TestAllTypes.serializeBinaryToWriter
    );
  }
  f = message.getMessageWithRequired();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_unittest_pb.TestRequired.serializeBinaryToWriter
    );
  }
};


/**
 * optional TestAllTypes message = 1;
 * @return {?proto.protobuf_unittest.TestAllTypes}
 */
proto.protobuf_unittest.TestLiteImportsNonlite.prototype.getMessage = function() {
  return /** @type{?proto.protobuf_unittest.TestAllTypes} */ (
    jspb.Message.getWrapperField(this, google_protobuf_unittest_pb.TestAllTypes, 1));
};


/**
 * @param {?proto.protobuf_unittest.TestAllTypes|undefined} value
 * @return {!proto.protobuf_unittest.TestLiteImportsNonlite} returns this
*/
proto.protobuf_unittest.TestLiteImportsNonlite.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestLiteImportsNonlite} returns this
 */
proto.protobuf_unittest.TestLiteImportsNonlite.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestLiteImportsNonlite.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TestRequired message_with_required = 2;
 * @return {?proto.protobuf_unittest.TestRequired}
 */
proto.protobuf_unittest.TestLiteImportsNonlite.prototype.getMessageWithRequired = function() {
  return /** @type{?proto.protobuf_unittest.TestRequired} */ (
    jspb.Message.getWrapperField(this, google_protobuf_unittest_pb.TestRequired, 2));
};


/**
 * @param {?proto.protobuf_unittest.TestRequired|undefined} value
 * @return {!proto.protobuf_unittest.TestLiteImportsNonlite} returns this
*/
proto.protobuf_unittest.TestLiteImportsNonlite.prototype.setMessageWithRequired = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestLiteImportsNonlite} returns this
 */
proto.protobuf_unittest.TestLiteImportsNonlite.prototype.clearMessageWithRequired = function() {
  return this.setMessageWithRequired(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestLiteImportsNonlite.prototype.hasMessageWithRequired = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.protobuf_unittest);
