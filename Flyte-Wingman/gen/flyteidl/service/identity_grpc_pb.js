// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var flyteidl_service_identity_pb = require('../../flyteidl/service/identity_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var protoc$gen$swagger_options_annotations_pb = require('../../protoc-gen-swagger/options/annotations_pb.js');

function serialize_flyteidl_service_UserInfoRequest(arg) {
  if (!(arg instanceof flyteidl_service_identity_pb.UserInfoRequest)) {
    throw new Error('Expected argument of type flyteidl.service.UserInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_service_UserInfoRequest(buffer_arg) {
  return flyteidl_service_identity_pb.UserInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_service_UserInfoResponse(arg) {
  if (!(arg instanceof flyteidl_service_identity_pb.UserInfoResponse)) {
    throw new Error('Expected argument of type flyteidl.service.UserInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_service_UserInfoResponse(buffer_arg) {
  return flyteidl_service_identity_pb.UserInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// IdentityService defines an RPC Service that interacts with user/app identities.
var IdentityServiceService = exports.IdentityServiceService = {
  // Retrieves user information about the currently logged in user.
userInfo: {
    path: '/flyteidl.service.IdentityService/UserInfo',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_service_identity_pb.UserInfoRequest,
    responseType: flyteidl_service_identity_pb.UserInfoResponse,
    requestSerialize: serialize_flyteidl_service_UserInfoRequest,
    requestDeserialize: deserialize_flyteidl_service_UserInfoRequest,
    responseSerialize: serialize_flyteidl_service_UserInfoResponse,
    responseDeserialize: deserialize_flyteidl_service_UserInfoResponse,
  },
};

exports.IdentityServiceClient = grpc.makeGenericClientConstructor(IdentityServiceService);
