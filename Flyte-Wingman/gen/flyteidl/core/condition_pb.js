// source: flyteidl/core/condition.proto
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

var flyteidl_core_literals_pb = require('../../flyteidl/core/literals_pb.js');
goog.object.extend(proto, flyteidl_core_literals_pb);
goog.exportSymbol('proto.flyteidl.core.BooleanExpression', null, global);
goog.exportSymbol('proto.flyteidl.core.BooleanExpression.ExprCase', null, global);
goog.exportSymbol('proto.flyteidl.core.ComparisonExpression', null, global);
goog.exportSymbol('proto.flyteidl.core.ComparisonExpression.Operator', null, global);
goog.exportSymbol('proto.flyteidl.core.ConjunctionExpression', null, global);
goog.exportSymbol('proto.flyteidl.core.ConjunctionExpression.LogicalOperator', null, global);
goog.exportSymbol('proto.flyteidl.core.Operand', null, global);
goog.exportSymbol('proto.flyteidl.core.Operand.ValCase', null, global);
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
proto.flyteidl.core.ComparisonExpression = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.core.ComparisonExpression, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.ComparisonExpression.displayName = 'proto.flyteidl.core.ComparisonExpression';
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
proto.flyteidl.core.Operand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.flyteidl.core.Operand.oneofGroups_);
};
goog.inherits(proto.flyteidl.core.Operand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.Operand.displayName = 'proto.flyteidl.core.Operand';
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
proto.flyteidl.core.BooleanExpression = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.flyteidl.core.BooleanExpression.oneofGroups_);
};
goog.inherits(proto.flyteidl.core.BooleanExpression, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.BooleanExpression.displayName = 'proto.flyteidl.core.BooleanExpression';
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
proto.flyteidl.core.ConjunctionExpression = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.core.ConjunctionExpression, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.ConjunctionExpression.displayName = 'proto.flyteidl.core.ConjunctionExpression';
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
proto.flyteidl.core.ComparisonExpression.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.ComparisonExpression.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.ComparisonExpression} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.ComparisonExpression.toObject = function(includeInstance, msg) {
  var f, obj = {
    operator: jspb.Message.getFieldWithDefault(msg, 1, 0),
    leftValue: (f = msg.getLeftValue()) && proto.flyteidl.core.Operand.toObject(includeInstance, f),
    rightValue: (f = msg.getRightValue()) && proto.flyteidl.core.Operand.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.core.ComparisonExpression}
 */
proto.flyteidl.core.ComparisonExpression.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.ComparisonExpression;
  return proto.flyteidl.core.ComparisonExpression.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.ComparisonExpression} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.ComparisonExpression}
 */
proto.flyteidl.core.ComparisonExpression.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.flyteidl.core.ComparisonExpression.Operator} */ (reader.readEnum());
      msg.setOperator(value);
      break;
    case 2:
      var value = new proto.flyteidl.core.Operand;
      reader.readMessage(value,proto.flyteidl.core.Operand.deserializeBinaryFromReader);
      msg.setLeftValue(value);
      break;
    case 3:
      var value = new proto.flyteidl.core.Operand;
      reader.readMessage(value,proto.flyteidl.core.Operand.deserializeBinaryFromReader);
      msg.setRightValue(value);
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
proto.flyteidl.core.ComparisonExpression.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.ComparisonExpression.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.ComparisonExpression} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.ComparisonExpression.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperator();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getLeftValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.flyteidl.core.Operand.serializeBinaryToWriter
    );
  }
  f = message.getRightValue();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.flyteidl.core.Operand.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.flyteidl.core.ComparisonExpression.Operator = {
  EQ: 0,
  NEQ: 1,
  GT: 2,
  GTE: 3,
  LT: 4,
  LTE: 5
};

/**
 * optional Operator operator = 1;
 * @return {!proto.flyteidl.core.ComparisonExpression.Operator}
 */
proto.flyteidl.core.ComparisonExpression.prototype.getOperator = function() {
  return /** @type {!proto.flyteidl.core.ComparisonExpression.Operator} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.flyteidl.core.ComparisonExpression.Operator} value
 * @return {!proto.flyteidl.core.ComparisonExpression} returns this
 */
proto.flyteidl.core.ComparisonExpression.prototype.setOperator = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Operand left_value = 2;
 * @return {?proto.flyteidl.core.Operand}
 */
proto.flyteidl.core.ComparisonExpression.prototype.getLeftValue = function() {
  return /** @type{?proto.flyteidl.core.Operand} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.Operand, 2));
};


/**
 * @param {?proto.flyteidl.core.Operand|undefined} value
 * @return {!proto.flyteidl.core.ComparisonExpression} returns this
*/
proto.flyteidl.core.ComparisonExpression.prototype.setLeftValue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.ComparisonExpression} returns this
 */
proto.flyteidl.core.ComparisonExpression.prototype.clearLeftValue = function() {
  return this.setLeftValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.ComparisonExpression.prototype.hasLeftValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Operand right_value = 3;
 * @return {?proto.flyteidl.core.Operand}
 */
proto.flyteidl.core.ComparisonExpression.prototype.getRightValue = function() {
  return /** @type{?proto.flyteidl.core.Operand} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.Operand, 3));
};


/**
 * @param {?proto.flyteidl.core.Operand|undefined} value
 * @return {!proto.flyteidl.core.ComparisonExpression} returns this
*/
proto.flyteidl.core.ComparisonExpression.prototype.setRightValue = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.ComparisonExpression} returns this
 */
proto.flyteidl.core.ComparisonExpression.prototype.clearRightValue = function() {
  return this.setRightValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.ComparisonExpression.prototype.hasRightValue = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.flyteidl.core.Operand.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.flyteidl.core.Operand.ValCase = {
  VAL_NOT_SET: 0,
  PRIMITIVE: 1,
  VAR: 2
};

/**
 * @return {proto.flyteidl.core.Operand.ValCase}
 */
proto.flyteidl.core.Operand.prototype.getValCase = function() {
  return /** @type {proto.flyteidl.core.Operand.ValCase} */(jspb.Message.computeOneofCase(this, proto.flyteidl.core.Operand.oneofGroups_[0]));
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
proto.flyteidl.core.Operand.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.Operand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.Operand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.Operand.toObject = function(includeInstance, msg) {
  var f, obj = {
    primitive: (f = msg.getPrimitive()) && flyteidl_core_literals_pb.Primitive.toObject(includeInstance, f),
    pb_var: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.flyteidl.core.Operand}
 */
proto.flyteidl.core.Operand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.Operand;
  return proto.flyteidl.core.Operand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.Operand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.Operand}
 */
proto.flyteidl.core.Operand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new flyteidl_core_literals_pb.Primitive;
      reader.readMessage(value,flyteidl_core_literals_pb.Primitive.deserializeBinaryFromReader);
      msg.setPrimitive(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVar(value);
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
proto.flyteidl.core.Operand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.Operand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.Operand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.Operand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrimitive();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      flyteidl_core_literals_pb.Primitive.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Primitive primitive = 1;
 * @return {?proto.flyteidl.core.Primitive}
 */
proto.flyteidl.core.Operand.prototype.getPrimitive = function() {
  return /** @type{?proto.flyteidl.core.Primitive} */ (
    jspb.Message.getWrapperField(this, flyteidl_core_literals_pb.Primitive, 1));
};


/**
 * @param {?proto.flyteidl.core.Primitive|undefined} value
 * @return {!proto.flyteidl.core.Operand} returns this
*/
proto.flyteidl.core.Operand.prototype.setPrimitive = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.flyteidl.core.Operand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.Operand} returns this
 */
proto.flyteidl.core.Operand.prototype.clearPrimitive = function() {
  return this.setPrimitive(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.Operand.prototype.hasPrimitive = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string var = 2;
 * @return {string}
 */
proto.flyteidl.core.Operand.prototype.getVar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.core.Operand} returns this
 */
proto.flyteidl.core.Operand.prototype.setVar = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.flyteidl.core.Operand.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.flyteidl.core.Operand} returns this
 */
proto.flyteidl.core.Operand.prototype.clearVar = function() {
  return jspb.Message.setOneofField(this, 2, proto.flyteidl.core.Operand.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.Operand.prototype.hasVar = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.flyteidl.core.BooleanExpression.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.flyteidl.core.BooleanExpression.ExprCase = {
  EXPR_NOT_SET: 0,
  CONJUNCTION: 1,
  COMPARISON: 2
};

/**
 * @return {proto.flyteidl.core.BooleanExpression.ExprCase}
 */
proto.flyteidl.core.BooleanExpression.prototype.getExprCase = function() {
  return /** @type {proto.flyteidl.core.BooleanExpression.ExprCase} */(jspb.Message.computeOneofCase(this, proto.flyteidl.core.BooleanExpression.oneofGroups_[0]));
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
proto.flyteidl.core.BooleanExpression.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.BooleanExpression.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.BooleanExpression} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.BooleanExpression.toObject = function(includeInstance, msg) {
  var f, obj = {
    conjunction: (f = msg.getConjunction()) && proto.flyteidl.core.ConjunctionExpression.toObject(includeInstance, f),
    comparison: (f = msg.getComparison()) && proto.flyteidl.core.ComparisonExpression.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.core.BooleanExpression}
 */
proto.flyteidl.core.BooleanExpression.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.BooleanExpression;
  return proto.flyteidl.core.BooleanExpression.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.BooleanExpression} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.BooleanExpression}
 */
proto.flyteidl.core.BooleanExpression.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.flyteidl.core.ConjunctionExpression;
      reader.readMessage(value,proto.flyteidl.core.ConjunctionExpression.deserializeBinaryFromReader);
      msg.setConjunction(value);
      break;
    case 2:
      var value = new proto.flyteidl.core.ComparisonExpression;
      reader.readMessage(value,proto.flyteidl.core.ComparisonExpression.deserializeBinaryFromReader);
      msg.setComparison(value);
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
proto.flyteidl.core.BooleanExpression.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.BooleanExpression.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.BooleanExpression} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.BooleanExpression.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConjunction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.flyteidl.core.ConjunctionExpression.serializeBinaryToWriter
    );
  }
  f = message.getComparison();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.flyteidl.core.ComparisonExpression.serializeBinaryToWriter
    );
  }
};


/**
 * optional ConjunctionExpression conjunction = 1;
 * @return {?proto.flyteidl.core.ConjunctionExpression}
 */
proto.flyteidl.core.BooleanExpression.prototype.getConjunction = function() {
  return /** @type{?proto.flyteidl.core.ConjunctionExpression} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.ConjunctionExpression, 1));
};


/**
 * @param {?proto.flyteidl.core.ConjunctionExpression|undefined} value
 * @return {!proto.flyteidl.core.BooleanExpression} returns this
*/
proto.flyteidl.core.BooleanExpression.prototype.setConjunction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.flyteidl.core.BooleanExpression.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.BooleanExpression} returns this
 */
proto.flyteidl.core.BooleanExpression.prototype.clearConjunction = function() {
  return this.setConjunction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.BooleanExpression.prototype.hasConjunction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ComparisonExpression comparison = 2;
 * @return {?proto.flyteidl.core.ComparisonExpression}
 */
proto.flyteidl.core.BooleanExpression.prototype.getComparison = function() {
  return /** @type{?proto.flyteidl.core.ComparisonExpression} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.ComparisonExpression, 2));
};


/**
 * @param {?proto.flyteidl.core.ComparisonExpression|undefined} value
 * @return {!proto.flyteidl.core.BooleanExpression} returns this
*/
proto.flyteidl.core.BooleanExpression.prototype.setComparison = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.flyteidl.core.BooleanExpression.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.BooleanExpression} returns this
 */
proto.flyteidl.core.BooleanExpression.prototype.clearComparison = function() {
  return this.setComparison(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.BooleanExpression.prototype.hasComparison = function() {
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
proto.flyteidl.core.ConjunctionExpression.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.ConjunctionExpression.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.ConjunctionExpression} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.ConjunctionExpression.toObject = function(includeInstance, msg) {
  var f, obj = {
    operator: jspb.Message.getFieldWithDefault(msg, 1, 0),
    leftExpression: (f = msg.getLeftExpression()) && proto.flyteidl.core.BooleanExpression.toObject(includeInstance, f),
    rightExpression: (f = msg.getRightExpression()) && proto.flyteidl.core.BooleanExpression.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.core.ConjunctionExpression}
 */
proto.flyteidl.core.ConjunctionExpression.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.ConjunctionExpression;
  return proto.flyteidl.core.ConjunctionExpression.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.ConjunctionExpression} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.ConjunctionExpression}
 */
proto.flyteidl.core.ConjunctionExpression.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.flyteidl.core.ConjunctionExpression.LogicalOperator} */ (reader.readEnum());
      msg.setOperator(value);
      break;
    case 2:
      var value = new proto.flyteidl.core.BooleanExpression;
      reader.readMessage(value,proto.flyteidl.core.BooleanExpression.deserializeBinaryFromReader);
      msg.setLeftExpression(value);
      break;
    case 3:
      var value = new proto.flyteidl.core.BooleanExpression;
      reader.readMessage(value,proto.flyteidl.core.BooleanExpression.deserializeBinaryFromReader);
      msg.setRightExpression(value);
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
proto.flyteidl.core.ConjunctionExpression.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.ConjunctionExpression.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.ConjunctionExpression} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.ConjunctionExpression.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperator();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getLeftExpression();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.flyteidl.core.BooleanExpression.serializeBinaryToWriter
    );
  }
  f = message.getRightExpression();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.flyteidl.core.BooleanExpression.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.flyteidl.core.ConjunctionExpression.LogicalOperator = {
  AND: 0,
  OR: 1
};

/**
 * optional LogicalOperator operator = 1;
 * @return {!proto.flyteidl.core.ConjunctionExpression.LogicalOperator}
 */
proto.flyteidl.core.ConjunctionExpression.prototype.getOperator = function() {
  return /** @type {!proto.flyteidl.core.ConjunctionExpression.LogicalOperator} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.flyteidl.core.ConjunctionExpression.LogicalOperator} value
 * @return {!proto.flyteidl.core.ConjunctionExpression} returns this
 */
proto.flyteidl.core.ConjunctionExpression.prototype.setOperator = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional BooleanExpression left_expression = 2;
 * @return {?proto.flyteidl.core.BooleanExpression}
 */
proto.flyteidl.core.ConjunctionExpression.prototype.getLeftExpression = function() {
  return /** @type{?proto.flyteidl.core.BooleanExpression} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.BooleanExpression, 2));
};


/**
 * @param {?proto.flyteidl.core.BooleanExpression|undefined} value
 * @return {!proto.flyteidl.core.ConjunctionExpression} returns this
*/
proto.flyteidl.core.ConjunctionExpression.prototype.setLeftExpression = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.ConjunctionExpression} returns this
 */
proto.flyteidl.core.ConjunctionExpression.prototype.clearLeftExpression = function() {
  return this.setLeftExpression(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.ConjunctionExpression.prototype.hasLeftExpression = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BooleanExpression right_expression = 3;
 * @return {?proto.flyteidl.core.BooleanExpression}
 */
proto.flyteidl.core.ConjunctionExpression.prototype.getRightExpression = function() {
  return /** @type{?proto.flyteidl.core.BooleanExpression} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.BooleanExpression, 3));
};


/**
 * @param {?proto.flyteidl.core.BooleanExpression|undefined} value
 * @return {!proto.flyteidl.core.ConjunctionExpression} returns this
*/
proto.flyteidl.core.ConjunctionExpression.prototype.setRightExpression = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.ConjunctionExpression} returns this
 */
proto.flyteidl.core.ConjunctionExpression.prototype.clearRightExpression = function() {
  return this.setRightExpression(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.ConjunctionExpression.prototype.hasRightExpression = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.flyteidl.core);
