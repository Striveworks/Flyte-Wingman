// source: google/protobuf/unittest_embed_optimize_for.proto
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

var google_protobuf_unittest_optimize_for_pb = require('google-protobuf/google/protobuf/unittest_optimize_for_pb.js');
goog.object.extend(proto, google_protobuf_unittest_optimize_for_pb);
goog.exportSymbol('proto.protobuf_unittest.TestEmbedOptimizedForSize', null, global);
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
proto.protobuf_unittest.TestEmbedOptimizedForSize = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protobuf_unittest.TestEmbedOptimizedForSize.repeatedFields_, null);
};
goog.inherits(proto.protobuf_unittest.TestEmbedOptimizedForSize, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestEmbedOptimizedForSize.displayName = 'proto.protobuf_unittest.TestEmbedOptimizedForSize';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protobuf_unittest.TestEmbedOptimizedForSize.repeatedFields_ = [2];



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
proto.protobuf_unittest.TestEmbedOptimizedForSize.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestEmbedOptimizedForSize.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestEmbedOptimizedForSize} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestEmbedOptimizedForSize.toObject = function(includeInstance, msg) {
  var f, obj = {
    optionalMessage: (f = msg.getOptionalMessage()) && google_protobuf_unittest_optimize_for_pb.TestOptimizedForSize.toObject(includeInstance, f),
    repeatedMessageList: jspb.Message.toObjectList(msg.getRepeatedMessageList(),
    google_protobuf_unittest_optimize_for_pb.TestOptimizedForSize.toObject, includeInstance)
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
 * @return {!proto.protobuf_unittest.TestEmbedOptimizedForSize}
 */
proto.protobuf_unittest.TestEmbedOptimizedForSize.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestEmbedOptimizedForSize;
  return proto.protobuf_unittest.TestEmbedOptimizedForSize.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestEmbedOptimizedForSize} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestEmbedOptimizedForSize}
 */
proto.protobuf_unittest.TestEmbedOptimizedForSize.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_unittest_optimize_for_pb.TestOptimizedForSize;
      reader.readMessage(value,google_protobuf_unittest_optimize_for_pb.TestOptimizedForSize.deserializeBinaryFromReader);
      msg.setOptionalMessage(value);
      break;
    case 2:
      var value = new google_protobuf_unittest_optimize_for_pb.TestOptimizedForSize;
      reader.readMessage(value,google_protobuf_unittest_optimize_for_pb.TestOptimizedForSize.deserializeBinaryFromReader);
      msg.addRepeatedMessage(value);
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
proto.protobuf_unittest.TestEmbedOptimizedForSize.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestEmbedOptimizedForSize.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestEmbedOptimizedForSize} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestEmbedOptimizedForSize.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptionalMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_unittest_optimize_for_pb.TestOptimizedForSize.serializeBinaryToWriter
    );
  }
  f = message.getRepeatedMessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      google_protobuf_unittest_optimize_for_pb.TestOptimizedForSize.serializeBinaryToWriter
    );
  }
};


/**
 * optional TestOptimizedForSize optional_message = 1;
 * @return {?proto.protobuf_unittest.TestOptimizedForSize}
 */
proto.protobuf_unittest.TestEmbedOptimizedForSize.prototype.getOptionalMessage = function() {
  return /** @type{?proto.protobuf_unittest.TestOptimizedForSize} */ (
    jspb.Message.getWrapperField(this, google_protobuf_unittest_optimize_for_pb.TestOptimizedForSize, 1));
};


/**
 * @param {?proto.protobuf_unittest.TestOptimizedForSize|undefined} value
 * @return {!proto.protobuf_unittest.TestEmbedOptimizedForSize} returns this
*/
proto.protobuf_unittest.TestEmbedOptimizedForSize.prototype.setOptionalMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestEmbedOptimizedForSize} returns this
 */
proto.protobuf_unittest.TestEmbedOptimizedForSize.prototype.clearOptionalMessage = function() {
  return this.setOptionalMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestEmbedOptimizedForSize.prototype.hasOptionalMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated TestOptimizedForSize repeated_message = 2;
 * @return {!Array<!proto.protobuf_unittest.TestOptimizedForSize>}
 */
proto.protobuf_unittest.TestEmbedOptimizedForSize.prototype.getRepeatedMessageList = function() {
  return /** @type{!Array<!proto.protobuf_unittest.TestOptimizedForSize>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_unittest_optimize_for_pb.TestOptimizedForSize, 2));
};


/**
 * @param {!Array<!proto.protobuf_unittest.TestOptimizedForSize>} value
 * @return {!proto.protobuf_unittest.TestEmbedOptimizedForSize} returns this
*/
proto.protobuf_unittest.TestEmbedOptimizedForSize.prototype.setRepeatedMessageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protobuf_unittest.TestOptimizedForSize=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestOptimizedForSize}
 */
proto.protobuf_unittest.TestEmbedOptimizedForSize.prototype.addRepeatedMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protobuf_unittest.TestOptimizedForSize, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestEmbedOptimizedForSize} returns this
 */
proto.protobuf_unittest.TestEmbedOptimizedForSize.prototype.clearRepeatedMessageList = function() {
  return this.setRepeatedMessageList([]);
};


goog.object.extend(exports, proto.protobuf_unittest);