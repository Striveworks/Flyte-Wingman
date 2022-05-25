// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var flyteidl_service_auth_pb = require('../../flyteidl/service/auth_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var protoc$gen$swagger_options_annotations_pb = require('../../protoc-gen-swagger/options/annotations_pb.js');

function serialize_flyteidl_service_OAuth2MetadataRequest(arg) {
  if (!(arg instanceof flyteidl_service_auth_pb.OAuth2MetadataRequest)) {
    throw new Error('Expected argument of type flyteidl.service.OAuth2MetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_service_OAuth2MetadataRequest(buffer_arg) {
  return flyteidl_service_auth_pb.OAuth2MetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_service_OAuth2MetadataResponse(arg) {
  if (!(arg instanceof flyteidl_service_auth_pb.OAuth2MetadataResponse)) {
    throw new Error('Expected argument of type flyteidl.service.OAuth2MetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_service_OAuth2MetadataResponse(buffer_arg) {
  return flyteidl_service_auth_pb.OAuth2MetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_service_PublicClientAuthConfigRequest(arg) {
  if (!(arg instanceof flyteidl_service_auth_pb.PublicClientAuthConfigRequest)) {
    throw new Error('Expected argument of type flyteidl.service.PublicClientAuthConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_service_PublicClientAuthConfigRequest(buffer_arg) {
  return flyteidl_service_auth_pb.PublicClientAuthConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_service_PublicClientAuthConfigResponse(arg) {
  if (!(arg instanceof flyteidl_service_auth_pb.PublicClientAuthConfigResponse)) {
    throw new Error('Expected argument of type flyteidl.service.PublicClientAuthConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_service_PublicClientAuthConfigResponse(buffer_arg) {
  return flyteidl_service_auth_pb.PublicClientAuthConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The following defines an RPC service that is also served over HTTP via grpc-gateway.
// Standard response codes for both are defined here: https://github.com/grpc-ecosystem/grpc-gateway/blob/master/runtime/errors.go
// RPCs defined in this service must be anonymously accessible.
var AuthMetadataServiceService = exports.AuthMetadataServiceService = {
  // Anonymously accessible. Retrieves local or external oauth authorization server metadata.
getOAuth2Metadata: {
    path: '/flyteidl.service.AuthMetadataService/GetOAuth2Metadata',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_service_auth_pb.OAuth2MetadataRequest,
    responseType: flyteidl_service_auth_pb.OAuth2MetadataResponse,
    requestSerialize: serialize_flyteidl_service_OAuth2MetadataRequest,
    requestDeserialize: deserialize_flyteidl_service_OAuth2MetadataRequest,
    responseSerialize: serialize_flyteidl_service_OAuth2MetadataResponse,
    responseDeserialize: deserialize_flyteidl_service_OAuth2MetadataResponse,
  },
  // Anonymously accessible. Retrieves the client information clients should use when initiating OAuth2 authorization
// requests.
getPublicClientConfig: {
    path: '/flyteidl.service.AuthMetadataService/GetPublicClientConfig',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_service_auth_pb.PublicClientAuthConfigRequest,
    responseType: flyteidl_service_auth_pb.PublicClientAuthConfigResponse,
    requestSerialize: serialize_flyteidl_service_PublicClientAuthConfigRequest,
    requestDeserialize: deserialize_flyteidl_service_PublicClientAuthConfigRequest,
    responseSerialize: serialize_flyteidl_service_PublicClientAuthConfigResponse,
    responseDeserialize: deserialize_flyteidl_service_PublicClientAuthConfigResponse,
  },
};

exports.AuthMetadataServiceClient = grpc.makeGenericClientConstructor(AuthMetadataServiceService);
