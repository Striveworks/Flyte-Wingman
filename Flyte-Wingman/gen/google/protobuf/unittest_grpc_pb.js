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
// Author: kenton@google.com (Kenton Varda)
//  Based on original Protocol Buffers design by
//  Sanjay Ghemawat, Jeff Dean, and others.
//
// A proto file we will use for unit testing.
//
// LINT: ALLOW_GROUPS, LEGACY_NAMES
//
'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_unittest_pb = require('google-protobuf/google/protobuf/unittest_pb.js');
var google_protobuf_unittest_import_pb = require('google-protobuf/google/protobuf/unittest_import_pb.js');

function serialize_protobuf_unittest_BarRequest(arg) {
  if (!(arg instanceof google_protobuf_unittest_pb.BarRequest)) {
    throw new Error('Expected argument of type protobuf_unittest.BarRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuf_unittest_BarRequest(buffer_arg) {
  return google_protobuf_unittest_pb.BarRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuf_unittest_BarResponse(arg) {
  if (!(arg instanceof google_protobuf_unittest_pb.BarResponse)) {
    throw new Error('Expected argument of type protobuf_unittest.BarResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuf_unittest_BarResponse(buffer_arg) {
  return google_protobuf_unittest_pb.BarResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuf_unittest_FooRequest(arg) {
  if (!(arg instanceof google_protobuf_unittest_pb.FooRequest)) {
    throw new Error('Expected argument of type protobuf_unittest.FooRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuf_unittest_FooRequest(buffer_arg) {
  return google_protobuf_unittest_pb.FooRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuf_unittest_FooResponse(arg) {
  if (!(arg instanceof google_protobuf_unittest_pb.FooResponse)) {
    throw new Error('Expected argument of type protobuf_unittest.FooResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuf_unittest_FooResponse(buffer_arg) {
  return google_protobuf_unittest_pb.FooResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TestServiceService = exports.TestServiceService = {
  foo: {
    path: '/protobuf_unittest.TestService/Foo',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_unittest_pb.FooRequest,
    responseType: google_protobuf_unittest_pb.FooResponse,
    requestSerialize: serialize_protobuf_unittest_FooRequest,
    requestDeserialize: deserialize_protobuf_unittest_FooRequest,
    responseSerialize: serialize_protobuf_unittest_FooResponse,
    responseDeserialize: deserialize_protobuf_unittest_FooResponse,
  },
  bar: {
    path: '/protobuf_unittest.TestService/Bar',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_unittest_pb.BarRequest,
    responseType: google_protobuf_unittest_pb.BarResponse,
    requestSerialize: serialize_protobuf_unittest_BarRequest,
    requestDeserialize: deserialize_protobuf_unittest_BarRequest,
    responseSerialize: serialize_protobuf_unittest_BarResponse,
    responseDeserialize: deserialize_protobuf_unittest_BarResponse,
  },
};

exports.TestServiceClient = grpc.makeGenericClientConstructor(TestServiceService);
