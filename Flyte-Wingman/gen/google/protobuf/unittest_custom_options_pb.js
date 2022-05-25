// source: google/protobuf/unittest_custom_options.proto
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

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.protobuf_unittest.Aggregate', null, global);
goog.exportSymbol('proto.protobuf_unittest.AggregateEnum', null, global);
goog.exportSymbol('proto.protobuf_unittest.AggregateMessage', null, global);
goog.exportSymbol('proto.protobuf_unittest.AggregateMessageSet', null, global);
goog.exportSymbol('proto.protobuf_unittest.AggregateMessageSetElement', null, global);
goog.exportSymbol('proto.protobuf_unittest.ComplexOpt6', null, global);
goog.exportSymbol('proto.protobuf_unittest.ComplexOptionType1', null, global);
goog.exportSymbol('proto.protobuf_unittest.ComplexOptionType2', null, global);
goog.exportSymbol('proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4', null, global);
goog.exportSymbol('proto.protobuf_unittest.ComplexOptionType3', null, global);
goog.exportSymbol('proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5', null, global);
goog.exportSymbol('proto.protobuf_unittest.CustomOptionFooClientMessage', null, global);
goog.exportSymbol('proto.protobuf_unittest.CustomOptionFooRequest', null, global);
goog.exportSymbol('proto.protobuf_unittest.CustomOptionFooResponse', null, global);
goog.exportSymbol('proto.protobuf_unittest.CustomOptionFooServerMessage', null, global);
goog.exportSymbol('proto.protobuf_unittest.CustomOptionMaxIntegerValues', null, global);
goog.exportSymbol('proto.protobuf_unittest.CustomOptionMinIntegerValues', null, global);
goog.exportSymbol('proto.protobuf_unittest.CustomOptionOtherValues', null, global);
goog.exportSymbol('proto.protobuf_unittest.DummyMessageContainingEnum', null, global);
goog.exportSymbol('proto.protobuf_unittest.DummyMessageContainingEnum.TestEnumType', null, global);
goog.exportSymbol('proto.protobuf_unittest.DummyMessageInvalidAsOptionType', null, global);
goog.exportSymbol('proto.protobuf_unittest.MethodOpt1', null, global);
goog.exportSymbol('proto.protobuf_unittest.NestedOptionType', null, global);
goog.exportSymbol('proto.protobuf_unittest.NestedOptionType.NestedEnum', null, global);
goog.exportSymbol('proto.protobuf_unittest.NestedOptionType.NestedMessage', null, global);
goog.exportSymbol('proto.protobuf_unittest.NewOptionType', null, global);
goog.exportSymbol('proto.protobuf_unittest.NewOptionType.TestEnum', null, global);
goog.exportSymbol('proto.protobuf_unittest.OldOptionType', null, global);
goog.exportSymbol('proto.protobuf_unittest.OldOptionType.TestEnum', null, global);
goog.exportSymbol('proto.protobuf_unittest.SettingRealsFromNegativeInts', null, global);
goog.exportSymbol('proto.protobuf_unittest.SettingRealsFromPositiveInts', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestMessageWithCustomOptions', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestMessageWithCustomOptions.AnEnum', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestMessageWithCustomOptions.AnoneofCase', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestMessageWithRequiredEnumOption', null, global);
goog.exportSymbol('proto.protobuf_unittest.VariousComplexOptions', null, global);
goog.exportSymbol('proto.protobuf_unittest.boolOpt', null, global);
goog.exportSymbol('proto.protobuf_unittest.bytesOpt', null, global);
goog.exportSymbol('proto.protobuf_unittest.complexOpt1', null, global);
goog.exportSymbol('proto.protobuf_unittest.complexOpt2', null, global);
goog.exportSymbol('proto.protobuf_unittest.complexOpt3', null, global);
goog.exportSymbol('proto.protobuf_unittest.complexOpt6', null, global);
goog.exportSymbol('proto.protobuf_unittest.corge', null, global);
goog.exportSymbol('proto.protobuf_unittest.doubleOpt', null, global);
goog.exportSymbol('proto.protobuf_unittest.enumOpt', null, global);
goog.exportSymbol('proto.protobuf_unittest.enumOpt1', null, global);
goog.exportSymbol('proto.protobuf_unittest.enumValueOpt1', null, global);
goog.exportSymbol('proto.protobuf_unittest.enumopt', null, global);
goog.exportSymbol('proto.protobuf_unittest.enumvalopt', null, global);
goog.exportSymbol('proto.protobuf_unittest.fieldOpt1', null, global);
goog.exportSymbol('proto.protobuf_unittest.fieldOpt2', null, global);
goog.exportSymbol('proto.protobuf_unittest.fieldopt', null, global);
goog.exportSymbol('proto.protobuf_unittest.fileOpt1', null, global);
goog.exportSymbol('proto.protobuf_unittest.fileopt', null, global);
goog.exportSymbol('proto.protobuf_unittest.fixed32Opt', null, global);
goog.exportSymbol('proto.protobuf_unittest.fixed64Opt', null, global);
goog.exportSymbol('proto.protobuf_unittest.floatOpt', null, global);
goog.exportSymbol('proto.protobuf_unittest.garply', null, global);
goog.exportSymbol('proto.protobuf_unittest.grault', null, global);
goog.exportSymbol('proto.protobuf_unittest.int32Opt', null, global);
goog.exportSymbol('proto.protobuf_unittest.int64Opt', null, global);
goog.exportSymbol('proto.protobuf_unittest.messageOpt1', null, global);
goog.exportSymbol('proto.protobuf_unittest.messageTypeOpt', null, global);
goog.exportSymbol('proto.protobuf_unittest.methodOpt1', null, global);
goog.exportSymbol('proto.protobuf_unittest.methodopt', null, global);
goog.exportSymbol('proto.protobuf_unittest.msgopt', null, global);
goog.exportSymbol('proto.protobuf_unittest.oneofOpt1', null, global);
goog.exportSymbol('proto.protobuf_unittest.quux', null, global);
goog.exportSymbol('proto.protobuf_unittest.requiredEnumOpt', null, global);
goog.exportSymbol('proto.protobuf_unittest.serviceOpt1', null, global);
goog.exportSymbol('proto.protobuf_unittest.serviceopt', null, global);
goog.exportSymbol('proto.protobuf_unittest.sfixed32Opt', null, global);
goog.exportSymbol('proto.protobuf_unittest.sfixed64Opt', null, global);
goog.exportSymbol('proto.protobuf_unittest.sint32Opt', null, global);
goog.exportSymbol('proto.protobuf_unittest.sint64Opt', null, global);
goog.exportSymbol('proto.protobuf_unittest.stringOpt', null, global);
goog.exportSymbol('proto.protobuf_unittest.uint32Opt', null, global);
goog.exportSymbol('proto.protobuf_unittest.uint64Opt', null, global);
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
proto.protobuf_unittest.TestMessageWithCustomOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.protobuf_unittest.TestMessageWithCustomOptions.oneofGroups_);
};
goog.inherits(proto.protobuf_unittest.TestMessageWithCustomOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestMessageWithCustomOptions.displayName = 'proto.protobuf_unittest.TestMessageWithCustomOptions';
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
proto.protobuf_unittest.CustomOptionFooRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.CustomOptionFooRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.CustomOptionFooRequest.displayName = 'proto.protobuf_unittest.CustomOptionFooRequest';
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
proto.protobuf_unittest.CustomOptionFooResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.CustomOptionFooResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.CustomOptionFooResponse.displayName = 'proto.protobuf_unittest.CustomOptionFooResponse';
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
proto.protobuf_unittest.CustomOptionFooClientMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.CustomOptionFooClientMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.CustomOptionFooClientMessage.displayName = 'proto.protobuf_unittest.CustomOptionFooClientMessage';
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
proto.protobuf_unittest.CustomOptionFooServerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.CustomOptionFooServerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.CustomOptionFooServerMessage.displayName = 'proto.protobuf_unittest.CustomOptionFooServerMessage';
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
proto.protobuf_unittest.DummyMessageContainingEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.DummyMessageContainingEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.DummyMessageContainingEnum.displayName = 'proto.protobuf_unittest.DummyMessageContainingEnum';
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
proto.protobuf_unittest.DummyMessageInvalidAsOptionType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.DummyMessageInvalidAsOptionType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.DummyMessageInvalidAsOptionType.displayName = 'proto.protobuf_unittest.DummyMessageInvalidAsOptionType';
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
proto.protobuf_unittest.CustomOptionMinIntegerValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.CustomOptionMinIntegerValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.CustomOptionMinIntegerValues.displayName = 'proto.protobuf_unittest.CustomOptionMinIntegerValues';
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
proto.protobuf_unittest.CustomOptionMaxIntegerValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.CustomOptionMaxIntegerValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.CustomOptionMaxIntegerValues.displayName = 'proto.protobuf_unittest.CustomOptionMaxIntegerValues';
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
proto.protobuf_unittest.CustomOptionOtherValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.CustomOptionOtherValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.CustomOptionOtherValues.displayName = 'proto.protobuf_unittest.CustomOptionOtherValues';
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
proto.protobuf_unittest.SettingRealsFromPositiveInts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.SettingRealsFromPositiveInts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.SettingRealsFromPositiveInts.displayName = 'proto.protobuf_unittest.SettingRealsFromPositiveInts';
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
proto.protobuf_unittest.SettingRealsFromNegativeInts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.SettingRealsFromNegativeInts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.SettingRealsFromNegativeInts.displayName = 'proto.protobuf_unittest.SettingRealsFromNegativeInts';
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
proto.protobuf_unittest.ComplexOptionType1 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 5, proto.protobuf_unittest.ComplexOptionType1.repeatedFields_, null);
};
goog.inherits(proto.protobuf_unittest.ComplexOptionType1, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.ComplexOptionType1.displayName = 'proto.protobuf_unittest.ComplexOptionType1';
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
proto.protobuf_unittest.ComplexOptionType1.extensions = {};


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
proto.protobuf_unittest.ComplexOptionType1.extensionsBinary = {};

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
proto.protobuf_unittest.ComplexOptionType2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 5, proto.protobuf_unittest.ComplexOptionType2.repeatedFields_, null);
};
goog.inherits(proto.protobuf_unittest.ComplexOptionType2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.ComplexOptionType2.displayName = 'proto.protobuf_unittest.ComplexOptionType2';
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
proto.protobuf_unittest.ComplexOptionType2.extensions = {};


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
proto.protobuf_unittest.ComplexOptionType2.extensionsBinary = {};

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
proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.displayName = 'proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4';
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
proto.protobuf_unittest.ComplexOptionType3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.ComplexOptionType3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.ComplexOptionType3.displayName = 'proto.protobuf_unittest.ComplexOptionType3';
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
proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5.displayName = 'proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5';
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
proto.protobuf_unittest.ComplexOpt6 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protobuf_unittest.ComplexOpt6, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.ComplexOpt6.displayName = 'proto.protobuf_unittest.ComplexOpt6';
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
proto.protobuf_unittest.VariousComplexOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.VariousComplexOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.VariousComplexOptions.displayName = 'proto.protobuf_unittest.VariousComplexOptions';
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
proto.protobuf_unittest.AggregateMessageSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 1, null, null);
};
goog.inherits(proto.protobuf_unittest.AggregateMessageSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.AggregateMessageSet.displayName = 'proto.protobuf_unittest.AggregateMessageSet';
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
proto.protobuf_unittest.AggregateMessageSet.extensions = {};


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
proto.protobuf_unittest.AggregateMessageSet.extensionsBinary = {};

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
proto.protobuf_unittest.AggregateMessageSetElement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.AggregateMessageSetElement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.AggregateMessageSetElement.displayName = 'proto.protobuf_unittest.AggregateMessageSetElement';
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
proto.protobuf_unittest.Aggregate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.Aggregate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.Aggregate.displayName = 'proto.protobuf_unittest.Aggregate';
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
proto.protobuf_unittest.AggregateMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.AggregateMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.AggregateMessage.displayName = 'proto.protobuf_unittest.AggregateMessage';
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
proto.protobuf_unittest.NestedOptionType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.NestedOptionType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.NestedOptionType.displayName = 'proto.protobuf_unittest.NestedOptionType';
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
proto.protobuf_unittest.NestedOptionType.NestedMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.NestedOptionType.NestedMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.NestedOptionType.NestedMessage.displayName = 'proto.protobuf_unittest.NestedOptionType.NestedMessage';
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
proto.protobuf_unittest.OldOptionType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.OldOptionType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.OldOptionType.displayName = 'proto.protobuf_unittest.OldOptionType';
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
proto.protobuf_unittest.NewOptionType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.NewOptionType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.NewOptionType.displayName = 'proto.protobuf_unittest.NewOptionType';
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
proto.protobuf_unittest.TestMessageWithRequiredEnumOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestMessageWithRequiredEnumOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestMessageWithRequiredEnumOption.displayName = 'proto.protobuf_unittest.TestMessageWithRequiredEnumOption';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.protobuf_unittest.TestMessageWithCustomOptions.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.protobuf_unittest.TestMessageWithCustomOptions.AnoneofCase = {
  ANONEOF_NOT_SET: 0,
  ONEOF_FIELD: 2
};

/**
 * @return {proto.protobuf_unittest.TestMessageWithCustomOptions.AnoneofCase}
 */
proto.protobuf_unittest.TestMessageWithCustomOptions.prototype.getAnoneofCase = function() {
  return /** @type {proto.protobuf_unittest.TestMessageWithCustomOptions.AnoneofCase} */(jspb.Message.computeOneofCase(this, proto.protobuf_unittest.TestMessageWithCustomOptions.oneofGroups_[0]));
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
proto.protobuf_unittest.TestMessageWithCustomOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestMessageWithCustomOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestMessageWithCustomOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestMessageWithCustomOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    field1: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    oneofField: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    mapFieldMap: (f = msg.getMapFieldMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.protobuf_unittest.TestMessageWithCustomOptions}
 */
proto.protobuf_unittest.TestMessageWithCustomOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestMessageWithCustomOptions;
  return proto.protobuf_unittest.TestMessageWithCustomOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestMessageWithCustomOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestMessageWithCustomOptions}
 */
proto.protobuf_unittest.TestMessageWithCustomOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setField1(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOneofField(value);
      break;
    case 3:
      var value = msg.getMapFieldMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
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
proto.protobuf_unittest.TestMessageWithCustomOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestMessageWithCustomOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestMessageWithCustomOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestMessageWithCustomOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMapFieldMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * @enum {number}
 */
proto.protobuf_unittest.TestMessageWithCustomOptions.AnEnum = {
  ANENUM_VAL1: 1,
  ANENUM_VAL2: 2
};

/**
 * optional string field1 = 1;
 * @return {string}
 */
proto.protobuf_unittest.TestMessageWithCustomOptions.prototype.getField1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protobuf_unittest.TestMessageWithCustomOptions} returns this
 */
proto.protobuf_unittest.TestMessageWithCustomOptions.prototype.setField1 = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestMessageWithCustomOptions} returns this
 */
proto.protobuf_unittest.TestMessageWithCustomOptions.prototype.clearField1 = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestMessageWithCustomOptions.prototype.hasField1 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 oneof_field = 2;
 * @return {number}
 */
proto.protobuf_unittest.TestMessageWithCustomOptions.prototype.getOneofField = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestMessageWithCustomOptions} returns this
 */
proto.protobuf_unittest.TestMessageWithCustomOptions.prototype.setOneofField = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.protobuf_unittest.TestMessageWithCustomOptions.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestMessageWithCustomOptions} returns this
 */
proto.protobuf_unittest.TestMessageWithCustomOptions.prototype.clearOneofField = function() {
  return jspb.Message.setOneofField(this, 2, proto.protobuf_unittest.TestMessageWithCustomOptions.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestMessageWithCustomOptions.prototype.hasOneofField = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, string> map_field = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.protobuf_unittest.TestMessageWithCustomOptions.prototype.getMapFieldMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.protobuf_unittest.TestMessageWithCustomOptions} returns this
 */
proto.protobuf_unittest.TestMessageWithCustomOptions.prototype.clearMapFieldMap = function() {
  this.getMapFieldMap().clear();
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
proto.protobuf_unittest.CustomOptionFooRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.CustomOptionFooRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.CustomOptionFooRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.CustomOptionFooRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protobuf_unittest.CustomOptionFooRequest}
 */
proto.protobuf_unittest.CustomOptionFooRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.CustomOptionFooRequest;
  return proto.protobuf_unittest.CustomOptionFooRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.CustomOptionFooRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.CustomOptionFooRequest}
 */
proto.protobuf_unittest.CustomOptionFooRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protobuf_unittest.CustomOptionFooRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.CustomOptionFooRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.CustomOptionFooRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.CustomOptionFooRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.protobuf_unittest.CustomOptionFooResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.CustomOptionFooResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.CustomOptionFooResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.CustomOptionFooResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protobuf_unittest.CustomOptionFooResponse}
 */
proto.protobuf_unittest.CustomOptionFooResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.CustomOptionFooResponse;
  return proto.protobuf_unittest.CustomOptionFooResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.CustomOptionFooResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.CustomOptionFooResponse}
 */
proto.protobuf_unittest.CustomOptionFooResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protobuf_unittest.CustomOptionFooResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.CustomOptionFooResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.CustomOptionFooResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.CustomOptionFooResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.protobuf_unittest.CustomOptionFooClientMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.CustomOptionFooClientMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.CustomOptionFooClientMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.CustomOptionFooClientMessage.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protobuf_unittest.CustomOptionFooClientMessage}
 */
proto.protobuf_unittest.CustomOptionFooClientMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.CustomOptionFooClientMessage;
  return proto.protobuf_unittest.CustomOptionFooClientMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.CustomOptionFooClientMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.CustomOptionFooClientMessage}
 */
proto.protobuf_unittest.CustomOptionFooClientMessage.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protobuf_unittest.CustomOptionFooClientMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.CustomOptionFooClientMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.CustomOptionFooClientMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.CustomOptionFooClientMessage.serializeBinaryToWriter = function(message, writer) {
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
proto.protobuf_unittest.CustomOptionFooServerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.CustomOptionFooServerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.CustomOptionFooServerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.CustomOptionFooServerMessage.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protobuf_unittest.CustomOptionFooServerMessage}
 */
proto.protobuf_unittest.CustomOptionFooServerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.CustomOptionFooServerMessage;
  return proto.protobuf_unittest.CustomOptionFooServerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.CustomOptionFooServerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.CustomOptionFooServerMessage}
 */
proto.protobuf_unittest.CustomOptionFooServerMessage.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protobuf_unittest.CustomOptionFooServerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.CustomOptionFooServerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.CustomOptionFooServerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.CustomOptionFooServerMessage.serializeBinaryToWriter = function(message, writer) {
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
proto.protobuf_unittest.DummyMessageContainingEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.DummyMessageContainingEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.DummyMessageContainingEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.DummyMessageContainingEnum.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protobuf_unittest.DummyMessageContainingEnum}
 */
proto.protobuf_unittest.DummyMessageContainingEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.DummyMessageContainingEnum;
  return proto.protobuf_unittest.DummyMessageContainingEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.DummyMessageContainingEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.DummyMessageContainingEnum}
 */
proto.protobuf_unittest.DummyMessageContainingEnum.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protobuf_unittest.DummyMessageContainingEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.DummyMessageContainingEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.DummyMessageContainingEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.DummyMessageContainingEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.protobuf_unittest.DummyMessageContainingEnum.TestEnumType = {
  TEST_OPTION_ENUM_TYPE1: 22,
  TEST_OPTION_ENUM_TYPE2: -23
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
proto.protobuf_unittest.DummyMessageInvalidAsOptionType.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.DummyMessageInvalidAsOptionType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.DummyMessageInvalidAsOptionType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.DummyMessageInvalidAsOptionType.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protobuf_unittest.DummyMessageInvalidAsOptionType}
 */
proto.protobuf_unittest.DummyMessageInvalidAsOptionType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.DummyMessageInvalidAsOptionType;
  return proto.protobuf_unittest.DummyMessageInvalidAsOptionType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.DummyMessageInvalidAsOptionType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.DummyMessageInvalidAsOptionType}
 */
proto.protobuf_unittest.DummyMessageInvalidAsOptionType.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protobuf_unittest.DummyMessageInvalidAsOptionType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.DummyMessageInvalidAsOptionType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.DummyMessageInvalidAsOptionType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.DummyMessageInvalidAsOptionType.serializeBinaryToWriter = function(message, writer) {
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
proto.protobuf_unittest.CustomOptionMinIntegerValues.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.CustomOptionMinIntegerValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.CustomOptionMinIntegerValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.CustomOptionMinIntegerValues.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protobuf_unittest.CustomOptionMinIntegerValues}
 */
proto.protobuf_unittest.CustomOptionMinIntegerValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.CustomOptionMinIntegerValues;
  return proto.protobuf_unittest.CustomOptionMinIntegerValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.CustomOptionMinIntegerValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.CustomOptionMinIntegerValues}
 */
proto.protobuf_unittest.CustomOptionMinIntegerValues.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protobuf_unittest.CustomOptionMinIntegerValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.CustomOptionMinIntegerValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.CustomOptionMinIntegerValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.CustomOptionMinIntegerValues.serializeBinaryToWriter = function(message, writer) {
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
proto.protobuf_unittest.CustomOptionMaxIntegerValues.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.CustomOptionMaxIntegerValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.CustomOptionMaxIntegerValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.CustomOptionMaxIntegerValues.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protobuf_unittest.CustomOptionMaxIntegerValues}
 */
proto.protobuf_unittest.CustomOptionMaxIntegerValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.CustomOptionMaxIntegerValues;
  return proto.protobuf_unittest.CustomOptionMaxIntegerValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.CustomOptionMaxIntegerValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.CustomOptionMaxIntegerValues}
 */
proto.protobuf_unittest.CustomOptionMaxIntegerValues.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protobuf_unittest.CustomOptionMaxIntegerValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.CustomOptionMaxIntegerValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.CustomOptionMaxIntegerValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.CustomOptionMaxIntegerValues.serializeBinaryToWriter = function(message, writer) {
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
proto.protobuf_unittest.CustomOptionOtherValues.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.CustomOptionOtherValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.CustomOptionOtherValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.CustomOptionOtherValues.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protobuf_unittest.CustomOptionOtherValues}
 */
proto.protobuf_unittest.CustomOptionOtherValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.CustomOptionOtherValues;
  return proto.protobuf_unittest.CustomOptionOtherValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.CustomOptionOtherValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.CustomOptionOtherValues}
 */
proto.protobuf_unittest.CustomOptionOtherValues.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protobuf_unittest.CustomOptionOtherValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.CustomOptionOtherValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.CustomOptionOtherValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.CustomOptionOtherValues.serializeBinaryToWriter = function(message, writer) {
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
proto.protobuf_unittest.SettingRealsFromPositiveInts.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.SettingRealsFromPositiveInts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.SettingRealsFromPositiveInts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.SettingRealsFromPositiveInts.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protobuf_unittest.SettingRealsFromPositiveInts}
 */
proto.protobuf_unittest.SettingRealsFromPositiveInts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.SettingRealsFromPositiveInts;
  return proto.protobuf_unittest.SettingRealsFromPositiveInts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.SettingRealsFromPositiveInts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.SettingRealsFromPositiveInts}
 */
proto.protobuf_unittest.SettingRealsFromPositiveInts.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protobuf_unittest.SettingRealsFromPositiveInts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.SettingRealsFromPositiveInts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.SettingRealsFromPositiveInts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.SettingRealsFromPositiveInts.serializeBinaryToWriter = function(message, writer) {
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
proto.protobuf_unittest.SettingRealsFromNegativeInts.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.SettingRealsFromNegativeInts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.SettingRealsFromNegativeInts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.SettingRealsFromNegativeInts.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protobuf_unittest.SettingRealsFromNegativeInts}
 */
proto.protobuf_unittest.SettingRealsFromNegativeInts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.SettingRealsFromNegativeInts;
  return proto.protobuf_unittest.SettingRealsFromNegativeInts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.SettingRealsFromNegativeInts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.SettingRealsFromNegativeInts}
 */
proto.protobuf_unittest.SettingRealsFromNegativeInts.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protobuf_unittest.SettingRealsFromNegativeInts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.SettingRealsFromNegativeInts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.SettingRealsFromNegativeInts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.SettingRealsFromNegativeInts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protobuf_unittest.ComplexOptionType1.repeatedFields_ = [4];



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
proto.protobuf_unittest.ComplexOptionType1.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.ComplexOptionType1.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.ComplexOptionType1} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.ComplexOptionType1.toObject = function(includeInstance, msg) {
  var f, obj = {
    foo: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    foo2: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    foo3: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    foo4List: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.protobuf_unittest.ComplexOptionType1.extensions, proto.protobuf_unittest.ComplexOptionType1.prototype.getExtension,
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
 * @return {!proto.protobuf_unittest.ComplexOptionType1}
 */
proto.protobuf_unittest.ComplexOptionType1.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.ComplexOptionType1;
  return proto.protobuf_unittest.ComplexOptionType1.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.ComplexOptionType1} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.ComplexOptionType1}
 */
proto.protobuf_unittest.ComplexOptionType1.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFoo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFoo2(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFoo3(value);
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFoo4(values[i]);
      }
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.protobuf_unittest.ComplexOptionType1.extensionsBinary,
        proto.protobuf_unittest.ComplexOptionType1.prototype.getExtension,
        proto.protobuf_unittest.ComplexOptionType1.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protobuf_unittest.ComplexOptionType1.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.ComplexOptionType1.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.ComplexOptionType1} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.ComplexOptionType1.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getFoo4List();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      4,
      f
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.protobuf_unittest.ComplexOptionType1.extensionsBinary, proto.protobuf_unittest.ComplexOptionType1.prototype.getExtension);
};


/**
 * optional int32 foo = 1;
 * @return {number}
 */
proto.protobuf_unittest.ComplexOptionType1.prototype.getFoo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.ComplexOptionType1} returns this
 */
proto.protobuf_unittest.ComplexOptionType1.prototype.setFoo = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.ComplexOptionType1} returns this
 */
proto.protobuf_unittest.ComplexOptionType1.prototype.clearFoo = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.ComplexOptionType1.prototype.hasFoo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 foo2 = 2;
 * @return {number}
 */
proto.protobuf_unittest.ComplexOptionType1.prototype.getFoo2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.ComplexOptionType1} returns this
 */
proto.protobuf_unittest.ComplexOptionType1.prototype.setFoo2 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.ComplexOptionType1} returns this
 */
proto.protobuf_unittest.ComplexOptionType1.prototype.clearFoo2 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.ComplexOptionType1.prototype.hasFoo2 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 foo3 = 3;
 * @return {number}
 */
proto.protobuf_unittest.ComplexOptionType1.prototype.getFoo3 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.ComplexOptionType1} returns this
 */
proto.protobuf_unittest.ComplexOptionType1.prototype.setFoo3 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.ComplexOptionType1} returns this
 */
proto.protobuf_unittest.ComplexOptionType1.prototype.clearFoo3 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.ComplexOptionType1.prototype.hasFoo3 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated int32 foo4 = 4;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.ComplexOptionType1.prototype.getFoo4List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.ComplexOptionType1} returns this
 */
proto.protobuf_unittest.ComplexOptionType1.prototype.setFoo4List = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.ComplexOptionType1} returns this
 */
proto.protobuf_unittest.ComplexOptionType1.prototype.addFoo4 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.ComplexOptionType1} returns this
 */
proto.protobuf_unittest.ComplexOptionType1.prototype.clearFoo4List = function() {
  return this.setFoo4List([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protobuf_unittest.ComplexOptionType2.repeatedFields_ = [4];



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
proto.protobuf_unittest.ComplexOptionType2.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.ComplexOptionType2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.ComplexOptionType2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.ComplexOptionType2.toObject = function(includeInstance, msg) {
  var f, obj = {
    bar: (f = msg.getBar()) && proto.protobuf_unittest.ComplexOptionType1.toObject(includeInstance, f),
    baz: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    fred: (f = msg.getFred()) && proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.toObject(includeInstance, f),
    barneyList: jspb.Message.toObjectList(msg.getBarneyList(),
    proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.protobuf_unittest.ComplexOptionType2.extensions, proto.protobuf_unittest.ComplexOptionType2.prototype.getExtension,
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
 * @return {!proto.protobuf_unittest.ComplexOptionType2}
 */
proto.protobuf_unittest.ComplexOptionType2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.ComplexOptionType2;
  return proto.protobuf_unittest.ComplexOptionType2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.ComplexOptionType2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.ComplexOptionType2}
 */
proto.protobuf_unittest.ComplexOptionType2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protobuf_unittest.ComplexOptionType1;
      reader.readMessage(value,proto.protobuf_unittest.ComplexOptionType1.deserializeBinaryFromReader);
      msg.setBar(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBaz(value);
      break;
    case 3:
      var value = new proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4;
      reader.readMessage(value,proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.deserializeBinaryFromReader);
      msg.setFred(value);
      break;
    case 4:
      var value = new proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4;
      reader.readMessage(value,proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.deserializeBinaryFromReader);
      msg.addBarney(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.protobuf_unittest.ComplexOptionType2.extensionsBinary,
        proto.protobuf_unittest.ComplexOptionType2.prototype.getExtension,
        proto.protobuf_unittest.ComplexOptionType2.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protobuf_unittest.ComplexOptionType2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.ComplexOptionType2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.ComplexOptionType2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.ComplexOptionType2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBar();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protobuf_unittest.ComplexOptionType1.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getFred();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.serializeBinaryToWriter
    );
  }
  f = message.getBarneyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.protobuf_unittest.ComplexOptionType2.extensionsBinary, proto.protobuf_unittest.ComplexOptionType2.prototype.getExtension);
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
proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.toObject = function(includeInstance, msg) {
  var f, obj = {
    waldo: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4}
 */
proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4;
  return proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4}
 */
proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWaldo(value);
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
proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.serializeBinaryToWriter = function(message, writer) {
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
 * optional int32 waldo = 1;
 * @return {number}
 */
proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.prototype.getWaldo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4} returns this
 */
proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.prototype.setWaldo = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4} returns this
 */
proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.prototype.clearWaldo = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.prototype.hasWaldo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `complexOpt4`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4>}
 */
proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.complexOpt4 = new jspb.ExtensionFieldInfo(
    7633546,
    {complexOpt4: 0},
    proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.toObject),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7633546] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.complexOpt4,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.serializeBinaryToWriter,
    proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7633546] = proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4.complexOpt4;

/**
 * optional ComplexOptionType1 bar = 1;
 * @return {?proto.protobuf_unittest.ComplexOptionType1}
 */
proto.protobuf_unittest.ComplexOptionType2.prototype.getBar = function() {
  return /** @type{?proto.protobuf_unittest.ComplexOptionType1} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.ComplexOptionType1, 1));
};


/**
 * @param {?proto.protobuf_unittest.ComplexOptionType1|undefined} value
 * @return {!proto.protobuf_unittest.ComplexOptionType2} returns this
*/
proto.protobuf_unittest.ComplexOptionType2.prototype.setBar = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.ComplexOptionType2} returns this
 */
proto.protobuf_unittest.ComplexOptionType2.prototype.clearBar = function() {
  return this.setBar(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.ComplexOptionType2.prototype.hasBar = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 baz = 2;
 * @return {number}
 */
proto.protobuf_unittest.ComplexOptionType2.prototype.getBaz = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.ComplexOptionType2} returns this
 */
proto.protobuf_unittest.ComplexOptionType2.prototype.setBaz = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.ComplexOptionType2} returns this
 */
proto.protobuf_unittest.ComplexOptionType2.prototype.clearBaz = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.ComplexOptionType2.prototype.hasBaz = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ComplexOptionType4 fred = 3;
 * @return {?proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4}
 */
proto.protobuf_unittest.ComplexOptionType2.prototype.getFred = function() {
  return /** @type{?proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4, 3));
};


/**
 * @param {?proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4|undefined} value
 * @return {!proto.protobuf_unittest.ComplexOptionType2} returns this
*/
proto.protobuf_unittest.ComplexOptionType2.prototype.setFred = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.ComplexOptionType2} returns this
 */
proto.protobuf_unittest.ComplexOptionType2.prototype.clearFred = function() {
  return this.setFred(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.ComplexOptionType2.prototype.hasFred = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated ComplexOptionType4 barney = 4;
 * @return {!Array<!proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4>}
 */
proto.protobuf_unittest.ComplexOptionType2.prototype.getBarneyList = function() {
  return /** @type{!Array<!proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4, 4));
};


/**
 * @param {!Array<!proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4>} value
 * @return {!proto.protobuf_unittest.ComplexOptionType2} returns this
*/
proto.protobuf_unittest.ComplexOptionType2.prototype.setBarneyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4}
 */
proto.protobuf_unittest.ComplexOptionType2.prototype.addBarney = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.protobuf_unittest.ComplexOptionType2.ComplexOptionType4, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.ComplexOptionType2} returns this
 */
proto.protobuf_unittest.ComplexOptionType2.prototype.clearBarneyList = function() {
  return this.setBarneyList([]);
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
proto.protobuf_unittest.ComplexOptionType3.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.ComplexOptionType3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.ComplexOptionType3} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.ComplexOptionType3.toObject = function(includeInstance, msg) {
  var f, obj = {
    qux: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    complexOptionType5: (f = msg.getComplexOptionType5()) && proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5.toObject(includeInstance, f)
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
 * @return {!proto.protobuf_unittest.ComplexOptionType3}
 */
proto.protobuf_unittest.ComplexOptionType3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.ComplexOptionType3;
  return proto.protobuf_unittest.ComplexOptionType3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.ComplexOptionType3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.ComplexOptionType3}
 */
proto.protobuf_unittest.ComplexOptionType3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQux(value);
      break;
    case 2:
      var value = new proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5;
      reader.readGroup(2, value,proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5.deserializeBinaryFromReader);
      msg.setComplexOptionType5(value);
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
proto.protobuf_unittest.ComplexOptionType3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.ComplexOptionType3.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.ComplexOptionType3} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.ComplexOptionType3.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getComplexOptionType5();
  if (f != null) {
    writer.writeGroup(
      2,
      f,
      proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5.serializeBinaryToWriter
    );
  }
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
proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5.toObject = function(includeInstance, msg) {
  var f, obj = {
    plugh: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5}
 */
proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5;
  return proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5}
 */
proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlugh(value);
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
proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 plugh = 3;
 * @return {number}
 */
proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5.prototype.getPlugh = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5} returns this
 */
proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5.prototype.setPlugh = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5} returns this
 */
proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5.prototype.clearPlugh = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5.prototype.hasPlugh = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 qux = 1;
 * @return {number}
 */
proto.protobuf_unittest.ComplexOptionType3.prototype.getQux = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.ComplexOptionType3} returns this
 */
proto.protobuf_unittest.ComplexOptionType3.prototype.setQux = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.ComplexOptionType3} returns this
 */
proto.protobuf_unittest.ComplexOptionType3.prototype.clearQux = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.ComplexOptionType3.prototype.hasQux = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional group ComplexOptionType5 = 2;
 * @return {?proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5}
 */
proto.protobuf_unittest.ComplexOptionType3.prototype.getComplexOptionType5 = function() {
  return /** @type{?proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5, 2));
};


/**
 * @param {?proto.protobuf_unittest.ComplexOptionType3.ComplexOptionType5|undefined} value
 * @return {!proto.protobuf_unittest.ComplexOptionType3} returns this
*/
proto.protobuf_unittest.ComplexOptionType3.prototype.setComplexOptionType5 = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.ComplexOptionType3} returns this
 */
proto.protobuf_unittest.ComplexOptionType3.prototype.clearComplexOptionType5 = function() {
  return this.setComplexOptionType5(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.ComplexOptionType3.prototype.hasComplexOptionType5 = function() {
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
proto.protobuf_unittest.ComplexOpt6.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.ComplexOpt6.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.ComplexOpt6} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.ComplexOpt6.toObject = function(includeInstance, msg) {
  var f, obj = {
    xyzzy: (f = jspb.Message.getField(msg, 7593951)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.ComplexOpt6}
 */
proto.protobuf_unittest.ComplexOpt6.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.ComplexOpt6;
  return proto.protobuf_unittest.ComplexOpt6.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.ComplexOpt6} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.ComplexOpt6}
 */
proto.protobuf_unittest.ComplexOpt6.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 7593951:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setXyzzy(value);
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
proto.protobuf_unittest.ComplexOpt6.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.ComplexOpt6.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.ComplexOpt6} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.ComplexOpt6.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 7593951));
  if (f != null) {
    writer.writeInt32(
      7593951,
      f
    );
  }
};


/**
 * optional int32 xyzzy = 7593951;
 * @return {number}
 */
proto.protobuf_unittest.ComplexOpt6.prototype.getXyzzy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7593951, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.ComplexOpt6} returns this
 */
proto.protobuf_unittest.ComplexOpt6.prototype.setXyzzy = function(value) {
  return jspb.Message.setField(this, 7593951, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.ComplexOpt6} returns this
 */
proto.protobuf_unittest.ComplexOpt6.prototype.clearXyzzy = function() {
  return jspb.Message.setField(this, 7593951, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.ComplexOpt6.prototype.hasXyzzy = function() {
  return jspb.Message.getField(this, 7593951) != null;
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
proto.protobuf_unittest.VariousComplexOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.VariousComplexOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.VariousComplexOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.VariousComplexOptions.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protobuf_unittest.VariousComplexOptions}
 */
proto.protobuf_unittest.VariousComplexOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.VariousComplexOptions;
  return proto.protobuf_unittest.VariousComplexOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.VariousComplexOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.VariousComplexOptions}
 */
proto.protobuf_unittest.VariousComplexOptions.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protobuf_unittest.VariousComplexOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.VariousComplexOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.VariousComplexOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.VariousComplexOptions.serializeBinaryToWriter = function(message, writer) {
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
proto.protobuf_unittest.AggregateMessageSet.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.AggregateMessageSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.AggregateMessageSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.AggregateMessageSet.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.protobuf_unittest.AggregateMessageSet.extensions, proto.protobuf_unittest.AggregateMessageSet.prototype.getExtension,
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
 * @return {!proto.protobuf_unittest.AggregateMessageSet}
 */
proto.protobuf_unittest.AggregateMessageSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.AggregateMessageSet;
  return proto.protobuf_unittest.AggregateMessageSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.AggregateMessageSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.AggregateMessageSet}
 */
proto.protobuf_unittest.AggregateMessageSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.protobuf_unittest.AggregateMessageSet.extensionsBinary,
        proto.protobuf_unittest.AggregateMessageSet.prototype.getExtension,
        proto.protobuf_unittest.AggregateMessageSet.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protobuf_unittest.AggregateMessageSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.AggregateMessageSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.AggregateMessageSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.AggregateMessageSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.protobuf_unittest.AggregateMessageSet.extensionsBinary, proto.protobuf_unittest.AggregateMessageSet.prototype.getExtension);
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
proto.protobuf_unittest.AggregateMessageSetElement.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.AggregateMessageSetElement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.AggregateMessageSetElement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.AggregateMessageSetElement.toObject = function(includeInstance, msg) {
  var f, obj = {
    s: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.AggregateMessageSetElement}
 */
proto.protobuf_unittest.AggregateMessageSetElement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.AggregateMessageSetElement;
  return proto.protobuf_unittest.AggregateMessageSetElement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.AggregateMessageSetElement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.AggregateMessageSetElement}
 */
proto.protobuf_unittest.AggregateMessageSetElement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setS(value);
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
proto.protobuf_unittest.AggregateMessageSetElement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.AggregateMessageSetElement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.AggregateMessageSetElement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.AggregateMessageSetElement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `messageSetExtension`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.AggregateMessageSetElement>}
 */
proto.protobuf_unittest.AggregateMessageSetElement.messageSetExtension = new jspb.ExtensionFieldInfo(
    15447542,
    {messageSetExtension: 0},
    proto.protobuf_unittest.AggregateMessageSetElement,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.AggregateMessageSetElement.toObject),
    0);

proto.protobuf_unittest.AggregateMessageSet.extensionsBinary[15447542] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.AggregateMessageSetElement.messageSetExtension,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessageSet,
    proto.protobuf_unittest.AggregateMessageSetElement.serializeBinaryToWriter,
    proto.protobuf_unittest.AggregateMessageSetElement.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.AggregateMessageSet.extensions[15447542] = proto.protobuf_unittest.AggregateMessageSetElement.messageSetExtension;

/**
 * optional string s = 1;
 * @return {string}
 */
proto.protobuf_unittest.AggregateMessageSetElement.prototype.getS = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protobuf_unittest.AggregateMessageSetElement} returns this
 */
proto.protobuf_unittest.AggregateMessageSetElement.prototype.setS = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.AggregateMessageSetElement} returns this
 */
proto.protobuf_unittest.AggregateMessageSetElement.prototype.clearS = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.AggregateMessageSetElement.prototype.hasS = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `messageSetExtension`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.AggregateMessageSetElement>}
 */
proto.protobuf_unittest.AggregateMessageSetElement.messageSetExtension = new jspb.ExtensionFieldInfo(
    15447542,
    {messageSetExtension: 0},
    proto.protobuf_unittest.AggregateMessageSetElement,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.AggregateMessageSetElement.toObject),
    0);

proto.protobuf_unittest.AggregateMessageSet.extensionsBinary[15447542] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.AggregateMessageSetElement.messageSetExtension,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessageSet,
    proto.protobuf_unittest.AggregateMessageSetElement.serializeBinaryToWriter,
    proto.protobuf_unittest.AggregateMessageSetElement.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.AggregateMessageSet.extensions[15447542] = proto.protobuf_unittest.AggregateMessageSetElement.messageSetExtension;




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
proto.protobuf_unittest.Aggregate.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.Aggregate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.Aggregate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.Aggregate.toObject = function(includeInstance, msg) {
  var f, obj = {
    i: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    s: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    sub: (f = msg.getSub()) && proto.protobuf_unittest.Aggregate.toObject(includeInstance, f),
    file: (f = msg.getFile()) && google_protobuf_descriptor_pb.FileOptions.toObject(includeInstance, f),
    mset: (f = msg.getMset()) && proto.protobuf_unittest.AggregateMessageSet.toObject(includeInstance, f),
    any: (f = msg.getAny()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
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
 * @return {!proto.protobuf_unittest.Aggregate}
 */
proto.protobuf_unittest.Aggregate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.Aggregate;
  return proto.protobuf_unittest.Aggregate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.Aggregate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.Aggregate}
 */
proto.protobuf_unittest.Aggregate.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setS(value);
      break;
    case 3:
      var value = new proto.protobuf_unittest.Aggregate;
      reader.readMessage(value,proto.protobuf_unittest.Aggregate.deserializeBinaryFromReader);
      msg.setSub(value);
      break;
    case 4:
      var value = new google_protobuf_descriptor_pb.FileOptions;
      reader.readMessage(value,google_protobuf_descriptor_pb.FileOptions.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    case 5:
      var value = new proto.protobuf_unittest.AggregateMessageSet;
      reader.readMessage(value,proto.protobuf_unittest.AggregateMessageSet.deserializeBinaryFromReader);
      msg.setMset(value);
      break;
    case 6:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setAny(value);
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
proto.protobuf_unittest.Aggregate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.Aggregate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.Aggregate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.Aggregate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSub();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.protobuf_unittest.Aggregate.serializeBinaryToWriter
    );
  }
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_descriptor_pb.FileOptions.serializeBinaryToWriter
    );
  }
  f = message.getMset();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.protobuf_unittest.AggregateMessageSet.serializeBinaryToWriter
    );
  }
  f = message.getAny();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 i = 1;
 * @return {number}
 */
proto.protobuf_unittest.Aggregate.prototype.getI = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.Aggregate} returns this
 */
proto.protobuf_unittest.Aggregate.prototype.setI = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.Aggregate} returns this
 */
proto.protobuf_unittest.Aggregate.prototype.clearI = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.Aggregate.prototype.hasI = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string s = 2;
 * @return {string}
 */
proto.protobuf_unittest.Aggregate.prototype.getS = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protobuf_unittest.Aggregate} returns this
 */
proto.protobuf_unittest.Aggregate.prototype.setS = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.Aggregate} returns this
 */
proto.protobuf_unittest.Aggregate.prototype.clearS = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.Aggregate.prototype.hasS = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Aggregate sub = 3;
 * @return {?proto.protobuf_unittest.Aggregate}
 */
proto.protobuf_unittest.Aggregate.prototype.getSub = function() {
  return /** @type{?proto.protobuf_unittest.Aggregate} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.Aggregate, 3));
};


/**
 * @param {?proto.protobuf_unittest.Aggregate|undefined} value
 * @return {!proto.protobuf_unittest.Aggregate} returns this
*/
proto.protobuf_unittest.Aggregate.prototype.setSub = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.Aggregate} returns this
 */
proto.protobuf_unittest.Aggregate.prototype.clearSub = function() {
  return this.setSub(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.Aggregate.prototype.hasSub = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.FileOptions file = 4;
 * @return {?proto.google.protobuf.FileOptions}
 */
proto.protobuf_unittest.Aggregate.prototype.getFile = function() {
  return /** @type{?proto.google.protobuf.FileOptions} */ (
    jspb.Message.getWrapperField(this, google_protobuf_descriptor_pb.FileOptions, 4));
};


/**
 * @param {?proto.google.protobuf.FileOptions|undefined} value
 * @return {!proto.protobuf_unittest.Aggregate} returns this
*/
proto.protobuf_unittest.Aggregate.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.Aggregate} returns this
 */
proto.protobuf_unittest.Aggregate.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.Aggregate.prototype.hasFile = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AggregateMessageSet mset = 5;
 * @return {?proto.protobuf_unittest.AggregateMessageSet}
 */
proto.protobuf_unittest.Aggregate.prototype.getMset = function() {
  return /** @type{?proto.protobuf_unittest.AggregateMessageSet} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.AggregateMessageSet, 5));
};


/**
 * @param {?proto.protobuf_unittest.AggregateMessageSet|undefined} value
 * @return {!proto.protobuf_unittest.Aggregate} returns this
*/
proto.protobuf_unittest.Aggregate.prototype.setMset = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.Aggregate} returns this
 */
proto.protobuf_unittest.Aggregate.prototype.clearMset = function() {
  return this.setMset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.Aggregate.prototype.hasMset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Any any = 6;
 * @return {?proto.google.protobuf.Any}
 */
proto.protobuf_unittest.Aggregate.prototype.getAny = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 6));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.protobuf_unittest.Aggregate} returns this
*/
proto.protobuf_unittest.Aggregate.prototype.setAny = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.Aggregate} returns this
 */
proto.protobuf_unittest.Aggregate.prototype.clearAny = function() {
  return this.setAny(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.Aggregate.prototype.hasAny = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `nested`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.Aggregate>}
 */
proto.protobuf_unittest.Aggregate.nested = new jspb.ExtensionFieldInfo(
    15476903,
    {nested: 0},
    proto.protobuf_unittest.Aggregate,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.Aggregate.toObject),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[15476903] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.Aggregate.nested,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.Aggregate.serializeBinaryToWriter,
    proto.protobuf_unittest.Aggregate.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[15476903] = proto.protobuf_unittest.Aggregate.nested;




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
proto.protobuf_unittest.AggregateMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.AggregateMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.AggregateMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.AggregateMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.AggregateMessage}
 */
proto.protobuf_unittest.AggregateMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.AggregateMessage;
  return proto.protobuf_unittest.AggregateMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.AggregateMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.AggregateMessage}
 */
proto.protobuf_unittest.AggregateMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFieldname(value);
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
proto.protobuf_unittest.AggregateMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.AggregateMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.AggregateMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.AggregateMessage.serializeBinaryToWriter = function(message, writer) {
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
 * optional int32 fieldname = 1;
 * @return {number}
 */
proto.protobuf_unittest.AggregateMessage.prototype.getFieldname = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.AggregateMessage} returns this
 */
proto.protobuf_unittest.AggregateMessage.prototype.setFieldname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.AggregateMessage} returns this
 */
proto.protobuf_unittest.AggregateMessage.prototype.clearFieldname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.AggregateMessage.prototype.hasFieldname = function() {
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
proto.protobuf_unittest.NestedOptionType.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.NestedOptionType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.NestedOptionType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.NestedOptionType.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protobuf_unittest.NestedOptionType}
 */
proto.protobuf_unittest.NestedOptionType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.NestedOptionType;
  return proto.protobuf_unittest.NestedOptionType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.NestedOptionType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.NestedOptionType}
 */
proto.protobuf_unittest.NestedOptionType.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protobuf_unittest.NestedOptionType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.NestedOptionType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.NestedOptionType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.NestedOptionType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.protobuf_unittest.NestedOptionType.NestedEnum = {
  NESTED_ENUM_VALUE: 1
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
proto.protobuf_unittest.NestedOptionType.NestedMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.NestedOptionType.NestedMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.NestedOptionType.NestedMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.NestedOptionType.NestedMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    nestedField: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.NestedOptionType.NestedMessage}
 */
proto.protobuf_unittest.NestedOptionType.NestedMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.NestedOptionType.NestedMessage;
  return proto.protobuf_unittest.NestedOptionType.NestedMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.NestedOptionType.NestedMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.NestedOptionType.NestedMessage}
 */
proto.protobuf_unittest.NestedOptionType.NestedMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNestedField(value);
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
proto.protobuf_unittest.NestedOptionType.NestedMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.NestedOptionType.NestedMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.NestedOptionType.NestedMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.NestedOptionType.NestedMessage.serializeBinaryToWriter = function(message, writer) {
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
 * optional int32 nested_field = 1;
 * @return {number}
 */
proto.protobuf_unittest.NestedOptionType.NestedMessage.prototype.getNestedField = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.NestedOptionType.NestedMessage} returns this
 */
proto.protobuf_unittest.NestedOptionType.NestedMessage.prototype.setNestedField = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.NestedOptionType.NestedMessage} returns this
 */
proto.protobuf_unittest.NestedOptionType.NestedMessage.prototype.clearNestedField = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.NestedOptionType.NestedMessage.prototype.hasNestedField = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `nestedExtension`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.NestedOptionType.nestedExtension = new jspb.ExtensionFieldInfo(
    7912573,
    {nestedExtension: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[7912573] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.NestedOptionType.nestedExtension,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[7912573] = proto.protobuf_unittest.NestedOptionType.nestedExtension;




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
proto.protobuf_unittest.OldOptionType.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.OldOptionType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.OldOptionType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.OldOptionType.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.OldOptionType}
 */
proto.protobuf_unittest.OldOptionType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.OldOptionType;
  return proto.protobuf_unittest.OldOptionType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.OldOptionType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.OldOptionType}
 */
proto.protobuf_unittest.OldOptionType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.protobuf_unittest.OldOptionType.TestEnum} */ (reader.readEnum());
      msg.setValue(value);
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
proto.protobuf_unittest.OldOptionType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.OldOptionType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.OldOptionType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.OldOptionType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.protobuf_unittest.OldOptionType.TestEnum} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.protobuf_unittest.OldOptionType.TestEnum = {
  OLD_VALUE: 0
};

/**
 * required TestEnum value = 1;
 * @return {!proto.protobuf_unittest.OldOptionType.TestEnum}
 */
proto.protobuf_unittest.OldOptionType.prototype.getValue = function() {
  return /** @type {!proto.protobuf_unittest.OldOptionType.TestEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.protobuf_unittest.OldOptionType.TestEnum} value
 * @return {!proto.protobuf_unittest.OldOptionType} returns this
 */
proto.protobuf_unittest.OldOptionType.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.OldOptionType} returns this
 */
proto.protobuf_unittest.OldOptionType.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.OldOptionType.prototype.hasValue = function() {
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
proto.protobuf_unittest.NewOptionType.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.NewOptionType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.NewOptionType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.NewOptionType.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.NewOptionType}
 */
proto.protobuf_unittest.NewOptionType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.NewOptionType;
  return proto.protobuf_unittest.NewOptionType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.NewOptionType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.NewOptionType}
 */
proto.protobuf_unittest.NewOptionType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.protobuf_unittest.NewOptionType.TestEnum} */ (reader.readEnum());
      msg.setValue(value);
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
proto.protobuf_unittest.NewOptionType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.NewOptionType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.NewOptionType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.NewOptionType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.protobuf_unittest.NewOptionType.TestEnum} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.protobuf_unittest.NewOptionType.TestEnum = {
  OLD_VALUE: 0,
  NEW_VALUE: 1
};

/**
 * required TestEnum value = 1;
 * @return {!proto.protobuf_unittest.NewOptionType.TestEnum}
 */
proto.protobuf_unittest.NewOptionType.prototype.getValue = function() {
  return /** @type {!proto.protobuf_unittest.NewOptionType.TestEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.protobuf_unittest.NewOptionType.TestEnum} value
 * @return {!proto.protobuf_unittest.NewOptionType} returns this
 */
proto.protobuf_unittest.NewOptionType.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.NewOptionType} returns this
 */
proto.protobuf_unittest.NewOptionType.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.NewOptionType.prototype.hasValue = function() {
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
proto.protobuf_unittest.TestMessageWithRequiredEnumOption.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestMessageWithRequiredEnumOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestMessageWithRequiredEnumOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestMessageWithRequiredEnumOption.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protobuf_unittest.TestMessageWithRequiredEnumOption}
 */
proto.protobuf_unittest.TestMessageWithRequiredEnumOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestMessageWithRequiredEnumOption;
  return proto.protobuf_unittest.TestMessageWithRequiredEnumOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestMessageWithRequiredEnumOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestMessageWithRequiredEnumOption}
 */
proto.protobuf_unittest.TestMessageWithRequiredEnumOption.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protobuf_unittest.TestMessageWithRequiredEnumOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestMessageWithRequiredEnumOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestMessageWithRequiredEnumOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestMessageWithRequiredEnumOption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.protobuf_unittest.MethodOpt1 = {
  METHODOPT1_VAL1: 1,
  METHODOPT1_VAL2: 2
};

/**
 * @enum {number}
 */
proto.protobuf_unittest.AggregateEnum = {
  VALUE: 1
};


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fileOpt1`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.fileOpt1 = new jspb.ExtensionFieldInfo(
    7736974,
    {fileOpt1: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[7736974] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.fileOpt1,
    jspb.BinaryReader.prototype.readUint64,
    jspb.BinaryWriter.prototype.writeUint64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[7736974] = proto.protobuf_unittest.fileOpt1;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `messageOpt1`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.messageOpt1 = new jspb.ExtensionFieldInfo(
    7739036,
    {messageOpt1: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7739036] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.messageOpt1,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7739036] = proto.protobuf_unittest.messageOpt1;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fieldOpt1`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.fieldOpt1 = new jspb.ExtensionFieldInfo(
    7740936,
    {fieldOpt1: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[7740936] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.fieldOpt1,
    jspb.BinaryReader.prototype.readFixed64,
    jspb.BinaryWriter.prototype.writeFixed64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[7740936] = proto.protobuf_unittest.fieldOpt1;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fieldOpt2`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.fieldOpt2 = new jspb.ExtensionFieldInfo(
    7753913,
    {fieldOpt2: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[7753913] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.fieldOpt2,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[7753913] = proto.protobuf_unittest.fieldOpt2;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `oneofOpt1`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.oneofOpt1 = new jspb.ExtensionFieldInfo(
    7740111,
    {oneofOpt1: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.OneofOptions.extensionsBinary[7740111] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.oneofOpt1,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.OneofOptions.extensions[7740111] = proto.protobuf_unittest.oneofOpt1;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumOpt1`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.enumOpt1 = new jspb.ExtensionFieldInfo(
    7753576,
    {enumOpt1: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumOptions.extensionsBinary[7753576] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.enumOpt1,
    jspb.BinaryReader.prototype.readSfixed32,
    jspb.BinaryWriter.prototype.writeSfixed32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumOptions.extensions[7753576] = proto.protobuf_unittest.enumOpt1;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumValueOpt1`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.enumValueOpt1 = new jspb.ExtensionFieldInfo(
    1560678,
    {enumValueOpt1: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumValueOptions.extensionsBinary[1560678] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.enumValueOpt1,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumValueOptions.extensions[1560678] = proto.protobuf_unittest.enumValueOpt1;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `serviceOpt1`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.serviceOpt1 = new jspb.ExtensionFieldInfo(
    7887650,
    {serviceOpt1: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.ServiceOptions.extensionsBinary[7887650] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.serviceOpt1,
    jspb.BinaryReader.prototype.readSint64,
    jspb.BinaryWriter.prototype.writeSint64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.ServiceOptions.extensions[7887650] = proto.protobuf_unittest.serviceOpt1;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `methodOpt1`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.MethodOpt1>}
 */
proto.protobuf_unittest.methodOpt1 = new jspb.ExtensionFieldInfo(
    7890860,
    {methodOpt1: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[7890860] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.methodOpt1,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[7890860] = proto.protobuf_unittest.methodOpt1;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `boolOpt`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.protobuf_unittest.boolOpt = new jspb.ExtensionFieldInfo(
    7706090,
    {boolOpt: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7706090] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.boolOpt,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7706090] = proto.protobuf_unittest.boolOpt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `int32Opt`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.int32Opt = new jspb.ExtensionFieldInfo(
    7705709,
    {int32Opt: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7705709] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.int32Opt,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7705709] = proto.protobuf_unittest.int32Opt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `int64Opt`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.int64Opt = new jspb.ExtensionFieldInfo(
    7705542,
    {int64Opt: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7705542] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.int64Opt,
    jspb.BinaryReader.prototype.readInt64,
    jspb.BinaryWriter.prototype.writeInt64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7705542] = proto.protobuf_unittest.int64Opt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `uint32Opt`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.uint32Opt = new jspb.ExtensionFieldInfo(
    7704880,
    {uint32Opt: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7704880] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.uint32Opt,
    jspb.BinaryReader.prototype.readUint32,
    jspb.BinaryWriter.prototype.writeUint32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7704880] = proto.protobuf_unittest.uint32Opt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `uint64Opt`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.uint64Opt = new jspb.ExtensionFieldInfo(
    7702367,
    {uint64Opt: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7702367] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.uint64Opt,
    jspb.BinaryReader.prototype.readUint64,
    jspb.BinaryWriter.prototype.writeUint64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7702367] = proto.protobuf_unittest.uint64Opt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `sint32Opt`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.sint32Opt = new jspb.ExtensionFieldInfo(
    7701568,
    {sint32Opt: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7701568] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.sint32Opt,
    jspb.BinaryReader.prototype.readSint32,
    jspb.BinaryWriter.prototype.writeSint32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7701568] = proto.protobuf_unittest.sint32Opt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `sint64Opt`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.sint64Opt = new jspb.ExtensionFieldInfo(
    7700863,
    {sint64Opt: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7700863] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.sint64Opt,
    jspb.BinaryReader.prototype.readSint64,
    jspb.BinaryWriter.prototype.writeSint64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7700863] = proto.protobuf_unittest.sint64Opt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fixed32Opt`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.fixed32Opt = new jspb.ExtensionFieldInfo(
    7700307,
    {fixed32Opt: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7700307] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.fixed32Opt,
    jspb.BinaryReader.prototype.readFixed32,
    jspb.BinaryWriter.prototype.writeFixed32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7700307] = proto.protobuf_unittest.fixed32Opt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fixed64Opt`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.fixed64Opt = new jspb.ExtensionFieldInfo(
    7700194,
    {fixed64Opt: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7700194] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.fixed64Opt,
    jspb.BinaryReader.prototype.readFixed64,
    jspb.BinaryWriter.prototype.writeFixed64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7700194] = proto.protobuf_unittest.fixed64Opt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `sfixed32Opt`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.sfixed32Opt = new jspb.ExtensionFieldInfo(
    7698645,
    {sfixed32Opt: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7698645] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.sfixed32Opt,
    jspb.BinaryReader.prototype.readSfixed32,
    jspb.BinaryWriter.prototype.writeSfixed32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7698645] = proto.protobuf_unittest.sfixed32Opt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `sfixed64Opt`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.sfixed64Opt = new jspb.ExtensionFieldInfo(
    7685475,
    {sfixed64Opt: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7685475] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.sfixed64Opt,
    jspb.BinaryReader.prototype.readSfixed64,
    jspb.BinaryWriter.prototype.writeSfixed64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7685475] = proto.protobuf_unittest.sfixed64Opt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `floatOpt`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.floatOpt = new jspb.ExtensionFieldInfo(
    7675390,
    {floatOpt: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7675390] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.floatOpt,
    jspb.BinaryReader.prototype.readFloat,
    jspb.BinaryWriter.prototype.writeFloat,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7675390] = proto.protobuf_unittest.floatOpt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `doubleOpt`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.doubleOpt = new jspb.ExtensionFieldInfo(
    7673293,
    {doubleOpt: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7673293] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.doubleOpt,
    jspb.BinaryReader.prototype.readDouble,
    jspb.BinaryWriter.prototype.writeDouble,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7673293] = proto.protobuf_unittest.doubleOpt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `stringOpt`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.protobuf_unittest.stringOpt = new jspb.ExtensionFieldInfo(
    7673285,
    {stringOpt: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7673285] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.stringOpt,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7673285] = proto.protobuf_unittest.stringOpt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `bytesOpt`.
 * @type {!jspb.ExtensionFieldInfo<!(string|Uint8Array)>}
 */
proto.protobuf_unittest.bytesOpt = new jspb.ExtensionFieldInfo(
    7673238,
    {bytesOpt: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7673238] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.bytesOpt,
    jspb.BinaryReader.prototype.readBytes,
    jspb.BinaryWriter.prototype.writeBytes,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7673238] = proto.protobuf_unittest.bytesOpt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumOpt`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.DummyMessageContainingEnum.TestEnumType>}
 */
proto.protobuf_unittest.enumOpt = new jspb.ExtensionFieldInfo(
    7673233,
    {enumOpt: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7673233] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.enumOpt,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7673233] = proto.protobuf_unittest.enumOpt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `messageTypeOpt`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.DummyMessageInvalidAsOptionType>}
 */
proto.protobuf_unittest.messageTypeOpt = new jspb.ExtensionFieldInfo(
    7665967,
    {messageTypeOpt: 0},
    proto.protobuf_unittest.DummyMessageInvalidAsOptionType,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.DummyMessageInvalidAsOptionType.toObject),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7665967] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.messageTypeOpt,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.DummyMessageInvalidAsOptionType.serializeBinaryToWriter,
    proto.protobuf_unittest.DummyMessageInvalidAsOptionType.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7665967] = proto.protobuf_unittest.messageTypeOpt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `quux`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.quux = new jspb.ExtensionFieldInfo(
    7663707,
    {quux: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.ComplexOptionType1.extensionsBinary[7663707] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.quux,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.ComplexOptionType1.extensions[7663707] = proto.protobuf_unittest.quux;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `corge`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.ComplexOptionType3>}
 */
proto.protobuf_unittest.corge = new jspb.ExtensionFieldInfo(
    7663442,
    {corge: 0},
    proto.protobuf_unittest.ComplexOptionType3,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.ComplexOptionType3.toObject),
    0);

proto.protobuf_unittest.ComplexOptionType1.extensionsBinary[7663442] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.corge,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.ComplexOptionType3.serializeBinaryToWriter,
    proto.protobuf_unittest.ComplexOptionType3.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.ComplexOptionType1.extensions[7663442] = proto.protobuf_unittest.corge;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `grault`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.grault = new jspb.ExtensionFieldInfo(
    7650927,
    {grault: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.ComplexOptionType2.extensionsBinary[7650927] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.grault,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.ComplexOptionType2.extensions[7650927] = proto.protobuf_unittest.grault;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `garply`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.ComplexOptionType1>}
 */
proto.protobuf_unittest.garply = new jspb.ExtensionFieldInfo(
    7649992,
    {garply: 0},
    proto.protobuf_unittest.ComplexOptionType1,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.ComplexOptionType1.toObject),
    0);

proto.protobuf_unittest.ComplexOptionType2.extensionsBinary[7649992] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.garply,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.ComplexOptionType1.serializeBinaryToWriter,
    proto.protobuf_unittest.ComplexOptionType1.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.ComplexOptionType2.extensions[7649992] = proto.protobuf_unittest.garply;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `complexOpt1`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.ComplexOptionType1>}
 */
proto.protobuf_unittest.complexOpt1 = new jspb.ExtensionFieldInfo(
    7646756,
    {complexOpt1: 0},
    proto.protobuf_unittest.ComplexOptionType1,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.ComplexOptionType1.toObject),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7646756] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.complexOpt1,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.ComplexOptionType1.serializeBinaryToWriter,
    proto.protobuf_unittest.ComplexOptionType1.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7646756] = proto.protobuf_unittest.complexOpt1;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `complexOpt2`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.ComplexOptionType2>}
 */
proto.protobuf_unittest.complexOpt2 = new jspb.ExtensionFieldInfo(
    7636949,
    {complexOpt2: 0},
    proto.protobuf_unittest.ComplexOptionType2,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.ComplexOptionType2.toObject),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7636949] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.complexOpt2,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.ComplexOptionType2.serializeBinaryToWriter,
    proto.protobuf_unittest.ComplexOptionType2.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7636949] = proto.protobuf_unittest.complexOpt2;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `complexOpt3`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.ComplexOptionType3>}
 */
proto.protobuf_unittest.complexOpt3 = new jspb.ExtensionFieldInfo(
    7636463,
    {complexOpt3: 0},
    proto.protobuf_unittest.ComplexOptionType3,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.ComplexOptionType3.toObject),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7636463] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.complexOpt3,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.ComplexOptionType3.serializeBinaryToWriter,
    proto.protobuf_unittest.ComplexOptionType3.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7636463] = proto.protobuf_unittest.complexOpt3;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `complexOpt6`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.ComplexOpt6>}
 */
proto.protobuf_unittest.complexOpt6 = new jspb.ExtensionFieldInfo(
    7595468,
    {complexOpt6: 0},
    proto.protobuf_unittest.ComplexOpt6,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.ComplexOpt6.toObject),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7595468] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.complexOpt6,
    jspb.BinaryReader.prototype.readGroup,
    jspb.BinaryWriter.prototype.writeGroup,
    proto.protobuf_unittest.ComplexOpt6.serializeBinaryToWriter,
    proto.protobuf_unittest.ComplexOpt6.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7595468] = proto.protobuf_unittest.complexOpt6;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fileopt`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.Aggregate>}
 */
proto.protobuf_unittest.fileopt = new jspb.ExtensionFieldInfo(
    15478479,
    {fileopt: 0},
    proto.protobuf_unittest.Aggregate,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.Aggregate.toObject),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[15478479] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.fileopt,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.Aggregate.serializeBinaryToWriter,
    proto.protobuf_unittest.Aggregate.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[15478479] = proto.protobuf_unittest.fileopt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `msgopt`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.Aggregate>}
 */
proto.protobuf_unittest.msgopt = new jspb.ExtensionFieldInfo(
    15480088,
    {msgopt: 0},
    proto.protobuf_unittest.Aggregate,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.Aggregate.toObject),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[15480088] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.msgopt,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.Aggregate.serializeBinaryToWriter,
    proto.protobuf_unittest.Aggregate.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[15480088] = proto.protobuf_unittest.msgopt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fieldopt`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.Aggregate>}
 */
proto.protobuf_unittest.fieldopt = new jspb.ExtensionFieldInfo(
    15481374,
    {fieldopt: 0},
    proto.protobuf_unittest.Aggregate,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.Aggregate.toObject),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[15481374] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.fieldopt,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.Aggregate.serializeBinaryToWriter,
    proto.protobuf_unittest.Aggregate.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[15481374] = proto.protobuf_unittest.fieldopt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumopt`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.Aggregate>}
 */
proto.protobuf_unittest.enumopt = new jspb.ExtensionFieldInfo(
    15483218,
    {enumopt: 0},
    proto.protobuf_unittest.Aggregate,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.Aggregate.toObject),
    0);

google_protobuf_descriptor_pb.EnumOptions.extensionsBinary[15483218] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.enumopt,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.Aggregate.serializeBinaryToWriter,
    proto.protobuf_unittest.Aggregate.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumOptions.extensions[15483218] = proto.protobuf_unittest.enumopt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumvalopt`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.Aggregate>}
 */
proto.protobuf_unittest.enumvalopt = new jspb.ExtensionFieldInfo(
    15486921,
    {enumvalopt: 0},
    proto.protobuf_unittest.Aggregate,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.Aggregate.toObject),
    0);

google_protobuf_descriptor_pb.EnumValueOptions.extensionsBinary[15486921] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.enumvalopt,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.Aggregate.serializeBinaryToWriter,
    proto.protobuf_unittest.Aggregate.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumValueOptions.extensions[15486921] = proto.protobuf_unittest.enumvalopt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `serviceopt`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.Aggregate>}
 */
proto.protobuf_unittest.serviceopt = new jspb.ExtensionFieldInfo(
    15497145,
    {serviceopt: 0},
    proto.protobuf_unittest.Aggregate,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.Aggregate.toObject),
    0);

google_protobuf_descriptor_pb.ServiceOptions.extensionsBinary[15497145] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.serviceopt,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.Aggregate.serializeBinaryToWriter,
    proto.protobuf_unittest.Aggregate.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.ServiceOptions.extensions[15497145] = proto.protobuf_unittest.serviceopt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `methodopt`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.Aggregate>}
 */
proto.protobuf_unittest.methodopt = new jspb.ExtensionFieldInfo(
    15512713,
    {methodopt: 0},
    proto.protobuf_unittest.Aggregate,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.Aggregate.toObject),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[15512713] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.methodopt,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.Aggregate.serializeBinaryToWriter,
    proto.protobuf_unittest.Aggregate.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[15512713] = proto.protobuf_unittest.methodopt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `requiredEnumOpt`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.OldOptionType>}
 */
proto.protobuf_unittest.requiredEnumOpt = new jspb.ExtensionFieldInfo(
    106161807,
    {requiredEnumOpt: 0},
    proto.protobuf_unittest.OldOptionType,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.OldOptionType.toObject),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[106161807] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.requiredEnumOpt,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.OldOptionType.serializeBinaryToWriter,
    proto.protobuf_unittest.OldOptionType.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[106161807] = proto.protobuf_unittest.requiredEnumOpt;

goog.object.extend(exports, proto.protobuf_unittest);
