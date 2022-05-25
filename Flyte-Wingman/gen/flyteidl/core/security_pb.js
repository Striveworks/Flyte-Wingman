// source: flyteidl/core/security.proto
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

goog.exportSymbol('proto.flyteidl.core.Identity', null, global);
goog.exportSymbol('proto.flyteidl.core.OAuth2Client', null, global);
goog.exportSymbol('proto.flyteidl.core.OAuth2TokenRequest', null, global);
goog.exportSymbol('proto.flyteidl.core.OAuth2TokenRequest.Type', null, global);
goog.exportSymbol('proto.flyteidl.core.Secret', null, global);
goog.exportSymbol('proto.flyteidl.core.Secret.MountType', null, global);
goog.exportSymbol('proto.flyteidl.core.SecurityContext', null, global);
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
proto.flyteidl.core.Secret = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.core.Secret, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.Secret.displayName = 'proto.flyteidl.core.Secret';
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
proto.flyteidl.core.OAuth2Client = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.core.OAuth2Client, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.OAuth2Client.displayName = 'proto.flyteidl.core.OAuth2Client';
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
proto.flyteidl.core.Identity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.core.Identity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.Identity.displayName = 'proto.flyteidl.core.Identity';
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
proto.flyteidl.core.OAuth2TokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.core.OAuth2TokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.OAuth2TokenRequest.displayName = 'proto.flyteidl.core.OAuth2TokenRequest';
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
proto.flyteidl.core.SecurityContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.flyteidl.core.SecurityContext.repeatedFields_, null);
};
goog.inherits(proto.flyteidl.core.SecurityContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.SecurityContext.displayName = 'proto.flyteidl.core.SecurityContext';
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
proto.flyteidl.core.Secret.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.Secret.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.Secret} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.Secret.toObject = function(includeInstance, msg) {
  var f, obj = {
    group: jspb.Message.getFieldWithDefault(msg, 1, ""),
    groupVersion: jspb.Message.getFieldWithDefault(msg, 2, ""),
    key: jspb.Message.getFieldWithDefault(msg, 3, ""),
    mountRequirement: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.flyteidl.core.Secret}
 */
proto.flyteidl.core.Secret.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.Secret;
  return proto.flyteidl.core.Secret.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.Secret} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.Secret}
 */
proto.flyteidl.core.Secret.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 4:
      var value = /** @type {!proto.flyteidl.core.Secret.MountType} */ (reader.readEnum());
      msg.setMountRequirement(value);
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
proto.flyteidl.core.Secret.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.Secret.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.Secret} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.Secret.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGroupVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMountRequirement();
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
proto.flyteidl.core.Secret.MountType = {
  ANY: 0,
  ENV_VAR: 1,
  FILE: 2
};

/**
 * optional string group = 1;
 * @return {string}
 */
proto.flyteidl.core.Secret.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.core.Secret} returns this
 */
proto.flyteidl.core.Secret.prototype.setGroup = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string group_version = 2;
 * @return {string}
 */
proto.flyteidl.core.Secret.prototype.getGroupVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.core.Secret} returns this
 */
proto.flyteidl.core.Secret.prototype.setGroupVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string key = 3;
 * @return {string}
 */
proto.flyteidl.core.Secret.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.core.Secret} returns this
 */
proto.flyteidl.core.Secret.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional MountType mount_requirement = 4;
 * @return {!proto.flyteidl.core.Secret.MountType}
 */
proto.flyteidl.core.Secret.prototype.getMountRequirement = function() {
  return /** @type {!proto.flyteidl.core.Secret.MountType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.flyteidl.core.Secret.MountType} value
 * @return {!proto.flyteidl.core.Secret} returns this
 */
proto.flyteidl.core.Secret.prototype.setMountRequirement = function(value) {
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
proto.flyteidl.core.OAuth2Client.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.OAuth2Client.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.OAuth2Client} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.OAuth2Client.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clientSecret: (f = msg.getClientSecret()) && proto.flyteidl.core.Secret.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.core.OAuth2Client}
 */
proto.flyteidl.core.OAuth2Client.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.OAuth2Client;
  return proto.flyteidl.core.OAuth2Client.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.OAuth2Client} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.OAuth2Client}
 */
proto.flyteidl.core.OAuth2Client.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 2:
      var value = new proto.flyteidl.core.Secret;
      reader.readMessage(value,proto.flyteidl.core.Secret.deserializeBinaryFromReader);
      msg.setClientSecret(value);
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
proto.flyteidl.core.OAuth2Client.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.OAuth2Client.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.OAuth2Client} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.OAuth2Client.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientSecret();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.flyteidl.core.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional string client_id = 1;
 * @return {string}
 */
proto.flyteidl.core.OAuth2Client.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.core.OAuth2Client} returns this
 */
proto.flyteidl.core.OAuth2Client.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Secret client_secret = 2;
 * @return {?proto.flyteidl.core.Secret}
 */
proto.flyteidl.core.OAuth2Client.prototype.getClientSecret = function() {
  return /** @type{?proto.flyteidl.core.Secret} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.Secret, 2));
};


/**
 * @param {?proto.flyteidl.core.Secret|undefined} value
 * @return {!proto.flyteidl.core.OAuth2Client} returns this
*/
proto.flyteidl.core.OAuth2Client.prototype.setClientSecret = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.OAuth2Client} returns this
 */
proto.flyteidl.core.OAuth2Client.prototype.clearClientSecret = function() {
  return this.setClientSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.OAuth2Client.prototype.hasClientSecret = function() {
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
proto.flyteidl.core.Identity.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.Identity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.Identity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.Identity.toObject = function(includeInstance, msg) {
  var f, obj = {
    iamRole: jspb.Message.getFieldWithDefault(msg, 1, ""),
    k8sServiceAccount: jspb.Message.getFieldWithDefault(msg, 2, ""),
    oauth2Client: (f = msg.getOauth2Client()) && proto.flyteidl.core.OAuth2Client.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.core.Identity}
 */
proto.flyteidl.core.Identity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.Identity;
  return proto.flyteidl.core.Identity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.Identity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.Identity}
 */
proto.flyteidl.core.Identity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIamRole(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setK8sServiceAccount(value);
      break;
    case 3:
      var value = new proto.flyteidl.core.OAuth2Client;
      reader.readMessage(value,proto.flyteidl.core.OAuth2Client.deserializeBinaryFromReader);
      msg.setOauth2Client(value);
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
proto.flyteidl.core.Identity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.Identity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.Identity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.Identity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIamRole();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getK8sServiceAccount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOauth2Client();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.flyteidl.core.OAuth2Client.serializeBinaryToWriter
    );
  }
};


/**
 * optional string iam_role = 1;
 * @return {string}
 */
proto.flyteidl.core.Identity.prototype.getIamRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.core.Identity} returns this
 */
proto.flyteidl.core.Identity.prototype.setIamRole = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string k8s_service_account = 2;
 * @return {string}
 */
proto.flyteidl.core.Identity.prototype.getK8sServiceAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.core.Identity} returns this
 */
proto.flyteidl.core.Identity.prototype.setK8sServiceAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OAuth2Client oauth2_client = 3;
 * @return {?proto.flyteidl.core.OAuth2Client}
 */
proto.flyteidl.core.Identity.prototype.getOauth2Client = function() {
  return /** @type{?proto.flyteidl.core.OAuth2Client} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.OAuth2Client, 3));
};


/**
 * @param {?proto.flyteidl.core.OAuth2Client|undefined} value
 * @return {!proto.flyteidl.core.Identity} returns this
*/
proto.flyteidl.core.Identity.prototype.setOauth2Client = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.Identity} returns this
 */
proto.flyteidl.core.Identity.prototype.clearOauth2Client = function() {
  return this.setOauth2Client(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.Identity.prototype.hasOauth2Client = function() {
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
proto.flyteidl.core.OAuth2TokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.OAuth2TokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.OAuth2TokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.OAuth2TokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    client: (f = msg.getClient()) && proto.flyteidl.core.OAuth2Client.toObject(includeInstance, f),
    idpDiscoveryEndpoint: jspb.Message.getFieldWithDefault(msg, 4, ""),
    tokenEndpoint: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.flyteidl.core.OAuth2TokenRequest}
 */
proto.flyteidl.core.OAuth2TokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.OAuth2TokenRequest;
  return proto.flyteidl.core.OAuth2TokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.OAuth2TokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.OAuth2TokenRequest}
 */
proto.flyteidl.core.OAuth2TokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.flyteidl.core.OAuth2TokenRequest.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = new proto.flyteidl.core.OAuth2Client;
      reader.readMessage(value,proto.flyteidl.core.OAuth2Client.deserializeBinaryFromReader);
      msg.setClient(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdpDiscoveryEndpoint(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenEndpoint(value);
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
proto.flyteidl.core.OAuth2TokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.OAuth2TokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.OAuth2TokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.OAuth2TokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getClient();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.flyteidl.core.OAuth2Client.serializeBinaryToWriter
    );
  }
  f = message.getIdpDiscoveryEndpoint();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTokenEndpoint();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.flyteidl.core.OAuth2TokenRequest.Type = {
  CLIENT_CREDENTIALS: 0
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.flyteidl.core.OAuth2TokenRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.core.OAuth2TokenRequest} returns this
 */
proto.flyteidl.core.OAuth2TokenRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Type type = 2;
 * @return {!proto.flyteidl.core.OAuth2TokenRequest.Type}
 */
proto.flyteidl.core.OAuth2TokenRequest.prototype.getType = function() {
  return /** @type {!proto.flyteidl.core.OAuth2TokenRequest.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.flyteidl.core.OAuth2TokenRequest.Type} value
 * @return {!proto.flyteidl.core.OAuth2TokenRequest} returns this
 */
proto.flyteidl.core.OAuth2TokenRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional OAuth2Client client = 3;
 * @return {?proto.flyteidl.core.OAuth2Client}
 */
proto.flyteidl.core.OAuth2TokenRequest.prototype.getClient = function() {
  return /** @type{?proto.flyteidl.core.OAuth2Client} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.OAuth2Client, 3));
};


/**
 * @param {?proto.flyteidl.core.OAuth2Client|undefined} value
 * @return {!proto.flyteidl.core.OAuth2TokenRequest} returns this
*/
proto.flyteidl.core.OAuth2TokenRequest.prototype.setClient = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.OAuth2TokenRequest} returns this
 */
proto.flyteidl.core.OAuth2TokenRequest.prototype.clearClient = function() {
  return this.setClient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.OAuth2TokenRequest.prototype.hasClient = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string idp_discovery_endpoint = 4;
 * @return {string}
 */
proto.flyteidl.core.OAuth2TokenRequest.prototype.getIdpDiscoveryEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.core.OAuth2TokenRequest} returns this
 */
proto.flyteidl.core.OAuth2TokenRequest.prototype.setIdpDiscoveryEndpoint = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string token_endpoint = 5;
 * @return {string}
 */
proto.flyteidl.core.OAuth2TokenRequest.prototype.getTokenEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.core.OAuth2TokenRequest} returns this
 */
proto.flyteidl.core.OAuth2TokenRequest.prototype.setTokenEndpoint = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.flyteidl.core.SecurityContext.repeatedFields_ = [2,3];



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
proto.flyteidl.core.SecurityContext.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.SecurityContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.SecurityContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.SecurityContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    runAs: (f = msg.getRunAs()) && proto.flyteidl.core.Identity.toObject(includeInstance, f),
    secretsList: jspb.Message.toObjectList(msg.getSecretsList(),
    proto.flyteidl.core.Secret.toObject, includeInstance),
    tokensList: jspb.Message.toObjectList(msg.getTokensList(),
    proto.flyteidl.core.OAuth2TokenRequest.toObject, includeInstance)
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
 * @return {!proto.flyteidl.core.SecurityContext}
 */
proto.flyteidl.core.SecurityContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.SecurityContext;
  return proto.flyteidl.core.SecurityContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.SecurityContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.SecurityContext}
 */
proto.flyteidl.core.SecurityContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.flyteidl.core.Identity;
      reader.readMessage(value,proto.flyteidl.core.Identity.deserializeBinaryFromReader);
      msg.setRunAs(value);
      break;
    case 2:
      var value = new proto.flyteidl.core.Secret;
      reader.readMessage(value,proto.flyteidl.core.Secret.deserializeBinaryFromReader);
      msg.addSecrets(value);
      break;
    case 3:
      var value = new proto.flyteidl.core.OAuth2TokenRequest;
      reader.readMessage(value,proto.flyteidl.core.OAuth2TokenRequest.deserializeBinaryFromReader);
      msg.addTokens(value);
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
proto.flyteidl.core.SecurityContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.SecurityContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.SecurityContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.SecurityContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRunAs();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.flyteidl.core.Identity.serializeBinaryToWriter
    );
  }
  f = message.getSecretsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.flyteidl.core.Secret.serializeBinaryToWriter
    );
  }
  f = message.getTokensList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.flyteidl.core.OAuth2TokenRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional Identity run_as = 1;
 * @return {?proto.flyteidl.core.Identity}
 */
proto.flyteidl.core.SecurityContext.prototype.getRunAs = function() {
  return /** @type{?proto.flyteidl.core.Identity} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.Identity, 1));
};


/**
 * @param {?proto.flyteidl.core.Identity|undefined} value
 * @return {!proto.flyteidl.core.SecurityContext} returns this
*/
proto.flyteidl.core.SecurityContext.prototype.setRunAs = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.SecurityContext} returns this
 */
proto.flyteidl.core.SecurityContext.prototype.clearRunAs = function() {
  return this.setRunAs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.SecurityContext.prototype.hasRunAs = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Secret secrets = 2;
 * @return {!Array<!proto.flyteidl.core.Secret>}
 */
proto.flyteidl.core.SecurityContext.prototype.getSecretsList = function() {
  return /** @type{!Array<!proto.flyteidl.core.Secret>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.flyteidl.core.Secret, 2));
};


/**
 * @param {!Array<!proto.flyteidl.core.Secret>} value
 * @return {!proto.flyteidl.core.SecurityContext} returns this
*/
proto.flyteidl.core.SecurityContext.prototype.setSecretsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.flyteidl.core.Secret=} opt_value
 * @param {number=} opt_index
 * @return {!proto.flyteidl.core.Secret}
 */
proto.flyteidl.core.SecurityContext.prototype.addSecrets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.flyteidl.core.Secret, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flyteidl.core.SecurityContext} returns this
 */
proto.flyteidl.core.SecurityContext.prototype.clearSecretsList = function() {
  return this.setSecretsList([]);
};


/**
 * repeated OAuth2TokenRequest tokens = 3;
 * @return {!Array<!proto.flyteidl.core.OAuth2TokenRequest>}
 */
proto.flyteidl.core.SecurityContext.prototype.getTokensList = function() {
  return /** @type{!Array<!proto.flyteidl.core.OAuth2TokenRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.flyteidl.core.OAuth2TokenRequest, 3));
};


/**
 * @param {!Array<!proto.flyteidl.core.OAuth2TokenRequest>} value
 * @return {!proto.flyteidl.core.SecurityContext} returns this
*/
proto.flyteidl.core.SecurityContext.prototype.setTokensList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.flyteidl.core.OAuth2TokenRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.flyteidl.core.OAuth2TokenRequest}
 */
proto.flyteidl.core.SecurityContext.prototype.addTokens = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.flyteidl.core.OAuth2TokenRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flyteidl.core.SecurityContext} returns this
 */
proto.flyteidl.core.SecurityContext.prototype.clearTokensList = function() {
  return this.setTokensList([]);
};


goog.object.extend(exports, proto.flyteidl.core);
