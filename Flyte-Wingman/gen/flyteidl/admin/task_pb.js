// source: flyteidl/admin/task.proto
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
var flyteidl_core_tasks_pb = require('../../flyteidl/core/tasks_pb.js');
goog.object.extend(proto, flyteidl_core_tasks_pb);
var flyteidl_core_compiler_pb = require('../../flyteidl/core/compiler_pb.js');
goog.object.extend(proto, flyteidl_core_compiler_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.flyteidl.admin.Task', null, global);
goog.exportSymbol('proto.flyteidl.admin.TaskClosure', null, global);
goog.exportSymbol('proto.flyteidl.admin.TaskCreateRequest', null, global);
goog.exportSymbol('proto.flyteidl.admin.TaskCreateResponse', null, global);
goog.exportSymbol('proto.flyteidl.admin.TaskList', null, global);
goog.exportSymbol('proto.flyteidl.admin.TaskSpec', null, global);
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
proto.flyteidl.admin.TaskCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.admin.TaskCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.admin.TaskCreateRequest.displayName = 'proto.flyteidl.admin.TaskCreateRequest';
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
proto.flyteidl.admin.TaskCreateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.admin.TaskCreateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.admin.TaskCreateResponse.displayName = 'proto.flyteidl.admin.TaskCreateResponse';
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
proto.flyteidl.admin.Task = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.admin.Task, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.admin.Task.displayName = 'proto.flyteidl.admin.Task';
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
proto.flyteidl.admin.TaskList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.flyteidl.admin.TaskList.repeatedFields_, null);
};
goog.inherits(proto.flyteidl.admin.TaskList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.admin.TaskList.displayName = 'proto.flyteidl.admin.TaskList';
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
proto.flyteidl.admin.TaskSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.admin.TaskSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.admin.TaskSpec.displayName = 'proto.flyteidl.admin.TaskSpec';
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
proto.flyteidl.admin.TaskClosure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.admin.TaskClosure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.admin.TaskClosure.displayName = 'proto.flyteidl.admin.TaskClosure';
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
proto.flyteidl.admin.TaskCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.admin.TaskCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.admin.TaskCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.TaskCreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && flyteidl_core_identifier_pb.Identifier.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.flyteidl.admin.TaskSpec.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.admin.TaskCreateRequest}
 */
proto.flyteidl.admin.TaskCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.admin.TaskCreateRequest;
  return proto.flyteidl.admin.TaskCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.admin.TaskCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.admin.TaskCreateRequest}
 */
proto.flyteidl.admin.TaskCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new flyteidl_core_identifier_pb.Identifier;
      reader.readMessage(value,flyteidl_core_identifier_pb.Identifier.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto.flyteidl.admin.TaskSpec;
      reader.readMessage(value,proto.flyteidl.admin.TaskSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
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
proto.flyteidl.admin.TaskCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.admin.TaskCreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.admin.TaskCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.TaskCreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      flyteidl_core_identifier_pb.Identifier.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.flyteidl.admin.TaskSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional flyteidl.core.Identifier id = 1;
 * @return {?proto.flyteidl.core.Identifier}
 */
proto.flyteidl.admin.TaskCreateRequest.prototype.getId = function() {
  return /** @type{?proto.flyteidl.core.Identifier} */ (
    jspb.Message.getWrapperField(this, flyteidl_core_identifier_pb.Identifier, 1));
};


/**
 * @param {?proto.flyteidl.core.Identifier|undefined} value
 * @return {!proto.flyteidl.admin.TaskCreateRequest} returns this
*/
proto.flyteidl.admin.TaskCreateRequest.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.TaskCreateRequest} returns this
 */
proto.flyteidl.admin.TaskCreateRequest.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.TaskCreateRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TaskSpec spec = 2;
 * @return {?proto.flyteidl.admin.TaskSpec}
 */
proto.flyteidl.admin.TaskCreateRequest.prototype.getSpec = function() {
  return /** @type{?proto.flyteidl.admin.TaskSpec} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.admin.TaskSpec, 2));
};


/**
 * @param {?proto.flyteidl.admin.TaskSpec|undefined} value
 * @return {!proto.flyteidl.admin.TaskCreateRequest} returns this
*/
proto.flyteidl.admin.TaskCreateRequest.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.TaskCreateRequest} returns this
 */
proto.flyteidl.admin.TaskCreateRequest.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.TaskCreateRequest.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.flyteidl.admin.TaskCreateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.admin.TaskCreateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.admin.TaskCreateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.TaskCreateResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.flyteidl.admin.TaskCreateResponse}
 */
proto.flyteidl.admin.TaskCreateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.admin.TaskCreateResponse;
  return proto.flyteidl.admin.TaskCreateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.admin.TaskCreateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.admin.TaskCreateResponse}
 */
proto.flyteidl.admin.TaskCreateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.flyteidl.admin.TaskCreateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.admin.TaskCreateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.admin.TaskCreateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.TaskCreateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.flyteidl.admin.Task.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.admin.Task.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.admin.Task} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.Task.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && flyteidl_core_identifier_pb.Identifier.toObject(includeInstance, f),
    closure: (f = msg.getClosure()) && proto.flyteidl.admin.TaskClosure.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.admin.Task}
 */
proto.flyteidl.admin.Task.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.admin.Task;
  return proto.flyteidl.admin.Task.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.admin.Task} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.admin.Task}
 */
proto.flyteidl.admin.Task.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new flyteidl_core_identifier_pb.Identifier;
      reader.readMessage(value,flyteidl_core_identifier_pb.Identifier.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto.flyteidl.admin.TaskClosure;
      reader.readMessage(value,proto.flyteidl.admin.TaskClosure.deserializeBinaryFromReader);
      msg.setClosure(value);
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
proto.flyteidl.admin.Task.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.admin.Task.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.admin.Task} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.Task.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      flyteidl_core_identifier_pb.Identifier.serializeBinaryToWriter
    );
  }
  f = message.getClosure();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.flyteidl.admin.TaskClosure.serializeBinaryToWriter
    );
  }
};


/**
 * optional flyteidl.core.Identifier id = 1;
 * @return {?proto.flyteidl.core.Identifier}
 */
proto.flyteidl.admin.Task.prototype.getId = function() {
  return /** @type{?proto.flyteidl.core.Identifier} */ (
    jspb.Message.getWrapperField(this, flyteidl_core_identifier_pb.Identifier, 1));
};


/**
 * @param {?proto.flyteidl.core.Identifier|undefined} value
 * @return {!proto.flyteidl.admin.Task} returns this
*/
proto.flyteidl.admin.Task.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.Task} returns this
 */
proto.flyteidl.admin.Task.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.Task.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TaskClosure closure = 2;
 * @return {?proto.flyteidl.admin.TaskClosure}
 */
proto.flyteidl.admin.Task.prototype.getClosure = function() {
  return /** @type{?proto.flyteidl.admin.TaskClosure} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.admin.TaskClosure, 2));
};


/**
 * @param {?proto.flyteidl.admin.TaskClosure|undefined} value
 * @return {!proto.flyteidl.admin.Task} returns this
*/
proto.flyteidl.admin.Task.prototype.setClosure = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.Task} returns this
 */
proto.flyteidl.admin.Task.prototype.clearClosure = function() {
  return this.setClosure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.Task.prototype.hasClosure = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.flyteidl.admin.TaskList.repeatedFields_ = [1];



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
proto.flyteidl.admin.TaskList.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.admin.TaskList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.admin.TaskList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.TaskList.toObject = function(includeInstance, msg) {
  var f, obj = {
    tasksList: jspb.Message.toObjectList(msg.getTasksList(),
    proto.flyteidl.admin.Task.toObject, includeInstance),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.flyteidl.admin.TaskList}
 */
proto.flyteidl.admin.TaskList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.admin.TaskList;
  return proto.flyteidl.admin.TaskList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.admin.TaskList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.admin.TaskList}
 */
proto.flyteidl.admin.TaskList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.flyteidl.admin.Task;
      reader.readMessage(value,proto.flyteidl.admin.Task.deserializeBinaryFromReader);
      msg.addTasks(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
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
proto.flyteidl.admin.TaskList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.admin.TaskList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.admin.TaskList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.TaskList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTasksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.flyteidl.admin.Task.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Task tasks = 1;
 * @return {!Array<!proto.flyteidl.admin.Task>}
 */
proto.flyteidl.admin.TaskList.prototype.getTasksList = function() {
  return /** @type{!Array<!proto.flyteidl.admin.Task>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.flyteidl.admin.Task, 1));
};


/**
 * @param {!Array<!proto.flyteidl.admin.Task>} value
 * @return {!proto.flyteidl.admin.TaskList} returns this
*/
proto.flyteidl.admin.TaskList.prototype.setTasksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.flyteidl.admin.Task=} opt_value
 * @param {number=} opt_index
 * @return {!proto.flyteidl.admin.Task}
 */
proto.flyteidl.admin.TaskList.prototype.addTasks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.flyteidl.admin.Task, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flyteidl.admin.TaskList} returns this
 */
proto.flyteidl.admin.TaskList.prototype.clearTasksList = function() {
  return this.setTasksList([]);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.flyteidl.admin.TaskList.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.admin.TaskList} returns this
 */
proto.flyteidl.admin.TaskList.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.flyteidl.admin.TaskSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.admin.TaskSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.admin.TaskSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.TaskSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    template: (f = msg.getTemplate()) && flyteidl_core_tasks_pb.TaskTemplate.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.admin.TaskSpec}
 */
proto.flyteidl.admin.TaskSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.admin.TaskSpec;
  return proto.flyteidl.admin.TaskSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.admin.TaskSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.admin.TaskSpec}
 */
proto.flyteidl.admin.TaskSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new flyteidl_core_tasks_pb.TaskTemplate;
      reader.readMessage(value,flyteidl_core_tasks_pb.TaskTemplate.deserializeBinaryFromReader);
      msg.setTemplate(value);
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
proto.flyteidl.admin.TaskSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.admin.TaskSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.admin.TaskSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.TaskSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      flyteidl_core_tasks_pb.TaskTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional flyteidl.core.TaskTemplate template = 1;
 * @return {?proto.flyteidl.core.TaskTemplate}
 */
proto.flyteidl.admin.TaskSpec.prototype.getTemplate = function() {
  return /** @type{?proto.flyteidl.core.TaskTemplate} */ (
    jspb.Message.getWrapperField(this, flyteidl_core_tasks_pb.TaskTemplate, 1));
};


/**
 * @param {?proto.flyteidl.core.TaskTemplate|undefined} value
 * @return {!proto.flyteidl.admin.TaskSpec} returns this
*/
proto.flyteidl.admin.TaskSpec.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.TaskSpec} returns this
 */
proto.flyteidl.admin.TaskSpec.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.TaskSpec.prototype.hasTemplate = function() {
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
proto.flyteidl.admin.TaskClosure.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.admin.TaskClosure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.admin.TaskClosure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.TaskClosure.toObject = function(includeInstance, msg) {
  var f, obj = {
    compiledTask: (f = msg.getCompiledTask()) && flyteidl_core_compiler_pb.CompiledTask.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.admin.TaskClosure}
 */
proto.flyteidl.admin.TaskClosure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.admin.TaskClosure;
  return proto.flyteidl.admin.TaskClosure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.admin.TaskClosure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.admin.TaskClosure}
 */
proto.flyteidl.admin.TaskClosure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new flyteidl_core_compiler_pb.CompiledTask;
      reader.readMessage(value,flyteidl_core_compiler_pb.CompiledTask.deserializeBinaryFromReader);
      msg.setCompiledTask(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
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
proto.flyteidl.admin.TaskClosure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.admin.TaskClosure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.admin.TaskClosure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.TaskClosure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompiledTask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      flyteidl_core_compiler_pb.CompiledTask.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional flyteidl.core.CompiledTask compiled_task = 1;
 * @return {?proto.flyteidl.core.CompiledTask}
 */
proto.flyteidl.admin.TaskClosure.prototype.getCompiledTask = function() {
  return /** @type{?proto.flyteidl.core.CompiledTask} */ (
    jspb.Message.getWrapperField(this, flyteidl_core_compiler_pb.CompiledTask, 1));
};


/**
 * @param {?proto.flyteidl.core.CompiledTask|undefined} value
 * @return {!proto.flyteidl.admin.TaskClosure} returns this
*/
proto.flyteidl.admin.TaskClosure.prototype.setCompiledTask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.TaskClosure} returns this
 */
proto.flyteidl.admin.TaskClosure.prototype.clearCompiledTask = function() {
  return this.setCompiledTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.TaskClosure.prototype.hasCompiledTask = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.flyteidl.admin.TaskClosure.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.flyteidl.admin.TaskClosure} returns this
*/
proto.flyteidl.admin.TaskClosure.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.TaskClosure} returns this
 */
proto.flyteidl.admin.TaskClosure.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.TaskClosure.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.flyteidl.admin);