// source: google/protobuf/unittest_lite.proto
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

var google_protobuf_unittest_import_lite_pb = require('google-protobuf/google/protobuf/unittest_import_lite_pb.js');
goog.object.extend(proto, google_protobuf_unittest_import_lite_pb);
goog.exportSymbol('proto.protobuf_unittest.DupEnum', null, global);
goog.exportSymbol('proto.protobuf_unittest.DupEnum.TestEnumWithDupValueLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.ForeignEnumLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.ForeignMessageLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.NonPackedFixed32', null, global);
goog.exportSymbol('proto.protobuf_unittest.NonPackedInt32', null, global);
goog.exportSymbol('proto.protobuf_unittest.OptionalGroup_extension_lite', null, global);
goog.exportSymbol('proto.protobuf_unittest.PackedFixed32', null, global);
goog.exportSymbol('proto.protobuf_unittest.PackedInt32', null, global);
goog.exportSymbol('proto.protobuf_unittest.RecursiveMessage', null, global);
goog.exportSymbol('proto.protobuf_unittest.RepeatedGroup_extension_lite', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestAllExtensionsLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestAllTypesLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestAllTypesLite.NestedEnum', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestAllTypesLite.NestedMessage', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestAllTypesLite.NestedMessage2', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestAllTypesLite.OneofFieldCase', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestAllTypesLite.OptionalGroup', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestDeprecatedLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestEmptyMessageLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestHugeFieldNumbersLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestHugeFieldNumbersLite.OneofFieldCase', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestMergeExceptionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestMessageSetLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestNestedExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestOneofParsingLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestOneofParsingLite.OneofFieldCase', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestPackedExtensionsLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestPackedTypesLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestParsingMergeLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2', null, global);
goog.exportSymbol('proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup', null, global);
goog.exportSymbol('proto.protobuf_unittest.V1EnumLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.V1MessageLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.V2EnumLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.V2MessageLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultBoolExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultBytesExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultCordExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultDoubleExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultFixed32ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultFixed64ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultFloatExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultForeignEnumExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultImportEnumExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultInt32ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultInt64ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultNestedEnumExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultSfixed32ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultSfixed64ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultSint32ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultSint64ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultStringExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultStringPieceExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultUint32ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.defaultUint64ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.oneofBytesExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.oneofNestedMessageExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.oneofStringExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.oneofUint32ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalBoolExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalBytesExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalCordExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalDoubleExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalFixed32ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalFixed64ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalFloatExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalForeignEnumExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalForeignMessageExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalGroup_extension_lite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalImportEnumExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalImportMessageExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalInt32ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalInt64ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalLazyMessageExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalNestedEnumExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalNestedMessageExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalPublicImportMessageExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalSfixed32ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalSfixed64ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalSint32ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalSint64ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalStringExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalStringPieceExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalUint32ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.optionalUint64ExtensionLite', null, global);
goog.exportSymbol('proto.protobuf_unittest.packedBoolExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.packedDoubleExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.packedEnumExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.packedFixed32ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.packedFixed64ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.packedFloatExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.packedInt32ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.packedInt64ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.packedSfixed32ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.packedSfixed64ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.packedSint32ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.packedSint64ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.packedUint32ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.packedUint64ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedBoolExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedBytesExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedCordExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedDoubleExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedFixed32ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedFixed64ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedFloatExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedForeignEnumExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedForeignMessageExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedGroup_extension_liteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedImportEnumExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedImportMessageExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedInt32ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedInt64ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedLazyMessageExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedNestedEnumExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedNestedMessageExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedSfixed32ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedSfixed64ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedSint32ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedSint64ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedStringExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedStringPieceExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedUint32ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.repeatedUint64ExtensionLiteList', null, global);
goog.exportSymbol('proto.protobuf_unittest.testAllTypesLite', null, global);
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
proto.protobuf_unittest.TestAllTypesLite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protobuf_unittest.TestAllTypesLite.repeatedFields_, proto.protobuf_unittest.TestAllTypesLite.oneofGroups_);
};
goog.inherits(proto.protobuf_unittest.TestAllTypesLite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestAllTypesLite.displayName = 'proto.protobuf_unittest.TestAllTypesLite';
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
proto.protobuf_unittest.TestAllTypesLite.NestedMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestAllTypesLite.NestedMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestAllTypesLite.NestedMessage.displayName = 'proto.protobuf_unittest.TestAllTypesLite.NestedMessage';
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
proto.protobuf_unittest.TestAllTypesLite.NestedMessage2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestAllTypesLite.NestedMessage2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestAllTypesLite.NestedMessage2.displayName = 'proto.protobuf_unittest.TestAllTypesLite.NestedMessage2';
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
proto.protobuf_unittest.TestAllTypesLite.OptionalGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestAllTypesLite.OptionalGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestAllTypesLite.OptionalGroup.displayName = 'proto.protobuf_unittest.TestAllTypesLite.OptionalGroup';
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
proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup.displayName = 'proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup';
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
proto.protobuf_unittest.ForeignMessageLite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.ForeignMessageLite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.ForeignMessageLite.displayName = 'proto.protobuf_unittest.ForeignMessageLite';
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
proto.protobuf_unittest.TestPackedTypesLite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protobuf_unittest.TestPackedTypesLite.repeatedFields_, null);
};
goog.inherits(proto.protobuf_unittest.TestPackedTypesLite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestPackedTypesLite.displayName = 'proto.protobuf_unittest.TestPackedTypesLite';
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
proto.protobuf_unittest.TestAllExtensionsLite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestAllExtensionsLite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestAllExtensionsLite.displayName = 'proto.protobuf_unittest.TestAllExtensionsLite';
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
proto.protobuf_unittest.TestAllExtensionsLite.extensions = {};


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
proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary = {};

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
proto.protobuf_unittest.OptionalGroup_extension_lite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.OptionalGroup_extension_lite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.OptionalGroup_extension_lite.displayName = 'proto.protobuf_unittest.OptionalGroup_extension_lite';
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
proto.protobuf_unittest.RepeatedGroup_extension_lite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.RepeatedGroup_extension_lite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.RepeatedGroup_extension_lite.displayName = 'proto.protobuf_unittest.RepeatedGroup_extension_lite';
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
proto.protobuf_unittest.TestPackedExtensionsLite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestPackedExtensionsLite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestPackedExtensionsLite.displayName = 'proto.protobuf_unittest.TestPackedExtensionsLite';
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
proto.protobuf_unittest.TestPackedExtensionsLite.extensions = {};


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
proto.protobuf_unittest.TestPackedExtensionsLite.extensionsBinary = {};

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
proto.protobuf_unittest.TestNestedExtensionLite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestNestedExtensionLite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestNestedExtensionLite.displayName = 'proto.protobuf_unittest.TestNestedExtensionLite';
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
proto.protobuf_unittest.TestDeprecatedLite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestDeprecatedLite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestDeprecatedLite.displayName = 'proto.protobuf_unittest.TestDeprecatedLite';
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
proto.protobuf_unittest.TestParsingMergeLite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 21, proto.protobuf_unittest.TestParsingMergeLite.repeatedFields_, null);
};
goog.inherits(proto.protobuf_unittest.TestParsingMergeLite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestParsingMergeLite.displayName = 'proto.protobuf_unittest.TestParsingMergeLite';
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
proto.protobuf_unittest.TestParsingMergeLite.extensions = {};


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
proto.protobuf_unittest.TestParsingMergeLite.extensionsBinary = {};

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
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.repeatedFields_, null);
};
goog.inherits(proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.displayName = 'proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator';
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
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1.displayName = 'proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1';
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
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2.displayName = 'proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2';
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
proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup.displayName = 'proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup';
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
proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup.displayName = 'proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup';
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
proto.protobuf_unittest.TestMergeExceptionLite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestMergeExceptionLite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestMergeExceptionLite.displayName = 'proto.protobuf_unittest.TestMergeExceptionLite';
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
proto.protobuf_unittest.TestEmptyMessageLite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestEmptyMessageLite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestEmptyMessageLite.displayName = 'proto.protobuf_unittest.TestEmptyMessageLite';
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
proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite.displayName = 'proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite';
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
proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite.extensions = {};


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
proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite.extensionsBinary = {};

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
proto.protobuf_unittest.V1MessageLite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.V1MessageLite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.V1MessageLite.displayName = 'proto.protobuf_unittest.V1MessageLite';
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
proto.protobuf_unittest.V2MessageLite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.V2MessageLite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.V2MessageLite.displayName = 'proto.protobuf_unittest.V2MessageLite';
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
proto.protobuf_unittest.TestHugeFieldNumbersLite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.protobuf_unittest.TestHugeFieldNumbersLite.repeatedFields_, proto.protobuf_unittest.TestHugeFieldNumbersLite.oneofGroups_);
};
goog.inherits(proto.protobuf_unittest.TestHugeFieldNumbersLite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestHugeFieldNumbersLite.displayName = 'proto.protobuf_unittest.TestHugeFieldNumbersLite';
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
proto.protobuf_unittest.TestHugeFieldNumbersLite.extensions = {};


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
proto.protobuf_unittest.TestHugeFieldNumbersLite.extensionsBinary = {};

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
proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup.displayName = 'proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup';
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
proto.protobuf_unittest.TestOneofParsingLite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_);
};
goog.inherits(proto.protobuf_unittest.TestOneofParsingLite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestOneofParsingLite.displayName = 'proto.protobuf_unittest.TestOneofParsingLite';
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
proto.protobuf_unittest.TestMessageSetLite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 1, null, null);
};
goog.inherits(proto.protobuf_unittest.TestMessageSetLite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.TestMessageSetLite.displayName = 'proto.protobuf_unittest.TestMessageSetLite';
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
proto.protobuf_unittest.TestMessageSetLite.extensions = {};


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
proto.protobuf_unittest.TestMessageSetLite.extensionsBinary = {};

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
proto.protobuf_unittest.PackedInt32 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.protobuf_unittest.PackedInt32.repeatedFields_, null);
};
goog.inherits(proto.protobuf_unittest.PackedInt32, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.PackedInt32.displayName = 'proto.protobuf_unittest.PackedInt32';
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
proto.protobuf_unittest.NonPackedInt32 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.protobuf_unittest.NonPackedInt32.repeatedFields_, null);
};
goog.inherits(proto.protobuf_unittest.NonPackedInt32, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.NonPackedInt32.displayName = 'proto.protobuf_unittest.NonPackedInt32';
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
proto.protobuf_unittest.PackedFixed32 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.protobuf_unittest.PackedFixed32.repeatedFields_, null);
};
goog.inherits(proto.protobuf_unittest.PackedFixed32, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.PackedFixed32.displayName = 'proto.protobuf_unittest.PackedFixed32';
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
proto.protobuf_unittest.NonPackedFixed32 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.protobuf_unittest.NonPackedFixed32.repeatedFields_, null);
};
goog.inherits(proto.protobuf_unittest.NonPackedFixed32, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.NonPackedFixed32.displayName = 'proto.protobuf_unittest.NonPackedFixed32';
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
proto.protobuf_unittest.DupEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.DupEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.DupEnum.displayName = 'proto.protobuf_unittest.DupEnum';
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
proto.protobuf_unittest.RecursiveMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf_unittest.RecursiveMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protobuf_unittest.RecursiveMessage.displayName = 'proto.protobuf_unittest.RecursiveMessage';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protobuf_unittest.TestAllTypesLite.repeatedFields_ = [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,48,49,50,51,52,53,54,55,57];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.protobuf_unittest.TestAllTypesLite.oneofGroups_ = [[111,112,113,114,115,117]];

/**
 * @enum {number}
 */
proto.protobuf_unittest.TestAllTypesLite.OneofFieldCase = {
  ONEOF_FIELD_NOT_SET: 0,
  ONEOF_UINT32: 111,
  ONEOF_NESTED_MESSAGE: 112,
  ONEOF_STRING: 113,
  ONEOF_BYTES: 114,
  ONEOF_LAZY_NESTED_MESSAGE: 115,
  ONEOF_NESTED_MESSAGE2: 117
};

/**
 * @return {proto.protobuf_unittest.TestAllTypesLite.OneofFieldCase}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOneofFieldCase = function() {
  return /** @type {proto.protobuf_unittest.TestAllTypesLite.OneofFieldCase} */(jspb.Message.computeOneofCase(this, proto.protobuf_unittest.TestAllTypesLite.oneofGroups_[0]));
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
proto.protobuf_unittest.TestAllTypesLite.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestAllTypesLite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestAllTypesLite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestAllTypesLite.toObject = function(includeInstance, msg) {
  var f, obj = {
    optionalInt32: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    optionalInt64: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    optionalUint32: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    optionalUint64: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    optionalSint32: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    optionalSint64: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    optionalFixed32: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    optionalFixed64: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    optionalSfixed32: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    optionalSfixed64: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    optionalFloat: (f = jspb.Message.getOptionalFloatingPointField(msg, 11)) == null ? undefined : f,
    optionalDouble: (f = jspb.Message.getOptionalFloatingPointField(msg, 12)) == null ? undefined : f,
    optionalBool: (f = jspb.Message.getBooleanField(msg, 13)) == null ? undefined : f,
    optionalString: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    optionalBytes: msg.getOptionalBytes_asB64(),
    optionalGroup: (f = msg.getOptionalGroup()) && proto.protobuf_unittest.TestAllTypesLite.OptionalGroup.toObject(includeInstance, f),
    optionalNestedMessage: (f = msg.getOptionalNestedMessage()) && proto.protobuf_unittest.TestAllTypesLite.NestedMessage.toObject(includeInstance, f),
    optionalForeignMessage: (f = msg.getOptionalForeignMessage()) && proto.protobuf_unittest.ForeignMessageLite.toObject(includeInstance, f),
    optionalImportMessage: (f = msg.getOptionalImportMessage()) && google_protobuf_unittest_import_lite_pb.ImportMessageLite.toObject(includeInstance, f),
    optionalNestedEnum: (f = jspb.Message.getField(msg, 21)) == null ? undefined : f,
    optionalForeignEnum: (f = jspb.Message.getField(msg, 22)) == null ? undefined : f,
    optionalImportEnum: (f = jspb.Message.getField(msg, 23)) == null ? undefined : f,
    optionalStringPiece: (f = jspb.Message.getField(msg, 24)) == null ? undefined : f,
    optionalCord: (f = jspb.Message.getField(msg, 25)) == null ? undefined : f,
    optionalPublicImportMessage: (f = msg.getOptionalPublicImportMessage()) && google_protobuf_unittest_import_public_lite_pb.PublicImportMessageLite.toObject(includeInstance, f),
    optionalLazyMessage: (f = msg.getOptionalLazyMessage()) && proto.protobuf_unittest.TestAllTypesLite.NestedMessage.toObject(includeInstance, f),
    repeatedInt32List: (f = jspb.Message.getRepeatedField(msg, 31)) == null ? undefined : f,
    repeatedInt64List: (f = jspb.Message.getRepeatedField(msg, 32)) == null ? undefined : f,
    repeatedUint32List: (f = jspb.Message.getRepeatedField(msg, 33)) == null ? undefined : f,
    repeatedUint64List: (f = jspb.Message.getRepeatedField(msg, 34)) == null ? undefined : f,
    repeatedSint32List: (f = jspb.Message.getRepeatedField(msg, 35)) == null ? undefined : f,
    repeatedSint64List: (f = jspb.Message.getRepeatedField(msg, 36)) == null ? undefined : f,
    repeatedFixed32List: (f = jspb.Message.getRepeatedField(msg, 37)) == null ? undefined : f,
    repeatedFixed64List: (f = jspb.Message.getRepeatedField(msg, 38)) == null ? undefined : f,
    repeatedSfixed32List: (f = jspb.Message.getRepeatedField(msg, 39)) == null ? undefined : f,
    repeatedSfixed64List: (f = jspb.Message.getRepeatedField(msg, 40)) == null ? undefined : f,
    repeatedFloatList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 41)) == null ? undefined : f,
    repeatedDoubleList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 42)) == null ? undefined : f,
    repeatedBoolList: (f = jspb.Message.getRepeatedBooleanField(msg, 43)) == null ? undefined : f,
    repeatedStringList: (f = jspb.Message.getRepeatedField(msg, 44)) == null ? undefined : f,
    repeatedBytesList: msg.getRepeatedBytesList_asB64(),
    repeatedGroupList: jspb.Message.toObjectList(msg.getRepeatedGroupList(),
    proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup.toObject, includeInstance),
    repeatedNestedMessageList: jspb.Message.toObjectList(msg.getRepeatedNestedMessageList(),
    proto.protobuf_unittest.TestAllTypesLite.NestedMessage.toObject, includeInstance),
    repeatedForeignMessageList: jspb.Message.toObjectList(msg.getRepeatedForeignMessageList(),
    proto.protobuf_unittest.ForeignMessageLite.toObject, includeInstance),
    repeatedImportMessageList: jspb.Message.toObjectList(msg.getRepeatedImportMessageList(),
    google_protobuf_unittest_import_lite_pb.ImportMessageLite.toObject, includeInstance),
    repeatedNestedEnumList: (f = jspb.Message.getRepeatedField(msg, 51)) == null ? undefined : f,
    repeatedForeignEnumList: (f = jspb.Message.getRepeatedField(msg, 52)) == null ? undefined : f,
    repeatedImportEnumList: (f = jspb.Message.getRepeatedField(msg, 53)) == null ? undefined : f,
    repeatedStringPieceList: (f = jspb.Message.getRepeatedField(msg, 54)) == null ? undefined : f,
    repeatedCordList: (f = jspb.Message.getRepeatedField(msg, 55)) == null ? undefined : f,
    repeatedLazyMessageList: jspb.Message.toObjectList(msg.getRepeatedLazyMessageList(),
    proto.protobuf_unittest.TestAllTypesLite.NestedMessage.toObject, includeInstance),
    defaultInt32: jspb.Message.getFieldWithDefault(msg, 61, 41),
    defaultInt64: jspb.Message.getFieldWithDefault(msg, 62, 42),
    defaultUint32: jspb.Message.getFieldWithDefault(msg, 63, 43),
    defaultUint64: jspb.Message.getFieldWithDefault(msg, 64, 44),
    defaultSint32: jspb.Message.getFieldWithDefault(msg, 65, -45),
    defaultSint64: jspb.Message.getFieldWithDefault(msg, 66, 46),
    defaultFixed32: jspb.Message.getFieldWithDefault(msg, 67, 47),
    defaultFixed64: jspb.Message.getFieldWithDefault(msg, 68, 48),
    defaultSfixed32: jspb.Message.getFieldWithDefault(msg, 69, 49),
    defaultSfixed64: jspb.Message.getFieldWithDefault(msg, 70, -50),
    defaultFloat: jspb.Message.getFloatingPointFieldWithDefault(msg, 71, 51.5),
    defaultDouble: jspb.Message.getFloatingPointFieldWithDefault(msg, 72, 52000.0),
    defaultBool: jspb.Message.getBooleanFieldWithDefault(msg, 73, true),
    defaultString: jspb.Message.getFieldWithDefault(msg, 74, "hello"),
    defaultBytes: msg.getDefaultBytes_asB64(),
    defaultNestedEnum: jspb.Message.getFieldWithDefault(msg, 81, 2),
    defaultForeignEnum: jspb.Message.getFieldWithDefault(msg, 82, 5),
    defaultImportEnum: jspb.Message.getFieldWithDefault(msg, 83, 8),
    defaultStringPiece: jspb.Message.getFieldWithDefault(msg, 84, "abc"),
    defaultCord: jspb.Message.getFieldWithDefault(msg, 85, "123"),
    oneofUint32: (f = jspb.Message.getField(msg, 111)) == null ? undefined : f,
    oneofNestedMessage: (f = msg.getOneofNestedMessage()) && proto.protobuf_unittest.TestAllTypesLite.NestedMessage.toObject(includeInstance, f),
    oneofString: (f = jspb.Message.getField(msg, 113)) == null ? undefined : f,
    oneofBytes: msg.getOneofBytes_asB64(),
    oneofLazyNestedMessage: (f = msg.getOneofLazyNestedMessage()) && proto.protobuf_unittest.TestAllTypesLite.NestedMessage.toObject(includeInstance, f),
    oneofNestedMessage2: (f = msg.getOneofNestedMessage2()) && proto.protobuf_unittest.TestAllTypesLite.NestedMessage2.toObject(includeInstance, f),
    deceptivelyNamedList: (f = jspb.Message.getField(msg, 116)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.TestAllTypesLite}
 */
proto.protobuf_unittest.TestAllTypesLite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestAllTypesLite;
  return proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestAllTypesLite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestAllTypesLite}
 */
proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOptionalInt32(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOptionalInt64(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOptionalUint32(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOptionalUint64(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readSint32());
      msg.setOptionalSint32(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readSint64());
      msg.setOptionalSint64(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setOptionalFixed32(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setOptionalFixed64(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setOptionalSfixed32(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setOptionalSfixed64(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setOptionalFloat(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOptionalDouble(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOptionalBool(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setOptionalString(value);
      break;
    case 15:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOptionalBytes(value);
      break;
    case 16:
      var value = new proto.protobuf_unittest.TestAllTypesLite.OptionalGroup;
      reader.readGroup(16, value,proto.protobuf_unittest.TestAllTypesLite.OptionalGroup.deserializeBinaryFromReader);
      msg.setOptionalGroup(value);
      break;
    case 18:
      var value = new proto.protobuf_unittest.TestAllTypesLite.NestedMessage;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.NestedMessage.deserializeBinaryFromReader);
      msg.setOptionalNestedMessage(value);
      break;
    case 19:
      var value = new proto.protobuf_unittest.ForeignMessageLite;
      reader.readMessage(value,proto.protobuf_unittest.ForeignMessageLite.deserializeBinaryFromReader);
      msg.setOptionalForeignMessage(value);
      break;
    case 20:
      var value = new google_protobuf_unittest_import_lite_pb.ImportMessageLite;
      reader.readMessage(value,google_protobuf_unittest_import_lite_pb.ImportMessageLite.deserializeBinaryFromReader);
      msg.setOptionalImportMessage(value);
      break;
    case 21:
      var value = /** @type {!proto.protobuf_unittest.TestAllTypesLite.NestedEnum} */ (reader.readEnum());
      msg.setOptionalNestedEnum(value);
      break;
    case 22:
      var value = /** @type {!proto.protobuf_unittest.ForeignEnumLite} */ (reader.readEnum());
      msg.setOptionalForeignEnum(value);
      break;
    case 23:
      var value = /** @type {!proto.protobuf_unittest_import.ImportEnumLite} */ (reader.readEnum());
      msg.setOptionalImportEnum(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setOptionalStringPiece(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setOptionalCord(value);
      break;
    case 26:
      var value = new google_protobuf_unittest_import_public_lite_pb.PublicImportMessageLite;
      reader.readMessage(value,google_protobuf_unittest_import_public_lite_pb.PublicImportMessageLite.deserializeBinaryFromReader);
      msg.setOptionalPublicImportMessage(value);
      break;
    case 27:
      var value = new proto.protobuf_unittest.TestAllTypesLite.NestedMessage;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.NestedMessage.deserializeBinaryFromReader);
      msg.setOptionalLazyMessage(value);
      break;
    case 31:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedInt32(values[i]);
      }
      break;
    case 32:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedInt64(values[i]);
      }
      break;
    case 33:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedUint32(values[i]);
      }
      break;
    case 34:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedUint64(values[i]);
      }
      break;
    case 35:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedSint32() : [reader.readSint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedSint32(values[i]);
      }
      break;
    case 36:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedSint64() : [reader.readSint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedSint64(values[i]);
      }
      break;
    case 37:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFixed32() : [reader.readFixed32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedFixed32(values[i]);
      }
      break;
    case 38:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFixed64() : [reader.readFixed64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedFixed64(values[i]);
      }
      break;
    case 39:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedSfixed32() : [reader.readSfixed32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedSfixed32(values[i]);
      }
      break;
    case 40:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedSfixed64() : [reader.readSfixed64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedSfixed64(values[i]);
      }
      break;
    case 41:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedFloat(values[i]);
      }
      break;
    case 42:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedDouble(values[i]);
      }
      break;
    case 43:
      var values = /** @type {!Array<boolean>} */ (reader.isDelimited() ? reader.readPackedBool() : [reader.readBool()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedBool(values[i]);
      }
      break;
    case 44:
      var value = /** @type {string} */ (reader.readString());
      msg.addRepeatedString(value);
      break;
    case 45:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addRepeatedBytes(value);
      break;
    case 46:
      var value = new proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup;
      reader.readGroup(46, value,proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup.deserializeBinaryFromReader);
      msg.addRepeatedGroup(value);
      break;
    case 48:
      var value = new proto.protobuf_unittest.TestAllTypesLite.NestedMessage;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.NestedMessage.deserializeBinaryFromReader);
      msg.addRepeatedNestedMessage(value);
      break;
    case 49:
      var value = new proto.protobuf_unittest.ForeignMessageLite;
      reader.readMessage(value,proto.protobuf_unittest.ForeignMessageLite.deserializeBinaryFromReader);
      msg.addRepeatedForeignMessage(value);
      break;
    case 50:
      var value = new google_protobuf_unittest_import_lite_pb.ImportMessageLite;
      reader.readMessage(value,google_protobuf_unittest_import_lite_pb.ImportMessageLite.deserializeBinaryFromReader);
      msg.addRepeatedImportMessage(value);
      break;
    case 51:
      var values = /** @type {!Array<!proto.protobuf_unittest.TestAllTypesLite.NestedEnum>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedNestedEnum(values[i]);
      }
      break;
    case 52:
      var values = /** @type {!Array<!proto.protobuf_unittest.ForeignEnumLite>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedForeignEnum(values[i]);
      }
      break;
    case 53:
      var values = /** @type {!Array<!proto.protobuf_unittest_import.ImportEnumLite>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedImportEnum(values[i]);
      }
      break;
    case 54:
      var value = /** @type {string} */ (reader.readString());
      msg.addRepeatedStringPiece(value);
      break;
    case 55:
      var value = /** @type {string} */ (reader.readString());
      msg.addRepeatedCord(value);
      break;
    case 57:
      var value = new proto.protobuf_unittest.TestAllTypesLite.NestedMessage;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.NestedMessage.deserializeBinaryFromReader);
      msg.addRepeatedLazyMessage(value);
      break;
    case 61:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDefaultInt32(value);
      break;
    case 62:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDefaultInt64(value);
      break;
    case 63:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDefaultUint32(value);
      break;
    case 64:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDefaultUint64(value);
      break;
    case 65:
      var value = /** @type {number} */ (reader.readSint32());
      msg.setDefaultSint32(value);
      break;
    case 66:
      var value = /** @type {number} */ (reader.readSint64());
      msg.setDefaultSint64(value);
      break;
    case 67:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setDefaultFixed32(value);
      break;
    case 68:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setDefaultFixed64(value);
      break;
    case 69:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setDefaultSfixed32(value);
      break;
    case 70:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setDefaultSfixed64(value);
      break;
    case 71:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDefaultFloat(value);
      break;
    case 72:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDefaultDouble(value);
      break;
    case 73:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultBool(value);
      break;
    case 74:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultString(value);
      break;
    case 75:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDefaultBytes(value);
      break;
    case 81:
      var value = /** @type {!proto.protobuf_unittest.TestAllTypesLite.NestedEnum} */ (reader.readEnum());
      msg.setDefaultNestedEnum(value);
      break;
    case 82:
      var value = /** @type {!proto.protobuf_unittest.ForeignEnumLite} */ (reader.readEnum());
      msg.setDefaultForeignEnum(value);
      break;
    case 83:
      var value = /** @type {!proto.protobuf_unittest_import.ImportEnumLite} */ (reader.readEnum());
      msg.setDefaultImportEnum(value);
      break;
    case 84:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultStringPiece(value);
      break;
    case 85:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultCord(value);
      break;
    case 111:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOneofUint32(value);
      break;
    case 112:
      var value = new proto.protobuf_unittest.TestAllTypesLite.NestedMessage;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.NestedMessage.deserializeBinaryFromReader);
      msg.setOneofNestedMessage(value);
      break;
    case 113:
      var value = /** @type {string} */ (reader.readString());
      msg.setOneofString(value);
      break;
    case 114:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOneofBytes(value);
      break;
    case 115:
      var value = new proto.protobuf_unittest.TestAllTypesLite.NestedMessage;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.NestedMessage.deserializeBinaryFromReader);
      msg.setOneofLazyNestedMessage(value);
      break;
    case 117:
      var value = new proto.protobuf_unittest.TestAllTypesLite.NestedMessage2;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.NestedMessage2.deserializeBinaryFromReader);
      msg.setOneofNestedMessage2(value);
      break;
    case 116:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeceptivelyNamedList(value);
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
proto.protobuf_unittest.TestAllTypesLite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestAllTypesLite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeSint32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeSint64(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeFixed32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeFixed64(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeSfixed32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeSfixed64(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeFloat(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeBytes(
      15,
      f
    );
  }
  f = message.getOptionalGroup();
  if (f != null) {
    writer.writeGroup(
      16,
      f,
      proto.protobuf_unittest.TestAllTypesLite.OptionalGroup.serializeBinaryToWriter
    );
  }
  f = message.getOptionalNestedMessage();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.protobuf_unittest.TestAllTypesLite.NestedMessage.serializeBinaryToWriter
    );
  }
  f = message.getOptionalForeignMessage();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.protobuf_unittest.ForeignMessageLite.serializeBinaryToWriter
    );
  }
  f = message.getOptionalImportMessage();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      google_protobuf_unittest_import_lite_pb.ImportMessageLite.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.protobuf_unittest.TestAllTypesLite.NestedEnum} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeEnum(
      21,
      f
    );
  }
  f = /** @type {!proto.protobuf_unittest.ForeignEnumLite} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeEnum(
      22,
      f
    );
  }
  f = /** @type {!proto.protobuf_unittest_import.ImportEnumLite} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeEnum(
      23,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeString(
      24,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getOptionalPublicImportMessage();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      google_protobuf_unittest_import_public_lite_pb.PublicImportMessageLite.serializeBinaryToWriter
    );
  }
  f = message.getOptionalLazyMessage();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.protobuf_unittest.TestAllTypesLite.NestedMessage.serializeBinaryToWriter
    );
  }
  f = message.getRepeatedInt32List();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      31,
      f
    );
  }
  f = message.getRepeatedInt64List();
  if (f.length > 0) {
    writer.writeRepeatedInt64(
      32,
      f
    );
  }
  f = message.getRepeatedUint32List();
  if (f.length > 0) {
    writer.writeRepeatedUint32(
      33,
      f
    );
  }
  f = message.getRepeatedUint64List();
  if (f.length > 0) {
    writer.writeRepeatedUint64(
      34,
      f
    );
  }
  f = message.getRepeatedSint32List();
  if (f.length > 0) {
    writer.writeRepeatedSint32(
      35,
      f
    );
  }
  f = message.getRepeatedSint64List();
  if (f.length > 0) {
    writer.writeRepeatedSint64(
      36,
      f
    );
  }
  f = message.getRepeatedFixed32List();
  if (f.length > 0) {
    writer.writeRepeatedFixed32(
      37,
      f
    );
  }
  f = message.getRepeatedFixed64List();
  if (f.length > 0) {
    writer.writeRepeatedFixed64(
      38,
      f
    );
  }
  f = message.getRepeatedSfixed32List();
  if (f.length > 0) {
    writer.writeRepeatedSfixed32(
      39,
      f
    );
  }
  f = message.getRepeatedSfixed64List();
  if (f.length > 0) {
    writer.writeRepeatedSfixed64(
      40,
      f
    );
  }
  f = message.getRepeatedFloatList();
  if (f.length > 0) {
    writer.writeRepeatedFloat(
      41,
      f
    );
  }
  f = message.getRepeatedDoubleList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      42,
      f
    );
  }
  f = message.getRepeatedBoolList();
  if (f.length > 0) {
    writer.writeRepeatedBool(
      43,
      f
    );
  }
  f = message.getRepeatedStringList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      44,
      f
    );
  }
  f = message.getRepeatedBytesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      45,
      f
    );
  }
  f = message.getRepeatedGroupList();
  if (f.length > 0) {
    writer.writeRepeatedGroup(
      46,
      f,
      proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup.serializeBinaryToWriter
    );
  }
  f = message.getRepeatedNestedMessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      48,
      f,
      proto.protobuf_unittest.TestAllTypesLite.NestedMessage.serializeBinaryToWriter
    );
  }
  f = message.getRepeatedForeignMessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      49,
      f,
      proto.protobuf_unittest.ForeignMessageLite.serializeBinaryToWriter
    );
  }
  f = message.getRepeatedImportMessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      50,
      f,
      google_protobuf_unittest_import_lite_pb.ImportMessageLite.serializeBinaryToWriter
    );
  }
  f = message.getRepeatedNestedEnumList();
  if (f.length > 0) {
    writer.writeRepeatedEnum(
      51,
      f
    );
  }
  f = message.getRepeatedForeignEnumList();
  if (f.length > 0) {
    writer.writeRepeatedEnum(
      52,
      f
    );
  }
  f = message.getRepeatedImportEnumList();
  if (f.length > 0) {
    writer.writeRepeatedEnum(
      53,
      f
    );
  }
  f = message.getRepeatedStringPieceList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      54,
      f
    );
  }
  f = message.getRepeatedCordList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      55,
      f
    );
  }
  f = message.getRepeatedLazyMessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      57,
      f,
      proto.protobuf_unittest.TestAllTypesLite.NestedMessage.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 61));
  if (f != null) {
    writer.writeInt32(
      61,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 62));
  if (f != null) {
    writer.writeInt64(
      62,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 63));
  if (f != null) {
    writer.writeUint32(
      63,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 64));
  if (f != null) {
    writer.writeUint64(
      64,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 65));
  if (f != null) {
    writer.writeSint32(
      65,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 66));
  if (f != null) {
    writer.writeSint64(
      66,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 67));
  if (f != null) {
    writer.writeFixed32(
      67,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 68));
  if (f != null) {
    writer.writeFixed64(
      68,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 69));
  if (f != null) {
    writer.writeSfixed32(
      69,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 70));
  if (f != null) {
    writer.writeSfixed64(
      70,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 71));
  if (f != null) {
    writer.writeFloat(
      71,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 72));
  if (f != null) {
    writer.writeDouble(
      72,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 73));
  if (f != null) {
    writer.writeBool(
      73,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 74));
  if (f != null) {
    writer.writeString(
      74,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 75));
  if (f != null) {
    writer.writeBytes(
      75,
      f
    );
  }
  f = /** @type {!proto.protobuf_unittest.TestAllTypesLite.NestedEnum} */ (jspb.Message.getField(message, 81));
  if (f != null) {
    writer.writeEnum(
      81,
      f
    );
  }
  f = /** @type {!proto.protobuf_unittest.ForeignEnumLite} */ (jspb.Message.getField(message, 82));
  if (f != null) {
    writer.writeEnum(
      82,
      f
    );
  }
  f = /** @type {!proto.protobuf_unittest_import.ImportEnumLite} */ (jspb.Message.getField(message, 83));
  if (f != null) {
    writer.writeEnum(
      83,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 84));
  if (f != null) {
    writer.writeString(
      84,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 85));
  if (f != null) {
    writer.writeString(
      85,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 111));
  if (f != null) {
    writer.writeUint32(
      111,
      f
    );
  }
  f = message.getOneofNestedMessage();
  if (f != null) {
    writer.writeMessage(
      112,
      f,
      proto.protobuf_unittest.TestAllTypesLite.NestedMessage.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 113));
  if (f != null) {
    writer.writeString(
      113,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 114));
  if (f != null) {
    writer.writeBytes(
      114,
      f
    );
  }
  f = message.getOneofLazyNestedMessage();
  if (f != null) {
    writer.writeMessage(
      115,
      f,
      proto.protobuf_unittest.TestAllTypesLite.NestedMessage.serializeBinaryToWriter
    );
  }
  f = message.getOneofNestedMessage2();
  if (f != null) {
    writer.writeMessage(
      117,
      f,
      proto.protobuf_unittest.TestAllTypesLite.NestedMessage2.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 116));
  if (f != null) {
    writer.writeInt32(
      116,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.protobuf_unittest.TestAllTypesLite.NestedEnum = {
  FOO: 1,
  BAR: 2,
  BAZ: 3
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
proto.protobuf_unittest.TestAllTypesLite.NestedMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestAllTypesLite.NestedMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    bb: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    cc: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage}
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestAllTypesLite.NestedMessage;
  return proto.protobuf_unittest.TestAllTypesLite.NestedMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage}
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBb(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCc(value);
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
proto.protobuf_unittest.TestAllTypesLite.NestedMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestAllTypesLite.NestedMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int32 bb = 1;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage.prototype.getBb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage.prototype.setBb = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage.prototype.clearBb = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage.prototype.hasBb = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 cc = 2;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage.prototype.getCc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage.prototype.setCc = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage.prototype.clearCc = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage.prototype.hasCc = function() {
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
proto.protobuf_unittest.TestAllTypesLite.NestedMessage2.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestAllTypesLite.NestedMessage2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage2.toObject = function(includeInstance, msg) {
  var f, obj = {
    dd: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage2}
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestAllTypesLite.NestedMessage2;
  return proto.protobuf_unittest.TestAllTypesLite.NestedMessage2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage2}
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDd(value);
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
proto.protobuf_unittest.TestAllTypesLite.NestedMessage2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestAllTypesLite.NestedMessage2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage2.serializeBinaryToWriter = function(message, writer) {
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
 * optional int32 dd = 1;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage2.prototype.getDd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage2} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage2.prototype.setDd = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage2} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage2.prototype.clearDd = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.NestedMessage2.prototype.hasDd = function() {
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
proto.protobuf_unittest.TestAllTypesLite.OptionalGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestAllTypesLite.OptionalGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestAllTypesLite.OptionalGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestAllTypesLite.OptionalGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    a: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.TestAllTypesLite.OptionalGroup}
 */
proto.protobuf_unittest.TestAllTypesLite.OptionalGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestAllTypesLite.OptionalGroup;
  return proto.protobuf_unittest.TestAllTypesLite.OptionalGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestAllTypesLite.OptionalGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestAllTypesLite.OptionalGroup}
 */
proto.protobuf_unittest.TestAllTypesLite.OptionalGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setA(value);
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
proto.protobuf_unittest.TestAllTypesLite.OptionalGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestAllTypesLite.OptionalGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestAllTypesLite.OptionalGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestAllTypesLite.OptionalGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      17,
      f
    );
  }
};


/**
 * optional int32 a = 17;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.OptionalGroup.prototype.getA = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite.OptionalGroup} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.OptionalGroup.prototype.setA = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite.OptionalGroup} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.OptionalGroup.prototype.clearA = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.OptionalGroup.prototype.hasA = function() {
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
proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    a: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup}
 */
proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup;
  return proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup}
 */
proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 47:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setA(value);
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
proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      47,
      f
    );
  }
};


/**
 * optional int32 a = 47;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup.prototype.getA = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup.prototype.setA = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup.prototype.clearA = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup.prototype.hasA = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 optional_int32 = 1;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalInt32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalInt32 = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalInt32 = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalInt32 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 optional_int64 = 2;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalInt64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalInt64 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalInt64 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalInt64 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 optional_uint32 = 3;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalUint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalUint32 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalUint32 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalUint32 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 optional_uint64 = 4;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalUint64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalUint64 = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalUint64 = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalUint64 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional sint32 optional_sint32 = 5;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalSint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalSint32 = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalSint32 = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalSint32 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional sint64 optional_sint64 = 6;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalSint64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalSint64 = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalSint64 = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalSint64 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional fixed32 optional_fixed32 = 7;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalFixed32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalFixed32 = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalFixed32 = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalFixed32 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional fixed64 optional_fixed64 = 8;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalFixed64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalFixed64 = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalFixed64 = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalFixed64 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional sfixed32 optional_sfixed32 = 9;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalSfixed32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalSfixed32 = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalSfixed32 = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalSfixed32 = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional sfixed64 optional_sfixed64 = 10;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalSfixed64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalSfixed64 = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalSfixed64 = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalSfixed64 = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional float optional_float = 11;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalFloat = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalFloat = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalFloat = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalFloat = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional double optional_double = 12;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalDouble = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalDouble = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalDouble = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalDouble = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool optional_bool = 13;
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalBool = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalBool = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalBool = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalBool = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string optional_string = 14;
 * @return {string}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalString = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalString = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalString = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bytes optional_bytes = 15;
 * @return {!(string|Uint8Array)}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * optional bytes optional_bytes = 15;
 * This is a type-conversion wrapper around `getOptionalBytes()`
 * @return {string}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOptionalBytes()));
};


/**
 * optional bytes optional_bytes = 15;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOptionalBytes()`
 * @return {!Uint8Array}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOptionalBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalBytes = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalBytes = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalBytes = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional group OptionalGroup = 16;
 * @return {?proto.protobuf_unittest.TestAllTypesLite.OptionalGroup}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalGroup = function() {
  return /** @type{?proto.protobuf_unittest.TestAllTypesLite.OptionalGroup} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.TestAllTypesLite.OptionalGroup, 16));
};


/**
 * @param {?proto.protobuf_unittest.TestAllTypesLite.OptionalGroup|undefined} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
*/
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalGroup = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalGroup = function() {
  return this.setOptionalGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalGroup = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional NestedMessage optional_nested_message = 18;
 * @return {?proto.protobuf_unittest.TestAllTypesLite.NestedMessage}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalNestedMessage = function() {
  return /** @type{?proto.protobuf_unittest.TestAllTypesLite.NestedMessage} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.TestAllTypesLite.NestedMessage, 18));
};


/**
 * @param {?proto.protobuf_unittest.TestAllTypesLite.NestedMessage|undefined} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
*/
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalNestedMessage = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalNestedMessage = function() {
  return this.setOptionalNestedMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalNestedMessage = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional ForeignMessageLite optional_foreign_message = 19;
 * @return {?proto.protobuf_unittest.ForeignMessageLite}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalForeignMessage = function() {
  return /** @type{?proto.protobuf_unittest.ForeignMessageLite} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.ForeignMessageLite, 19));
};


/**
 * @param {?proto.protobuf_unittest.ForeignMessageLite|undefined} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
*/
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalForeignMessage = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalForeignMessage = function() {
  return this.setOptionalForeignMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalForeignMessage = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional protobuf_unittest_import.ImportMessageLite optional_import_message = 20;
 * @return {?proto.protobuf_unittest_import.ImportMessageLite}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalImportMessage = function() {
  return /** @type{?proto.protobuf_unittest_import.ImportMessageLite} */ (
    jspb.Message.getWrapperField(this, google_protobuf_unittest_import_lite_pb.ImportMessageLite, 20));
};


/**
 * @param {?proto.protobuf_unittest_import.ImportMessageLite|undefined} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
*/
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalImportMessage = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalImportMessage = function() {
  return this.setOptionalImportMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalImportMessage = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional NestedEnum optional_nested_enum = 21;
 * @return {!proto.protobuf_unittest.TestAllTypesLite.NestedEnum}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalNestedEnum = function() {
  return /** @type {!proto.protobuf_unittest.TestAllTypesLite.NestedEnum} */ (jspb.Message.getFieldWithDefault(this, 21, 1));
};


/**
 * @param {!proto.protobuf_unittest.TestAllTypesLite.NestedEnum} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalNestedEnum = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalNestedEnum = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalNestedEnum = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional ForeignEnumLite optional_foreign_enum = 22;
 * @return {!proto.protobuf_unittest.ForeignEnumLite}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalForeignEnum = function() {
  return /** @type {!proto.protobuf_unittest.ForeignEnumLite} */ (jspb.Message.getFieldWithDefault(this, 22, 4));
};


/**
 * @param {!proto.protobuf_unittest.ForeignEnumLite} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalForeignEnum = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalForeignEnum = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalForeignEnum = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional protobuf_unittest_import.ImportEnumLite optional_import_enum = 23;
 * @return {!proto.protobuf_unittest_import.ImportEnumLite}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalImportEnum = function() {
  return /** @type {!proto.protobuf_unittest_import.ImportEnumLite} */ (jspb.Message.getFieldWithDefault(this, 23, 7));
};


/**
 * @param {!proto.protobuf_unittest_import.ImportEnumLite} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalImportEnum = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalImportEnum = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalImportEnum = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional string optional_string_piece = 24;
 * @return {string}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalStringPiece = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalStringPiece = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalStringPiece = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalStringPiece = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional string optional_cord = 25;
 * @return {string}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalCord = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalCord = function(value) {
  return jspb.Message.setField(this, 25, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalCord = function() {
  return jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalCord = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional protobuf_unittest_import.PublicImportMessageLite optional_public_import_message = 26;
 * @return {?proto.protobuf_unittest_import.PublicImportMessageLite}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalPublicImportMessage = function() {
  return /** @type{?proto.protobuf_unittest_import.PublicImportMessageLite} */ (
    jspb.Message.getWrapperField(this, google_protobuf_unittest_import_public_lite_pb.PublicImportMessageLite, 26));
};


/**
 * @param {?proto.protobuf_unittest_import.PublicImportMessageLite|undefined} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
*/
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalPublicImportMessage = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalPublicImportMessage = function() {
  return this.setOptionalPublicImportMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalPublicImportMessage = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional NestedMessage optional_lazy_message = 27;
 * @return {?proto.protobuf_unittest.TestAllTypesLite.NestedMessage}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOptionalLazyMessage = function() {
  return /** @type{?proto.protobuf_unittest.TestAllTypesLite.NestedMessage} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.TestAllTypesLite.NestedMessage, 27));
};


/**
 * @param {?proto.protobuf_unittest.TestAllTypesLite.NestedMessage|undefined} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
*/
proto.protobuf_unittest.TestAllTypesLite.prototype.setOptionalLazyMessage = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOptionalLazyMessage = function() {
  return this.setOptionalLazyMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOptionalLazyMessage = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * repeated int32 repeated_int32 = 31;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedInt32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 31));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedInt32List = function(value) {
  return jspb.Message.setField(this, 31, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedInt32 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 31, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedInt32List = function() {
  return this.setRepeatedInt32List([]);
};


/**
 * repeated int64 repeated_int64 = 32;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedInt64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 32));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedInt64List = function(value) {
  return jspb.Message.setField(this, 32, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedInt64 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 32, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedInt64List = function() {
  return this.setRepeatedInt64List([]);
};


/**
 * repeated uint32 repeated_uint32 = 33;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedUint32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 33));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedUint32List = function(value) {
  return jspb.Message.setField(this, 33, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedUint32 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 33, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedUint32List = function() {
  return this.setRepeatedUint32List([]);
};


/**
 * repeated uint64 repeated_uint64 = 34;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedUint64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 34));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedUint64List = function(value) {
  return jspb.Message.setField(this, 34, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedUint64 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 34, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedUint64List = function() {
  return this.setRepeatedUint64List([]);
};


/**
 * repeated sint32 repeated_sint32 = 35;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedSint32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 35));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedSint32List = function(value) {
  return jspb.Message.setField(this, 35, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedSint32 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 35, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedSint32List = function() {
  return this.setRepeatedSint32List([]);
};


/**
 * repeated sint64 repeated_sint64 = 36;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedSint64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 36));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedSint64List = function(value) {
  return jspb.Message.setField(this, 36, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedSint64 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 36, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedSint64List = function() {
  return this.setRepeatedSint64List([]);
};


/**
 * repeated fixed32 repeated_fixed32 = 37;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedFixed32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 37));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedFixed32List = function(value) {
  return jspb.Message.setField(this, 37, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedFixed32 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 37, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedFixed32List = function() {
  return this.setRepeatedFixed32List([]);
};


/**
 * repeated fixed64 repeated_fixed64 = 38;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedFixed64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 38));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedFixed64List = function(value) {
  return jspb.Message.setField(this, 38, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedFixed64 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 38, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedFixed64List = function() {
  return this.setRepeatedFixed64List([]);
};


/**
 * repeated sfixed32 repeated_sfixed32 = 39;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedSfixed32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 39));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedSfixed32List = function(value) {
  return jspb.Message.setField(this, 39, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedSfixed32 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 39, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedSfixed32List = function() {
  return this.setRepeatedSfixed32List([]);
};


/**
 * repeated sfixed64 repeated_sfixed64 = 40;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedSfixed64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 40));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedSfixed64List = function(value) {
  return jspb.Message.setField(this, 40, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedSfixed64 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 40, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedSfixed64List = function() {
  return this.setRepeatedSfixed64List([]);
};


/**
 * repeated float repeated_float = 41;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedFloatList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 41));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedFloatList = function(value) {
  return jspb.Message.setField(this, 41, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedFloat = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 41, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedFloatList = function() {
  return this.setRepeatedFloatList([]);
};


/**
 * repeated double repeated_double = 42;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedDoubleList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 42));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedDoubleList = function(value) {
  return jspb.Message.setField(this, 42, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedDouble = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 42, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedDoubleList = function() {
  return this.setRepeatedDoubleList([]);
};


/**
 * repeated bool repeated_bool = 43;
 * @return {!Array<boolean>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedBoolList = function() {
  return /** @type {!Array<boolean>} */ (jspb.Message.getRepeatedBooleanField(this, 43));
};


/**
 * @param {!Array<boolean>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedBoolList = function(value) {
  return jspb.Message.setField(this, 43, value || []);
};


/**
 * @param {boolean} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedBool = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 43, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedBoolList = function() {
  return this.setRepeatedBoolList([]);
};


/**
 * repeated string repeated_string = 44;
 * @return {!Array<string>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedStringList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 44));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedStringList = function(value) {
  return jspb.Message.setField(this, 44, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedString = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 44, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedStringList = function() {
  return this.setRepeatedStringList([]);
};


/**
 * repeated bytes repeated_bytes = 45;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedBytesList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 45));
};


/**
 * repeated bytes repeated_bytes = 45;
 * This is a type-conversion wrapper around `getRepeatedBytesList()`
 * @return {!Array<string>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedBytesList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getRepeatedBytesList()));
};


/**
 * repeated bytes repeated_bytes = 45;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRepeatedBytesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedBytesList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getRepeatedBytesList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedBytesList = function(value) {
  return jspb.Message.setField(this, 45, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedBytes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 45, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedBytesList = function() {
  return this.setRepeatedBytesList([]);
};


/**
 * repeated group RepeatedGroup = 46;
 * @return {!Array<!proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedGroupList = function() {
  return /** @type{!Array<!proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup, 46));
};


/**
 * @param {!Array<!proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
*/
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedGroupList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 46, value);
};


/**
 * @param {!proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedGroup = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 46, opt_value, proto.protobuf_unittest.TestAllTypesLite.RepeatedGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedGroupList = function() {
  return this.setRepeatedGroupList([]);
};


/**
 * repeated NestedMessage repeated_nested_message = 48;
 * @return {!Array<!proto.protobuf_unittest.TestAllTypesLite.NestedMessage>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedNestedMessageList = function() {
  return /** @type{!Array<!proto.protobuf_unittest.TestAllTypesLite.NestedMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protobuf_unittest.TestAllTypesLite.NestedMessage, 48));
};


/**
 * @param {!Array<!proto.protobuf_unittest.TestAllTypesLite.NestedMessage>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
*/
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedNestedMessageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 48, value);
};


/**
 * @param {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedNestedMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 48, opt_value, proto.protobuf_unittest.TestAllTypesLite.NestedMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedNestedMessageList = function() {
  return this.setRepeatedNestedMessageList([]);
};


/**
 * repeated ForeignMessageLite repeated_foreign_message = 49;
 * @return {!Array<!proto.protobuf_unittest.ForeignMessageLite>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedForeignMessageList = function() {
  return /** @type{!Array<!proto.protobuf_unittest.ForeignMessageLite>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protobuf_unittest.ForeignMessageLite, 49));
};


/**
 * @param {!Array<!proto.protobuf_unittest.ForeignMessageLite>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
*/
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedForeignMessageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 49, value);
};


/**
 * @param {!proto.protobuf_unittest.ForeignMessageLite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.ForeignMessageLite}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedForeignMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 49, opt_value, proto.protobuf_unittest.ForeignMessageLite, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedForeignMessageList = function() {
  return this.setRepeatedForeignMessageList([]);
};


/**
 * repeated protobuf_unittest_import.ImportMessageLite repeated_import_message = 50;
 * @return {!Array<!proto.protobuf_unittest_import.ImportMessageLite>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedImportMessageList = function() {
  return /** @type{!Array<!proto.protobuf_unittest_import.ImportMessageLite>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_unittest_import_lite_pb.ImportMessageLite, 50));
};


/**
 * @param {!Array<!proto.protobuf_unittest_import.ImportMessageLite>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
*/
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedImportMessageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 50, value);
};


/**
 * @param {!proto.protobuf_unittest_import.ImportMessageLite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest_import.ImportMessageLite}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedImportMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 50, opt_value, proto.protobuf_unittest_import.ImportMessageLite, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedImportMessageList = function() {
  return this.setRepeatedImportMessageList([]);
};


/**
 * repeated NestedEnum repeated_nested_enum = 51;
 * @return {!Array<!proto.protobuf_unittest.TestAllTypesLite.NestedEnum>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedNestedEnumList = function() {
  return /** @type {!Array<!proto.protobuf_unittest.TestAllTypesLite.NestedEnum>} */ (jspb.Message.getRepeatedField(this, 51));
};


/**
 * @param {!Array<!proto.protobuf_unittest.TestAllTypesLite.NestedEnum>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedNestedEnumList = function(value) {
  return jspb.Message.setField(this, 51, value || []);
};


/**
 * @param {!proto.protobuf_unittest.TestAllTypesLite.NestedEnum} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedNestedEnum = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 51, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedNestedEnumList = function() {
  return this.setRepeatedNestedEnumList([]);
};


/**
 * repeated ForeignEnumLite repeated_foreign_enum = 52;
 * @return {!Array<!proto.protobuf_unittest.ForeignEnumLite>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedForeignEnumList = function() {
  return /** @type {!Array<!proto.protobuf_unittest.ForeignEnumLite>} */ (jspb.Message.getRepeatedField(this, 52));
};


/**
 * @param {!Array<!proto.protobuf_unittest.ForeignEnumLite>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedForeignEnumList = function(value) {
  return jspb.Message.setField(this, 52, value || []);
};


/**
 * @param {!proto.protobuf_unittest.ForeignEnumLite} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedForeignEnum = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 52, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedForeignEnumList = function() {
  return this.setRepeatedForeignEnumList([]);
};


/**
 * repeated protobuf_unittest_import.ImportEnumLite repeated_import_enum = 53;
 * @return {!Array<!proto.protobuf_unittest_import.ImportEnumLite>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedImportEnumList = function() {
  return /** @type {!Array<!proto.protobuf_unittest_import.ImportEnumLite>} */ (jspb.Message.getRepeatedField(this, 53));
};


/**
 * @param {!Array<!proto.protobuf_unittest_import.ImportEnumLite>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedImportEnumList = function(value) {
  return jspb.Message.setField(this, 53, value || []);
};


/**
 * @param {!proto.protobuf_unittest_import.ImportEnumLite} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedImportEnum = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 53, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedImportEnumList = function() {
  return this.setRepeatedImportEnumList([]);
};


/**
 * repeated string repeated_string_piece = 54;
 * @return {!Array<string>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedStringPieceList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 54));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedStringPieceList = function(value) {
  return jspb.Message.setField(this, 54, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedStringPiece = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 54, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedStringPieceList = function() {
  return this.setRepeatedStringPieceList([]);
};


/**
 * repeated string repeated_cord = 55;
 * @return {!Array<string>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedCordList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 55));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedCordList = function(value) {
  return jspb.Message.setField(this, 55, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedCord = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 55, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedCordList = function() {
  return this.setRepeatedCordList([]);
};


/**
 * repeated NestedMessage repeated_lazy_message = 57;
 * @return {!Array<!proto.protobuf_unittest.TestAllTypesLite.NestedMessage>}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getRepeatedLazyMessageList = function() {
  return /** @type{!Array<!proto.protobuf_unittest.TestAllTypesLite.NestedMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protobuf_unittest.TestAllTypesLite.NestedMessage, 57));
};


/**
 * @param {!Array<!proto.protobuf_unittest.TestAllTypesLite.NestedMessage>} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
*/
proto.protobuf_unittest.TestAllTypesLite.prototype.setRepeatedLazyMessageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 57, value);
};


/**
 * @param {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite.NestedMessage}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.addRepeatedLazyMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 57, opt_value, proto.protobuf_unittest.TestAllTypesLite.NestedMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearRepeatedLazyMessageList = function() {
  return this.setRepeatedLazyMessageList([]);
};


/**
 * optional int32 default_int32 = 61;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultInt32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 61, 41));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultInt32 = function(value) {
  return jspb.Message.setField(this, 61, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultInt32 = function() {
  return jspb.Message.setField(this, 61, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultInt32 = function() {
  return jspb.Message.getField(this, 61) != null;
};


/**
 * optional int64 default_int64 = 62;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultInt64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 62, 42));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultInt64 = function(value) {
  return jspb.Message.setField(this, 62, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultInt64 = function() {
  return jspb.Message.setField(this, 62, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultInt64 = function() {
  return jspb.Message.getField(this, 62) != null;
};


/**
 * optional uint32 default_uint32 = 63;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultUint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 63, 43));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultUint32 = function(value) {
  return jspb.Message.setField(this, 63, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultUint32 = function() {
  return jspb.Message.setField(this, 63, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultUint32 = function() {
  return jspb.Message.getField(this, 63) != null;
};


/**
 * optional uint64 default_uint64 = 64;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultUint64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 64, 44));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultUint64 = function(value) {
  return jspb.Message.setField(this, 64, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultUint64 = function() {
  return jspb.Message.setField(this, 64, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultUint64 = function() {
  return jspb.Message.getField(this, 64) != null;
};


/**
 * optional sint32 default_sint32 = 65;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultSint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 65, -45));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultSint32 = function(value) {
  return jspb.Message.setField(this, 65, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultSint32 = function() {
  return jspb.Message.setField(this, 65, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultSint32 = function() {
  return jspb.Message.getField(this, 65) != null;
};


/**
 * optional sint64 default_sint64 = 66;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultSint64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 66, 46));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultSint64 = function(value) {
  return jspb.Message.setField(this, 66, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultSint64 = function() {
  return jspb.Message.setField(this, 66, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultSint64 = function() {
  return jspb.Message.getField(this, 66) != null;
};


/**
 * optional fixed32 default_fixed32 = 67;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultFixed32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 67, 47));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultFixed32 = function(value) {
  return jspb.Message.setField(this, 67, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultFixed32 = function() {
  return jspb.Message.setField(this, 67, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultFixed32 = function() {
  return jspb.Message.getField(this, 67) != null;
};


/**
 * optional fixed64 default_fixed64 = 68;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultFixed64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 68, 48));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultFixed64 = function(value) {
  return jspb.Message.setField(this, 68, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultFixed64 = function() {
  return jspb.Message.setField(this, 68, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultFixed64 = function() {
  return jspb.Message.getField(this, 68) != null;
};


/**
 * optional sfixed32 default_sfixed32 = 69;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultSfixed32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 69, 49));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultSfixed32 = function(value) {
  return jspb.Message.setField(this, 69, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultSfixed32 = function() {
  return jspb.Message.setField(this, 69, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultSfixed32 = function() {
  return jspb.Message.getField(this, 69) != null;
};


/**
 * optional sfixed64 default_sfixed64 = 70;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultSfixed64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 70, -50));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultSfixed64 = function(value) {
  return jspb.Message.setField(this, 70, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultSfixed64 = function() {
  return jspb.Message.setField(this, 70, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultSfixed64 = function() {
  return jspb.Message.getField(this, 70) != null;
};


/**
 * optional float default_float = 71;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultFloat = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 71, 51.5));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultFloat = function(value) {
  return jspb.Message.setField(this, 71, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultFloat = function() {
  return jspb.Message.setField(this, 71, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultFloat = function() {
  return jspb.Message.getField(this, 71) != null;
};


/**
 * optional double default_double = 72;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultDouble = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 72, 52000.0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultDouble = function(value) {
  return jspb.Message.setField(this, 72, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultDouble = function() {
  return jspb.Message.setField(this, 72, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultDouble = function() {
  return jspb.Message.getField(this, 72) != null;
};


/**
 * optional bool default_bool = 73;
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultBool = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 73, true));
};


/**
 * @param {boolean} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultBool = function(value) {
  return jspb.Message.setField(this, 73, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultBool = function() {
  return jspb.Message.setField(this, 73, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultBool = function() {
  return jspb.Message.getField(this, 73) != null;
};


/**
 * optional string default_string = 74;
 * @return {string}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 74, "hello"));
};


/**
 * @param {string} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultString = function(value) {
  return jspb.Message.setField(this, 74, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultString = function() {
  return jspb.Message.setField(this, 74, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultString = function() {
  return jspb.Message.getField(this, 74) != null;
};


/**
 * optional bytes default_bytes = 75;
 * @return {!(string|Uint8Array)}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 75, "d29ybGQ="));
};


/**
 * optional bytes default_bytes = 75;
 * This is a type-conversion wrapper around `getDefaultBytes()`
 * @return {string}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDefaultBytes()));
};


/**
 * optional bytes default_bytes = 75;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDefaultBytes()`
 * @return {!Uint8Array}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDefaultBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultBytes = function(value) {
  return jspb.Message.setField(this, 75, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultBytes = function() {
  return jspb.Message.setField(this, 75, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultBytes = function() {
  return jspb.Message.getField(this, 75) != null;
};


/**
 * optional NestedEnum default_nested_enum = 81;
 * @return {!proto.protobuf_unittest.TestAllTypesLite.NestedEnum}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultNestedEnum = function() {
  return /** @type {!proto.protobuf_unittest.TestAllTypesLite.NestedEnum} */ (jspb.Message.getFieldWithDefault(this, 81, 2));
};


/**
 * @param {!proto.protobuf_unittest.TestAllTypesLite.NestedEnum} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultNestedEnum = function(value) {
  return jspb.Message.setField(this, 81, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultNestedEnum = function() {
  return jspb.Message.setField(this, 81, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultNestedEnum = function() {
  return jspb.Message.getField(this, 81) != null;
};


/**
 * optional ForeignEnumLite default_foreign_enum = 82;
 * @return {!proto.protobuf_unittest.ForeignEnumLite}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultForeignEnum = function() {
  return /** @type {!proto.protobuf_unittest.ForeignEnumLite} */ (jspb.Message.getFieldWithDefault(this, 82, 5));
};


/**
 * @param {!proto.protobuf_unittest.ForeignEnumLite} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultForeignEnum = function(value) {
  return jspb.Message.setField(this, 82, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultForeignEnum = function() {
  return jspb.Message.setField(this, 82, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultForeignEnum = function() {
  return jspb.Message.getField(this, 82) != null;
};


/**
 * optional protobuf_unittest_import.ImportEnumLite default_import_enum = 83;
 * @return {!proto.protobuf_unittest_import.ImportEnumLite}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultImportEnum = function() {
  return /** @type {!proto.protobuf_unittest_import.ImportEnumLite} */ (jspb.Message.getFieldWithDefault(this, 83, 8));
};


/**
 * @param {!proto.protobuf_unittest_import.ImportEnumLite} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultImportEnum = function(value) {
  return jspb.Message.setField(this, 83, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultImportEnum = function() {
  return jspb.Message.setField(this, 83, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultImportEnum = function() {
  return jspb.Message.getField(this, 83) != null;
};


/**
 * optional string default_string_piece = 84;
 * @return {string}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultStringPiece = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 84, "abc"));
};


/**
 * @param {string} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultStringPiece = function(value) {
  return jspb.Message.setField(this, 84, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultStringPiece = function() {
  return jspb.Message.setField(this, 84, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultStringPiece = function() {
  return jspb.Message.getField(this, 84) != null;
};


/**
 * optional string default_cord = 85;
 * @return {string}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDefaultCord = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 85, "123"));
};


/**
 * @param {string} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDefaultCord = function(value) {
  return jspb.Message.setField(this, 85, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDefaultCord = function() {
  return jspb.Message.setField(this, 85, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDefaultCord = function() {
  return jspb.Message.getField(this, 85) != null;
};


/**
 * optional uint32 oneof_uint32 = 111;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOneofUint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 111, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOneofUint32 = function(value) {
  return jspb.Message.setOneofField(this, 111, proto.protobuf_unittest.TestAllTypesLite.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOneofUint32 = function() {
  return jspb.Message.setOneofField(this, 111, proto.protobuf_unittest.TestAllTypesLite.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOneofUint32 = function() {
  return jspb.Message.getField(this, 111) != null;
};


/**
 * optional NestedMessage oneof_nested_message = 112;
 * @return {?proto.protobuf_unittest.TestAllTypesLite.NestedMessage}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOneofNestedMessage = function() {
  return /** @type{?proto.protobuf_unittest.TestAllTypesLite.NestedMessage} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.TestAllTypesLite.NestedMessage, 112));
};


/**
 * @param {?proto.protobuf_unittest.TestAllTypesLite.NestedMessage|undefined} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
*/
proto.protobuf_unittest.TestAllTypesLite.prototype.setOneofNestedMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 112, proto.protobuf_unittest.TestAllTypesLite.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOneofNestedMessage = function() {
  return this.setOneofNestedMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOneofNestedMessage = function() {
  return jspb.Message.getField(this, 112) != null;
};


/**
 * optional string oneof_string = 113;
 * @return {string}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOneofString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 113, ""));
};


/**
 * @param {string} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOneofString = function(value) {
  return jspb.Message.setOneofField(this, 113, proto.protobuf_unittest.TestAllTypesLite.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOneofString = function() {
  return jspb.Message.setOneofField(this, 113, proto.protobuf_unittest.TestAllTypesLite.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOneofString = function() {
  return jspb.Message.getField(this, 113) != null;
};


/**
 * optional bytes oneof_bytes = 114;
 * @return {!(string|Uint8Array)}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOneofBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 114, ""));
};


/**
 * optional bytes oneof_bytes = 114;
 * This is a type-conversion wrapper around `getOneofBytes()`
 * @return {string}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOneofBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOneofBytes()));
};


/**
 * optional bytes oneof_bytes = 114;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOneofBytes()`
 * @return {!Uint8Array}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOneofBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOneofBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setOneofBytes = function(value) {
  return jspb.Message.setOneofField(this, 114, proto.protobuf_unittest.TestAllTypesLite.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOneofBytes = function() {
  return jspb.Message.setOneofField(this, 114, proto.protobuf_unittest.TestAllTypesLite.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOneofBytes = function() {
  return jspb.Message.getField(this, 114) != null;
};


/**
 * optional NestedMessage oneof_lazy_nested_message = 115;
 * @return {?proto.protobuf_unittest.TestAllTypesLite.NestedMessage}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOneofLazyNestedMessage = function() {
  return /** @type{?proto.protobuf_unittest.TestAllTypesLite.NestedMessage} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.TestAllTypesLite.NestedMessage, 115));
};


/**
 * @param {?proto.protobuf_unittest.TestAllTypesLite.NestedMessage|undefined} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
*/
proto.protobuf_unittest.TestAllTypesLite.prototype.setOneofLazyNestedMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 115, proto.protobuf_unittest.TestAllTypesLite.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOneofLazyNestedMessage = function() {
  return this.setOneofLazyNestedMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOneofLazyNestedMessage = function() {
  return jspb.Message.getField(this, 115) != null;
};


/**
 * optional NestedMessage2 oneof_nested_message2 = 117;
 * @return {?proto.protobuf_unittest.TestAllTypesLite.NestedMessage2}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getOneofNestedMessage2 = function() {
  return /** @type{?proto.protobuf_unittest.TestAllTypesLite.NestedMessage2} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.TestAllTypesLite.NestedMessage2, 117));
};


/**
 * @param {?proto.protobuf_unittest.TestAllTypesLite.NestedMessage2|undefined} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
*/
proto.protobuf_unittest.TestAllTypesLite.prototype.setOneofNestedMessage2 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 117, proto.protobuf_unittest.TestAllTypesLite.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearOneofNestedMessage2 = function() {
  return this.setOneofNestedMessage2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasOneofNestedMessage2 = function() {
  return jspb.Message.getField(this, 117) != null;
};


/**
 * optional int32 deceptively_named_list = 116;
 * @return {number}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.getDeceptivelyNamedList = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 116, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.setDeceptivelyNamedList = function(value) {
  return jspb.Message.setField(this, 116, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestAllTypesLite} returns this
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.clearDeceptivelyNamedList = function() {
  return jspb.Message.setField(this, 116, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestAllTypesLite.prototype.hasDeceptivelyNamedList = function() {
  return jspb.Message.getField(this, 116) != null;
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
proto.protobuf_unittest.ForeignMessageLite.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.ForeignMessageLite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.ForeignMessageLite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.ForeignMessageLite.toObject = function(includeInstance, msg) {
  var f, obj = {
    c: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.ForeignMessageLite}
 */
proto.protobuf_unittest.ForeignMessageLite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.ForeignMessageLite;
  return proto.protobuf_unittest.ForeignMessageLite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.ForeignMessageLite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.ForeignMessageLite}
 */
proto.protobuf_unittest.ForeignMessageLite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setC(value);
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
proto.protobuf_unittest.ForeignMessageLite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.ForeignMessageLite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.ForeignMessageLite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.ForeignMessageLite.serializeBinaryToWriter = function(message, writer) {
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
 * optional int32 c = 1;
 * @return {number}
 */
proto.protobuf_unittest.ForeignMessageLite.prototype.getC = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.ForeignMessageLite} returns this
 */
proto.protobuf_unittest.ForeignMessageLite.prototype.setC = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.ForeignMessageLite} returns this
 */
proto.protobuf_unittest.ForeignMessageLite.prototype.clearC = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.ForeignMessageLite.prototype.hasC = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protobuf_unittest.TestPackedTypesLite.repeatedFields_ = [90,91,92,93,94,95,96,97,98,99,100,101,102,103];



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
proto.protobuf_unittest.TestPackedTypesLite.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestPackedTypesLite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestPackedTypesLite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestPackedTypesLite.toObject = function(includeInstance, msg) {
  var f, obj = {
    packedInt32List: (f = jspb.Message.getRepeatedField(msg, 90)) == null ? undefined : f,
    packedInt64List: (f = jspb.Message.getRepeatedField(msg, 91)) == null ? undefined : f,
    packedUint32List: (f = jspb.Message.getRepeatedField(msg, 92)) == null ? undefined : f,
    packedUint64List: (f = jspb.Message.getRepeatedField(msg, 93)) == null ? undefined : f,
    packedSint32List: (f = jspb.Message.getRepeatedField(msg, 94)) == null ? undefined : f,
    packedSint64List: (f = jspb.Message.getRepeatedField(msg, 95)) == null ? undefined : f,
    packedFixed32List: (f = jspb.Message.getRepeatedField(msg, 96)) == null ? undefined : f,
    packedFixed64List: (f = jspb.Message.getRepeatedField(msg, 97)) == null ? undefined : f,
    packedSfixed32List: (f = jspb.Message.getRepeatedField(msg, 98)) == null ? undefined : f,
    packedSfixed64List: (f = jspb.Message.getRepeatedField(msg, 99)) == null ? undefined : f,
    packedFloatList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 100)) == null ? undefined : f,
    packedDoubleList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 101)) == null ? undefined : f,
    packedBoolList: (f = jspb.Message.getRepeatedBooleanField(msg, 102)) == null ? undefined : f,
    packedEnumList: (f = jspb.Message.getRepeatedField(msg, 103)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.TestPackedTypesLite}
 */
proto.protobuf_unittest.TestPackedTypesLite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestPackedTypesLite;
  return proto.protobuf_unittest.TestPackedTypesLite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestPackedTypesLite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestPackedTypesLite}
 */
proto.protobuf_unittest.TestPackedTypesLite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 90:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPackedInt32(values[i]);
      }
      break;
    case 91:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPackedInt64(values[i]);
      }
      break;
    case 92:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPackedUint32(values[i]);
      }
      break;
    case 93:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPackedUint64(values[i]);
      }
      break;
    case 94:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedSint32() : [reader.readSint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPackedSint32(values[i]);
      }
      break;
    case 95:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedSint64() : [reader.readSint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPackedSint64(values[i]);
      }
      break;
    case 96:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFixed32() : [reader.readFixed32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPackedFixed32(values[i]);
      }
      break;
    case 97:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFixed64() : [reader.readFixed64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPackedFixed64(values[i]);
      }
      break;
    case 98:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedSfixed32() : [reader.readSfixed32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPackedSfixed32(values[i]);
      }
      break;
    case 99:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedSfixed64() : [reader.readSfixed64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPackedSfixed64(values[i]);
      }
      break;
    case 100:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPackedFloat(values[i]);
      }
      break;
    case 101:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPackedDouble(values[i]);
      }
      break;
    case 102:
      var values = /** @type {!Array<boolean>} */ (reader.isDelimited() ? reader.readPackedBool() : [reader.readBool()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPackedBool(values[i]);
      }
      break;
    case 103:
      var values = /** @type {!Array<!proto.protobuf_unittest.ForeignEnumLite>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPackedEnum(values[i]);
      }
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
proto.protobuf_unittest.TestPackedTypesLite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestPackedTypesLite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestPackedTypesLite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestPackedTypesLite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPackedInt32List();
  if (f.length > 0) {
    writer.writePackedInt32(
      90,
      f
    );
  }
  f = message.getPackedInt64List();
  if (f.length > 0) {
    writer.writePackedInt64(
      91,
      f
    );
  }
  f = message.getPackedUint32List();
  if (f.length > 0) {
    writer.writePackedUint32(
      92,
      f
    );
  }
  f = message.getPackedUint64List();
  if (f.length > 0) {
    writer.writePackedUint64(
      93,
      f
    );
  }
  f = message.getPackedSint32List();
  if (f.length > 0) {
    writer.writePackedSint32(
      94,
      f
    );
  }
  f = message.getPackedSint64List();
  if (f.length > 0) {
    writer.writePackedSint64(
      95,
      f
    );
  }
  f = message.getPackedFixed32List();
  if (f.length > 0) {
    writer.writePackedFixed32(
      96,
      f
    );
  }
  f = message.getPackedFixed64List();
  if (f.length > 0) {
    writer.writePackedFixed64(
      97,
      f
    );
  }
  f = message.getPackedSfixed32List();
  if (f.length > 0) {
    writer.writePackedSfixed32(
      98,
      f
    );
  }
  f = message.getPackedSfixed64List();
  if (f.length > 0) {
    writer.writePackedSfixed64(
      99,
      f
    );
  }
  f = message.getPackedFloatList();
  if (f.length > 0) {
    writer.writePackedFloat(
      100,
      f
    );
  }
  f = message.getPackedDoubleList();
  if (f.length > 0) {
    writer.writePackedDouble(
      101,
      f
    );
  }
  f = message.getPackedBoolList();
  if (f.length > 0) {
    writer.writePackedBool(
      102,
      f
    );
  }
  f = message.getPackedEnumList();
  if (f.length > 0) {
    writer.writePackedEnum(
      103,
      f
    );
  }
};


/**
 * repeated int32 packed_int32 = 90;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.getPackedInt32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 90));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.setPackedInt32List = function(value) {
  return jspb.Message.setField(this, 90, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.addPackedInt32 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 90, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.clearPackedInt32List = function() {
  return this.setPackedInt32List([]);
};


/**
 * repeated int64 packed_int64 = 91;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.getPackedInt64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 91));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.setPackedInt64List = function(value) {
  return jspb.Message.setField(this, 91, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.addPackedInt64 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 91, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.clearPackedInt64List = function() {
  return this.setPackedInt64List([]);
};


/**
 * repeated uint32 packed_uint32 = 92;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.getPackedUint32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 92));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.setPackedUint32List = function(value) {
  return jspb.Message.setField(this, 92, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.addPackedUint32 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 92, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.clearPackedUint32List = function() {
  return this.setPackedUint32List([]);
};


/**
 * repeated uint64 packed_uint64 = 93;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.getPackedUint64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 93));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.setPackedUint64List = function(value) {
  return jspb.Message.setField(this, 93, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.addPackedUint64 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 93, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.clearPackedUint64List = function() {
  return this.setPackedUint64List([]);
};


/**
 * repeated sint32 packed_sint32 = 94;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.getPackedSint32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 94));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.setPackedSint32List = function(value) {
  return jspb.Message.setField(this, 94, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.addPackedSint32 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 94, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.clearPackedSint32List = function() {
  return this.setPackedSint32List([]);
};


/**
 * repeated sint64 packed_sint64 = 95;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.getPackedSint64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 95));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.setPackedSint64List = function(value) {
  return jspb.Message.setField(this, 95, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.addPackedSint64 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 95, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.clearPackedSint64List = function() {
  return this.setPackedSint64List([]);
};


/**
 * repeated fixed32 packed_fixed32 = 96;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.getPackedFixed32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 96));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.setPackedFixed32List = function(value) {
  return jspb.Message.setField(this, 96, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.addPackedFixed32 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 96, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.clearPackedFixed32List = function() {
  return this.setPackedFixed32List([]);
};


/**
 * repeated fixed64 packed_fixed64 = 97;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.getPackedFixed64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 97));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.setPackedFixed64List = function(value) {
  return jspb.Message.setField(this, 97, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.addPackedFixed64 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 97, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.clearPackedFixed64List = function() {
  return this.setPackedFixed64List([]);
};


/**
 * repeated sfixed32 packed_sfixed32 = 98;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.getPackedSfixed32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 98));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.setPackedSfixed32List = function(value) {
  return jspb.Message.setField(this, 98, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.addPackedSfixed32 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 98, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.clearPackedSfixed32List = function() {
  return this.setPackedSfixed32List([]);
};


/**
 * repeated sfixed64 packed_sfixed64 = 99;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.getPackedSfixed64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 99));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.setPackedSfixed64List = function(value) {
  return jspb.Message.setField(this, 99, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.addPackedSfixed64 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 99, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.clearPackedSfixed64List = function() {
  return this.setPackedSfixed64List([]);
};


/**
 * repeated float packed_float = 100;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.getPackedFloatList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 100));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.setPackedFloatList = function(value) {
  return jspb.Message.setField(this, 100, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.addPackedFloat = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 100, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.clearPackedFloatList = function() {
  return this.setPackedFloatList([]);
};


/**
 * repeated double packed_double = 101;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.getPackedDoubleList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 101));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.setPackedDoubleList = function(value) {
  return jspb.Message.setField(this, 101, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.addPackedDouble = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 101, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.clearPackedDoubleList = function() {
  return this.setPackedDoubleList([]);
};


/**
 * repeated bool packed_bool = 102;
 * @return {!Array<boolean>}
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.getPackedBoolList = function() {
  return /** @type {!Array<boolean>} */ (jspb.Message.getRepeatedBooleanField(this, 102));
};


/**
 * @param {!Array<boolean>} value
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.setPackedBoolList = function(value) {
  return jspb.Message.setField(this, 102, value || []);
};


/**
 * @param {boolean} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.addPackedBool = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 102, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.clearPackedBoolList = function() {
  return this.setPackedBoolList([]);
};


/**
 * repeated ForeignEnumLite packed_enum = 103;
 * @return {!Array<!proto.protobuf_unittest.ForeignEnumLite>}
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.getPackedEnumList = function() {
  return /** @type {!Array<!proto.protobuf_unittest.ForeignEnumLite>} */ (jspb.Message.getRepeatedField(this, 103));
};


/**
 * @param {!Array<!proto.protobuf_unittest.ForeignEnumLite>} value
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.setPackedEnumList = function(value) {
  return jspb.Message.setField(this, 103, value || []);
};


/**
 * @param {!proto.protobuf_unittest.ForeignEnumLite} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.addPackedEnum = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 103, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestPackedTypesLite} returns this
 */
proto.protobuf_unittest.TestPackedTypesLite.prototype.clearPackedEnumList = function() {
  return this.setPackedEnumList([]);
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
proto.protobuf_unittest.TestAllExtensionsLite.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestAllExtensionsLite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestAllExtensionsLite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestAllExtensionsLite.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.protobuf_unittest.TestAllExtensionsLite.extensions, proto.protobuf_unittest.TestAllExtensionsLite.prototype.getExtension,
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
 * @return {!proto.protobuf_unittest.TestAllExtensionsLite}
 */
proto.protobuf_unittest.TestAllExtensionsLite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestAllExtensionsLite;
  return proto.protobuf_unittest.TestAllExtensionsLite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestAllExtensionsLite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestAllExtensionsLite}
 */
proto.protobuf_unittest.TestAllExtensionsLite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary,
        proto.protobuf_unittest.TestAllExtensionsLite.prototype.getExtension,
        proto.protobuf_unittest.TestAllExtensionsLite.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protobuf_unittest.TestAllExtensionsLite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestAllExtensionsLite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestAllExtensionsLite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestAllExtensionsLite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary, proto.protobuf_unittest.TestAllExtensionsLite.prototype.getExtension);
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
proto.protobuf_unittest.OptionalGroup_extension_lite.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.OptionalGroup_extension_lite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.OptionalGroup_extension_lite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.OptionalGroup_extension_lite.toObject = function(includeInstance, msg) {
  var f, obj = {
    a: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.OptionalGroup_extension_lite}
 */
proto.protobuf_unittest.OptionalGroup_extension_lite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.OptionalGroup_extension_lite;
  return proto.protobuf_unittest.OptionalGroup_extension_lite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.OptionalGroup_extension_lite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.OptionalGroup_extension_lite}
 */
proto.protobuf_unittest.OptionalGroup_extension_lite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setA(value);
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
proto.protobuf_unittest.OptionalGroup_extension_lite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.OptionalGroup_extension_lite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.OptionalGroup_extension_lite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.OptionalGroup_extension_lite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeInt32(
      17,
      f
    );
  }
};


/**
 * optional int32 a = 17;
 * @return {number}
 */
proto.protobuf_unittest.OptionalGroup_extension_lite.prototype.getA = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.OptionalGroup_extension_lite} returns this
 */
proto.protobuf_unittest.OptionalGroup_extension_lite.prototype.setA = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.OptionalGroup_extension_lite} returns this
 */
proto.protobuf_unittest.OptionalGroup_extension_lite.prototype.clearA = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.OptionalGroup_extension_lite.prototype.hasA = function() {
  return jspb.Message.getField(this, 17) != null;
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
proto.protobuf_unittest.RepeatedGroup_extension_lite.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.RepeatedGroup_extension_lite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.RepeatedGroup_extension_lite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.RepeatedGroup_extension_lite.toObject = function(includeInstance, msg) {
  var f, obj = {
    a: (f = jspb.Message.getField(msg, 47)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.RepeatedGroup_extension_lite}
 */
proto.protobuf_unittest.RepeatedGroup_extension_lite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.RepeatedGroup_extension_lite;
  return proto.protobuf_unittest.RepeatedGroup_extension_lite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.RepeatedGroup_extension_lite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.RepeatedGroup_extension_lite}
 */
proto.protobuf_unittest.RepeatedGroup_extension_lite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 47:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setA(value);
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
proto.protobuf_unittest.RepeatedGroup_extension_lite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.RepeatedGroup_extension_lite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.RepeatedGroup_extension_lite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.RepeatedGroup_extension_lite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 47));
  if (f != null) {
    writer.writeInt32(
      47,
      f
    );
  }
};


/**
 * optional int32 a = 47;
 * @return {number}
 */
proto.protobuf_unittest.RepeatedGroup_extension_lite.prototype.getA = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 47, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.RepeatedGroup_extension_lite} returns this
 */
proto.protobuf_unittest.RepeatedGroup_extension_lite.prototype.setA = function(value) {
  return jspb.Message.setField(this, 47, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.RepeatedGroup_extension_lite} returns this
 */
proto.protobuf_unittest.RepeatedGroup_extension_lite.prototype.clearA = function() {
  return jspb.Message.setField(this, 47, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.RepeatedGroup_extension_lite.prototype.hasA = function() {
  return jspb.Message.getField(this, 47) != null;
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
proto.protobuf_unittest.TestPackedExtensionsLite.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestPackedExtensionsLite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestPackedExtensionsLite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestPackedExtensionsLite.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.protobuf_unittest.TestPackedExtensionsLite.extensions, proto.protobuf_unittest.TestPackedExtensionsLite.prototype.getExtension,
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
 * @return {!proto.protobuf_unittest.TestPackedExtensionsLite}
 */
proto.protobuf_unittest.TestPackedExtensionsLite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestPackedExtensionsLite;
  return proto.protobuf_unittest.TestPackedExtensionsLite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestPackedExtensionsLite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestPackedExtensionsLite}
 */
proto.protobuf_unittest.TestPackedExtensionsLite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.protobuf_unittest.TestPackedExtensionsLite.extensionsBinary,
        proto.protobuf_unittest.TestPackedExtensionsLite.prototype.getExtension,
        proto.protobuf_unittest.TestPackedExtensionsLite.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protobuf_unittest.TestPackedExtensionsLite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestPackedExtensionsLite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestPackedExtensionsLite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestPackedExtensionsLite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.protobuf_unittest.TestPackedExtensionsLite.extensionsBinary, proto.protobuf_unittest.TestPackedExtensionsLite.prototype.getExtension);
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
proto.protobuf_unittest.TestNestedExtensionLite.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestNestedExtensionLite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestNestedExtensionLite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestNestedExtensionLite.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protobuf_unittest.TestNestedExtensionLite}
 */
proto.protobuf_unittest.TestNestedExtensionLite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestNestedExtensionLite;
  return proto.protobuf_unittest.TestNestedExtensionLite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestNestedExtensionLite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestNestedExtensionLite}
 */
proto.protobuf_unittest.TestNestedExtensionLite.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protobuf_unittest.TestNestedExtensionLite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestNestedExtensionLite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestNestedExtensionLite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestNestedExtensionLite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `nestedExtension`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.TestNestedExtensionLite.nestedExtension = new jspb.ExtensionFieldInfo(
    12345,
    {nestedExtension: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[12345] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.TestNestedExtensionLite.nestedExtension,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[12345] = proto.protobuf_unittest.TestNestedExtensionLite.nestedExtension;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `nestedExtension`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.TestNestedExtensionLite.nestedExtension = new jspb.ExtensionFieldInfo(
    12345,
    {nestedExtension: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[12345] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.TestNestedExtensionLite.nestedExtension,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[12345] = proto.protobuf_unittest.TestNestedExtensionLite.nestedExtension;




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
proto.protobuf_unittest.TestDeprecatedLite.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestDeprecatedLite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestDeprecatedLite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestDeprecatedLite.toObject = function(includeInstance, msg) {
  var f, obj = {
    deprecatedField: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    deprecatedField2: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    deprecatedField3: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    deprecatedField4: (f = msg.getDeprecatedField4()) && proto.protobuf_unittest.TestDeprecatedLite.toObject(includeInstance, f)
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
 * @return {!proto.protobuf_unittest.TestDeprecatedLite}
 */
proto.protobuf_unittest.TestDeprecatedLite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestDeprecatedLite;
  return proto.protobuf_unittest.TestDeprecatedLite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestDeprecatedLite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestDeprecatedLite}
 */
proto.protobuf_unittest.TestDeprecatedLite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeprecatedField(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeprecatedField2(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeprecatedField3(value);
      break;
    case 4:
      var value = new proto.protobuf_unittest.TestDeprecatedLite;
      reader.readMessage(value,proto.protobuf_unittest.TestDeprecatedLite.deserializeBinaryFromReader);
      msg.setDeprecatedField4(value);
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
proto.protobuf_unittest.TestDeprecatedLite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestDeprecatedLite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestDeprecatedLite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestDeprecatedLite.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDeprecatedField4();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.protobuf_unittest.TestDeprecatedLite.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 deprecated_field = 1;
 * @return {number}
 */
proto.protobuf_unittest.TestDeprecatedLite.prototype.getDeprecatedField = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestDeprecatedLite} returns this
 */
proto.protobuf_unittest.TestDeprecatedLite.prototype.setDeprecatedField = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestDeprecatedLite} returns this
 */
proto.protobuf_unittest.TestDeprecatedLite.prototype.clearDeprecatedField = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestDeprecatedLite.prototype.hasDeprecatedField = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int32 deprecated_field2 = 2;
 * @return {number}
 */
proto.protobuf_unittest.TestDeprecatedLite.prototype.getDeprecatedField2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestDeprecatedLite} returns this
 */
proto.protobuf_unittest.TestDeprecatedLite.prototype.setDeprecatedField2 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestDeprecatedLite} returns this
 */
proto.protobuf_unittest.TestDeprecatedLite.prototype.clearDeprecatedField2 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestDeprecatedLite.prototype.hasDeprecatedField2 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string deprecated_field3 = 3;
 * @return {string}
 */
proto.protobuf_unittest.TestDeprecatedLite.prototype.getDeprecatedField3 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protobuf_unittest.TestDeprecatedLite} returns this
 */
proto.protobuf_unittest.TestDeprecatedLite.prototype.setDeprecatedField3 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestDeprecatedLite} returns this
 */
proto.protobuf_unittest.TestDeprecatedLite.prototype.clearDeprecatedField3 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestDeprecatedLite.prototype.hasDeprecatedField3 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TestDeprecatedLite deprecated_field4 = 4;
 * @return {?proto.protobuf_unittest.TestDeprecatedLite}
 */
proto.protobuf_unittest.TestDeprecatedLite.prototype.getDeprecatedField4 = function() {
  return /** @type{?proto.protobuf_unittest.TestDeprecatedLite} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.TestDeprecatedLite, 4));
};


/**
 * @param {?proto.protobuf_unittest.TestDeprecatedLite|undefined} value
 * @return {!proto.protobuf_unittest.TestDeprecatedLite} returns this
*/
proto.protobuf_unittest.TestDeprecatedLite.prototype.setDeprecatedField4 = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestDeprecatedLite} returns this
 */
proto.protobuf_unittest.TestDeprecatedLite.prototype.clearDeprecatedField4 = function() {
  return this.setDeprecatedField4(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestDeprecatedLite.prototype.hasDeprecatedField4 = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protobuf_unittest.TestParsingMergeLite.repeatedFields_ = [3,20];



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
proto.protobuf_unittest.TestParsingMergeLite.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestParsingMergeLite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestParsingMergeLite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestParsingMergeLite.toObject = function(includeInstance, msg) {
  var f, obj = {
    requiredAllTypes: (f = msg.getRequiredAllTypes()) && proto.protobuf_unittest.TestAllTypesLite.toObject(includeInstance, f),
    optionalAllTypes: (f = msg.getOptionalAllTypes()) && proto.protobuf_unittest.TestAllTypesLite.toObject(includeInstance, f),
    repeatedAllTypesList: jspb.Message.toObjectList(msg.getRepeatedAllTypesList(),
    proto.protobuf_unittest.TestAllTypesLite.toObject, includeInstance),
    optionalGroup: (f = msg.getOptionalGroup()) && proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup.toObject(includeInstance, f),
    repeatedGroupList: jspb.Message.toObjectList(msg.getRepeatedGroupList(),
    proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.protobuf_unittest.TestParsingMergeLite.extensions, proto.protobuf_unittest.TestParsingMergeLite.prototype.getExtension,
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
 * @return {!proto.protobuf_unittest.TestParsingMergeLite}
 */
proto.protobuf_unittest.TestParsingMergeLite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestParsingMergeLite;
  return proto.protobuf_unittest.TestParsingMergeLite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestParsingMergeLite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite}
 */
proto.protobuf_unittest.TestParsingMergeLite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protobuf_unittest.TestAllTypesLite;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader);
      msg.setRequiredAllTypes(value);
      break;
    case 2:
      var value = new proto.protobuf_unittest.TestAllTypesLite;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader);
      msg.setOptionalAllTypes(value);
      break;
    case 3:
      var value = new proto.protobuf_unittest.TestAllTypesLite;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader);
      msg.addRepeatedAllTypes(value);
      break;
    case 10:
      var value = new proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup;
      reader.readGroup(10, value,proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup.deserializeBinaryFromReader);
      msg.setOptionalGroup(value);
      break;
    case 20:
      var value = new proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup;
      reader.readGroup(20, value,proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup.deserializeBinaryFromReader);
      msg.addRepeatedGroup(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.protobuf_unittest.TestParsingMergeLite.extensionsBinary,
        proto.protobuf_unittest.TestParsingMergeLite.prototype.getExtension,
        proto.protobuf_unittest.TestParsingMergeLite.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protobuf_unittest.TestParsingMergeLite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestParsingMergeLite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestParsingMergeLite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestParsingMergeLite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequiredAllTypes();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter
    );
  }
  f = message.getOptionalAllTypes();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter
    );
  }
  f = message.getRepeatedAllTypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter
    );
  }
  f = message.getOptionalGroup();
  if (f != null) {
    writer.writeGroup(
      10,
      f,
      proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup.serializeBinaryToWriter
    );
  }
  f = message.getRepeatedGroupList();
  if (f.length > 0) {
    writer.writeRepeatedGroup(
      20,
      f,
      proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.protobuf_unittest.TestParsingMergeLite.extensionsBinary, proto.protobuf_unittest.TestParsingMergeLite.prototype.getExtension);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.repeatedFields_ = [1,2,3,10,20,1000,1001];



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
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.toObject = function(includeInstance, msg) {
  var f, obj = {
    field1List: jspb.Message.toObjectList(msg.getField1List(),
    proto.protobuf_unittest.TestAllTypesLite.toObject, includeInstance),
    field2List: jspb.Message.toObjectList(msg.getField2List(),
    proto.protobuf_unittest.TestAllTypesLite.toObject, includeInstance),
    field3List: jspb.Message.toObjectList(msg.getField3List(),
    proto.protobuf_unittest.TestAllTypesLite.toObject, includeInstance),
    group1List: jspb.Message.toObjectList(msg.getGroup1List(),
    proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1.toObject, includeInstance),
    group2List: jspb.Message.toObjectList(msg.getGroup2List(),
    proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2.toObject, includeInstance),
    ext1List: jspb.Message.toObjectList(msg.getExt1List(),
    proto.protobuf_unittest.TestAllTypesLite.toObject, includeInstance),
    ext2List: jspb.Message.toObjectList(msg.getExt2List(),
    proto.protobuf_unittest.TestAllTypesLite.toObject, includeInstance)
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
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator;
  return proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protobuf_unittest.TestAllTypesLite;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader);
      msg.addField1(value);
      break;
    case 2:
      var value = new proto.protobuf_unittest.TestAllTypesLite;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader);
      msg.addField2(value);
      break;
    case 3:
      var value = new proto.protobuf_unittest.TestAllTypesLite;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader);
      msg.addField3(value);
      break;
    case 10:
      var value = new proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1;
      reader.readGroup(10, value,proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1.deserializeBinaryFromReader);
      msg.addGroup1(value);
      break;
    case 20:
      var value = new proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2;
      reader.readGroup(20, value,proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2.deserializeBinaryFromReader);
      msg.addGroup2(value);
      break;
    case 1000:
      var value = new proto.protobuf_unittest.TestAllTypesLite;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader);
      msg.addExt1(value);
      break;
    case 1001:
      var value = new proto.protobuf_unittest.TestAllTypesLite;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader);
      msg.addExt2(value);
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
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField1List();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter
    );
  }
  f = message.getField2List();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter
    );
  }
  f = message.getField3List();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter
    );
  }
  f = message.getGroup1List();
  if (f.length > 0) {
    writer.writeRepeatedGroup(
      10,
      f,
      proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1.serializeBinaryToWriter
    );
  }
  f = message.getGroup2List();
  if (f.length > 0) {
    writer.writeRepeatedGroup(
      20,
      f,
      proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2.serializeBinaryToWriter
    );
  }
  f = message.getExt1List();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1000,
      f,
      proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter
    );
  }
  f = message.getExt2List();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1001,
      f,
      proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter
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
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1.toObject = function(includeInstance, msg) {
  var f, obj = {
    field1: (f = msg.getField1()) && proto.protobuf_unittest.TestAllTypesLite.toObject(includeInstance, f)
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
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1;
  return proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 11:
      var value = new proto.protobuf_unittest.TestAllTypesLite;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader);
      msg.setField1(value);
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
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField1();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter
    );
  }
};


/**
 * optional TestAllTypesLite field1 = 11;
 * @return {?proto.protobuf_unittest.TestAllTypesLite}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1.prototype.getField1 = function() {
  return /** @type{?proto.protobuf_unittest.TestAllTypesLite} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.TestAllTypesLite, 1));
};


/**
 * @param {?proto.protobuf_unittest.TestAllTypesLite|undefined} value
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1} returns this
*/
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1.prototype.setField1 = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1} returns this
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1.prototype.clearField1 = function() {
  return this.setField1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1.prototype.hasField1 = function() {
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
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2.toObject = function(includeInstance, msg) {
  var f, obj = {
    field1: (f = msg.getField1()) && proto.protobuf_unittest.TestAllTypesLite.toObject(includeInstance, f)
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
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2;
  return proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 21:
      var value = new proto.protobuf_unittest.TestAllTypesLite;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader);
      msg.setField1(value);
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
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField1();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter
    );
  }
};


/**
 * optional TestAllTypesLite field1 = 21;
 * @return {?proto.protobuf_unittest.TestAllTypesLite}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2.prototype.getField1 = function() {
  return /** @type{?proto.protobuf_unittest.TestAllTypesLite} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.TestAllTypesLite, 1));
};


/**
 * @param {?proto.protobuf_unittest.TestAllTypesLite|undefined} value
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2} returns this
*/
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2.prototype.setField1 = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2} returns this
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2.prototype.clearField1 = function() {
  return this.setField1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2.prototype.hasField1 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated TestAllTypesLite field1 = 1;
 * @return {!Array<!proto.protobuf_unittest.TestAllTypesLite>}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.getField1List = function() {
  return /** @type{!Array<!proto.protobuf_unittest.TestAllTypesLite>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protobuf_unittest.TestAllTypesLite, 1));
};


/**
 * @param {!Array<!proto.protobuf_unittest.TestAllTypesLite>} value
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator} returns this
*/
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.setField1List = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protobuf_unittest.TestAllTypesLite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.addField1 = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protobuf_unittest.TestAllTypesLite, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator} returns this
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.clearField1List = function() {
  return this.setField1List([]);
};


/**
 * repeated TestAllTypesLite field2 = 2;
 * @return {!Array<!proto.protobuf_unittest.TestAllTypesLite>}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.getField2List = function() {
  return /** @type{!Array<!proto.protobuf_unittest.TestAllTypesLite>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protobuf_unittest.TestAllTypesLite, 2));
};


/**
 * @param {!Array<!proto.protobuf_unittest.TestAllTypesLite>} value
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator} returns this
*/
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.setField2List = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protobuf_unittest.TestAllTypesLite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.addField2 = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protobuf_unittest.TestAllTypesLite, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator} returns this
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.clearField2List = function() {
  return this.setField2List([]);
};


/**
 * repeated TestAllTypesLite field3 = 3;
 * @return {!Array<!proto.protobuf_unittest.TestAllTypesLite>}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.getField3List = function() {
  return /** @type{!Array<!proto.protobuf_unittest.TestAllTypesLite>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protobuf_unittest.TestAllTypesLite, 3));
};


/**
 * @param {!Array<!proto.protobuf_unittest.TestAllTypesLite>} value
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator} returns this
*/
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.setField3List = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protobuf_unittest.TestAllTypesLite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.addField3 = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protobuf_unittest.TestAllTypesLite, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator} returns this
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.clearField3List = function() {
  return this.setField3List([]);
};


/**
 * repeated group Group1 = 10;
 * @return {!Array<!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1>}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.getGroup1List = function() {
  return /** @type{!Array<!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1, 10));
};


/**
 * @param {!Array<!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1>} value
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator} returns this
*/
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.setGroup1List = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.addGroup1 = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator} returns this
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.clearGroup1List = function() {
  return this.setGroup1List([]);
};


/**
 * repeated group Group2 = 20;
 * @return {!Array<!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2>}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.getGroup2List = function() {
  return /** @type{!Array<!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2, 20));
};


/**
 * @param {!Array<!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2>} value
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator} returns this
*/
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.setGroup2List = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.addGroup2 = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator} returns this
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.clearGroup2List = function() {
  return this.setGroup2List([]);
};


/**
 * repeated TestAllTypesLite ext1 = 1000;
 * @return {!Array<!proto.protobuf_unittest.TestAllTypesLite>}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.getExt1List = function() {
  return /** @type{!Array<!proto.protobuf_unittest.TestAllTypesLite>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protobuf_unittest.TestAllTypesLite, 1000));
};


/**
 * @param {!Array<!proto.protobuf_unittest.TestAllTypesLite>} value
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator} returns this
*/
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.setExt1List = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1000, value);
};


/**
 * @param {!proto.protobuf_unittest.TestAllTypesLite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.addExt1 = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1000, opt_value, proto.protobuf_unittest.TestAllTypesLite, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator} returns this
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.clearExt1List = function() {
  return this.setExt1List([]);
};


/**
 * repeated TestAllTypesLite ext2 = 1001;
 * @return {!Array<!proto.protobuf_unittest.TestAllTypesLite>}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.getExt2List = function() {
  return /** @type{!Array<!proto.protobuf_unittest.TestAllTypesLite>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protobuf_unittest.TestAllTypesLite, 1001));
};


/**
 * @param {!Array<!proto.protobuf_unittest.TestAllTypesLite>} value
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator} returns this
*/
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.setExt2List = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1001, value);
};


/**
 * @param {!proto.protobuf_unittest.TestAllTypesLite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.addExt2 = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1001, opt_value, proto.protobuf_unittest.TestAllTypesLite, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator} returns this
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.prototype.clearExt2List = function() {
  return this.setExt2List([]);
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
proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    optionalGroupAllTypes: (f = msg.getOptionalGroupAllTypes()) && proto.protobuf_unittest.TestAllTypesLite.toObject(includeInstance, f)
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
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup}
 */
proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup;
  return proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup}
 */
proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 11:
      var value = new proto.protobuf_unittest.TestAllTypesLite;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader);
      msg.setOptionalGroupAllTypes(value);
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
proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptionalGroupAllTypes();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter
    );
  }
};


/**
 * optional TestAllTypesLite optional_group_all_types = 11;
 * @return {?proto.protobuf_unittest.TestAllTypesLite}
 */
proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup.prototype.getOptionalGroupAllTypes = function() {
  return /** @type{?proto.protobuf_unittest.TestAllTypesLite} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.TestAllTypesLite, 1));
};


/**
 * @param {?proto.protobuf_unittest.TestAllTypesLite|undefined} value
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup} returns this
*/
proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup.prototype.setOptionalGroupAllTypes = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup} returns this
 */
proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup.prototype.clearOptionalGroupAllTypes = function() {
  return this.setOptionalGroupAllTypes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup.prototype.hasOptionalGroupAllTypes = function() {
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
proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    repeatedGroupAllTypes: (f = msg.getRepeatedGroupAllTypes()) && proto.protobuf_unittest.TestAllTypesLite.toObject(includeInstance, f)
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
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup;
  return proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 21:
      var value = new proto.protobuf_unittest.TestAllTypesLite;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader);
      msg.setRepeatedGroupAllTypes(value);
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
proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepeatedGroupAllTypes();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter
    );
  }
};


/**
 * optional TestAllTypesLite repeated_group_all_types = 21;
 * @return {?proto.protobuf_unittest.TestAllTypesLite}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup.prototype.getRepeatedGroupAllTypes = function() {
  return /** @type{?proto.protobuf_unittest.TestAllTypesLite} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.TestAllTypesLite, 1));
};


/**
 * @param {?proto.protobuf_unittest.TestAllTypesLite|undefined} value
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup} returns this
*/
proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup.prototype.setRepeatedGroupAllTypes = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup} returns this
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup.prototype.clearRepeatedGroupAllTypes = function() {
  return this.setRepeatedGroupAllTypes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup.prototype.hasRepeatedGroupAllTypes = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalExt`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.TestAllTypesLite>}
 */
proto.protobuf_unittest.TestParsingMergeLite.optionalExt = new jspb.ExtensionFieldInfo(
    1000,
    {optionalExt: 0},
    proto.protobuf_unittest.TestAllTypesLite,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.TestAllTypesLite.toObject),
    0);

proto.protobuf_unittest.TestParsingMergeLite.extensionsBinary[1000] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.TestParsingMergeLite.optionalExt,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter,
    proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestParsingMergeLite.extensions[1000] = proto.protobuf_unittest.TestParsingMergeLite.optionalExt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedExtList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.protobuf_unittest.TestAllTypesLite>>}
 */
proto.protobuf_unittest.TestParsingMergeLite.repeatedExtList = new jspb.ExtensionFieldInfo(
    1001,
    {repeatedExtList: 0},
    proto.protobuf_unittest.TestAllTypesLite,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.TestAllTypesLite.toObject),
    1);

proto.protobuf_unittest.TestParsingMergeLite.extensionsBinary[1001] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.TestParsingMergeLite.repeatedExtList,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeRepeatedMessage,
    proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter,
    proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestParsingMergeLite.extensions[1001] = proto.protobuf_unittest.TestParsingMergeLite.repeatedExtList;

/**
 * required TestAllTypesLite required_all_types = 1;
 * @return {!proto.protobuf_unittest.TestAllTypesLite}
 */
proto.protobuf_unittest.TestParsingMergeLite.prototype.getRequiredAllTypes = function() {
  return /** @type{!proto.protobuf_unittest.TestAllTypesLite} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.TestAllTypesLite, 1, 1));
};


/**
 * @param {!proto.protobuf_unittest.TestAllTypesLite} value
 * @return {!proto.protobuf_unittest.TestParsingMergeLite} returns this
*/
proto.protobuf_unittest.TestParsingMergeLite.prototype.setRequiredAllTypes = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite} returns this
 */
proto.protobuf_unittest.TestParsingMergeLite.prototype.clearRequiredAllTypes = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestParsingMergeLite.prototype.hasRequiredAllTypes = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TestAllTypesLite optional_all_types = 2;
 * @return {?proto.protobuf_unittest.TestAllTypesLite}
 */
proto.protobuf_unittest.TestParsingMergeLite.prototype.getOptionalAllTypes = function() {
  return /** @type{?proto.protobuf_unittest.TestAllTypesLite} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.TestAllTypesLite, 2));
};


/**
 * @param {?proto.protobuf_unittest.TestAllTypesLite|undefined} value
 * @return {!proto.protobuf_unittest.TestParsingMergeLite} returns this
*/
proto.protobuf_unittest.TestParsingMergeLite.prototype.setOptionalAllTypes = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite} returns this
 */
proto.protobuf_unittest.TestParsingMergeLite.prototype.clearOptionalAllTypes = function() {
  return this.setOptionalAllTypes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestParsingMergeLite.prototype.hasOptionalAllTypes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated TestAllTypesLite repeated_all_types = 3;
 * @return {!Array<!proto.protobuf_unittest.TestAllTypesLite>}
 */
proto.protobuf_unittest.TestParsingMergeLite.prototype.getRepeatedAllTypesList = function() {
  return /** @type{!Array<!proto.protobuf_unittest.TestAllTypesLite>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protobuf_unittest.TestAllTypesLite, 3));
};


/**
 * @param {!Array<!proto.protobuf_unittest.TestAllTypesLite>} value
 * @return {!proto.protobuf_unittest.TestParsingMergeLite} returns this
*/
proto.protobuf_unittest.TestParsingMergeLite.prototype.setRepeatedAllTypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protobuf_unittest.TestAllTypesLite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestAllTypesLite}
 */
proto.protobuf_unittest.TestParsingMergeLite.prototype.addRepeatedAllTypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protobuf_unittest.TestAllTypesLite, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite} returns this
 */
proto.protobuf_unittest.TestParsingMergeLite.prototype.clearRepeatedAllTypesList = function() {
  return this.setRepeatedAllTypesList([]);
};


/**
 * optional group OptionalGroup = 10;
 * @return {?proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup}
 */
proto.protobuf_unittest.TestParsingMergeLite.prototype.getOptionalGroup = function() {
  return /** @type{?proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup, 10));
};


/**
 * @param {?proto.protobuf_unittest.TestParsingMergeLite.OptionalGroup|undefined} value
 * @return {!proto.protobuf_unittest.TestParsingMergeLite} returns this
*/
proto.protobuf_unittest.TestParsingMergeLite.prototype.setOptionalGroup = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite} returns this
 */
proto.protobuf_unittest.TestParsingMergeLite.prototype.clearOptionalGroup = function() {
  return this.setOptionalGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestParsingMergeLite.prototype.hasOptionalGroup = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated group RepeatedGroup = 20;
 * @return {!Array<!proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup>}
 */
proto.protobuf_unittest.TestParsingMergeLite.prototype.getRepeatedGroupList = function() {
  return /** @type{!Array<!proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup, 20));
};


/**
 * @param {!Array<!proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup>} value
 * @return {!proto.protobuf_unittest.TestParsingMergeLite} returns this
*/
proto.protobuf_unittest.TestParsingMergeLite.prototype.setRepeatedGroupList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup}
 */
proto.protobuf_unittest.TestParsingMergeLite.prototype.addRepeatedGroup = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.protobuf_unittest.TestParsingMergeLite.RepeatedGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestParsingMergeLite} returns this
 */
proto.protobuf_unittest.TestParsingMergeLite.prototype.clearRepeatedGroupList = function() {
  return this.setRepeatedGroupList([]);
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalExt`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.TestAllTypesLite>}
 */
proto.protobuf_unittest.TestParsingMergeLite.optionalExt = new jspb.ExtensionFieldInfo(
    1000,
    {optionalExt: 0},
    proto.protobuf_unittest.TestAllTypesLite,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.TestAllTypesLite.toObject),
    0);

proto.protobuf_unittest.TestParsingMergeLite.extensionsBinary[1000] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.TestParsingMergeLite.optionalExt,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter,
    proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestParsingMergeLite.extensions[1000] = proto.protobuf_unittest.TestParsingMergeLite.optionalExt;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedExtList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.protobuf_unittest.TestAllTypesLite>>}
 */
proto.protobuf_unittest.TestParsingMergeLite.repeatedExtList = new jspb.ExtensionFieldInfo(
    1001,
    {repeatedExtList: 0},
    proto.protobuf_unittest.TestAllTypesLite,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.TestAllTypesLite.toObject),
    1);

proto.protobuf_unittest.TestParsingMergeLite.extensionsBinary[1001] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.TestParsingMergeLite.repeatedExtList,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeRepeatedMessage,
    proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter,
    proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestParsingMergeLite.extensions[1001] = proto.protobuf_unittest.TestParsingMergeLite.repeatedExtList;




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
proto.protobuf_unittest.TestMergeExceptionLite.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestMergeExceptionLite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestMergeExceptionLite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestMergeExceptionLite.toObject = function(includeInstance, msg) {
  var f, obj = {
    allExtensions: (f = msg.getAllExtensions()) && proto.protobuf_unittest.TestAllExtensionsLite.toObject(includeInstance, f)
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
 * @return {!proto.protobuf_unittest.TestMergeExceptionLite}
 */
proto.protobuf_unittest.TestMergeExceptionLite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestMergeExceptionLite;
  return proto.protobuf_unittest.TestMergeExceptionLite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestMergeExceptionLite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestMergeExceptionLite}
 */
proto.protobuf_unittest.TestMergeExceptionLite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protobuf_unittest.TestAllExtensionsLite;
      reader.readMessage(value,proto.protobuf_unittest.TestAllExtensionsLite.deserializeBinaryFromReader);
      msg.setAllExtensions(value);
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
proto.protobuf_unittest.TestMergeExceptionLite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestMergeExceptionLite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestMergeExceptionLite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestMergeExceptionLite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllExtensions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protobuf_unittest.TestAllExtensionsLite.serializeBinaryToWriter
    );
  }
};


/**
 * optional TestAllExtensionsLite all_extensions = 1;
 * @return {?proto.protobuf_unittest.TestAllExtensionsLite}
 */
proto.protobuf_unittest.TestMergeExceptionLite.prototype.getAllExtensions = function() {
  return /** @type{?proto.protobuf_unittest.TestAllExtensionsLite} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.TestAllExtensionsLite, 1));
};


/**
 * @param {?proto.protobuf_unittest.TestAllExtensionsLite|undefined} value
 * @return {!proto.protobuf_unittest.TestMergeExceptionLite} returns this
*/
proto.protobuf_unittest.TestMergeExceptionLite.prototype.setAllExtensions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestMergeExceptionLite} returns this
 */
proto.protobuf_unittest.TestMergeExceptionLite.prototype.clearAllExtensions = function() {
  return this.setAllExtensions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestMergeExceptionLite.prototype.hasAllExtensions = function() {
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
proto.protobuf_unittest.TestEmptyMessageLite.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestEmptyMessageLite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestEmptyMessageLite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestEmptyMessageLite.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protobuf_unittest.TestEmptyMessageLite}
 */
proto.protobuf_unittest.TestEmptyMessageLite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestEmptyMessageLite;
  return proto.protobuf_unittest.TestEmptyMessageLite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestEmptyMessageLite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestEmptyMessageLite}
 */
proto.protobuf_unittest.TestEmptyMessageLite.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protobuf_unittest.TestEmptyMessageLite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestEmptyMessageLite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestEmptyMessageLite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestEmptyMessageLite.serializeBinaryToWriter = function(message, writer) {
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
proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite.extensions, proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite.prototype.getExtension,
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
 * @return {!proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite}
 */
proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite;
  return proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite}
 */
proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite.extensionsBinary,
        proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite.prototype.getExtension,
        proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite.extensionsBinary, proto.protobuf_unittest.TestEmptyMessageWithExtensionsLite.prototype.getExtension);
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
proto.protobuf_unittest.V1MessageLite.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.V1MessageLite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.V1MessageLite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.V1MessageLite.toObject = function(includeInstance, msg) {
  var f, obj = {
    intField: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    enumField: jspb.Message.getFieldWithDefault(msg, 2, 1)
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
 * @return {!proto.protobuf_unittest.V1MessageLite}
 */
proto.protobuf_unittest.V1MessageLite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.V1MessageLite;
  return proto.protobuf_unittest.V1MessageLite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.V1MessageLite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.V1MessageLite}
 */
proto.protobuf_unittest.V1MessageLite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIntField(value);
      break;
    case 2:
      var value = /** @type {!proto.protobuf_unittest.V1EnumLite} */ (reader.readEnum());
      msg.setEnumField(value);
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
proto.protobuf_unittest.V1MessageLite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.V1MessageLite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.V1MessageLite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.V1MessageLite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {!proto.protobuf_unittest.V1EnumLite} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * required int32 int_field = 1;
 * @return {number}
 */
proto.protobuf_unittest.V1MessageLite.prototype.getIntField = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.V1MessageLite} returns this
 */
proto.protobuf_unittest.V1MessageLite.prototype.setIntField = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.V1MessageLite} returns this
 */
proto.protobuf_unittest.V1MessageLite.prototype.clearIntField = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.V1MessageLite.prototype.hasIntField = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional V1EnumLite enum_field = 2;
 * @return {!proto.protobuf_unittest.V1EnumLite}
 */
proto.protobuf_unittest.V1MessageLite.prototype.getEnumField = function() {
  return /** @type {!proto.protobuf_unittest.V1EnumLite} */ (jspb.Message.getFieldWithDefault(this, 2, 1));
};


/**
 * @param {!proto.protobuf_unittest.V1EnumLite} value
 * @return {!proto.protobuf_unittest.V1MessageLite} returns this
 */
proto.protobuf_unittest.V1MessageLite.prototype.setEnumField = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.V1MessageLite} returns this
 */
proto.protobuf_unittest.V1MessageLite.prototype.clearEnumField = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.V1MessageLite.prototype.hasEnumField = function() {
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
proto.protobuf_unittest.V2MessageLite.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.V2MessageLite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.V2MessageLite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.V2MessageLite.toObject = function(includeInstance, msg) {
  var f, obj = {
    intField: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    enumField: jspb.Message.getFieldWithDefault(msg, 2, 1)
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
 * @return {!proto.protobuf_unittest.V2MessageLite}
 */
proto.protobuf_unittest.V2MessageLite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.V2MessageLite;
  return proto.protobuf_unittest.V2MessageLite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.V2MessageLite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.V2MessageLite}
 */
proto.protobuf_unittest.V2MessageLite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIntField(value);
      break;
    case 2:
      var value = /** @type {!proto.protobuf_unittest.V2EnumLite} */ (reader.readEnum());
      msg.setEnumField(value);
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
proto.protobuf_unittest.V2MessageLite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.V2MessageLite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.V2MessageLite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.V2MessageLite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {!proto.protobuf_unittest.V2EnumLite} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * required int32 int_field = 1;
 * @return {number}
 */
proto.protobuf_unittest.V2MessageLite.prototype.getIntField = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.V2MessageLite} returns this
 */
proto.protobuf_unittest.V2MessageLite.prototype.setIntField = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.V2MessageLite} returns this
 */
proto.protobuf_unittest.V2MessageLite.prototype.clearIntField = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.V2MessageLite.prototype.hasIntField = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional V2EnumLite enum_field = 2;
 * @return {!proto.protobuf_unittest.V2EnumLite}
 */
proto.protobuf_unittest.V2MessageLite.prototype.getEnumField = function() {
  return /** @type {!proto.protobuf_unittest.V2EnumLite} */ (jspb.Message.getFieldWithDefault(this, 2, 1));
};


/**
 * @param {!proto.protobuf_unittest.V2EnumLite} value
 * @return {!proto.protobuf_unittest.V2MessageLite} returns this
 */
proto.protobuf_unittest.V2MessageLite.prototype.setEnumField = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.V2MessageLite} returns this
 */
proto.protobuf_unittest.V2MessageLite.prototype.clearEnumField = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.V2MessageLite.prototype.hasEnumField = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.repeatedFields_ = [536870002,536870003];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.oneofGroups_ = [[536870011,536870012,536870013,536870014]];

/**
 * @enum {number}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.OneofFieldCase = {
  ONEOF_FIELD_NOT_SET: 0,
  ONEOF_UINT32: 536870011,
  ONEOF_TEST_ALL_TYPES: 536870012,
  ONEOF_STRING: 536870013,
  ONEOF_BYTES: 536870014
};

/**
 * @return {proto.protobuf_unittest.TestHugeFieldNumbersLite.OneofFieldCase}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getOneofFieldCase = function() {
  return /** @type {proto.protobuf_unittest.TestHugeFieldNumbersLite.OneofFieldCase} */(jspb.Message.computeOneofCase(this, proto.protobuf_unittest.TestHugeFieldNumbersLite.oneofGroups_[0]));
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
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestHugeFieldNumbersLite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestHugeFieldNumbersLite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.toObject = function(includeInstance, msg) {
  var f, obj = {
    optionalInt32: (f = jspb.Message.getField(msg, 536870000)) == null ? undefined : f,
    fixed32: (f = jspb.Message.getField(msg, 536870001)) == null ? undefined : f,
    repeatedInt32List: (f = jspb.Message.getRepeatedField(msg, 536870002)) == null ? undefined : f,
    packedInt32List: (f = jspb.Message.getRepeatedField(msg, 536870003)) == null ? undefined : f,
    optionalEnum: (f = jspb.Message.getField(msg, 536870004)) == null ? undefined : f,
    optionalString: (f = jspb.Message.getField(msg, 536870005)) == null ? undefined : f,
    optionalBytes: msg.getOptionalBytes_asB64(),
    optionalMessage: (f = msg.getOptionalMessage()) && proto.protobuf_unittest.ForeignMessageLite.toObject(includeInstance, f),
    optionalGroup: (f = msg.getOptionalGroup()) && proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup.toObject(includeInstance, f),
    stringStringMapMap: (f = msg.getStringStringMapMap()) ? f.toObject(includeInstance, undefined) : [],
    oneofUint32: (f = jspb.Message.getField(msg, 536870011)) == null ? undefined : f,
    oneofTestAllTypes: (f = msg.getOneofTestAllTypes()) && proto.protobuf_unittest.TestAllTypesLite.toObject(includeInstance, f),
    oneofString: (f = jspb.Message.getField(msg, 536870013)) == null ? undefined : f,
    oneofBytes: msg.getOneofBytes_asB64()
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.protobuf_unittest.TestHugeFieldNumbersLite.extensions, proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getExtension,
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
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestHugeFieldNumbersLite;
  return proto.protobuf_unittest.TestHugeFieldNumbersLite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestHugeFieldNumbersLite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 536870000:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOptionalInt32(value);
      break;
    case 536870001:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFixed32(value);
      break;
    case 536870002:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedInt32(values[i]);
      }
      break;
    case 536870003:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPackedInt32(values[i]);
      }
      break;
    case 536870004:
      var value = /** @type {!proto.protobuf_unittest.ForeignEnumLite} */ (reader.readEnum());
      msg.setOptionalEnum(value);
      break;
    case 536870005:
      var value = /** @type {string} */ (reader.readString());
      msg.setOptionalString(value);
      break;
    case 536870006:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOptionalBytes(value);
      break;
    case 536870007:
      var value = new proto.protobuf_unittest.ForeignMessageLite;
      reader.readMessage(value,proto.protobuf_unittest.ForeignMessageLite.deserializeBinaryFromReader);
      msg.setOptionalMessage(value);
      break;
    case 536870008:
      var value = new proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup;
      reader.readGroup(536870008, value,proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup.deserializeBinaryFromReader);
      msg.setOptionalGroup(value);
      break;
    case 536870010:
      var value = msg.getStringStringMapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 536870011:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOneofUint32(value);
      break;
    case 536870012:
      var value = new proto.protobuf_unittest.TestAllTypesLite;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader);
      msg.setOneofTestAllTypes(value);
      break;
    case 536870013:
      var value = /** @type {string} */ (reader.readString());
      msg.setOneofString(value);
      break;
    case 536870014:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOneofBytes(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.protobuf_unittest.TestHugeFieldNumbersLite.extensionsBinary,
        proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getExtension,
        proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestHugeFieldNumbersLite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestHugeFieldNumbersLite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 536870000));
  if (f != null) {
    writer.writeInt32(
      536870000,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 536870001));
  if (f != null) {
    writer.writeInt32(
      536870001,
      f
    );
  }
  f = message.getRepeatedInt32List();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      536870002,
      f
    );
  }
  f = message.getPackedInt32List();
  if (f.length > 0) {
    writer.writePackedInt32(
      536870003,
      f
    );
  }
  f = /** @type {!proto.protobuf_unittest.ForeignEnumLite} */ (jspb.Message.getField(message, 536870004));
  if (f != null) {
    writer.writeEnum(
      536870004,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 536870005));
  if (f != null) {
    writer.writeString(
      536870005,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 536870006));
  if (f != null) {
    writer.writeBytes(
      536870006,
      f
    );
  }
  f = message.getOptionalMessage();
  if (f != null) {
    writer.writeMessage(
      536870007,
      f,
      proto.protobuf_unittest.ForeignMessageLite.serializeBinaryToWriter
    );
  }
  f = message.getOptionalGroup();
  if (f != null) {
    writer.writeGroup(
      536870008,
      f,
      proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup.serializeBinaryToWriter
    );
  }
  f = message.getStringStringMapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(536870010, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 536870011));
  if (f != null) {
    writer.writeUint32(
      536870011,
      f
    );
  }
  f = message.getOneofTestAllTypes();
  if (f != null) {
    writer.writeMessage(
      536870012,
      f,
      proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 536870013));
  if (f != null) {
    writer.writeString(
      536870013,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 536870014));
  if (f != null) {
    writer.writeBytes(
      536870014,
      f
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.protobuf_unittest.TestHugeFieldNumbersLite.extensionsBinary, proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getExtension);
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
proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupA: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup;
  return proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 536870009:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupA(value);
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
proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      536870009,
      f
    );
  }
};


/**
 * optional int32 group_a = 536870009;
 * @return {number}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup.prototype.getGroupA = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup.prototype.setGroupA = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup.prototype.clearGroupA = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup.prototype.hasGroupA = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 optional_int32 = 536870000;
 * @return {number}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getOptionalInt32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 536870000, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.setOptionalInt32 = function(value) {
  return jspb.Message.setField(this, 536870000, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.clearOptionalInt32 = function() {
  return jspb.Message.setField(this, 536870000, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.hasOptionalInt32 = function() {
  return jspb.Message.getField(this, 536870000) != null;
};


/**
 * optional int32 fixed_32 = 536870001;
 * @return {number}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getFixed32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 536870001, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.setFixed32 = function(value) {
  return jspb.Message.setField(this, 536870001, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.clearFixed32 = function() {
  return jspb.Message.setField(this, 536870001, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.hasFixed32 = function() {
  return jspb.Message.getField(this, 536870001) != null;
};


/**
 * repeated int32 repeated_int32 = 536870002;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getRepeatedInt32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 536870002));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.setRepeatedInt32List = function(value) {
  return jspb.Message.setField(this, 536870002, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.addRepeatedInt32 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 536870002, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.clearRepeatedInt32List = function() {
  return this.setRepeatedInt32List([]);
};


/**
 * repeated int32 packed_int32 = 536870003;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getPackedInt32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 536870003));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.setPackedInt32List = function(value) {
  return jspb.Message.setField(this, 536870003, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.addPackedInt32 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 536870003, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.clearPackedInt32List = function() {
  return this.setPackedInt32List([]);
};


/**
 * optional ForeignEnumLite optional_enum = 536870004;
 * @return {!proto.protobuf_unittest.ForeignEnumLite}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getOptionalEnum = function() {
  return /** @type {!proto.protobuf_unittest.ForeignEnumLite} */ (jspb.Message.getFieldWithDefault(this, 536870004, 4));
};


/**
 * @param {!proto.protobuf_unittest.ForeignEnumLite} value
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.setOptionalEnum = function(value) {
  return jspb.Message.setField(this, 536870004, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.clearOptionalEnum = function() {
  return jspb.Message.setField(this, 536870004, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.hasOptionalEnum = function() {
  return jspb.Message.getField(this, 536870004) != null;
};


/**
 * optional string optional_string = 536870005;
 * @return {string}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getOptionalString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 536870005, ""));
};


/**
 * @param {string} value
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.setOptionalString = function(value) {
  return jspb.Message.setField(this, 536870005, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.clearOptionalString = function() {
  return jspb.Message.setField(this, 536870005, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.hasOptionalString = function() {
  return jspb.Message.getField(this, 536870005) != null;
};


/**
 * optional bytes optional_bytes = 536870006;
 * @return {!(string|Uint8Array)}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getOptionalBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 536870006, ""));
};


/**
 * optional bytes optional_bytes = 536870006;
 * This is a type-conversion wrapper around `getOptionalBytes()`
 * @return {string}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getOptionalBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOptionalBytes()));
};


/**
 * optional bytes optional_bytes = 536870006;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOptionalBytes()`
 * @return {!Uint8Array}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getOptionalBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOptionalBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.setOptionalBytes = function(value) {
  return jspb.Message.setField(this, 536870006, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.clearOptionalBytes = function() {
  return jspb.Message.setField(this, 536870006, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.hasOptionalBytes = function() {
  return jspb.Message.getField(this, 536870006) != null;
};


/**
 * optional ForeignMessageLite optional_message = 536870007;
 * @return {?proto.protobuf_unittest.ForeignMessageLite}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getOptionalMessage = function() {
  return /** @type{?proto.protobuf_unittest.ForeignMessageLite} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.ForeignMessageLite, 536870007));
};


/**
 * @param {?proto.protobuf_unittest.ForeignMessageLite|undefined} value
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
*/
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.setOptionalMessage = function(value) {
  return jspb.Message.setWrapperField(this, 536870007, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.clearOptionalMessage = function() {
  return this.setOptionalMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.hasOptionalMessage = function() {
  return jspb.Message.getField(this, 536870007) != null;
};


/**
 * optional group OptionalGroup = 536870008;
 * @return {?proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getOptionalGroup = function() {
  return /** @type{?proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup, 536870008));
};


/**
 * @param {?proto.protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup|undefined} value
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
*/
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.setOptionalGroup = function(value) {
  return jspb.Message.setWrapperField(this, 536870008, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.clearOptionalGroup = function() {
  return this.setOptionalGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.hasOptionalGroup = function() {
  return jspb.Message.getField(this, 536870008) != null;
};


/**
 * map<string, string> string_string_map = 536870010;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getStringStringMapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 536870010, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.clearStringStringMapMap = function() {
  this.getStringStringMapMap().clear();
  return this;};


/**
 * optional uint32 oneof_uint32 = 536870011;
 * @return {number}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getOneofUint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 536870011, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.setOneofUint32 = function(value) {
  return jspb.Message.setOneofField(this, 536870011, proto.protobuf_unittest.TestHugeFieldNumbersLite.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.clearOneofUint32 = function() {
  return jspb.Message.setOneofField(this, 536870011, proto.protobuf_unittest.TestHugeFieldNumbersLite.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.hasOneofUint32 = function() {
  return jspb.Message.getField(this, 536870011) != null;
};


/**
 * optional TestAllTypesLite oneof_test_all_types = 536870012;
 * @return {?proto.protobuf_unittest.TestAllTypesLite}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getOneofTestAllTypes = function() {
  return /** @type{?proto.protobuf_unittest.TestAllTypesLite} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.TestAllTypesLite, 536870012));
};


/**
 * @param {?proto.protobuf_unittest.TestAllTypesLite|undefined} value
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
*/
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.setOneofTestAllTypes = function(value) {
  return jspb.Message.setOneofWrapperField(this, 536870012, proto.protobuf_unittest.TestHugeFieldNumbersLite.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.clearOneofTestAllTypes = function() {
  return this.setOneofTestAllTypes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.hasOneofTestAllTypes = function() {
  return jspb.Message.getField(this, 536870012) != null;
};


/**
 * optional string oneof_string = 536870013;
 * @return {string}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getOneofString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 536870013, ""));
};


/**
 * @param {string} value
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.setOneofString = function(value) {
  return jspb.Message.setOneofField(this, 536870013, proto.protobuf_unittest.TestHugeFieldNumbersLite.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.clearOneofString = function() {
  return jspb.Message.setOneofField(this, 536870013, proto.protobuf_unittest.TestHugeFieldNumbersLite.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.hasOneofString = function() {
  return jspb.Message.getField(this, 536870013) != null;
};


/**
 * optional bytes oneof_bytes = 536870014;
 * @return {!(string|Uint8Array)}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getOneofBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 536870014, ""));
};


/**
 * optional bytes oneof_bytes = 536870014;
 * This is a type-conversion wrapper around `getOneofBytes()`
 * @return {string}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getOneofBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOneofBytes()));
};


/**
 * optional bytes oneof_bytes = 536870014;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOneofBytes()`
 * @return {!Uint8Array}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.getOneofBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOneofBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.setOneofBytes = function(value) {
  return jspb.Message.setOneofField(this, 536870014, proto.protobuf_unittest.TestHugeFieldNumbersLite.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestHugeFieldNumbersLite} returns this
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.clearOneofBytes = function() {
  return jspb.Message.setOneofField(this, 536870014, proto.protobuf_unittest.TestHugeFieldNumbersLite.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestHugeFieldNumbersLite.prototype.hasOneofBytes = function() {
  return jspb.Message.getField(this, 536870014) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_ = [[1,2,3,4,5,6,7,8,9]];

/**
 * @enum {number}
 */
proto.protobuf_unittest.TestOneofParsingLite.OneofFieldCase = {
  ONEOF_FIELD_NOT_SET: 0,
  ONEOF_INT32: 1,
  ONEOF_SUBMESSAGE: 2,
  ONEOF_STRING: 3,
  ONEOF_BYTES: 4,
  ONEOF_STRING_CORD: 5,
  ONEOF_BYTES_CORD: 6,
  ONEOF_STRING_STRING_PIECE: 7,
  ONEOF_BYTES_STRING_PIECE: 8,
  ONEOF_ENUM: 9
};

/**
 * @return {proto.protobuf_unittest.TestOneofParsingLite.OneofFieldCase}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.getOneofFieldCase = function() {
  return /** @type {proto.protobuf_unittest.TestOneofParsingLite.OneofFieldCase} */(jspb.Message.computeOneofCase(this, proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_[0]));
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
proto.protobuf_unittest.TestOneofParsingLite.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestOneofParsingLite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestOneofParsingLite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestOneofParsingLite.toObject = function(includeInstance, msg) {
  var f, obj = {
    oneofInt32: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    oneofSubmessage: (f = msg.getOneofSubmessage()) && proto.protobuf_unittest.TestAllTypesLite.toObject(includeInstance, f),
    oneofString: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    oneofBytes: msg.getOneofBytes_asB64(),
    oneofStringCord: jspb.Message.getFieldWithDefault(msg, 5, "default Cord"),
    oneofBytesCord: msg.getOneofBytesCord_asB64(),
    oneofStringStringPiece: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    oneofBytesStringPiece: msg.getOneofBytesStringPiece_asB64(),
    oneofEnum: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.TestOneofParsingLite}
 */
proto.protobuf_unittest.TestOneofParsingLite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestOneofParsingLite;
  return proto.protobuf_unittest.TestOneofParsingLite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestOneofParsingLite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestOneofParsingLite}
 */
proto.protobuf_unittest.TestOneofParsingLite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOneofInt32(value);
      break;
    case 2:
      var value = new proto.protobuf_unittest.TestAllTypesLite;
      reader.readMessage(value,proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader);
      msg.setOneofSubmessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOneofString(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOneofBytes(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOneofStringCord(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOneofBytesCord(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOneofStringStringPiece(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOneofBytesStringPiece(value);
      break;
    case 9:
      var value = /** @type {!proto.protobuf_unittest.V2EnumLite} */ (reader.readEnum());
      msg.setOneofEnum(value);
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
proto.protobuf_unittest.TestOneofParsingLite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestOneofParsingLite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestOneofParsingLite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestOneofParsingLite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getOneofSubmessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = /** @type {!proto.protobuf_unittest.V2EnumLite} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * optional int32 oneof_int32 = 1;
 * @return {number}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.getOneofInt32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protobuf_unittest.TestOneofParsingLite} returns this
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.setOneofInt32 = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestOneofParsingLite} returns this
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.clearOneofInt32 = function() {
  return jspb.Message.setOneofField(this, 1, proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.hasOneofInt32 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TestAllTypesLite oneof_submessage = 2;
 * @return {?proto.protobuf_unittest.TestAllTypesLite}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.getOneofSubmessage = function() {
  return /** @type{?proto.protobuf_unittest.TestAllTypesLite} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.TestAllTypesLite, 2));
};


/**
 * @param {?proto.protobuf_unittest.TestAllTypesLite|undefined} value
 * @return {!proto.protobuf_unittest.TestOneofParsingLite} returns this
*/
proto.protobuf_unittest.TestOneofParsingLite.prototype.setOneofSubmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.TestOneofParsingLite} returns this
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.clearOneofSubmessage = function() {
  return this.setOneofSubmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.hasOneofSubmessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string oneof_string = 3;
 * @return {string}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.getOneofString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protobuf_unittest.TestOneofParsingLite} returns this
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.setOneofString = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestOneofParsingLite} returns this
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.clearOneofString = function() {
  return jspb.Message.setOneofField(this, 3, proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.hasOneofString = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes oneof_bytes = 4;
 * @return {!(string|Uint8Array)}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.getOneofBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, "ZGVmYXVsdCBieXRlcw=="));
};


/**
 * optional bytes oneof_bytes = 4;
 * This is a type-conversion wrapper around `getOneofBytes()`
 * @return {string}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.getOneofBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOneofBytes()));
};


/**
 * optional bytes oneof_bytes = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOneofBytes()`
 * @return {!Uint8Array}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.getOneofBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOneofBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.protobuf_unittest.TestOneofParsingLite} returns this
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.setOneofBytes = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestOneofParsingLite} returns this
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.clearOneofBytes = function() {
  return jspb.Message.setOneofField(this, 4, proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.hasOneofBytes = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string oneof_string_cord = 5;
 * @return {string}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.getOneofStringCord = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "default Cord"));
};


/**
 * @param {string} value
 * @return {!proto.protobuf_unittest.TestOneofParsingLite} returns this
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.setOneofStringCord = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestOneofParsingLite} returns this
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.clearOneofStringCord = function() {
  return jspb.Message.setOneofField(this, 5, proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.hasOneofStringCord = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bytes oneof_bytes_cord = 6;
 * @return {!(string|Uint8Array)}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.getOneofBytesCord = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes oneof_bytes_cord = 6;
 * This is a type-conversion wrapper around `getOneofBytesCord()`
 * @return {string}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.getOneofBytesCord_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOneofBytesCord()));
};


/**
 * optional bytes oneof_bytes_cord = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOneofBytesCord()`
 * @return {!Uint8Array}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.getOneofBytesCord_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOneofBytesCord()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.protobuf_unittest.TestOneofParsingLite} returns this
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.setOneofBytesCord = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestOneofParsingLite} returns this
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.clearOneofBytesCord = function() {
  return jspb.Message.setOneofField(this, 6, proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.hasOneofBytesCord = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string oneof_string_string_piece = 7;
 * @return {string}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.getOneofStringStringPiece = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.protobuf_unittest.TestOneofParsingLite} returns this
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.setOneofStringStringPiece = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestOneofParsingLite} returns this
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.clearOneofStringStringPiece = function() {
  return jspb.Message.setOneofField(this, 7, proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.hasOneofStringStringPiece = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bytes oneof_bytes_string_piece = 8;
 * @return {!(string|Uint8Array)}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.getOneofBytesStringPiece = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, "ZGVmYXVsdCBTdHJpbmdQaWVjZQ=="));
};


/**
 * optional bytes oneof_bytes_string_piece = 8;
 * This is a type-conversion wrapper around `getOneofBytesStringPiece()`
 * @return {string}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.getOneofBytesStringPiece_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOneofBytesStringPiece()));
};


/**
 * optional bytes oneof_bytes_string_piece = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOneofBytesStringPiece()`
 * @return {!Uint8Array}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.getOneofBytesStringPiece_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOneofBytesStringPiece()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.protobuf_unittest.TestOneofParsingLite} returns this
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.setOneofBytesStringPiece = function(value) {
  return jspb.Message.setOneofField(this, 8, proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestOneofParsingLite} returns this
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.clearOneofBytesStringPiece = function() {
  return jspb.Message.setOneofField(this, 8, proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.hasOneofBytesStringPiece = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional V2EnumLite oneof_enum = 9;
 * @return {!proto.protobuf_unittest.V2EnumLite}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.getOneofEnum = function() {
  return /** @type {!proto.protobuf_unittest.V2EnumLite} */ (jspb.Message.getFieldWithDefault(this, 9, 1));
};


/**
 * @param {!proto.protobuf_unittest.V2EnumLite} value
 * @return {!proto.protobuf_unittest.TestOneofParsingLite} returns this
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.setOneofEnum = function(value) {
  return jspb.Message.setOneofField(this, 9, proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.TestOneofParsingLite} returns this
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.clearOneofEnum = function() {
  return jspb.Message.setOneofField(this, 9, proto.protobuf_unittest.TestOneofParsingLite.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.TestOneofParsingLite.prototype.hasOneofEnum = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.protobuf_unittest.TestMessageSetLite.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.TestMessageSetLite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.TestMessageSetLite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestMessageSetLite.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.protobuf_unittest.TestMessageSetLite.extensions, proto.protobuf_unittest.TestMessageSetLite.prototype.getExtension,
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
 * @return {!proto.protobuf_unittest.TestMessageSetLite}
 */
proto.protobuf_unittest.TestMessageSetLite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.TestMessageSetLite;
  return proto.protobuf_unittest.TestMessageSetLite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.TestMessageSetLite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.TestMessageSetLite}
 */
proto.protobuf_unittest.TestMessageSetLite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.protobuf_unittest.TestMessageSetLite.extensionsBinary,
        proto.protobuf_unittest.TestMessageSetLite.prototype.getExtension,
        proto.protobuf_unittest.TestMessageSetLite.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protobuf_unittest.TestMessageSetLite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.TestMessageSetLite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.TestMessageSetLite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.TestMessageSetLite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.protobuf_unittest.TestMessageSetLite.extensionsBinary, proto.protobuf_unittest.TestMessageSetLite.prototype.getExtension);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protobuf_unittest.PackedInt32.repeatedFields_ = [2048];



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
proto.protobuf_unittest.PackedInt32.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.PackedInt32.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.PackedInt32} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.PackedInt32.toObject = function(includeInstance, msg) {
  var f, obj = {
    repeatedInt32List: (f = jspb.Message.getRepeatedField(msg, 2048)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.PackedInt32}
 */
proto.protobuf_unittest.PackedInt32.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.PackedInt32;
  return proto.protobuf_unittest.PackedInt32.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.PackedInt32} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.PackedInt32}
 */
proto.protobuf_unittest.PackedInt32.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2048:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedInt32(values[i]);
      }
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
proto.protobuf_unittest.PackedInt32.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.PackedInt32.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.PackedInt32} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.PackedInt32.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepeatedInt32List();
  if (f.length > 0) {
    writer.writePackedInt32(
      2048,
      f
    );
  }
};


/**
 * repeated int32 repeated_int32 = 2048;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.PackedInt32.prototype.getRepeatedInt32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2048));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.PackedInt32} returns this
 */
proto.protobuf_unittest.PackedInt32.prototype.setRepeatedInt32List = function(value) {
  return jspb.Message.setField(this, 2048, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.PackedInt32} returns this
 */
proto.protobuf_unittest.PackedInt32.prototype.addRepeatedInt32 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2048, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.PackedInt32} returns this
 */
proto.protobuf_unittest.PackedInt32.prototype.clearRepeatedInt32List = function() {
  return this.setRepeatedInt32List([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protobuf_unittest.NonPackedInt32.repeatedFields_ = [2048];



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
proto.protobuf_unittest.NonPackedInt32.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.NonPackedInt32.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.NonPackedInt32} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.NonPackedInt32.toObject = function(includeInstance, msg) {
  var f, obj = {
    repeatedInt32List: (f = jspb.Message.getRepeatedField(msg, 2048)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.NonPackedInt32}
 */
proto.protobuf_unittest.NonPackedInt32.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.NonPackedInt32;
  return proto.protobuf_unittest.NonPackedInt32.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.NonPackedInt32} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.NonPackedInt32}
 */
proto.protobuf_unittest.NonPackedInt32.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2048:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedInt32(values[i]);
      }
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
proto.protobuf_unittest.NonPackedInt32.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.NonPackedInt32.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.NonPackedInt32} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.NonPackedInt32.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepeatedInt32List();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      2048,
      f
    );
  }
};


/**
 * repeated int32 repeated_int32 = 2048;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.NonPackedInt32.prototype.getRepeatedInt32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2048));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.NonPackedInt32} returns this
 */
proto.protobuf_unittest.NonPackedInt32.prototype.setRepeatedInt32List = function(value) {
  return jspb.Message.setField(this, 2048, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.NonPackedInt32} returns this
 */
proto.protobuf_unittest.NonPackedInt32.prototype.addRepeatedInt32 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2048, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.NonPackedInt32} returns this
 */
proto.protobuf_unittest.NonPackedInt32.prototype.clearRepeatedInt32List = function() {
  return this.setRepeatedInt32List([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protobuf_unittest.PackedFixed32.repeatedFields_ = [2048];



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
proto.protobuf_unittest.PackedFixed32.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.PackedFixed32.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.PackedFixed32} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.PackedFixed32.toObject = function(includeInstance, msg) {
  var f, obj = {
    repeatedFixed32List: (f = jspb.Message.getRepeatedField(msg, 2048)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.PackedFixed32}
 */
proto.protobuf_unittest.PackedFixed32.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.PackedFixed32;
  return proto.protobuf_unittest.PackedFixed32.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.PackedFixed32} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.PackedFixed32}
 */
proto.protobuf_unittest.PackedFixed32.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2048:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFixed32() : [reader.readFixed32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedFixed32(values[i]);
      }
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
proto.protobuf_unittest.PackedFixed32.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.PackedFixed32.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.PackedFixed32} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.PackedFixed32.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepeatedFixed32List();
  if (f.length > 0) {
    writer.writePackedFixed32(
      2048,
      f
    );
  }
};


/**
 * repeated fixed32 repeated_fixed32 = 2048;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.PackedFixed32.prototype.getRepeatedFixed32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2048));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.PackedFixed32} returns this
 */
proto.protobuf_unittest.PackedFixed32.prototype.setRepeatedFixed32List = function(value) {
  return jspb.Message.setField(this, 2048, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.PackedFixed32} returns this
 */
proto.protobuf_unittest.PackedFixed32.prototype.addRepeatedFixed32 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2048, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.PackedFixed32} returns this
 */
proto.protobuf_unittest.PackedFixed32.prototype.clearRepeatedFixed32List = function() {
  return this.setRepeatedFixed32List([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protobuf_unittest.NonPackedFixed32.repeatedFields_ = [2048];



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
proto.protobuf_unittest.NonPackedFixed32.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.NonPackedFixed32.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.NonPackedFixed32} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.NonPackedFixed32.toObject = function(includeInstance, msg) {
  var f, obj = {
    repeatedFixed32List: (f = jspb.Message.getRepeatedField(msg, 2048)) == null ? undefined : f
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
 * @return {!proto.protobuf_unittest.NonPackedFixed32}
 */
proto.protobuf_unittest.NonPackedFixed32.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.NonPackedFixed32;
  return proto.protobuf_unittest.NonPackedFixed32.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.NonPackedFixed32} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.NonPackedFixed32}
 */
proto.protobuf_unittest.NonPackedFixed32.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2048:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFixed32() : [reader.readFixed32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRepeatedFixed32(values[i]);
      }
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
proto.protobuf_unittest.NonPackedFixed32.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.NonPackedFixed32.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.NonPackedFixed32} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.NonPackedFixed32.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepeatedFixed32List();
  if (f.length > 0) {
    writer.writeRepeatedFixed32(
      2048,
      f
    );
  }
};


/**
 * repeated fixed32 repeated_fixed32 = 2048;
 * @return {!Array<number>}
 */
proto.protobuf_unittest.NonPackedFixed32.prototype.getRepeatedFixed32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2048));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protobuf_unittest.NonPackedFixed32} returns this
 */
proto.protobuf_unittest.NonPackedFixed32.prototype.setRepeatedFixed32List = function(value) {
  return jspb.Message.setField(this, 2048, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protobuf_unittest.NonPackedFixed32} returns this
 */
proto.protobuf_unittest.NonPackedFixed32.prototype.addRepeatedFixed32 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2048, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protobuf_unittest.NonPackedFixed32} returns this
 */
proto.protobuf_unittest.NonPackedFixed32.prototype.clearRepeatedFixed32List = function() {
  return this.setRepeatedFixed32List([]);
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
proto.protobuf_unittest.DupEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.DupEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.DupEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.DupEnum.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protobuf_unittest.DupEnum}
 */
proto.protobuf_unittest.DupEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.DupEnum;
  return proto.protobuf_unittest.DupEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.DupEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.DupEnum}
 */
proto.protobuf_unittest.DupEnum.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protobuf_unittest.DupEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.DupEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.DupEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.DupEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.protobuf_unittest.DupEnum.TestEnumWithDupValueLite = {
  FOO1: 1,
  BAR1: 2,
  BAZ: 3,
  FOO2: 1,
  BAR2: 2
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
proto.protobuf_unittest.RecursiveMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf_unittest.RecursiveMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf_unittest.RecursiveMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.RecursiveMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    recurse: (f = msg.getRecurse()) && proto.protobuf_unittest.RecursiveMessage.toObject(includeInstance, f),
    payload: msg.getPayload_asB64()
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
 * @return {!proto.protobuf_unittest.RecursiveMessage}
 */
proto.protobuf_unittest.RecursiveMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf_unittest.RecursiveMessage;
  return proto.protobuf_unittest.RecursiveMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf_unittest.RecursiveMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf_unittest.RecursiveMessage}
 */
proto.protobuf_unittest.RecursiveMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protobuf_unittest.RecursiveMessage;
      reader.readMessage(value,proto.protobuf_unittest.RecursiveMessage.deserializeBinaryFromReader);
      msg.setRecurse(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
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
proto.protobuf_unittest.RecursiveMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf_unittest.RecursiveMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf_unittest.RecursiveMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf_unittest.RecursiveMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecurse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protobuf_unittest.RecursiveMessage.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional RecursiveMessage recurse = 1;
 * @return {?proto.protobuf_unittest.RecursiveMessage}
 */
proto.protobuf_unittest.RecursiveMessage.prototype.getRecurse = function() {
  return /** @type{?proto.protobuf_unittest.RecursiveMessage} */ (
    jspb.Message.getWrapperField(this, proto.protobuf_unittest.RecursiveMessage, 1));
};


/**
 * @param {?proto.protobuf_unittest.RecursiveMessage|undefined} value
 * @return {!proto.protobuf_unittest.RecursiveMessage} returns this
*/
proto.protobuf_unittest.RecursiveMessage.prototype.setRecurse = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protobuf_unittest.RecursiveMessage} returns this
 */
proto.protobuf_unittest.RecursiveMessage.prototype.clearRecurse = function() {
  return this.setRecurse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.RecursiveMessage.prototype.hasRecurse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes payload = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protobuf_unittest.RecursiveMessage.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes payload = 2;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.protobuf_unittest.RecursiveMessage.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.protobuf_unittest.RecursiveMessage.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.protobuf_unittest.RecursiveMessage} returns this
 */
proto.protobuf_unittest.RecursiveMessage.prototype.setPayload = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protobuf_unittest.RecursiveMessage} returns this
 */
proto.protobuf_unittest.RecursiveMessage.prototype.clearPayload = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protobuf_unittest.RecursiveMessage.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * @enum {number}
 */
proto.protobuf_unittest.ForeignEnumLite = {
  FOREIGN_LITE_FOO: 4,
  FOREIGN_LITE_BAZ: 6,
  FOREIGN_LITE_BAR: 5
};

/**
 * @enum {number}
 */
proto.protobuf_unittest.V1EnumLite = {
  V1_FIRST: 1
};

/**
 * @enum {number}
 */
proto.protobuf_unittest.V2EnumLite = {
  V2_FIRST: 1,
  V2_SECOND: 2
};


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalInt32ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.optionalInt32ExtensionLite = new jspb.ExtensionFieldInfo(
    1,
    {optionalInt32ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[1] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalInt32ExtensionLite,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[1] = proto.protobuf_unittest.optionalInt32ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalInt64ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.optionalInt64ExtensionLite = new jspb.ExtensionFieldInfo(
    2,
    {optionalInt64ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[2] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalInt64ExtensionLite,
    jspb.BinaryReader.prototype.readInt64,
    jspb.BinaryWriter.prototype.writeInt64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[2] = proto.protobuf_unittest.optionalInt64ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalUint32ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.optionalUint32ExtensionLite = new jspb.ExtensionFieldInfo(
    3,
    {optionalUint32ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[3] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalUint32ExtensionLite,
    jspb.BinaryReader.prototype.readUint32,
    jspb.BinaryWriter.prototype.writeUint32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[3] = proto.protobuf_unittest.optionalUint32ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalUint64ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.optionalUint64ExtensionLite = new jspb.ExtensionFieldInfo(
    4,
    {optionalUint64ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[4] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalUint64ExtensionLite,
    jspb.BinaryReader.prototype.readUint64,
    jspb.BinaryWriter.prototype.writeUint64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[4] = proto.protobuf_unittest.optionalUint64ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalSint32ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.optionalSint32ExtensionLite = new jspb.ExtensionFieldInfo(
    5,
    {optionalSint32ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[5] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalSint32ExtensionLite,
    jspb.BinaryReader.prototype.readSint32,
    jspb.BinaryWriter.prototype.writeSint32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[5] = proto.protobuf_unittest.optionalSint32ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalSint64ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.optionalSint64ExtensionLite = new jspb.ExtensionFieldInfo(
    6,
    {optionalSint64ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[6] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalSint64ExtensionLite,
    jspb.BinaryReader.prototype.readSint64,
    jspb.BinaryWriter.prototype.writeSint64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[6] = proto.protobuf_unittest.optionalSint64ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalFixed32ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.optionalFixed32ExtensionLite = new jspb.ExtensionFieldInfo(
    7,
    {optionalFixed32ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[7] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalFixed32ExtensionLite,
    jspb.BinaryReader.prototype.readFixed32,
    jspb.BinaryWriter.prototype.writeFixed32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[7] = proto.protobuf_unittest.optionalFixed32ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalFixed64ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.optionalFixed64ExtensionLite = new jspb.ExtensionFieldInfo(
    8,
    {optionalFixed64ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[8] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalFixed64ExtensionLite,
    jspb.BinaryReader.prototype.readFixed64,
    jspb.BinaryWriter.prototype.writeFixed64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[8] = proto.protobuf_unittest.optionalFixed64ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalSfixed32ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.optionalSfixed32ExtensionLite = new jspb.ExtensionFieldInfo(
    9,
    {optionalSfixed32ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[9] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalSfixed32ExtensionLite,
    jspb.BinaryReader.prototype.readSfixed32,
    jspb.BinaryWriter.prototype.writeSfixed32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[9] = proto.protobuf_unittest.optionalSfixed32ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalSfixed64ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.optionalSfixed64ExtensionLite = new jspb.ExtensionFieldInfo(
    10,
    {optionalSfixed64ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[10] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalSfixed64ExtensionLite,
    jspb.BinaryReader.prototype.readSfixed64,
    jspb.BinaryWriter.prototype.writeSfixed64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[10] = proto.protobuf_unittest.optionalSfixed64ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalFloatExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.optionalFloatExtensionLite = new jspb.ExtensionFieldInfo(
    11,
    {optionalFloatExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[11] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalFloatExtensionLite,
    jspb.BinaryReader.prototype.readFloat,
    jspb.BinaryWriter.prototype.writeFloat,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[11] = proto.protobuf_unittest.optionalFloatExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalDoubleExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.optionalDoubleExtensionLite = new jspb.ExtensionFieldInfo(
    12,
    {optionalDoubleExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[12] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalDoubleExtensionLite,
    jspb.BinaryReader.prototype.readDouble,
    jspb.BinaryWriter.prototype.writeDouble,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[12] = proto.protobuf_unittest.optionalDoubleExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalBoolExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.protobuf_unittest.optionalBoolExtensionLite = new jspb.ExtensionFieldInfo(
    13,
    {optionalBoolExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[13] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalBoolExtensionLite,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[13] = proto.protobuf_unittest.optionalBoolExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalStringExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.protobuf_unittest.optionalStringExtensionLite = new jspb.ExtensionFieldInfo(
    14,
    {optionalStringExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[14] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalStringExtensionLite,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[14] = proto.protobuf_unittest.optionalStringExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalBytesExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<!(string|Uint8Array)>}
 */
proto.protobuf_unittest.optionalBytesExtensionLite = new jspb.ExtensionFieldInfo(
    15,
    {optionalBytesExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[15] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalBytesExtensionLite,
    jspb.BinaryReader.prototype.readBytes,
    jspb.BinaryWriter.prototype.writeBytes,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[15] = proto.protobuf_unittest.optionalBytesExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalGroup_extension_lite`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.OptionalGroup_extension_lite>}
 */
proto.protobuf_unittest.optionalGroup_extension_lite = new jspb.ExtensionFieldInfo(
    16,
    {optionalGroup_extension_lite: 0},
    proto.protobuf_unittest.OptionalGroup_extension_lite,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.OptionalGroup_extension_lite.toObject),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[16] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalGroup_extension_lite,
    jspb.BinaryReader.prototype.readGroup,
    jspb.BinaryWriter.prototype.writeGroup,
    proto.protobuf_unittest.OptionalGroup_extension_lite.serializeBinaryToWriter,
    proto.protobuf_unittest.OptionalGroup_extension_lite.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[16] = proto.protobuf_unittest.optionalGroup_extension_lite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalNestedMessageExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.TestAllTypesLite.NestedMessage>}
 */
proto.protobuf_unittest.optionalNestedMessageExtensionLite = new jspb.ExtensionFieldInfo(
    18,
    {optionalNestedMessageExtensionLite: 0},
    proto.protobuf_unittest.TestAllTypesLite.NestedMessage,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.TestAllTypesLite.NestedMessage.toObject),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[18] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalNestedMessageExtensionLite,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.TestAllTypesLite.NestedMessage.serializeBinaryToWriter,
    proto.protobuf_unittest.TestAllTypesLite.NestedMessage.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[18] = proto.protobuf_unittest.optionalNestedMessageExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalForeignMessageExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.ForeignMessageLite>}
 */
proto.protobuf_unittest.optionalForeignMessageExtensionLite = new jspb.ExtensionFieldInfo(
    19,
    {optionalForeignMessageExtensionLite: 0},
    proto.protobuf_unittest.ForeignMessageLite,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.ForeignMessageLite.toObject),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[19] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalForeignMessageExtensionLite,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.ForeignMessageLite.serializeBinaryToWriter,
    proto.protobuf_unittest.ForeignMessageLite.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[19] = proto.protobuf_unittest.optionalForeignMessageExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalImportMessageExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest_import.ImportMessageLite>}
 */
proto.protobuf_unittest.optionalImportMessageExtensionLite = new jspb.ExtensionFieldInfo(
    20,
    {optionalImportMessageExtensionLite: 0},
    google_protobuf_unittest_import_lite_pb.ImportMessageLite,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         google_protobuf_unittest_import_lite_pb.ImportMessageLite.toObject),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[20] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalImportMessageExtensionLite,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    google_protobuf_unittest_import_lite_pb.ImportMessageLite.serializeBinaryToWriter,
    google_protobuf_unittest_import_lite_pb.ImportMessageLite.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[20] = proto.protobuf_unittest.optionalImportMessageExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalNestedEnumExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.TestAllTypesLite.NestedEnum>}
 */
proto.protobuf_unittest.optionalNestedEnumExtensionLite = new jspb.ExtensionFieldInfo(
    21,
    {optionalNestedEnumExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[21] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalNestedEnumExtensionLite,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[21] = proto.protobuf_unittest.optionalNestedEnumExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalForeignEnumExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.ForeignEnumLite>}
 */
proto.protobuf_unittest.optionalForeignEnumExtensionLite = new jspb.ExtensionFieldInfo(
    22,
    {optionalForeignEnumExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[22] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalForeignEnumExtensionLite,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[22] = proto.protobuf_unittest.optionalForeignEnumExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalImportEnumExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest_import.ImportEnumLite>}
 */
proto.protobuf_unittest.optionalImportEnumExtensionLite = new jspb.ExtensionFieldInfo(
    23,
    {optionalImportEnumExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[23] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalImportEnumExtensionLite,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[23] = proto.protobuf_unittest.optionalImportEnumExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalStringPieceExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.protobuf_unittest.optionalStringPieceExtensionLite = new jspb.ExtensionFieldInfo(
    24,
    {optionalStringPieceExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[24] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalStringPieceExtensionLite,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[24] = proto.protobuf_unittest.optionalStringPieceExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalCordExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.protobuf_unittest.optionalCordExtensionLite = new jspb.ExtensionFieldInfo(
    25,
    {optionalCordExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[25] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalCordExtensionLite,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[25] = proto.protobuf_unittest.optionalCordExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalPublicImportMessageExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest_import.PublicImportMessageLite>}
 */
proto.protobuf_unittest.optionalPublicImportMessageExtensionLite = new jspb.ExtensionFieldInfo(
    26,
    {optionalPublicImportMessageExtensionLite: 0},
    google_protobuf_unittest_import_public_lite_pb.PublicImportMessageLite,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         google_protobuf_unittest_import_public_lite_pb.PublicImportMessageLite.toObject),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[26] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalPublicImportMessageExtensionLite,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    google_protobuf_unittest_import_public_lite_pb.PublicImportMessageLite.serializeBinaryToWriter,
    google_protobuf_unittest_import_public_lite_pb.PublicImportMessageLite.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[26] = proto.protobuf_unittest.optionalPublicImportMessageExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalLazyMessageExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.TestAllTypesLite.NestedMessage>}
 */
proto.protobuf_unittest.optionalLazyMessageExtensionLite = new jspb.ExtensionFieldInfo(
    27,
    {optionalLazyMessageExtensionLite: 0},
    proto.protobuf_unittest.TestAllTypesLite.NestedMessage,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.TestAllTypesLite.NestedMessage.toObject),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[27] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.optionalLazyMessageExtensionLite,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.TestAllTypesLite.NestedMessage.serializeBinaryToWriter,
    proto.protobuf_unittest.TestAllTypesLite.NestedMessage.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[27] = proto.protobuf_unittest.optionalLazyMessageExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedInt32ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.repeatedInt32ExtensionLiteList = new jspb.ExtensionFieldInfo(
    31,
    {repeatedInt32ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[31] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedInt32ExtensionLiteList,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeRepeatedInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[31] = proto.protobuf_unittest.repeatedInt32ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedInt64ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.repeatedInt64ExtensionLiteList = new jspb.ExtensionFieldInfo(
    32,
    {repeatedInt64ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[32] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedInt64ExtensionLiteList,
    jspb.BinaryReader.prototype.readInt64,
    jspb.BinaryWriter.prototype.writeRepeatedInt64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[32] = proto.protobuf_unittest.repeatedInt64ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedUint32ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.repeatedUint32ExtensionLiteList = new jspb.ExtensionFieldInfo(
    33,
    {repeatedUint32ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[33] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedUint32ExtensionLiteList,
    jspb.BinaryReader.prototype.readUint32,
    jspb.BinaryWriter.prototype.writeRepeatedUint32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[33] = proto.protobuf_unittest.repeatedUint32ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedUint64ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.repeatedUint64ExtensionLiteList = new jspb.ExtensionFieldInfo(
    34,
    {repeatedUint64ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[34] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedUint64ExtensionLiteList,
    jspb.BinaryReader.prototype.readUint64,
    jspb.BinaryWriter.prototype.writeRepeatedUint64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[34] = proto.protobuf_unittest.repeatedUint64ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedSint32ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.repeatedSint32ExtensionLiteList = new jspb.ExtensionFieldInfo(
    35,
    {repeatedSint32ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[35] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedSint32ExtensionLiteList,
    jspb.BinaryReader.prototype.readSint32,
    jspb.BinaryWriter.prototype.writeRepeatedSint32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[35] = proto.protobuf_unittest.repeatedSint32ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedSint64ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.repeatedSint64ExtensionLiteList = new jspb.ExtensionFieldInfo(
    36,
    {repeatedSint64ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[36] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedSint64ExtensionLiteList,
    jspb.BinaryReader.prototype.readSint64,
    jspb.BinaryWriter.prototype.writeRepeatedSint64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[36] = proto.protobuf_unittest.repeatedSint64ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedFixed32ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.repeatedFixed32ExtensionLiteList = new jspb.ExtensionFieldInfo(
    37,
    {repeatedFixed32ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[37] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedFixed32ExtensionLiteList,
    jspb.BinaryReader.prototype.readFixed32,
    jspb.BinaryWriter.prototype.writeRepeatedFixed32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[37] = proto.protobuf_unittest.repeatedFixed32ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedFixed64ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.repeatedFixed64ExtensionLiteList = new jspb.ExtensionFieldInfo(
    38,
    {repeatedFixed64ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[38] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedFixed64ExtensionLiteList,
    jspb.BinaryReader.prototype.readFixed64,
    jspb.BinaryWriter.prototype.writeRepeatedFixed64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[38] = proto.protobuf_unittest.repeatedFixed64ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedSfixed32ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.repeatedSfixed32ExtensionLiteList = new jspb.ExtensionFieldInfo(
    39,
    {repeatedSfixed32ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[39] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedSfixed32ExtensionLiteList,
    jspb.BinaryReader.prototype.readSfixed32,
    jspb.BinaryWriter.prototype.writeRepeatedSfixed32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[39] = proto.protobuf_unittest.repeatedSfixed32ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedSfixed64ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.repeatedSfixed64ExtensionLiteList = new jspb.ExtensionFieldInfo(
    40,
    {repeatedSfixed64ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[40] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedSfixed64ExtensionLiteList,
    jspb.BinaryReader.prototype.readSfixed64,
    jspb.BinaryWriter.prototype.writeRepeatedSfixed64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[40] = proto.protobuf_unittest.repeatedSfixed64ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedFloatExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.repeatedFloatExtensionLiteList = new jspb.ExtensionFieldInfo(
    41,
    {repeatedFloatExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[41] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedFloatExtensionLiteList,
    jspb.BinaryReader.prototype.readFloat,
    jspb.BinaryWriter.prototype.writeRepeatedFloat,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[41] = proto.protobuf_unittest.repeatedFloatExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedDoubleExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.repeatedDoubleExtensionLiteList = new jspb.ExtensionFieldInfo(
    42,
    {repeatedDoubleExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[42] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedDoubleExtensionLiteList,
    jspb.BinaryReader.prototype.readDouble,
    jspb.BinaryWriter.prototype.writeRepeatedDouble,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[42] = proto.protobuf_unittest.repeatedDoubleExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedBoolExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<boolean>>}
 */
proto.protobuf_unittest.repeatedBoolExtensionLiteList = new jspb.ExtensionFieldInfo(
    43,
    {repeatedBoolExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[43] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedBoolExtensionLiteList,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeRepeatedBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[43] = proto.protobuf_unittest.repeatedBoolExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedStringExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<string>>}
 */
proto.protobuf_unittest.repeatedStringExtensionLiteList = new jspb.ExtensionFieldInfo(
    44,
    {repeatedStringExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[44] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedStringExtensionLiteList,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeRepeatedString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[44] = proto.protobuf_unittest.repeatedStringExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedBytesExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!(Array<!Uint8Array>|Array<string>)>}
 */
proto.protobuf_unittest.repeatedBytesExtensionLiteList = new jspb.ExtensionFieldInfo(
    45,
    {repeatedBytesExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[45] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedBytesExtensionLiteList,
    jspb.BinaryReader.prototype.readBytes,
    jspb.BinaryWriter.prototype.writeRepeatedBytes,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[45] = proto.protobuf_unittest.repeatedBytesExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedGroup_extension_liteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.protobuf_unittest.RepeatedGroup_extension_lite>>}
 */
proto.protobuf_unittest.repeatedGroup_extension_liteList = new jspb.ExtensionFieldInfo(
    46,
    {repeatedGroup_extension_liteList: 0},
    proto.protobuf_unittest.RepeatedGroup_extension_lite,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.RepeatedGroup_extension_lite.toObject),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[46] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedGroup_extension_liteList,
    jspb.BinaryReader.prototype.readGroup,
    jspb.BinaryWriter.prototype.writeRepeatedGroup,
    proto.protobuf_unittest.RepeatedGroup_extension_lite.serializeBinaryToWriter,
    proto.protobuf_unittest.RepeatedGroup_extension_lite.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[46] = proto.protobuf_unittest.repeatedGroup_extension_liteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedNestedMessageExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.protobuf_unittest.TestAllTypesLite.NestedMessage>>}
 */
proto.protobuf_unittest.repeatedNestedMessageExtensionLiteList = new jspb.ExtensionFieldInfo(
    48,
    {repeatedNestedMessageExtensionLiteList: 0},
    proto.protobuf_unittest.TestAllTypesLite.NestedMessage,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.TestAllTypesLite.NestedMessage.toObject),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[48] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedNestedMessageExtensionLiteList,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeRepeatedMessage,
    proto.protobuf_unittest.TestAllTypesLite.NestedMessage.serializeBinaryToWriter,
    proto.protobuf_unittest.TestAllTypesLite.NestedMessage.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[48] = proto.protobuf_unittest.repeatedNestedMessageExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedForeignMessageExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.protobuf_unittest.ForeignMessageLite>>}
 */
proto.protobuf_unittest.repeatedForeignMessageExtensionLiteList = new jspb.ExtensionFieldInfo(
    49,
    {repeatedForeignMessageExtensionLiteList: 0},
    proto.protobuf_unittest.ForeignMessageLite,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.ForeignMessageLite.toObject),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[49] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedForeignMessageExtensionLiteList,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeRepeatedMessage,
    proto.protobuf_unittest.ForeignMessageLite.serializeBinaryToWriter,
    proto.protobuf_unittest.ForeignMessageLite.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[49] = proto.protobuf_unittest.repeatedForeignMessageExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedImportMessageExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.protobuf_unittest_import.ImportMessageLite>>}
 */
proto.protobuf_unittest.repeatedImportMessageExtensionLiteList = new jspb.ExtensionFieldInfo(
    50,
    {repeatedImportMessageExtensionLiteList: 0},
    google_protobuf_unittest_import_lite_pb.ImportMessageLite,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         google_protobuf_unittest_import_lite_pb.ImportMessageLite.toObject),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[50] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedImportMessageExtensionLiteList,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeRepeatedMessage,
    google_protobuf_unittest_import_lite_pb.ImportMessageLite.serializeBinaryToWriter,
    google_protobuf_unittest_import_lite_pb.ImportMessageLite.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[50] = proto.protobuf_unittest.repeatedImportMessageExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedNestedEnumExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.protobuf_unittest.TestAllTypesLite.NestedEnum>>}
 */
proto.protobuf_unittest.repeatedNestedEnumExtensionLiteList = new jspb.ExtensionFieldInfo(
    51,
    {repeatedNestedEnumExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[51] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedNestedEnumExtensionLiteList,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeRepeatedEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[51] = proto.protobuf_unittest.repeatedNestedEnumExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedForeignEnumExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.protobuf_unittest.ForeignEnumLite>>}
 */
proto.protobuf_unittest.repeatedForeignEnumExtensionLiteList = new jspb.ExtensionFieldInfo(
    52,
    {repeatedForeignEnumExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[52] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedForeignEnumExtensionLiteList,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeRepeatedEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[52] = proto.protobuf_unittest.repeatedForeignEnumExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedImportEnumExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.protobuf_unittest_import.ImportEnumLite>>}
 */
proto.protobuf_unittest.repeatedImportEnumExtensionLiteList = new jspb.ExtensionFieldInfo(
    53,
    {repeatedImportEnumExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[53] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedImportEnumExtensionLiteList,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeRepeatedEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[53] = proto.protobuf_unittest.repeatedImportEnumExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedStringPieceExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<string>>}
 */
proto.protobuf_unittest.repeatedStringPieceExtensionLiteList = new jspb.ExtensionFieldInfo(
    54,
    {repeatedStringPieceExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[54] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedStringPieceExtensionLiteList,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeRepeatedString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[54] = proto.protobuf_unittest.repeatedStringPieceExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedCordExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<string>>}
 */
proto.protobuf_unittest.repeatedCordExtensionLiteList = new jspb.ExtensionFieldInfo(
    55,
    {repeatedCordExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[55] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedCordExtensionLiteList,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeRepeatedString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[55] = proto.protobuf_unittest.repeatedCordExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedLazyMessageExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.protobuf_unittest.TestAllTypesLite.NestedMessage>>}
 */
proto.protobuf_unittest.repeatedLazyMessageExtensionLiteList = new jspb.ExtensionFieldInfo(
    57,
    {repeatedLazyMessageExtensionLiteList: 0},
    proto.protobuf_unittest.TestAllTypesLite.NestedMessage,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.TestAllTypesLite.NestedMessage.toObject),
    1);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[57] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.repeatedLazyMessageExtensionLiteList,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeRepeatedMessage,
    proto.protobuf_unittest.TestAllTypesLite.NestedMessage.serializeBinaryToWriter,
    proto.protobuf_unittest.TestAllTypesLite.NestedMessage.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[57] = proto.protobuf_unittest.repeatedLazyMessageExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultInt32ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.defaultInt32ExtensionLite = new jspb.ExtensionFieldInfo(
    61,
    {defaultInt32ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[61] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultInt32ExtensionLite,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[61] = proto.protobuf_unittest.defaultInt32ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultInt64ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.defaultInt64ExtensionLite = new jspb.ExtensionFieldInfo(
    62,
    {defaultInt64ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[62] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultInt64ExtensionLite,
    jspb.BinaryReader.prototype.readInt64,
    jspb.BinaryWriter.prototype.writeInt64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[62] = proto.protobuf_unittest.defaultInt64ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultUint32ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.defaultUint32ExtensionLite = new jspb.ExtensionFieldInfo(
    63,
    {defaultUint32ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[63] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultUint32ExtensionLite,
    jspb.BinaryReader.prototype.readUint32,
    jspb.BinaryWriter.prototype.writeUint32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[63] = proto.protobuf_unittest.defaultUint32ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultUint64ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.defaultUint64ExtensionLite = new jspb.ExtensionFieldInfo(
    64,
    {defaultUint64ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[64] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultUint64ExtensionLite,
    jspb.BinaryReader.prototype.readUint64,
    jspb.BinaryWriter.prototype.writeUint64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[64] = proto.protobuf_unittest.defaultUint64ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultSint32ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.defaultSint32ExtensionLite = new jspb.ExtensionFieldInfo(
    65,
    {defaultSint32ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[65] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultSint32ExtensionLite,
    jspb.BinaryReader.prototype.readSint32,
    jspb.BinaryWriter.prototype.writeSint32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[65] = proto.protobuf_unittest.defaultSint32ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultSint64ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.defaultSint64ExtensionLite = new jspb.ExtensionFieldInfo(
    66,
    {defaultSint64ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[66] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultSint64ExtensionLite,
    jspb.BinaryReader.prototype.readSint64,
    jspb.BinaryWriter.prototype.writeSint64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[66] = proto.protobuf_unittest.defaultSint64ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultFixed32ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.defaultFixed32ExtensionLite = new jspb.ExtensionFieldInfo(
    67,
    {defaultFixed32ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[67] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultFixed32ExtensionLite,
    jspb.BinaryReader.prototype.readFixed32,
    jspb.BinaryWriter.prototype.writeFixed32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[67] = proto.protobuf_unittest.defaultFixed32ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultFixed64ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.defaultFixed64ExtensionLite = new jspb.ExtensionFieldInfo(
    68,
    {defaultFixed64ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[68] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultFixed64ExtensionLite,
    jspb.BinaryReader.prototype.readFixed64,
    jspb.BinaryWriter.prototype.writeFixed64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[68] = proto.protobuf_unittest.defaultFixed64ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultSfixed32ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.defaultSfixed32ExtensionLite = new jspb.ExtensionFieldInfo(
    69,
    {defaultSfixed32ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[69] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultSfixed32ExtensionLite,
    jspb.BinaryReader.prototype.readSfixed32,
    jspb.BinaryWriter.prototype.writeSfixed32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[69] = proto.protobuf_unittest.defaultSfixed32ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultSfixed64ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.defaultSfixed64ExtensionLite = new jspb.ExtensionFieldInfo(
    70,
    {defaultSfixed64ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[70] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultSfixed64ExtensionLite,
    jspb.BinaryReader.prototype.readSfixed64,
    jspb.BinaryWriter.prototype.writeSfixed64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[70] = proto.protobuf_unittest.defaultSfixed64ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultFloatExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.defaultFloatExtensionLite = new jspb.ExtensionFieldInfo(
    71,
    {defaultFloatExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[71] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultFloatExtensionLite,
    jspb.BinaryReader.prototype.readFloat,
    jspb.BinaryWriter.prototype.writeFloat,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[71] = proto.protobuf_unittest.defaultFloatExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultDoubleExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.defaultDoubleExtensionLite = new jspb.ExtensionFieldInfo(
    72,
    {defaultDoubleExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[72] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultDoubleExtensionLite,
    jspb.BinaryReader.prototype.readDouble,
    jspb.BinaryWriter.prototype.writeDouble,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[72] = proto.protobuf_unittest.defaultDoubleExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultBoolExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.protobuf_unittest.defaultBoolExtensionLite = new jspb.ExtensionFieldInfo(
    73,
    {defaultBoolExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[73] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultBoolExtensionLite,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[73] = proto.protobuf_unittest.defaultBoolExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultStringExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.protobuf_unittest.defaultStringExtensionLite = new jspb.ExtensionFieldInfo(
    74,
    {defaultStringExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[74] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultStringExtensionLite,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[74] = proto.protobuf_unittest.defaultStringExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultBytesExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<!(string|Uint8Array)>}
 */
proto.protobuf_unittest.defaultBytesExtensionLite = new jspb.ExtensionFieldInfo(
    75,
    {defaultBytesExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[75] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultBytesExtensionLite,
    jspb.BinaryReader.prototype.readBytes,
    jspb.BinaryWriter.prototype.writeBytes,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[75] = proto.protobuf_unittest.defaultBytesExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultNestedEnumExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.TestAllTypesLite.NestedEnum>}
 */
proto.protobuf_unittest.defaultNestedEnumExtensionLite = new jspb.ExtensionFieldInfo(
    81,
    {defaultNestedEnumExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[81] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultNestedEnumExtensionLite,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[81] = proto.protobuf_unittest.defaultNestedEnumExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultForeignEnumExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.ForeignEnumLite>}
 */
proto.protobuf_unittest.defaultForeignEnumExtensionLite = new jspb.ExtensionFieldInfo(
    82,
    {defaultForeignEnumExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[82] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultForeignEnumExtensionLite,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[82] = proto.protobuf_unittest.defaultForeignEnumExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultImportEnumExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest_import.ImportEnumLite>}
 */
proto.protobuf_unittest.defaultImportEnumExtensionLite = new jspb.ExtensionFieldInfo(
    83,
    {defaultImportEnumExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[83] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultImportEnumExtensionLite,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[83] = proto.protobuf_unittest.defaultImportEnumExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultStringPieceExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.protobuf_unittest.defaultStringPieceExtensionLite = new jspb.ExtensionFieldInfo(
    84,
    {defaultStringPieceExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[84] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultStringPieceExtensionLite,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[84] = proto.protobuf_unittest.defaultStringPieceExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultCordExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.protobuf_unittest.defaultCordExtensionLite = new jspb.ExtensionFieldInfo(
    85,
    {defaultCordExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[85] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.defaultCordExtensionLite,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[85] = proto.protobuf_unittest.defaultCordExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `oneofUint32ExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.protobuf_unittest.oneofUint32ExtensionLite = new jspb.ExtensionFieldInfo(
    111,
    {oneofUint32ExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[111] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.oneofUint32ExtensionLite,
    jspb.BinaryReader.prototype.readUint32,
    jspb.BinaryWriter.prototype.writeUint32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[111] = proto.protobuf_unittest.oneofUint32ExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `oneofNestedMessageExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.TestAllTypesLite.NestedMessage>}
 */
proto.protobuf_unittest.oneofNestedMessageExtensionLite = new jspb.ExtensionFieldInfo(
    112,
    {oneofNestedMessageExtensionLite: 0},
    proto.protobuf_unittest.TestAllTypesLite.NestedMessage,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.TestAllTypesLite.NestedMessage.toObject),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[112] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.oneofNestedMessageExtensionLite,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.TestAllTypesLite.NestedMessage.serializeBinaryToWriter,
    proto.protobuf_unittest.TestAllTypesLite.NestedMessage.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[112] = proto.protobuf_unittest.oneofNestedMessageExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `oneofStringExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.protobuf_unittest.oneofStringExtensionLite = new jspb.ExtensionFieldInfo(
    113,
    {oneofStringExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[113] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.oneofStringExtensionLite,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[113] = proto.protobuf_unittest.oneofStringExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `oneofBytesExtensionLite`.
 * @type {!jspb.ExtensionFieldInfo<!(string|Uint8Array)>}
 */
proto.protobuf_unittest.oneofBytesExtensionLite = new jspb.ExtensionFieldInfo(
    114,
    {oneofBytesExtensionLite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.protobuf_unittest.TestAllExtensionsLite.extensionsBinary[114] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.oneofBytesExtensionLite,
    jspb.BinaryReader.prototype.readBytes,
    jspb.BinaryWriter.prototype.writeBytes,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestAllExtensionsLite.extensions[114] = proto.protobuf_unittest.oneofBytesExtensionLite;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `packedInt32ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.packedInt32ExtensionLiteList = new jspb.ExtensionFieldInfo(
    90,
    {packedInt32ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestPackedExtensionsLite.extensionsBinary[90] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.packedInt32ExtensionLiteList,
    jspb.BinaryReader.prototype.readPackedInt32,
    jspb.BinaryWriter.prototype.writePackedInt32,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestPackedExtensionsLite.extensions[90] = proto.protobuf_unittest.packedInt32ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `packedInt64ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.packedInt64ExtensionLiteList = new jspb.ExtensionFieldInfo(
    91,
    {packedInt64ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestPackedExtensionsLite.extensionsBinary[91] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.packedInt64ExtensionLiteList,
    jspb.BinaryReader.prototype.readPackedInt64,
    jspb.BinaryWriter.prototype.writePackedInt64,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestPackedExtensionsLite.extensions[91] = proto.protobuf_unittest.packedInt64ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `packedUint32ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.packedUint32ExtensionLiteList = new jspb.ExtensionFieldInfo(
    92,
    {packedUint32ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestPackedExtensionsLite.extensionsBinary[92] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.packedUint32ExtensionLiteList,
    jspb.BinaryReader.prototype.readPackedUint32,
    jspb.BinaryWriter.prototype.writePackedUint32,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestPackedExtensionsLite.extensions[92] = proto.protobuf_unittest.packedUint32ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `packedUint64ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.packedUint64ExtensionLiteList = new jspb.ExtensionFieldInfo(
    93,
    {packedUint64ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestPackedExtensionsLite.extensionsBinary[93] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.packedUint64ExtensionLiteList,
    jspb.BinaryReader.prototype.readPackedUint64,
    jspb.BinaryWriter.prototype.writePackedUint64,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestPackedExtensionsLite.extensions[93] = proto.protobuf_unittest.packedUint64ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `packedSint32ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.packedSint32ExtensionLiteList = new jspb.ExtensionFieldInfo(
    94,
    {packedSint32ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestPackedExtensionsLite.extensionsBinary[94] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.packedSint32ExtensionLiteList,
    jspb.BinaryReader.prototype.readPackedSint32,
    jspb.BinaryWriter.prototype.writePackedSint32,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestPackedExtensionsLite.extensions[94] = proto.protobuf_unittest.packedSint32ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `packedSint64ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.packedSint64ExtensionLiteList = new jspb.ExtensionFieldInfo(
    95,
    {packedSint64ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestPackedExtensionsLite.extensionsBinary[95] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.packedSint64ExtensionLiteList,
    jspb.BinaryReader.prototype.readPackedSint64,
    jspb.BinaryWriter.prototype.writePackedSint64,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestPackedExtensionsLite.extensions[95] = proto.protobuf_unittest.packedSint64ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `packedFixed32ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.packedFixed32ExtensionLiteList = new jspb.ExtensionFieldInfo(
    96,
    {packedFixed32ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestPackedExtensionsLite.extensionsBinary[96] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.packedFixed32ExtensionLiteList,
    jspb.BinaryReader.prototype.readPackedFixed32,
    jspb.BinaryWriter.prototype.writePackedFixed32,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestPackedExtensionsLite.extensions[96] = proto.protobuf_unittest.packedFixed32ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `packedFixed64ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.packedFixed64ExtensionLiteList = new jspb.ExtensionFieldInfo(
    97,
    {packedFixed64ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestPackedExtensionsLite.extensionsBinary[97] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.packedFixed64ExtensionLiteList,
    jspb.BinaryReader.prototype.readPackedFixed64,
    jspb.BinaryWriter.prototype.writePackedFixed64,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestPackedExtensionsLite.extensions[97] = proto.protobuf_unittest.packedFixed64ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `packedSfixed32ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.packedSfixed32ExtensionLiteList = new jspb.ExtensionFieldInfo(
    98,
    {packedSfixed32ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestPackedExtensionsLite.extensionsBinary[98] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.packedSfixed32ExtensionLiteList,
    jspb.BinaryReader.prototype.readPackedSfixed32,
    jspb.BinaryWriter.prototype.writePackedSfixed32,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestPackedExtensionsLite.extensions[98] = proto.protobuf_unittest.packedSfixed32ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `packedSfixed64ExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.packedSfixed64ExtensionLiteList = new jspb.ExtensionFieldInfo(
    99,
    {packedSfixed64ExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestPackedExtensionsLite.extensionsBinary[99] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.packedSfixed64ExtensionLiteList,
    jspb.BinaryReader.prototype.readPackedSfixed64,
    jspb.BinaryWriter.prototype.writePackedSfixed64,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestPackedExtensionsLite.extensions[99] = proto.protobuf_unittest.packedSfixed64ExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `packedFloatExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.packedFloatExtensionLiteList = new jspb.ExtensionFieldInfo(
    100,
    {packedFloatExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestPackedExtensionsLite.extensionsBinary[100] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.packedFloatExtensionLiteList,
    jspb.BinaryReader.prototype.readPackedFloat,
    jspb.BinaryWriter.prototype.writePackedFloat,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestPackedExtensionsLite.extensions[100] = proto.protobuf_unittest.packedFloatExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `packedDoubleExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.protobuf_unittest.packedDoubleExtensionLiteList = new jspb.ExtensionFieldInfo(
    101,
    {packedDoubleExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestPackedExtensionsLite.extensionsBinary[101] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.packedDoubleExtensionLiteList,
    jspb.BinaryReader.prototype.readPackedDouble,
    jspb.BinaryWriter.prototype.writePackedDouble,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestPackedExtensionsLite.extensions[101] = proto.protobuf_unittest.packedDoubleExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `packedBoolExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<boolean>>}
 */
proto.protobuf_unittest.packedBoolExtensionLiteList = new jspb.ExtensionFieldInfo(
    102,
    {packedBoolExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestPackedExtensionsLite.extensionsBinary[102] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.packedBoolExtensionLiteList,
    jspb.BinaryReader.prototype.readPackedBool,
    jspb.BinaryWriter.prototype.writePackedBool,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestPackedExtensionsLite.extensions[102] = proto.protobuf_unittest.packedBoolExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `packedEnumExtensionLiteList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.protobuf_unittest.ForeignEnumLite>>}
 */
proto.protobuf_unittest.packedEnumExtensionLiteList = new jspb.ExtensionFieldInfo(
    103,
    {packedEnumExtensionLiteList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.protobuf_unittest.TestPackedExtensionsLite.extensionsBinary[103] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.packedEnumExtensionLiteList,
    jspb.BinaryReader.prototype.readPackedEnum,
    jspb.BinaryWriter.prototype.writePackedEnum,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestPackedExtensionsLite.extensions[103] = proto.protobuf_unittest.packedEnumExtensionLiteList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `testAllTypesLite`.
 * @type {!jspb.ExtensionFieldInfo<!proto.protobuf_unittest.TestAllTypesLite>}
 */
proto.protobuf_unittest.testAllTypesLite = new jspb.ExtensionFieldInfo(
    536860000,
    {testAllTypesLite: 0},
    proto.protobuf_unittest.TestAllTypesLite,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.protobuf_unittest.TestAllTypesLite.toObject),
    0);

proto.protobuf_unittest.TestHugeFieldNumbersLite.extensionsBinary[536860000] = new jspb.ExtensionFieldBinaryInfo(
    proto.protobuf_unittest.testAllTypesLite,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.protobuf_unittest.TestAllTypesLite.serializeBinaryToWriter,
    proto.protobuf_unittest.TestAllTypesLite.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.protobuf_unittest.TestHugeFieldNumbersLite.extensions[536860000] = proto.protobuf_unittest.testAllTypesLite;

goog.object.extend(exports, proto.protobuf_unittest);
