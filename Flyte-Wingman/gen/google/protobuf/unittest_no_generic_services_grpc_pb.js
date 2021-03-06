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
//
'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_unittest_no_generic_services_pb = require('google-protobuf/google/protobuf/unittest_no_generic_services_pb.js');

function serialize_protobuf_unittest_no_generic_services_test_TestMessage(arg) {
  if (!(arg instanceof google_protobuf_unittest_no_generic_services_pb.TestMessage)) {
    throw new Error('Expected argument of type protobuf_unittest.no_generic_services_test.TestMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuf_unittest_no_generic_services_test_TestMessage(buffer_arg) {
  return google_protobuf_unittest_no_generic_services_pb.TestMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var TestServiceService = exports.TestServiceService = {
  foo: {
    path: '/protobuf_unittest.no_generic_services_test.TestService/Foo',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_unittest_no_generic_services_pb.TestMessage,
    responseType: google_protobuf_unittest_no_generic_services_pb.TestMessage,
    requestSerialize: serialize_protobuf_unittest_no_generic_services_test_TestMessage,
    requestDeserialize: deserialize_protobuf_unittest_no_generic_services_test_TestMessage,
    responseSerialize: serialize_protobuf_unittest_no_generic_services_test_TestMessage,
    responseDeserialize: deserialize_protobuf_unittest_no_generic_services_test_TestMessage,
  },
};

exports.TestServiceClient = grpc.makeGenericClientConstructor(TestServiceService);
