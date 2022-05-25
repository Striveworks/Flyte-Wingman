// source: flyteidl/core/compiler.proto
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

var flyteidl_core_workflow_pb = require('../../flyteidl/core/workflow_pb.js');
goog.object.extend(proto, flyteidl_core_workflow_pb);
var flyteidl_core_tasks_pb = require('../../flyteidl/core/tasks_pb.js');
goog.object.extend(proto, flyteidl_core_tasks_pb);
goog.exportSymbol('proto.flyteidl.core.CompiledTask', null, global);
goog.exportSymbol('proto.flyteidl.core.CompiledWorkflow', null, global);
goog.exportSymbol('proto.flyteidl.core.CompiledWorkflowClosure', null, global);
goog.exportSymbol('proto.flyteidl.core.ConnectionSet', null, global);
goog.exportSymbol('proto.flyteidl.core.ConnectionSet.IdList', null, global);
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
proto.flyteidl.core.ConnectionSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.core.ConnectionSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.ConnectionSet.displayName = 'proto.flyteidl.core.ConnectionSet';
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
proto.flyteidl.core.ConnectionSet.IdList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.flyteidl.core.ConnectionSet.IdList.repeatedFields_, null);
};
goog.inherits(proto.flyteidl.core.ConnectionSet.IdList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.ConnectionSet.IdList.displayName = 'proto.flyteidl.core.ConnectionSet.IdList';
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
proto.flyteidl.core.CompiledWorkflow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.core.CompiledWorkflow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.CompiledWorkflow.displayName = 'proto.flyteidl.core.CompiledWorkflow';
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
proto.flyteidl.core.CompiledTask = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.core.CompiledTask, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.CompiledTask.displayName = 'proto.flyteidl.core.CompiledTask';
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
proto.flyteidl.core.CompiledWorkflowClosure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.flyteidl.core.CompiledWorkflowClosure.repeatedFields_, null);
};
goog.inherits(proto.flyteidl.core.CompiledWorkflowClosure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.CompiledWorkflowClosure.displayName = 'proto.flyteidl.core.CompiledWorkflowClosure';
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
proto.flyteidl.core.ConnectionSet.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.ConnectionSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.ConnectionSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.ConnectionSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    downstreamMap: (f = msg.getDownstreamMap()) ? f.toObject(includeInstance, proto.flyteidl.core.ConnectionSet.IdList.toObject) : [],
    upstreamMap: (f = msg.getUpstreamMap()) ? f.toObject(includeInstance, proto.flyteidl.core.ConnectionSet.IdList.toObject) : []
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
 * @return {!proto.flyteidl.core.ConnectionSet}
 */
proto.flyteidl.core.ConnectionSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.ConnectionSet;
  return proto.flyteidl.core.ConnectionSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.ConnectionSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.ConnectionSet}
 */
proto.flyteidl.core.ConnectionSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 7:
      var value = msg.getDownstreamMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.flyteidl.core.ConnectionSet.IdList.deserializeBinaryFromReader, "", new proto.flyteidl.core.ConnectionSet.IdList());
         });
      break;
    case 8:
      var value = msg.getUpstreamMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.flyteidl.core.ConnectionSet.IdList.deserializeBinaryFromReader, "", new proto.flyteidl.core.ConnectionSet.IdList());
         });
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
proto.flyteidl.core.ConnectionSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.ConnectionSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.ConnectionSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.ConnectionSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDownstreamMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.flyteidl.core.ConnectionSet.IdList.serializeBinaryToWriter);
  }
  f = message.getUpstreamMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.flyteidl.core.ConnectionSet.IdList.serializeBinaryToWriter);
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.flyteidl.core.ConnectionSet.IdList.repeatedFields_ = [1];



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
proto.flyteidl.core.ConnectionSet.IdList.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.ConnectionSet.IdList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.ConnectionSet.IdList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.ConnectionSet.IdList.toObject = function(includeInstance, msg) {
  var f, obj = {
    idsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.flyteidl.core.ConnectionSet.IdList}
 */
proto.flyteidl.core.ConnectionSet.IdList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.ConnectionSet.IdList;
  return proto.flyteidl.core.ConnectionSet.IdList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.ConnectionSet.IdList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.ConnectionSet.IdList}
 */
proto.flyteidl.core.ConnectionSet.IdList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIds(value);
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
proto.flyteidl.core.ConnectionSet.IdList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.ConnectionSet.IdList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.ConnectionSet.IdList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.ConnectionSet.IdList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string ids = 1;
 * @return {!Array<string>}
 */
proto.flyteidl.core.ConnectionSet.IdList.prototype.getIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.flyteidl.core.ConnectionSet.IdList} returns this
 */
proto.flyteidl.core.ConnectionSet.IdList.prototype.setIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.flyteidl.core.ConnectionSet.IdList} returns this
 */
proto.flyteidl.core.ConnectionSet.IdList.prototype.addIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flyteidl.core.ConnectionSet.IdList} returns this
 */
proto.flyteidl.core.ConnectionSet.IdList.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};


/**
 * map<string, IdList> downstream = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.flyteidl.core.ConnectionSet.IdList>}
 */
proto.flyteidl.core.ConnectionSet.prototype.getDownstreamMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.flyteidl.core.ConnectionSet.IdList>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      proto.flyteidl.core.ConnectionSet.IdList));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.flyteidl.core.ConnectionSet} returns this
 */
proto.flyteidl.core.ConnectionSet.prototype.clearDownstreamMap = function() {
  this.getDownstreamMap().clear();
  return this;};


/**
 * map<string, IdList> upstream = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.flyteidl.core.ConnectionSet.IdList>}
 */
proto.flyteidl.core.ConnectionSet.prototype.getUpstreamMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.flyteidl.core.ConnectionSet.IdList>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      proto.flyteidl.core.ConnectionSet.IdList));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.flyteidl.core.ConnectionSet} returns this
 */
proto.flyteidl.core.ConnectionSet.prototype.clearUpstreamMap = function() {
  this.getUpstreamMap().clear();
  return this;};





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
proto.flyteidl.core.CompiledWorkflow.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.CompiledWorkflow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.CompiledWorkflow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.CompiledWorkflow.toObject = function(includeInstance, msg) {
  var f, obj = {
    template: (f = msg.getTemplate()) && flyteidl_core_workflow_pb.WorkflowTemplate.toObject(includeInstance, f),
    connections: (f = msg.getConnections()) && proto.flyteidl.core.ConnectionSet.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.core.CompiledWorkflow}
 */
proto.flyteidl.core.CompiledWorkflow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.CompiledWorkflow;
  return proto.flyteidl.core.CompiledWorkflow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.CompiledWorkflow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.CompiledWorkflow}
 */
proto.flyteidl.core.CompiledWorkflow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new flyteidl_core_workflow_pb.WorkflowTemplate;
      reader.readMessage(value,flyteidl_core_workflow_pb.WorkflowTemplate.deserializeBinaryFromReader);
      msg.setTemplate(value);
      break;
    case 2:
      var value = new proto.flyteidl.core.ConnectionSet;
      reader.readMessage(value,proto.flyteidl.core.ConnectionSet.deserializeBinaryFromReader);
      msg.setConnections(value);
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
proto.flyteidl.core.CompiledWorkflow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.CompiledWorkflow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.CompiledWorkflow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.CompiledWorkflow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      flyteidl_core_workflow_pb.WorkflowTemplate.serializeBinaryToWriter
    );
  }
  f = message.getConnections();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.flyteidl.core.ConnectionSet.serializeBinaryToWriter
    );
  }
};


/**
 * optional WorkflowTemplate template = 1;
 * @return {?proto.flyteidl.core.WorkflowTemplate}
 */
proto.flyteidl.core.CompiledWorkflow.prototype.getTemplate = function() {
  return /** @type{?proto.flyteidl.core.WorkflowTemplate} */ (
    jspb.Message.getWrapperField(this, flyteidl_core_workflow_pb.WorkflowTemplate, 1));
};


/**
 * @param {?proto.flyteidl.core.WorkflowTemplate|undefined} value
 * @return {!proto.flyteidl.core.CompiledWorkflow} returns this
*/
proto.flyteidl.core.CompiledWorkflow.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.CompiledWorkflow} returns this
 */
proto.flyteidl.core.CompiledWorkflow.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.CompiledWorkflow.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ConnectionSet connections = 2;
 * @return {?proto.flyteidl.core.ConnectionSet}
 */
proto.flyteidl.core.CompiledWorkflow.prototype.getConnections = function() {
  return /** @type{?proto.flyteidl.core.ConnectionSet} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.ConnectionSet, 2));
};


/**
 * @param {?proto.flyteidl.core.ConnectionSet|undefined} value
 * @return {!proto.flyteidl.core.CompiledWorkflow} returns this
*/
proto.flyteidl.core.CompiledWorkflow.prototype.setConnections = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.CompiledWorkflow} returns this
 */
proto.flyteidl.core.CompiledWorkflow.prototype.clearConnections = function() {
  return this.setConnections(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.CompiledWorkflow.prototype.hasConnections = function() {
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
proto.flyteidl.core.CompiledTask.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.CompiledTask.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.CompiledTask} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.CompiledTask.toObject = function(includeInstance, msg) {
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
 * @return {!proto.flyteidl.core.CompiledTask}
 */
proto.flyteidl.core.CompiledTask.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.CompiledTask;
  return proto.flyteidl.core.CompiledTask.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.CompiledTask} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.CompiledTask}
 */
proto.flyteidl.core.CompiledTask.deserializeBinaryFromReader = function(msg, reader) {
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
proto.flyteidl.core.CompiledTask.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.CompiledTask.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.CompiledTask} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.CompiledTask.serializeBinaryToWriter = function(message, writer) {
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
 * optional TaskTemplate template = 1;
 * @return {?proto.flyteidl.core.TaskTemplate}
 */
proto.flyteidl.core.CompiledTask.prototype.getTemplate = function() {
  return /** @type{?proto.flyteidl.core.TaskTemplate} */ (
    jspb.Message.getWrapperField(this, flyteidl_core_tasks_pb.TaskTemplate, 1));
};


/**
 * @param {?proto.flyteidl.core.TaskTemplate|undefined} value
 * @return {!proto.flyteidl.core.CompiledTask} returns this
*/
proto.flyteidl.core.CompiledTask.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.CompiledTask} returns this
 */
proto.flyteidl.core.CompiledTask.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.CompiledTask.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.flyteidl.core.CompiledWorkflowClosure.repeatedFields_ = [2,3];



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
proto.flyteidl.core.CompiledWorkflowClosure.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.CompiledWorkflowClosure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.CompiledWorkflowClosure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.CompiledWorkflowClosure.toObject = function(includeInstance, msg) {
  var f, obj = {
    primary: (f = msg.getPrimary()) && proto.flyteidl.core.CompiledWorkflow.toObject(includeInstance, f),
    subWorkflowsList: jspb.Message.toObjectList(msg.getSubWorkflowsList(),
    proto.flyteidl.core.CompiledWorkflow.toObject, includeInstance),
    tasksList: jspb.Message.toObjectList(msg.getTasksList(),
    proto.flyteidl.core.CompiledTask.toObject, includeInstance)
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
 * @return {!proto.flyteidl.core.CompiledWorkflowClosure}
 */
proto.flyteidl.core.CompiledWorkflowClosure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.CompiledWorkflowClosure;
  return proto.flyteidl.core.CompiledWorkflowClosure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.CompiledWorkflowClosure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.CompiledWorkflowClosure}
 */
proto.flyteidl.core.CompiledWorkflowClosure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.flyteidl.core.CompiledWorkflow;
      reader.readMessage(value,proto.flyteidl.core.CompiledWorkflow.deserializeBinaryFromReader);
      msg.setPrimary(value);
      break;
    case 2:
      var value = new proto.flyteidl.core.CompiledWorkflow;
      reader.readMessage(value,proto.flyteidl.core.CompiledWorkflow.deserializeBinaryFromReader);
      msg.addSubWorkflows(value);
      break;
    case 3:
      var value = new proto.flyteidl.core.CompiledTask;
      reader.readMessage(value,proto.flyteidl.core.CompiledTask.deserializeBinaryFromReader);
      msg.addTasks(value);
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
proto.flyteidl.core.CompiledWorkflowClosure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.CompiledWorkflowClosure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.CompiledWorkflowClosure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.CompiledWorkflowClosure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrimary();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.flyteidl.core.CompiledWorkflow.serializeBinaryToWriter
    );
  }
  f = message.getSubWorkflowsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.flyteidl.core.CompiledWorkflow.serializeBinaryToWriter
    );
  }
  f = message.getTasksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.flyteidl.core.CompiledTask.serializeBinaryToWriter
    );
  }
};


/**
 * optional CompiledWorkflow primary = 1;
 * @return {?proto.flyteidl.core.CompiledWorkflow}
 */
proto.flyteidl.core.CompiledWorkflowClosure.prototype.getPrimary = function() {
  return /** @type{?proto.flyteidl.core.CompiledWorkflow} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.CompiledWorkflow, 1));
};


/**
 * @param {?proto.flyteidl.core.CompiledWorkflow|undefined} value
 * @return {!proto.flyteidl.core.CompiledWorkflowClosure} returns this
*/
proto.flyteidl.core.CompiledWorkflowClosure.prototype.setPrimary = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.CompiledWorkflowClosure} returns this
 */
proto.flyteidl.core.CompiledWorkflowClosure.prototype.clearPrimary = function() {
  return this.setPrimary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.CompiledWorkflowClosure.prototype.hasPrimary = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated CompiledWorkflow sub_workflows = 2;
 * @return {!Array<!proto.flyteidl.core.CompiledWorkflow>}
 */
proto.flyteidl.core.CompiledWorkflowClosure.prototype.getSubWorkflowsList = function() {
  return /** @type{!Array<!proto.flyteidl.core.CompiledWorkflow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.flyteidl.core.CompiledWorkflow, 2));
};


/**
 * @param {!Array<!proto.flyteidl.core.CompiledWorkflow>} value
 * @return {!proto.flyteidl.core.CompiledWorkflowClosure} returns this
*/
proto.flyteidl.core.CompiledWorkflowClosure.prototype.setSubWorkflowsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.flyteidl.core.CompiledWorkflow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.flyteidl.core.CompiledWorkflow}
 */
proto.flyteidl.core.CompiledWorkflowClosure.prototype.addSubWorkflows = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.flyteidl.core.CompiledWorkflow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flyteidl.core.CompiledWorkflowClosure} returns this
 */
proto.flyteidl.core.CompiledWorkflowClosure.prototype.clearSubWorkflowsList = function() {
  return this.setSubWorkflowsList([]);
};


/**
 * repeated CompiledTask tasks = 3;
 * @return {!Array<!proto.flyteidl.core.CompiledTask>}
 */
proto.flyteidl.core.CompiledWorkflowClosure.prototype.getTasksList = function() {
  return /** @type{!Array<!proto.flyteidl.core.CompiledTask>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.flyteidl.core.CompiledTask, 3));
};


/**
 * @param {!Array<!proto.flyteidl.core.CompiledTask>} value
 * @return {!proto.flyteidl.core.CompiledWorkflowClosure} returns this
*/
proto.flyteidl.core.CompiledWorkflowClosure.prototype.setTasksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.flyteidl.core.CompiledTask=} opt_value
 * @param {number=} opt_index
 * @return {!proto.flyteidl.core.CompiledTask}
 */
proto.flyteidl.core.CompiledWorkflowClosure.prototype.addTasks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.flyteidl.core.CompiledTask, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flyteidl.core.CompiledWorkflowClosure} returns this
 */
proto.flyteidl.core.CompiledWorkflowClosure.prototype.clearTasksList = function() {
  return this.setTasksList([]);
};


goog.object.extend(exports, proto.flyteidl.core);
