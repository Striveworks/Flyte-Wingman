// source: flyteidl/core/catalog.proto
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

var flyteidl_core_identifier_pb = require('../../flyteidl/core/identifier_pb.js');
goog.object.extend(proto, flyteidl_core_identifier_pb);
goog.exportSymbol('proto.flyteidl.core.CatalogArtifactTag', null, global);
goog.exportSymbol('proto.flyteidl.core.CatalogCacheStatus', null, global);
goog.exportSymbol('proto.flyteidl.core.CatalogMetadata', null, global);
goog.exportSymbol('proto.flyteidl.core.CatalogMetadata.SourceExecutionCase', null, global);
goog.exportSymbol('proto.flyteidl.core.CatalogReservation', null, global);
goog.exportSymbol('proto.flyteidl.core.CatalogReservation.Status', null, global);
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
proto.flyteidl.core.CatalogArtifactTag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.core.CatalogArtifactTag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.CatalogArtifactTag.displayName = 'proto.flyteidl.core.CatalogArtifactTag';
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
proto.flyteidl.core.CatalogMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.flyteidl.core.CatalogMetadata.oneofGroups_);
};
goog.inherits(proto.flyteidl.core.CatalogMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.CatalogMetadata.displayName = 'proto.flyteidl.core.CatalogMetadata';
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
proto.flyteidl.core.CatalogReservation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.core.CatalogReservation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.CatalogReservation.displayName = 'proto.flyteidl.core.CatalogReservation';
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
proto.flyteidl.core.CatalogArtifactTag.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.CatalogArtifactTag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.CatalogArtifactTag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.CatalogArtifactTag.toObject = function(includeInstance, msg) {
  var f, obj = {
    artifactId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.flyteidl.core.CatalogArtifactTag}
 */
proto.flyteidl.core.CatalogArtifactTag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.CatalogArtifactTag;
  return proto.flyteidl.core.CatalogArtifactTag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.CatalogArtifactTag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.CatalogArtifactTag}
 */
proto.flyteidl.core.CatalogArtifactTag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setArtifactId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.flyteidl.core.CatalogArtifactTag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.CatalogArtifactTag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.CatalogArtifactTag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.CatalogArtifactTag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArtifactId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string artifact_id = 1;
 * @return {string}
 */
proto.flyteidl.core.CatalogArtifactTag.prototype.getArtifactId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.core.CatalogArtifactTag} returns this
 */
proto.flyteidl.core.CatalogArtifactTag.prototype.setArtifactId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.flyteidl.core.CatalogArtifactTag.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.core.CatalogArtifactTag} returns this
 */
proto.flyteidl.core.CatalogArtifactTag.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.flyteidl.core.CatalogMetadata.oneofGroups_ = [[3]];

/**
 * @enum {number}
 */
proto.flyteidl.core.CatalogMetadata.SourceExecutionCase = {
  SOURCE_EXECUTION_NOT_SET: 0,
  SOURCE_TASK_EXECUTION: 3
};

/**
 * @return {proto.flyteidl.core.CatalogMetadata.SourceExecutionCase}
 */
proto.flyteidl.core.CatalogMetadata.prototype.getSourceExecutionCase = function() {
  return /** @type {proto.flyteidl.core.CatalogMetadata.SourceExecutionCase} */(jspb.Message.computeOneofCase(this, proto.flyteidl.core.CatalogMetadata.oneofGroups_[0]));
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
proto.flyteidl.core.CatalogMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.CatalogMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.CatalogMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.CatalogMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    datasetId: (f = msg.getDatasetId()) && flyteidl_core_identifier_pb.Identifier.toObject(includeInstance, f),
    artifactTag: (f = msg.getArtifactTag()) && proto.flyteidl.core.CatalogArtifactTag.toObject(includeInstance, f),
    sourceTaskExecution: (f = msg.getSourceTaskExecution()) && flyteidl_core_identifier_pb.TaskExecutionIdentifier.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.core.CatalogMetadata}
 */
proto.flyteidl.core.CatalogMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.CatalogMetadata;
  return proto.flyteidl.core.CatalogMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.CatalogMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.CatalogMetadata}
 */
proto.flyteidl.core.CatalogMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new flyteidl_core_identifier_pb.Identifier;
      reader.readMessage(value,flyteidl_core_identifier_pb.Identifier.deserializeBinaryFromReader);
      msg.setDatasetId(value);
      break;
    case 2:
      var value = new proto.flyteidl.core.CatalogArtifactTag;
      reader.readMessage(value,proto.flyteidl.core.CatalogArtifactTag.deserializeBinaryFromReader);
      msg.setArtifactTag(value);
      break;
    case 3:
      var value = new flyteidl_core_identifier_pb.TaskExecutionIdentifier;
      reader.readMessage(value,flyteidl_core_identifier_pb.TaskExecutionIdentifier.deserializeBinaryFromReader);
      msg.setSourceTaskExecution(value);
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
proto.flyteidl.core.CatalogMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.CatalogMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.CatalogMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.CatalogMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatasetId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      flyteidl_core_identifier_pb.Identifier.serializeBinaryToWriter
    );
  }
  f = message.getArtifactTag();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.flyteidl.core.CatalogArtifactTag.serializeBinaryToWriter
    );
  }
  f = message.getSourceTaskExecution();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      flyteidl_core_identifier_pb.TaskExecutionIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional Identifier dataset_id = 1;
 * @return {?proto.flyteidl.core.Identifier}
 */
proto.flyteidl.core.CatalogMetadata.prototype.getDatasetId = function() {
  return /** @type{?proto.flyteidl.core.Identifier} */ (
    jspb.Message.getWrapperField(this, flyteidl_core_identifier_pb.Identifier, 1));
};


/**
 * @param {?proto.flyteidl.core.Identifier|undefined} value
 * @return {!proto.flyteidl.core.CatalogMetadata} returns this
*/
proto.flyteidl.core.CatalogMetadata.prototype.setDatasetId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.CatalogMetadata} returns this
 */
proto.flyteidl.core.CatalogMetadata.prototype.clearDatasetId = function() {
  return this.setDatasetId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.CatalogMetadata.prototype.hasDatasetId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CatalogArtifactTag artifact_tag = 2;
 * @return {?proto.flyteidl.core.CatalogArtifactTag}
 */
proto.flyteidl.core.CatalogMetadata.prototype.getArtifactTag = function() {
  return /** @type{?proto.flyteidl.core.CatalogArtifactTag} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.CatalogArtifactTag, 2));
};


/**
 * @param {?proto.flyteidl.core.CatalogArtifactTag|undefined} value
 * @return {!proto.flyteidl.core.CatalogMetadata} returns this
*/
proto.flyteidl.core.CatalogMetadata.prototype.setArtifactTag = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.CatalogMetadata} returns this
 */
proto.flyteidl.core.CatalogMetadata.prototype.clearArtifactTag = function() {
  return this.setArtifactTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.CatalogMetadata.prototype.hasArtifactTag = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TaskExecutionIdentifier source_task_execution = 3;
 * @return {?proto.flyteidl.core.TaskExecutionIdentifier}
 */
proto.flyteidl.core.CatalogMetadata.prototype.getSourceTaskExecution = function() {
  return /** @type{?proto.flyteidl.core.TaskExecutionIdentifier} */ (
    jspb.Message.getWrapperField(this, flyteidl_core_identifier_pb.TaskExecutionIdentifier, 3));
};


/**
 * @param {?proto.flyteidl.core.TaskExecutionIdentifier|undefined} value
 * @return {!proto.flyteidl.core.CatalogMetadata} returns this
*/
proto.flyteidl.core.CatalogMetadata.prototype.setSourceTaskExecution = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.flyteidl.core.CatalogMetadata.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.CatalogMetadata} returns this
 */
proto.flyteidl.core.CatalogMetadata.prototype.clearSourceTaskExecution = function() {
  return this.setSourceTaskExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.CatalogMetadata.prototype.hasSourceTaskExecution = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.flyteidl.core.CatalogReservation.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.CatalogReservation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.CatalogReservation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.CatalogReservation.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.flyteidl.core.CatalogReservation}
 */
proto.flyteidl.core.CatalogReservation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.CatalogReservation;
  return proto.flyteidl.core.CatalogReservation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.CatalogReservation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.CatalogReservation}
 */
proto.flyteidl.core.CatalogReservation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.flyteidl.core.CatalogReservation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.CatalogReservation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.CatalogReservation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.CatalogReservation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.flyteidl.core.CatalogReservation.Status = {
  RESERVATION_DISABLED: 0,
  RESERVATION_ACQUIRED: 1,
  RESERVATION_EXISTS: 2,
  RESERVATION_RELEASED: 3,
  RESERVATION_FAILURE: 4
};

/**
 * @enum {number}
 */
proto.flyteidl.core.CatalogCacheStatus = {
  CACHE_DISABLED: 0,
  CACHE_MISS: 1,
  CACHE_HIT: 2,
  CACHE_POPULATED: 3,
  CACHE_LOOKUP_FAILURE: 4,
  CACHE_PUT_FAILURE: 5
};

goog.object.extend(exports, proto.flyteidl.core);
