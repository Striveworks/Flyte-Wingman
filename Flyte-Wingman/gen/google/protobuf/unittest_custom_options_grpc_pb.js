// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// Author: benjy@google.com (Benjy Weinberger)
//  Based on original Protocol Buffers design by
//  Sanjay Ghemawat, Jeff Dean, and others.
//
// A proto file used to test the "custom options" feature of google.protobuf.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_unittest_custom_options_pb = require('google-protobuf/google/protobuf/unittest_custom_options_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');

function serialize_protobuf_unittest_AggregateMessage(arg) {
  if (!(arg instanceof google_protobuf_unittest_custom_options_pb.AggregateMessage)) {
    throw new Error('Expected argument of type protobuf_unittest.AggregateMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuf_unittest_AggregateMessage(buffer_arg) {
  return google_protobuf_unittest_custom_options_pb.AggregateMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuf_unittest_CustomOptionFooRequest(arg) {
  if (!(arg instanceof google_protobuf_unittest_custom_options_pb.CustomOptionFooRequest)) {
    throw new Error('Expected argument of type protobuf_unittest.CustomOptionFooRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuf_unittest_CustomOptionFooRequest(buffer_arg) {
  return google_protobuf_unittest_custom_options_pb.CustomOptionFooRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuf_unittest_CustomOptionFooResponse(arg) {
  if (!(arg instanceof google_protobuf_unittest_custom_options_pb.CustomOptionFooResponse)) {
    throw new Error('Expected argument of type protobuf_unittest.CustomOptionFooResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuf_unittest_CustomOptionFooResponse(buffer_arg) {
  return google_protobuf_unittest_custom_options_pb.CustomOptionFooResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TestServiceWithCustomOptionsService = exports.TestServiceWithCustomOptionsService = {
  foo: {
    path: '/protobuf_unittest.TestServiceWithCustomOptions/Foo',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_unittest_custom_options_pb.CustomOptionFooRequest,
    responseType: google_protobuf_unittest_custom_options_pb.CustomOptionFooResponse,
    requestSerialize: serialize_protobuf_unittest_CustomOptionFooRequest,
    requestDeserialize: deserialize_protobuf_unittest_CustomOptionFooRequest,
    responseSerialize: serialize_protobuf_unittest_CustomOptionFooResponse,
    responseDeserialize: deserialize_protobuf_unittest_CustomOptionFooResponse,
  },
};

exports.TestServiceWithCustomOptionsClient = grpc.makeGenericClientConstructor(TestServiceWithCustomOptionsService);
var AggregateServiceService = exports.AggregateServiceService = {
  method: {
    path: '/protobuf_unittest.AggregateService/Method',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_unittest_custom_options_pb.AggregateMessage,
    responseType: google_protobuf_unittest_custom_options_pb.AggregateMessage,
    requestSerialize: serialize_protobuf_unittest_AggregateMessage,
    requestDeserialize: deserialize_protobuf_unittest_AggregateMessage,
    responseSerialize: serialize_protobuf_unittest_AggregateMessage,
    responseDeserialize: deserialize_protobuf_unittest_AggregateMessage,
  },
};

exports.AggregateServiceClient = grpc.makeGenericClientConstructor(AggregateServiceService);
