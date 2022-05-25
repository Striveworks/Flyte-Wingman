// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var flyteidl_datacatalog_datacatalog_pb = require('../../flyteidl/datacatalog/datacatalog_pb.js');
var flyteidl_core_literals_pb = require('../../flyteidl/core/literals_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_datacatalog_AddTagRequest(arg) {
  if (!(arg instanceof flyteidl_datacatalog_datacatalog_pb.AddTagRequest)) {
    throw new Error('Expected argument of type datacatalog.AddTagRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datacatalog_AddTagRequest(buffer_arg) {
  return flyteidl_datacatalog_datacatalog_pb.AddTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datacatalog_AddTagResponse(arg) {
  if (!(arg instanceof flyteidl_datacatalog_datacatalog_pb.AddTagResponse)) {
    throw new Error('Expected argument of type datacatalog.AddTagResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datacatalog_AddTagResponse(buffer_arg) {
  return flyteidl_datacatalog_datacatalog_pb.AddTagResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datacatalog_CreateArtifactRequest(arg) {
  if (!(arg instanceof flyteidl_datacatalog_datacatalog_pb.CreateArtifactRequest)) {
    throw new Error('Expected argument of type datacatalog.CreateArtifactRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datacatalog_CreateArtifactRequest(buffer_arg) {
  return flyteidl_datacatalog_datacatalog_pb.CreateArtifactRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datacatalog_CreateArtifactResponse(arg) {
  if (!(arg instanceof flyteidl_datacatalog_datacatalog_pb.CreateArtifactResponse)) {
    throw new Error('Expected argument of type datacatalog.CreateArtifactResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datacatalog_CreateArtifactResponse(buffer_arg) {
  return flyteidl_datacatalog_datacatalog_pb.CreateArtifactResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datacatalog_CreateDatasetRequest(arg) {
  if (!(arg instanceof flyteidl_datacatalog_datacatalog_pb.CreateDatasetRequest)) {
    throw new Error('Expected argument of type datacatalog.CreateDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datacatalog_CreateDatasetRequest(buffer_arg) {
  return flyteidl_datacatalog_datacatalog_pb.CreateDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datacatalog_CreateDatasetResponse(arg) {
  if (!(arg instanceof flyteidl_datacatalog_datacatalog_pb.CreateDatasetResponse)) {
    throw new Error('Expected argument of type datacatalog.CreateDatasetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datacatalog_CreateDatasetResponse(buffer_arg) {
  return flyteidl_datacatalog_datacatalog_pb.CreateDatasetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datacatalog_GetArtifactRequest(arg) {
  if (!(arg instanceof flyteidl_datacatalog_datacatalog_pb.GetArtifactRequest)) {
    throw new Error('Expected argument of type datacatalog.GetArtifactRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datacatalog_GetArtifactRequest(buffer_arg) {
  return flyteidl_datacatalog_datacatalog_pb.GetArtifactRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datacatalog_GetArtifactResponse(arg) {
  if (!(arg instanceof flyteidl_datacatalog_datacatalog_pb.GetArtifactResponse)) {
    throw new Error('Expected argument of type datacatalog.GetArtifactResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datacatalog_GetArtifactResponse(buffer_arg) {
  return flyteidl_datacatalog_datacatalog_pb.GetArtifactResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datacatalog_GetDatasetRequest(arg) {
  if (!(arg instanceof flyteidl_datacatalog_datacatalog_pb.GetDatasetRequest)) {
    throw new Error('Expected argument of type datacatalog.GetDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datacatalog_GetDatasetRequest(buffer_arg) {
  return flyteidl_datacatalog_datacatalog_pb.GetDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datacatalog_GetDatasetResponse(arg) {
  if (!(arg instanceof flyteidl_datacatalog_datacatalog_pb.GetDatasetResponse)) {
    throw new Error('Expected argument of type datacatalog.GetDatasetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datacatalog_GetDatasetResponse(buffer_arg) {
  return flyteidl_datacatalog_datacatalog_pb.GetDatasetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datacatalog_GetOrExtendReservationRequest(arg) {
  if (!(arg instanceof flyteidl_datacatalog_datacatalog_pb.GetOrExtendReservationRequest)) {
    throw new Error('Expected argument of type datacatalog.GetOrExtendReservationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datacatalog_GetOrExtendReservationRequest(buffer_arg) {
  return flyteidl_datacatalog_datacatalog_pb.GetOrExtendReservationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datacatalog_GetOrExtendReservationResponse(arg) {
  if (!(arg instanceof flyteidl_datacatalog_datacatalog_pb.GetOrExtendReservationResponse)) {
    throw new Error('Expected argument of type datacatalog.GetOrExtendReservationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datacatalog_GetOrExtendReservationResponse(buffer_arg) {
  return flyteidl_datacatalog_datacatalog_pb.GetOrExtendReservationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datacatalog_ListArtifactsRequest(arg) {
  if (!(arg instanceof flyteidl_datacatalog_datacatalog_pb.ListArtifactsRequest)) {
    throw new Error('Expected argument of type datacatalog.ListArtifactsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datacatalog_ListArtifactsRequest(buffer_arg) {
  return flyteidl_datacatalog_datacatalog_pb.ListArtifactsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datacatalog_ListArtifactsResponse(arg) {
  if (!(arg instanceof flyteidl_datacatalog_datacatalog_pb.ListArtifactsResponse)) {
    throw new Error('Expected argument of type datacatalog.ListArtifactsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datacatalog_ListArtifactsResponse(buffer_arg) {
  return flyteidl_datacatalog_datacatalog_pb.ListArtifactsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datacatalog_ListDatasetsRequest(arg) {
  if (!(arg instanceof flyteidl_datacatalog_datacatalog_pb.ListDatasetsRequest)) {
    throw new Error('Expected argument of type datacatalog.ListDatasetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datacatalog_ListDatasetsRequest(buffer_arg) {
  return flyteidl_datacatalog_datacatalog_pb.ListDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datacatalog_ListDatasetsResponse(arg) {
  if (!(arg instanceof flyteidl_datacatalog_datacatalog_pb.ListDatasetsResponse)) {
    throw new Error('Expected argument of type datacatalog.ListDatasetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datacatalog_ListDatasetsResponse(buffer_arg) {
  return flyteidl_datacatalog_datacatalog_pb.ListDatasetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datacatalog_ReleaseReservationRequest(arg) {
  if (!(arg instanceof flyteidl_datacatalog_datacatalog_pb.ReleaseReservationRequest)) {
    throw new Error('Expected argument of type datacatalog.ReleaseReservationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datacatalog_ReleaseReservationRequest(buffer_arg) {
  return flyteidl_datacatalog_datacatalog_pb.ReleaseReservationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datacatalog_ReleaseReservationResponse(arg) {
  if (!(arg instanceof flyteidl_datacatalog_datacatalog_pb.ReleaseReservationResponse)) {
    throw new Error('Expected argument of type datacatalog.ReleaseReservationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datacatalog_ReleaseReservationResponse(buffer_arg) {
  return flyteidl_datacatalog_datacatalog_pb.ReleaseReservationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// Data Catalog service definition
// Data Catalog is a service for indexing parameterized, strongly-typed data artifacts across revisions.
// Artifacts are associated with a Dataset, and can be tagged for retrieval.
var DataCatalogService = exports.DataCatalogService = {
  // Create a new Dataset. Datasets are unique based on the DatasetID. Datasets are logical groupings of artifacts.
// Each dataset can have one or more artifacts
createDataset: {
    path: '/datacatalog.DataCatalog/CreateDataset',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_datacatalog_datacatalog_pb.CreateDatasetRequest,
    responseType: flyteidl_datacatalog_datacatalog_pb.CreateDatasetResponse,
    requestSerialize: serialize_datacatalog_CreateDatasetRequest,
    requestDeserialize: deserialize_datacatalog_CreateDatasetRequest,
    responseSerialize: serialize_datacatalog_CreateDatasetResponse,
    responseDeserialize: deserialize_datacatalog_CreateDatasetResponse,
  },
  // Get a Dataset by the DatasetID. This returns the Dataset with the associated metadata.
getDataset: {
    path: '/datacatalog.DataCatalog/GetDataset',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_datacatalog_datacatalog_pb.GetDatasetRequest,
    responseType: flyteidl_datacatalog_datacatalog_pb.GetDatasetResponse,
    requestSerialize: serialize_datacatalog_GetDatasetRequest,
    requestDeserialize: deserialize_datacatalog_GetDatasetRequest,
    responseSerialize: serialize_datacatalog_GetDatasetResponse,
    responseDeserialize: deserialize_datacatalog_GetDatasetResponse,
  },
  // Create an artifact and the artifact data associated with it. An artifact can be a hive partition or arbitrary
// files or data values
createArtifact: {
    path: '/datacatalog.DataCatalog/CreateArtifact',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_datacatalog_datacatalog_pb.CreateArtifactRequest,
    responseType: flyteidl_datacatalog_datacatalog_pb.CreateArtifactResponse,
    requestSerialize: serialize_datacatalog_CreateArtifactRequest,
    requestDeserialize: deserialize_datacatalog_CreateArtifactRequest,
    responseSerialize: serialize_datacatalog_CreateArtifactResponse,
    responseDeserialize: deserialize_datacatalog_CreateArtifactResponse,
  },
  // Retrieve an artifact by an identifying handle. This returns an artifact along with the artifact data.
getArtifact: {
    path: '/datacatalog.DataCatalog/GetArtifact',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_datacatalog_datacatalog_pb.GetArtifactRequest,
    responseType: flyteidl_datacatalog_datacatalog_pb.GetArtifactResponse,
    requestSerialize: serialize_datacatalog_GetArtifactRequest,
    requestDeserialize: deserialize_datacatalog_GetArtifactRequest,
    responseSerialize: serialize_datacatalog_GetArtifactResponse,
    responseDeserialize: deserialize_datacatalog_GetArtifactResponse,
  },
  // Associate a tag with an artifact. Tags are unique within a Dataset.
addTag: {
    path: '/datacatalog.DataCatalog/AddTag',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_datacatalog_datacatalog_pb.AddTagRequest,
    responseType: flyteidl_datacatalog_datacatalog_pb.AddTagResponse,
    requestSerialize: serialize_datacatalog_AddTagRequest,
    requestDeserialize: deserialize_datacatalog_AddTagRequest,
    responseSerialize: serialize_datacatalog_AddTagResponse,
    responseDeserialize: deserialize_datacatalog_AddTagResponse,
  },
  // Return a paginated list of artifacts
listArtifacts: {
    path: '/datacatalog.DataCatalog/ListArtifacts',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_datacatalog_datacatalog_pb.ListArtifactsRequest,
    responseType: flyteidl_datacatalog_datacatalog_pb.ListArtifactsResponse,
    requestSerialize: serialize_datacatalog_ListArtifactsRequest,
    requestDeserialize: deserialize_datacatalog_ListArtifactsRequest,
    responseSerialize: serialize_datacatalog_ListArtifactsResponse,
    responseDeserialize: deserialize_datacatalog_ListArtifactsResponse,
  },
  // Return a paginated list of datasets
listDatasets: {
    path: '/datacatalog.DataCatalog/ListDatasets',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_datacatalog_datacatalog_pb.ListDatasetsRequest,
    responseType: flyteidl_datacatalog_datacatalog_pb.ListDatasetsResponse,
    requestSerialize: serialize_datacatalog_ListDatasetsRequest,
    requestDeserialize: deserialize_datacatalog_ListDatasetsRequest,
    responseSerialize: serialize_datacatalog_ListDatasetsResponse,
    responseDeserialize: deserialize_datacatalog_ListDatasetsResponse,
  },
  // Attempts to get or extend a reservation for the corresponding artifact. If one already exists
// (ie. another entity owns the reservation) then that reservation is retrieved.
// Once you acquire a reservation, you need to  periodically extend the reservation with an 
// identical call. If the reservation is not extended before the defined expiration, it may be
// acquired by another task.
// Note: We may have multiple concurrent tasks with the same signature and the same input that
// try to populate the same artifact at the same time. Thus with reservation, only one task can
// run at a time, until the reservation expires.
// Note: If task A does not extend the reservation in time and the reservation expires, another
// task B may take over the reservation, resulting in two tasks A and B running in parallel. So
// a third task C may get the Artifact from A or B, whichever writes last.
getOrExtendReservation: {
    path: '/datacatalog.DataCatalog/GetOrExtendReservation',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_datacatalog_datacatalog_pb.GetOrExtendReservationRequest,
    responseType: flyteidl_datacatalog_datacatalog_pb.GetOrExtendReservationResponse,
    requestSerialize: serialize_datacatalog_GetOrExtendReservationRequest,
    requestDeserialize: deserialize_datacatalog_GetOrExtendReservationRequest,
    responseSerialize: serialize_datacatalog_GetOrExtendReservationResponse,
    responseDeserialize: deserialize_datacatalog_GetOrExtendReservationResponse,
  },
  // Release the reservation when the task holding the spot fails so that the other tasks
// can grab the spot.
releaseReservation: {
    path: '/datacatalog.DataCatalog/ReleaseReservation',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_datacatalog_datacatalog_pb.ReleaseReservationRequest,
    responseType: flyteidl_datacatalog_datacatalog_pb.ReleaseReservationResponse,
    requestSerialize: serialize_datacatalog_ReleaseReservationRequest,
    requestDeserialize: deserialize_datacatalog_ReleaseReservationRequest,
    responseSerialize: serialize_datacatalog_ReleaseReservationResponse,
    responseDeserialize: deserialize_datacatalog_ReleaseReservationResponse,
  },
};

exports.DataCatalogClient = grpc.makeGenericClientConstructor(DataCatalogService);
