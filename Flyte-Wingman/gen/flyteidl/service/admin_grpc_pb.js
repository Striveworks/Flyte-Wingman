// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var flyteidl_admin_project_pb = require('../../flyteidl/admin/project_pb.js');
var flyteidl_admin_project_domain_attributes_pb = require('../../flyteidl/admin/project_domain_attributes_pb.js');
var flyteidl_admin_task_pb = require('../../flyteidl/admin/task_pb.js');
var flyteidl_admin_workflow_pb = require('../../flyteidl/admin/workflow_pb.js');
var flyteidl_admin_workflow_attributes_pb = require('../../flyteidl/admin/workflow_attributes_pb.js');
var flyteidl_admin_launch_plan_pb = require('../../flyteidl/admin/launch_plan_pb.js');
var flyteidl_admin_event_pb = require('../../flyteidl/admin/event_pb.js');
var flyteidl_admin_execution_pb = require('../../flyteidl/admin/execution_pb.js');
var flyteidl_admin_matchable_resource_pb = require('../../flyteidl/admin/matchable_resource_pb.js');
var flyteidl_admin_node_execution_pb = require('../../flyteidl/admin/node_execution_pb.js');
var flyteidl_admin_task_execution_pb = require('../../flyteidl/admin/task_execution_pb.js');
var flyteidl_admin_version_pb = require('../../flyteidl/admin/version_pb.js');
var flyteidl_admin_common_pb = require('../../flyteidl/admin/common_pb.js');
var protoc$gen$swagger_options_annotations_pb = require('../../protoc-gen-swagger/options/annotations_pb.js');

function serialize_flyteidl_admin_ActiveLaunchPlanListRequest(arg) {
  if (!(arg instanceof flyteidl_admin_launch_plan_pb.ActiveLaunchPlanListRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.ActiveLaunchPlanListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ActiveLaunchPlanListRequest(buffer_arg) {
  return flyteidl_admin_launch_plan_pb.ActiveLaunchPlanListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ActiveLaunchPlanRequest(arg) {
  if (!(arg instanceof flyteidl_admin_launch_plan_pb.ActiveLaunchPlanRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.ActiveLaunchPlanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ActiveLaunchPlanRequest(buffer_arg) {
  return flyteidl_admin_launch_plan_pb.ActiveLaunchPlanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_Execution(arg) {
  if (!(arg instanceof flyteidl_admin_execution_pb.Execution)) {
    throw new Error('Expected argument of type flyteidl.admin.Execution');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_Execution(buffer_arg) {
  return flyteidl_admin_execution_pb.Execution.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ExecutionCreateRequest(arg) {
  if (!(arg instanceof flyteidl_admin_execution_pb.ExecutionCreateRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.ExecutionCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ExecutionCreateRequest(buffer_arg) {
  return flyteidl_admin_execution_pb.ExecutionCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ExecutionCreateResponse(arg) {
  if (!(arg instanceof flyteidl_admin_execution_pb.ExecutionCreateResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.ExecutionCreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ExecutionCreateResponse(buffer_arg) {
  return flyteidl_admin_execution_pb.ExecutionCreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ExecutionList(arg) {
  if (!(arg instanceof flyteidl_admin_execution_pb.ExecutionList)) {
    throw new Error('Expected argument of type flyteidl.admin.ExecutionList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ExecutionList(buffer_arg) {
  return flyteidl_admin_execution_pb.ExecutionList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ExecutionRecoverRequest(arg) {
  if (!(arg instanceof flyteidl_admin_execution_pb.ExecutionRecoverRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.ExecutionRecoverRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ExecutionRecoverRequest(buffer_arg) {
  return flyteidl_admin_execution_pb.ExecutionRecoverRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ExecutionRelaunchRequest(arg) {
  if (!(arg instanceof flyteidl_admin_execution_pb.ExecutionRelaunchRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.ExecutionRelaunchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ExecutionRelaunchRequest(buffer_arg) {
  return flyteidl_admin_execution_pb.ExecutionRelaunchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ExecutionTerminateRequest(arg) {
  if (!(arg instanceof flyteidl_admin_execution_pb.ExecutionTerminateRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.ExecutionTerminateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ExecutionTerminateRequest(buffer_arg) {
  return flyteidl_admin_execution_pb.ExecutionTerminateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ExecutionTerminateResponse(arg) {
  if (!(arg instanceof flyteidl_admin_execution_pb.ExecutionTerminateResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.ExecutionTerminateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ExecutionTerminateResponse(buffer_arg) {
  return flyteidl_admin_execution_pb.ExecutionTerminateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ExecutionUpdateRequest(arg) {
  if (!(arg instanceof flyteidl_admin_execution_pb.ExecutionUpdateRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.ExecutionUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ExecutionUpdateRequest(buffer_arg) {
  return flyteidl_admin_execution_pb.ExecutionUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ExecutionUpdateResponse(arg) {
  if (!(arg instanceof flyteidl_admin_execution_pb.ExecutionUpdateResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.ExecutionUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ExecutionUpdateResponse(buffer_arg) {
  return flyteidl_admin_execution_pb.ExecutionUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_GetVersionRequest(arg) {
  if (!(arg instanceof flyteidl_admin_version_pb.GetVersionRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.GetVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_GetVersionRequest(buffer_arg) {
  return flyteidl_admin_version_pb.GetVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_GetVersionResponse(arg) {
  if (!(arg instanceof flyteidl_admin_version_pb.GetVersionResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.GetVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_GetVersionResponse(buffer_arg) {
  return flyteidl_admin_version_pb.GetVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_LaunchPlan(arg) {
  if (!(arg instanceof flyteidl_admin_launch_plan_pb.LaunchPlan)) {
    throw new Error('Expected argument of type flyteidl.admin.LaunchPlan');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_LaunchPlan(buffer_arg) {
  return flyteidl_admin_launch_plan_pb.LaunchPlan.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_LaunchPlanCreateRequest(arg) {
  if (!(arg instanceof flyteidl_admin_launch_plan_pb.LaunchPlanCreateRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.LaunchPlanCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_LaunchPlanCreateRequest(buffer_arg) {
  return flyteidl_admin_launch_plan_pb.LaunchPlanCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_LaunchPlanCreateResponse(arg) {
  if (!(arg instanceof flyteidl_admin_launch_plan_pb.LaunchPlanCreateResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.LaunchPlanCreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_LaunchPlanCreateResponse(buffer_arg) {
  return flyteidl_admin_launch_plan_pb.LaunchPlanCreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_LaunchPlanList(arg) {
  if (!(arg instanceof flyteidl_admin_launch_plan_pb.LaunchPlanList)) {
    throw new Error('Expected argument of type flyteidl.admin.LaunchPlanList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_LaunchPlanList(buffer_arg) {
  return flyteidl_admin_launch_plan_pb.LaunchPlanList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_LaunchPlanUpdateRequest(arg) {
  if (!(arg instanceof flyteidl_admin_launch_plan_pb.LaunchPlanUpdateRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.LaunchPlanUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_LaunchPlanUpdateRequest(buffer_arg) {
  return flyteidl_admin_launch_plan_pb.LaunchPlanUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_LaunchPlanUpdateResponse(arg) {
  if (!(arg instanceof flyteidl_admin_launch_plan_pb.LaunchPlanUpdateResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.LaunchPlanUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_LaunchPlanUpdateResponse(buffer_arg) {
  return flyteidl_admin_launch_plan_pb.LaunchPlanUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ListMatchableAttributesRequest(arg) {
  if (!(arg instanceof flyteidl_admin_matchable_resource_pb.ListMatchableAttributesRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.ListMatchableAttributesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ListMatchableAttributesRequest(buffer_arg) {
  return flyteidl_admin_matchable_resource_pb.ListMatchableAttributesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ListMatchableAttributesResponse(arg) {
  if (!(arg instanceof flyteidl_admin_matchable_resource_pb.ListMatchableAttributesResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.ListMatchableAttributesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ListMatchableAttributesResponse(buffer_arg) {
  return flyteidl_admin_matchable_resource_pb.ListMatchableAttributesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_NamedEntity(arg) {
  if (!(arg instanceof flyteidl_admin_common_pb.NamedEntity)) {
    throw new Error('Expected argument of type flyteidl.admin.NamedEntity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_NamedEntity(buffer_arg) {
  return flyteidl_admin_common_pb.NamedEntity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_NamedEntityGetRequest(arg) {
  if (!(arg instanceof flyteidl_admin_common_pb.NamedEntityGetRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.NamedEntityGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_NamedEntityGetRequest(buffer_arg) {
  return flyteidl_admin_common_pb.NamedEntityGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_NamedEntityIdentifierList(arg) {
  if (!(arg instanceof flyteidl_admin_common_pb.NamedEntityIdentifierList)) {
    throw new Error('Expected argument of type flyteidl.admin.NamedEntityIdentifierList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_NamedEntityIdentifierList(buffer_arg) {
  return flyteidl_admin_common_pb.NamedEntityIdentifierList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_NamedEntityIdentifierListRequest(arg) {
  if (!(arg instanceof flyteidl_admin_common_pb.NamedEntityIdentifierListRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.NamedEntityIdentifierListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_NamedEntityIdentifierListRequest(buffer_arg) {
  return flyteidl_admin_common_pb.NamedEntityIdentifierListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_NamedEntityList(arg) {
  if (!(arg instanceof flyteidl_admin_common_pb.NamedEntityList)) {
    throw new Error('Expected argument of type flyteidl.admin.NamedEntityList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_NamedEntityList(buffer_arg) {
  return flyteidl_admin_common_pb.NamedEntityList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_NamedEntityListRequest(arg) {
  if (!(arg instanceof flyteidl_admin_common_pb.NamedEntityListRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.NamedEntityListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_NamedEntityListRequest(buffer_arg) {
  return flyteidl_admin_common_pb.NamedEntityListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_NamedEntityUpdateRequest(arg) {
  if (!(arg instanceof flyteidl_admin_common_pb.NamedEntityUpdateRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.NamedEntityUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_NamedEntityUpdateRequest(buffer_arg) {
  return flyteidl_admin_common_pb.NamedEntityUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_NamedEntityUpdateResponse(arg) {
  if (!(arg instanceof flyteidl_admin_common_pb.NamedEntityUpdateResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.NamedEntityUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_NamedEntityUpdateResponse(buffer_arg) {
  return flyteidl_admin_common_pb.NamedEntityUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_NodeExecution(arg) {
  if (!(arg instanceof flyteidl_admin_node_execution_pb.NodeExecution)) {
    throw new Error('Expected argument of type flyteidl.admin.NodeExecution');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_NodeExecution(buffer_arg) {
  return flyteidl_admin_node_execution_pb.NodeExecution.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_NodeExecutionEventRequest(arg) {
  if (!(arg instanceof flyteidl_admin_event_pb.NodeExecutionEventRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.NodeExecutionEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_NodeExecutionEventRequest(buffer_arg) {
  return flyteidl_admin_event_pb.NodeExecutionEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_NodeExecutionEventResponse(arg) {
  if (!(arg instanceof flyteidl_admin_event_pb.NodeExecutionEventResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.NodeExecutionEventResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_NodeExecutionEventResponse(buffer_arg) {
  return flyteidl_admin_event_pb.NodeExecutionEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_NodeExecutionForTaskListRequest(arg) {
  if (!(arg instanceof flyteidl_admin_node_execution_pb.NodeExecutionForTaskListRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.NodeExecutionForTaskListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_NodeExecutionForTaskListRequest(buffer_arg) {
  return flyteidl_admin_node_execution_pb.NodeExecutionForTaskListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_NodeExecutionGetDataRequest(arg) {
  if (!(arg instanceof flyteidl_admin_node_execution_pb.NodeExecutionGetDataRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.NodeExecutionGetDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_NodeExecutionGetDataRequest(buffer_arg) {
  return flyteidl_admin_node_execution_pb.NodeExecutionGetDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_NodeExecutionGetDataResponse(arg) {
  if (!(arg instanceof flyteidl_admin_node_execution_pb.NodeExecutionGetDataResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.NodeExecutionGetDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_NodeExecutionGetDataResponse(buffer_arg) {
  return flyteidl_admin_node_execution_pb.NodeExecutionGetDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_NodeExecutionGetRequest(arg) {
  if (!(arg instanceof flyteidl_admin_node_execution_pb.NodeExecutionGetRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.NodeExecutionGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_NodeExecutionGetRequest(buffer_arg) {
  return flyteidl_admin_node_execution_pb.NodeExecutionGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_NodeExecutionList(arg) {
  if (!(arg instanceof flyteidl_admin_node_execution_pb.NodeExecutionList)) {
    throw new Error('Expected argument of type flyteidl.admin.NodeExecutionList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_NodeExecutionList(buffer_arg) {
  return flyteidl_admin_node_execution_pb.NodeExecutionList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_NodeExecutionListRequest(arg) {
  if (!(arg instanceof flyteidl_admin_node_execution_pb.NodeExecutionListRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.NodeExecutionListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_NodeExecutionListRequest(buffer_arg) {
  return flyteidl_admin_node_execution_pb.NodeExecutionListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ObjectGetRequest(arg) {
  if (!(arg instanceof flyteidl_admin_common_pb.ObjectGetRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.ObjectGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ObjectGetRequest(buffer_arg) {
  return flyteidl_admin_common_pb.ObjectGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_Project(arg) {
  if (!(arg instanceof flyteidl_admin_project_pb.Project)) {
    throw new Error('Expected argument of type flyteidl.admin.Project');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_Project(buffer_arg) {
  return flyteidl_admin_project_pb.Project.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ProjectDomainAttributesDeleteRequest(arg) {
  if (!(arg instanceof flyteidl_admin_project_domain_attributes_pb.ProjectDomainAttributesDeleteRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.ProjectDomainAttributesDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ProjectDomainAttributesDeleteRequest(buffer_arg) {
  return flyteidl_admin_project_domain_attributes_pb.ProjectDomainAttributesDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ProjectDomainAttributesDeleteResponse(arg) {
  if (!(arg instanceof flyteidl_admin_project_domain_attributes_pb.ProjectDomainAttributesDeleteResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.ProjectDomainAttributesDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ProjectDomainAttributesDeleteResponse(buffer_arg) {
  return flyteidl_admin_project_domain_attributes_pb.ProjectDomainAttributesDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ProjectDomainAttributesGetRequest(arg) {
  if (!(arg instanceof flyteidl_admin_project_domain_attributes_pb.ProjectDomainAttributesGetRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.ProjectDomainAttributesGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ProjectDomainAttributesGetRequest(buffer_arg) {
  return flyteidl_admin_project_domain_attributes_pb.ProjectDomainAttributesGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ProjectDomainAttributesGetResponse(arg) {
  if (!(arg instanceof flyteidl_admin_project_domain_attributes_pb.ProjectDomainAttributesGetResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.ProjectDomainAttributesGetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ProjectDomainAttributesGetResponse(buffer_arg) {
  return flyteidl_admin_project_domain_attributes_pb.ProjectDomainAttributesGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ProjectDomainAttributesUpdateRequest(arg) {
  if (!(arg instanceof flyteidl_admin_project_domain_attributes_pb.ProjectDomainAttributesUpdateRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.ProjectDomainAttributesUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ProjectDomainAttributesUpdateRequest(buffer_arg) {
  return flyteidl_admin_project_domain_attributes_pb.ProjectDomainAttributesUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ProjectDomainAttributesUpdateResponse(arg) {
  if (!(arg instanceof flyteidl_admin_project_domain_attributes_pb.ProjectDomainAttributesUpdateResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.ProjectDomainAttributesUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ProjectDomainAttributesUpdateResponse(buffer_arg) {
  return flyteidl_admin_project_domain_attributes_pb.ProjectDomainAttributesUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ProjectListRequest(arg) {
  if (!(arg instanceof flyteidl_admin_project_pb.ProjectListRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.ProjectListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ProjectListRequest(buffer_arg) {
  return flyteidl_admin_project_pb.ProjectListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ProjectRegisterRequest(arg) {
  if (!(arg instanceof flyteidl_admin_project_pb.ProjectRegisterRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.ProjectRegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ProjectRegisterRequest(buffer_arg) {
  return flyteidl_admin_project_pb.ProjectRegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ProjectRegisterResponse(arg) {
  if (!(arg instanceof flyteidl_admin_project_pb.ProjectRegisterResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.ProjectRegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ProjectRegisterResponse(buffer_arg) {
  return flyteidl_admin_project_pb.ProjectRegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ProjectUpdateResponse(arg) {
  if (!(arg instanceof flyteidl_admin_project_pb.ProjectUpdateResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.ProjectUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ProjectUpdateResponse(buffer_arg) {
  return flyteidl_admin_project_pb.ProjectUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_Projects(arg) {
  if (!(arg instanceof flyteidl_admin_project_pb.Projects)) {
    throw new Error('Expected argument of type flyteidl.admin.Projects');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_Projects(buffer_arg) {
  return flyteidl_admin_project_pb.Projects.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_ResourceListRequest(arg) {
  if (!(arg instanceof flyteidl_admin_common_pb.ResourceListRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.ResourceListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_ResourceListRequest(buffer_arg) {
  return flyteidl_admin_common_pb.ResourceListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_Task(arg) {
  if (!(arg instanceof flyteidl_admin_task_pb.Task)) {
    throw new Error('Expected argument of type flyteidl.admin.Task');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_Task(buffer_arg) {
  return flyteidl_admin_task_pb.Task.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_TaskCreateRequest(arg) {
  if (!(arg instanceof flyteidl_admin_task_pb.TaskCreateRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.TaskCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_TaskCreateRequest(buffer_arg) {
  return flyteidl_admin_task_pb.TaskCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_TaskCreateResponse(arg) {
  if (!(arg instanceof flyteidl_admin_task_pb.TaskCreateResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.TaskCreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_TaskCreateResponse(buffer_arg) {
  return flyteidl_admin_task_pb.TaskCreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_TaskExecution(arg) {
  if (!(arg instanceof flyteidl_admin_task_execution_pb.TaskExecution)) {
    throw new Error('Expected argument of type flyteidl.admin.TaskExecution');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_TaskExecution(buffer_arg) {
  return flyteidl_admin_task_execution_pb.TaskExecution.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_TaskExecutionEventRequest(arg) {
  if (!(arg instanceof flyteidl_admin_event_pb.TaskExecutionEventRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.TaskExecutionEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_TaskExecutionEventRequest(buffer_arg) {
  return flyteidl_admin_event_pb.TaskExecutionEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_TaskExecutionEventResponse(arg) {
  if (!(arg instanceof flyteidl_admin_event_pb.TaskExecutionEventResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.TaskExecutionEventResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_TaskExecutionEventResponse(buffer_arg) {
  return flyteidl_admin_event_pb.TaskExecutionEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_TaskExecutionGetDataRequest(arg) {
  if (!(arg instanceof flyteidl_admin_task_execution_pb.TaskExecutionGetDataRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.TaskExecutionGetDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_TaskExecutionGetDataRequest(buffer_arg) {
  return flyteidl_admin_task_execution_pb.TaskExecutionGetDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_TaskExecutionGetDataResponse(arg) {
  if (!(arg instanceof flyteidl_admin_task_execution_pb.TaskExecutionGetDataResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.TaskExecutionGetDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_TaskExecutionGetDataResponse(buffer_arg) {
  return flyteidl_admin_task_execution_pb.TaskExecutionGetDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_TaskExecutionGetRequest(arg) {
  if (!(arg instanceof flyteidl_admin_task_execution_pb.TaskExecutionGetRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.TaskExecutionGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_TaskExecutionGetRequest(buffer_arg) {
  return flyteidl_admin_task_execution_pb.TaskExecutionGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_TaskExecutionList(arg) {
  if (!(arg instanceof flyteidl_admin_task_execution_pb.TaskExecutionList)) {
    throw new Error('Expected argument of type flyteidl.admin.TaskExecutionList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_TaskExecutionList(buffer_arg) {
  return flyteidl_admin_task_execution_pb.TaskExecutionList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_TaskExecutionListRequest(arg) {
  if (!(arg instanceof flyteidl_admin_task_execution_pb.TaskExecutionListRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.TaskExecutionListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_TaskExecutionListRequest(buffer_arg) {
  return flyteidl_admin_task_execution_pb.TaskExecutionListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_TaskList(arg) {
  if (!(arg instanceof flyteidl_admin_task_pb.TaskList)) {
    throw new Error('Expected argument of type flyteidl.admin.TaskList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_TaskList(buffer_arg) {
  return flyteidl_admin_task_pb.TaskList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_Workflow(arg) {
  if (!(arg instanceof flyteidl_admin_workflow_pb.Workflow)) {
    throw new Error('Expected argument of type flyteidl.admin.Workflow');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_Workflow(buffer_arg) {
  return flyteidl_admin_workflow_pb.Workflow.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_WorkflowAttributesDeleteRequest(arg) {
  if (!(arg instanceof flyteidl_admin_workflow_attributes_pb.WorkflowAttributesDeleteRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.WorkflowAttributesDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_WorkflowAttributesDeleteRequest(buffer_arg) {
  return flyteidl_admin_workflow_attributes_pb.WorkflowAttributesDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_WorkflowAttributesDeleteResponse(arg) {
  if (!(arg instanceof flyteidl_admin_workflow_attributes_pb.WorkflowAttributesDeleteResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.WorkflowAttributesDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_WorkflowAttributesDeleteResponse(buffer_arg) {
  return flyteidl_admin_workflow_attributes_pb.WorkflowAttributesDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_WorkflowAttributesGetRequest(arg) {
  if (!(arg instanceof flyteidl_admin_workflow_attributes_pb.WorkflowAttributesGetRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.WorkflowAttributesGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_WorkflowAttributesGetRequest(buffer_arg) {
  return flyteidl_admin_workflow_attributes_pb.WorkflowAttributesGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_WorkflowAttributesGetResponse(arg) {
  if (!(arg instanceof flyteidl_admin_workflow_attributes_pb.WorkflowAttributesGetResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.WorkflowAttributesGetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_WorkflowAttributesGetResponse(buffer_arg) {
  return flyteidl_admin_workflow_attributes_pb.WorkflowAttributesGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_WorkflowAttributesUpdateRequest(arg) {
  if (!(arg instanceof flyteidl_admin_workflow_attributes_pb.WorkflowAttributesUpdateRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.WorkflowAttributesUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_WorkflowAttributesUpdateRequest(buffer_arg) {
  return flyteidl_admin_workflow_attributes_pb.WorkflowAttributesUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_WorkflowAttributesUpdateResponse(arg) {
  if (!(arg instanceof flyteidl_admin_workflow_attributes_pb.WorkflowAttributesUpdateResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.WorkflowAttributesUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_WorkflowAttributesUpdateResponse(buffer_arg) {
  return flyteidl_admin_workflow_attributes_pb.WorkflowAttributesUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_WorkflowCreateRequest(arg) {
  if (!(arg instanceof flyteidl_admin_workflow_pb.WorkflowCreateRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.WorkflowCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_WorkflowCreateRequest(buffer_arg) {
  return flyteidl_admin_workflow_pb.WorkflowCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_WorkflowCreateResponse(arg) {
  if (!(arg instanceof flyteidl_admin_workflow_pb.WorkflowCreateResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.WorkflowCreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_WorkflowCreateResponse(buffer_arg) {
  return flyteidl_admin_workflow_pb.WorkflowCreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_WorkflowExecutionEventRequest(arg) {
  if (!(arg instanceof flyteidl_admin_event_pb.WorkflowExecutionEventRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.WorkflowExecutionEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_WorkflowExecutionEventRequest(buffer_arg) {
  return flyteidl_admin_event_pb.WorkflowExecutionEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_WorkflowExecutionEventResponse(arg) {
  if (!(arg instanceof flyteidl_admin_event_pb.WorkflowExecutionEventResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.WorkflowExecutionEventResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_WorkflowExecutionEventResponse(buffer_arg) {
  return flyteidl_admin_event_pb.WorkflowExecutionEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_WorkflowExecutionGetDataRequest(arg) {
  if (!(arg instanceof flyteidl_admin_execution_pb.WorkflowExecutionGetDataRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.WorkflowExecutionGetDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_WorkflowExecutionGetDataRequest(buffer_arg) {
  return flyteidl_admin_execution_pb.WorkflowExecutionGetDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_WorkflowExecutionGetDataResponse(arg) {
  if (!(arg instanceof flyteidl_admin_execution_pb.WorkflowExecutionGetDataResponse)) {
    throw new Error('Expected argument of type flyteidl.admin.WorkflowExecutionGetDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_WorkflowExecutionGetDataResponse(buffer_arg) {
  return flyteidl_admin_execution_pb.WorkflowExecutionGetDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_WorkflowExecutionGetRequest(arg) {
  if (!(arg instanceof flyteidl_admin_execution_pb.WorkflowExecutionGetRequest)) {
    throw new Error('Expected argument of type flyteidl.admin.WorkflowExecutionGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_WorkflowExecutionGetRequest(buffer_arg) {
  return flyteidl_admin_execution_pb.WorkflowExecutionGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flyteidl_admin_WorkflowList(arg) {
  if (!(arg instanceof flyteidl_admin_workflow_pb.WorkflowList)) {
    throw new Error('Expected argument of type flyteidl.admin.WorkflowList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flyteidl_admin_WorkflowList(buffer_arg) {
  return flyteidl_admin_workflow_pb.WorkflowList.deserializeBinary(new Uint8Array(buffer_arg));
}


// The following defines an RPC service that is also served over HTTP via grpc-gateway.
// Standard response codes for both are defined here: https://github.com/grpc-ecosystem/grpc-gateway/blob/master/runtime/errors.go
var AdminServiceService = exports.AdminServiceService = {
  // Create and upload a :ref:`ref_flyteidl.admin.Task` definition
createTask: {
    path: '/flyteidl.service.AdminService/CreateTask',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_task_pb.TaskCreateRequest,
    responseType: flyteidl_admin_task_pb.TaskCreateResponse,
    requestSerialize: serialize_flyteidl_admin_TaskCreateRequest,
    requestDeserialize: deserialize_flyteidl_admin_TaskCreateRequest,
    responseSerialize: serialize_flyteidl_admin_TaskCreateResponse,
    responseDeserialize: deserialize_flyteidl_admin_TaskCreateResponse,
  },
  // Fetch a :ref:`ref_flyteidl.admin.Task` definition.
getTask: {
    path: '/flyteidl.service.AdminService/GetTask',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_common_pb.ObjectGetRequest,
    responseType: flyteidl_admin_task_pb.Task,
    requestSerialize: serialize_flyteidl_admin_ObjectGetRequest,
    requestDeserialize: deserialize_flyteidl_admin_ObjectGetRequest,
    responseSerialize: serialize_flyteidl_admin_Task,
    responseDeserialize: deserialize_flyteidl_admin_Task,
  },
  // Fetch a list of :ref:`ref_flyteidl.admin.NamedEntityIdentifier` of task objects. 
listTaskIds: {
    path: '/flyteidl.service.AdminService/ListTaskIds',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_common_pb.NamedEntityIdentifierListRequest,
    responseType: flyteidl_admin_common_pb.NamedEntityIdentifierList,
    requestSerialize: serialize_flyteidl_admin_NamedEntityIdentifierListRequest,
    requestDeserialize: deserialize_flyteidl_admin_NamedEntityIdentifierListRequest,
    responseSerialize: serialize_flyteidl_admin_NamedEntityIdentifierList,
    responseDeserialize: deserialize_flyteidl_admin_NamedEntityIdentifierList,
  },
  // Fetch a list of :ref:`ref_flyteidl.admin.Task` definitions.
listTasks: {
    path: '/flyteidl.service.AdminService/ListTasks',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_common_pb.ResourceListRequest,
    responseType: flyteidl_admin_task_pb.TaskList,
    requestSerialize: serialize_flyteidl_admin_ResourceListRequest,
    requestDeserialize: deserialize_flyteidl_admin_ResourceListRequest,
    responseSerialize: serialize_flyteidl_admin_TaskList,
    responseDeserialize: deserialize_flyteidl_admin_TaskList,
  },
  // Create and upload a :ref:`ref_flyteidl.admin.Workflow` definition
createWorkflow: {
    path: '/flyteidl.service.AdminService/CreateWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_workflow_pb.WorkflowCreateRequest,
    responseType: flyteidl_admin_workflow_pb.WorkflowCreateResponse,
    requestSerialize: serialize_flyteidl_admin_WorkflowCreateRequest,
    requestDeserialize: deserialize_flyteidl_admin_WorkflowCreateRequest,
    responseSerialize: serialize_flyteidl_admin_WorkflowCreateResponse,
    responseDeserialize: deserialize_flyteidl_admin_WorkflowCreateResponse,
  },
  // Fetch a :ref:`ref_flyteidl.admin.Workflow` definition.
getWorkflow: {
    path: '/flyteidl.service.AdminService/GetWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_common_pb.ObjectGetRequest,
    responseType: flyteidl_admin_workflow_pb.Workflow,
    requestSerialize: serialize_flyteidl_admin_ObjectGetRequest,
    requestDeserialize: deserialize_flyteidl_admin_ObjectGetRequest,
    responseSerialize: serialize_flyteidl_admin_Workflow,
    responseDeserialize: deserialize_flyteidl_admin_Workflow,
  },
  // Fetch a list of :ref:`ref_flyteidl.admin.NamedEntityIdentifier` of workflow objects.
listWorkflowIds: {
    path: '/flyteidl.service.AdminService/ListWorkflowIds',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_common_pb.NamedEntityIdentifierListRequest,
    responseType: flyteidl_admin_common_pb.NamedEntityIdentifierList,
    requestSerialize: serialize_flyteidl_admin_NamedEntityIdentifierListRequest,
    requestDeserialize: deserialize_flyteidl_admin_NamedEntityIdentifierListRequest,
    responseSerialize: serialize_flyteidl_admin_NamedEntityIdentifierList,
    responseDeserialize: deserialize_flyteidl_admin_NamedEntityIdentifierList,
  },
  // Fetch a list of :ref:`ref_flyteidl.admin.Workflow` definitions.
listWorkflows: {
    path: '/flyteidl.service.AdminService/ListWorkflows',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_common_pb.ResourceListRequest,
    responseType: flyteidl_admin_workflow_pb.WorkflowList,
    requestSerialize: serialize_flyteidl_admin_ResourceListRequest,
    requestDeserialize: deserialize_flyteidl_admin_ResourceListRequest,
    responseSerialize: serialize_flyteidl_admin_WorkflowList,
    responseDeserialize: deserialize_flyteidl_admin_WorkflowList,
  },
  // Create and upload a :ref:`ref_flyteidl.admin.LaunchPlan` definition
createLaunchPlan: {
    path: '/flyteidl.service.AdminService/CreateLaunchPlan',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_launch_plan_pb.LaunchPlanCreateRequest,
    responseType: flyteidl_admin_launch_plan_pb.LaunchPlanCreateResponse,
    requestSerialize: serialize_flyteidl_admin_LaunchPlanCreateRequest,
    requestDeserialize: deserialize_flyteidl_admin_LaunchPlanCreateRequest,
    responseSerialize: serialize_flyteidl_admin_LaunchPlanCreateResponse,
    responseDeserialize: deserialize_flyteidl_admin_LaunchPlanCreateResponse,
  },
  // Fetch a :ref:`ref_flyteidl.admin.LaunchPlan` definition.
getLaunchPlan: {
    path: '/flyteidl.service.AdminService/GetLaunchPlan',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_common_pb.ObjectGetRequest,
    responseType: flyteidl_admin_launch_plan_pb.LaunchPlan,
    requestSerialize: serialize_flyteidl_admin_ObjectGetRequest,
    requestDeserialize: deserialize_flyteidl_admin_ObjectGetRequest,
    responseSerialize: serialize_flyteidl_admin_LaunchPlan,
    responseDeserialize: deserialize_flyteidl_admin_LaunchPlan,
  },
  // Fetch the active version of a :ref:`ref_flyteidl.admin.LaunchPlan`.
getActiveLaunchPlan: {
    path: '/flyteidl.service.AdminService/GetActiveLaunchPlan',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_launch_plan_pb.ActiveLaunchPlanRequest,
    responseType: flyteidl_admin_launch_plan_pb.LaunchPlan,
    requestSerialize: serialize_flyteidl_admin_ActiveLaunchPlanRequest,
    requestDeserialize: deserialize_flyteidl_admin_ActiveLaunchPlanRequest,
    responseSerialize: serialize_flyteidl_admin_LaunchPlan,
    responseDeserialize: deserialize_flyteidl_admin_LaunchPlan,
  },
  // List active versions of :ref:`ref_flyteidl.admin.LaunchPlan`.
listActiveLaunchPlans: {
    path: '/flyteidl.service.AdminService/ListActiveLaunchPlans',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_launch_plan_pb.ActiveLaunchPlanListRequest,
    responseType: flyteidl_admin_launch_plan_pb.LaunchPlanList,
    requestSerialize: serialize_flyteidl_admin_ActiveLaunchPlanListRequest,
    requestDeserialize: deserialize_flyteidl_admin_ActiveLaunchPlanListRequest,
    responseSerialize: serialize_flyteidl_admin_LaunchPlanList,
    responseDeserialize: deserialize_flyteidl_admin_LaunchPlanList,
  },
  // Fetch a list of :ref:`ref_flyteidl.admin.NamedEntityIdentifier` of launch plan objects.
listLaunchPlanIds: {
    path: '/flyteidl.service.AdminService/ListLaunchPlanIds',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_common_pb.NamedEntityIdentifierListRequest,
    responseType: flyteidl_admin_common_pb.NamedEntityIdentifierList,
    requestSerialize: serialize_flyteidl_admin_NamedEntityIdentifierListRequest,
    requestDeserialize: deserialize_flyteidl_admin_NamedEntityIdentifierListRequest,
    responseSerialize: serialize_flyteidl_admin_NamedEntityIdentifierList,
    responseDeserialize: deserialize_flyteidl_admin_NamedEntityIdentifierList,
  },
  // Fetch a list of :ref:`ref_flyteidl.admin.LaunchPlan` definitions.
listLaunchPlans: {
    path: '/flyteidl.service.AdminService/ListLaunchPlans',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_common_pb.ResourceListRequest,
    responseType: flyteidl_admin_launch_plan_pb.LaunchPlanList,
    requestSerialize: serialize_flyteidl_admin_ResourceListRequest,
    requestDeserialize: deserialize_flyteidl_admin_ResourceListRequest,
    responseSerialize: serialize_flyteidl_admin_LaunchPlanList,
    responseDeserialize: deserialize_flyteidl_admin_LaunchPlanList,
  },
  // Updates the status of a registered :ref:`ref_flyteidl.admin.LaunchPlan`.
updateLaunchPlan: {
    path: '/flyteidl.service.AdminService/UpdateLaunchPlan',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_launch_plan_pb.LaunchPlanUpdateRequest,
    responseType: flyteidl_admin_launch_plan_pb.LaunchPlanUpdateResponse,
    requestSerialize: serialize_flyteidl_admin_LaunchPlanUpdateRequest,
    requestDeserialize: deserialize_flyteidl_admin_LaunchPlanUpdateRequest,
    responseSerialize: serialize_flyteidl_admin_LaunchPlanUpdateResponse,
    responseDeserialize: deserialize_flyteidl_admin_LaunchPlanUpdateResponse,
  },
  // Triggers the creation of a :ref:`ref_flyteidl.admin.Execution`
createExecution: {
    path: '/flyteidl.service.AdminService/CreateExecution',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_execution_pb.ExecutionCreateRequest,
    responseType: flyteidl_admin_execution_pb.ExecutionCreateResponse,
    requestSerialize: serialize_flyteidl_admin_ExecutionCreateRequest,
    requestDeserialize: deserialize_flyteidl_admin_ExecutionCreateRequest,
    responseSerialize: serialize_flyteidl_admin_ExecutionCreateResponse,
    responseDeserialize: deserialize_flyteidl_admin_ExecutionCreateResponse,
  },
  // Triggers the creation of an identical :ref:`ref_flyteidl.admin.Execution`
relaunchExecution: {
    path: '/flyteidl.service.AdminService/RelaunchExecution',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_execution_pb.ExecutionRelaunchRequest,
    responseType: flyteidl_admin_execution_pb.ExecutionCreateResponse,
    requestSerialize: serialize_flyteidl_admin_ExecutionRelaunchRequest,
    requestDeserialize: deserialize_flyteidl_admin_ExecutionRelaunchRequest,
    responseSerialize: serialize_flyteidl_admin_ExecutionCreateResponse,
    responseDeserialize: deserialize_flyteidl_admin_ExecutionCreateResponse,
  },
  // Recreates a previously-run workflow execution that will only start executing from the last known failure point.
// In Recover mode, users cannot change any input parameters or update the version of the execution.
// This is extremely useful to recover from system errors and byzantine faults like - Loss of K8s cluster, bugs in platform or instability, machine failures,
// downstream system failures (downstream services), or simply to recover executions that failed because of retry exhaustion and should complete if tried again.
// See :ref:`ref_flyteidl.admin.ExecutionRecoverRequest` for more details.
recoverExecution: {
    path: '/flyteidl.service.AdminService/RecoverExecution',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_execution_pb.ExecutionRecoverRequest,
    responseType: flyteidl_admin_execution_pb.ExecutionCreateResponse,
    requestSerialize: serialize_flyteidl_admin_ExecutionRecoverRequest,
    requestDeserialize: deserialize_flyteidl_admin_ExecutionRecoverRequest,
    responseSerialize: serialize_flyteidl_admin_ExecutionCreateResponse,
    responseDeserialize: deserialize_flyteidl_admin_ExecutionCreateResponse,
  },
  // Fetches a :ref:`ref_flyteidl.admin.Execution`.
getExecution: {
    path: '/flyteidl.service.AdminService/GetExecution',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_execution_pb.WorkflowExecutionGetRequest,
    responseType: flyteidl_admin_execution_pb.Execution,
    requestSerialize: serialize_flyteidl_admin_WorkflowExecutionGetRequest,
    requestDeserialize: deserialize_flyteidl_admin_WorkflowExecutionGetRequest,
    responseSerialize: serialize_flyteidl_admin_Execution,
    responseDeserialize: deserialize_flyteidl_admin_Execution,
  },
  // Update execution belonging to project domain :ref:`ref_flyteidl.admin.Execution`.
updateExecution: {
    path: '/flyteidl.service.AdminService/UpdateExecution',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_execution_pb.ExecutionUpdateRequest,
    responseType: flyteidl_admin_execution_pb.ExecutionUpdateResponse,
    requestSerialize: serialize_flyteidl_admin_ExecutionUpdateRequest,
    requestDeserialize: deserialize_flyteidl_admin_ExecutionUpdateRequest,
    responseSerialize: serialize_flyteidl_admin_ExecutionUpdateResponse,
    responseDeserialize: deserialize_flyteidl_admin_ExecutionUpdateResponse,
  },
  // Fetches input and output data for a :ref:`ref_flyteidl.admin.Execution`.
getExecutionData: {
    path: '/flyteidl.service.AdminService/GetExecutionData',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_execution_pb.WorkflowExecutionGetDataRequest,
    responseType: flyteidl_admin_execution_pb.WorkflowExecutionGetDataResponse,
    requestSerialize: serialize_flyteidl_admin_WorkflowExecutionGetDataRequest,
    requestDeserialize: deserialize_flyteidl_admin_WorkflowExecutionGetDataRequest,
    responseSerialize: serialize_flyteidl_admin_WorkflowExecutionGetDataResponse,
    responseDeserialize: deserialize_flyteidl_admin_WorkflowExecutionGetDataResponse,
  },
  // Fetch a list of :ref:`ref_flyteidl.admin.Execution`.
listExecutions: {
    path: '/flyteidl.service.AdminService/ListExecutions',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_common_pb.ResourceListRequest,
    responseType: flyteidl_admin_execution_pb.ExecutionList,
    requestSerialize: serialize_flyteidl_admin_ResourceListRequest,
    requestDeserialize: deserialize_flyteidl_admin_ResourceListRequest,
    responseSerialize: serialize_flyteidl_admin_ExecutionList,
    responseDeserialize: deserialize_flyteidl_admin_ExecutionList,
  },
  // Terminates an in-progress :ref:`ref_flyteidl.admin.Execution`.
terminateExecution: {
    path: '/flyteidl.service.AdminService/TerminateExecution',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_execution_pb.ExecutionTerminateRequest,
    responseType: flyteidl_admin_execution_pb.ExecutionTerminateResponse,
    requestSerialize: serialize_flyteidl_admin_ExecutionTerminateRequest,
    requestDeserialize: deserialize_flyteidl_admin_ExecutionTerminateRequest,
    responseSerialize: serialize_flyteidl_admin_ExecutionTerminateResponse,
    responseDeserialize: deserialize_flyteidl_admin_ExecutionTerminateResponse,
  },
  // Fetches a :ref:`ref_flyteidl.admin.NodeExecution`.
getNodeExecution: {
    path: '/flyteidl.service.AdminService/GetNodeExecution',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_node_execution_pb.NodeExecutionGetRequest,
    responseType: flyteidl_admin_node_execution_pb.NodeExecution,
    requestSerialize: serialize_flyteidl_admin_NodeExecutionGetRequest,
    requestDeserialize: deserialize_flyteidl_admin_NodeExecutionGetRequest,
    responseSerialize: serialize_flyteidl_admin_NodeExecution,
    responseDeserialize: deserialize_flyteidl_admin_NodeExecution,
  },
  // Fetch a list of :ref:`ref_flyteidl.admin.NodeExecution`.
listNodeExecutions: {
    path: '/flyteidl.service.AdminService/ListNodeExecutions',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_node_execution_pb.NodeExecutionListRequest,
    responseType: flyteidl_admin_node_execution_pb.NodeExecutionList,
    requestSerialize: serialize_flyteidl_admin_NodeExecutionListRequest,
    requestDeserialize: deserialize_flyteidl_admin_NodeExecutionListRequest,
    responseSerialize: serialize_flyteidl_admin_NodeExecutionList,
    responseDeserialize: deserialize_flyteidl_admin_NodeExecutionList,
  },
  // Fetch a list of :ref:`ref_flyteidl.admin.NodeExecution` launched by the reference :ref:`ref_flyteidl.admin.TaskExecution`.
listNodeExecutionsForTask: {
    path: '/flyteidl.service.AdminService/ListNodeExecutionsForTask',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_node_execution_pb.NodeExecutionForTaskListRequest,
    responseType: flyteidl_admin_node_execution_pb.NodeExecutionList,
    requestSerialize: serialize_flyteidl_admin_NodeExecutionForTaskListRequest,
    requestDeserialize: deserialize_flyteidl_admin_NodeExecutionForTaskListRequest,
    responseSerialize: serialize_flyteidl_admin_NodeExecutionList,
    responseDeserialize: deserialize_flyteidl_admin_NodeExecutionList,
  },
  // Fetches input and output data for a :ref:`ref_flyteidl.admin.NodeExecution`.
getNodeExecutionData: {
    path: '/flyteidl.service.AdminService/GetNodeExecutionData',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_node_execution_pb.NodeExecutionGetDataRequest,
    responseType: flyteidl_admin_node_execution_pb.NodeExecutionGetDataResponse,
    requestSerialize: serialize_flyteidl_admin_NodeExecutionGetDataRequest,
    requestDeserialize: deserialize_flyteidl_admin_NodeExecutionGetDataRequest,
    responseSerialize: serialize_flyteidl_admin_NodeExecutionGetDataResponse,
    responseDeserialize: deserialize_flyteidl_admin_NodeExecutionGetDataResponse,
  },
  // Registers a :ref:`ref_flyteidl.admin.Project` with the Flyte deployment.
registerProject: {
    path: '/flyteidl.service.AdminService/RegisterProject',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_project_pb.ProjectRegisterRequest,
    responseType: flyteidl_admin_project_pb.ProjectRegisterResponse,
    requestSerialize: serialize_flyteidl_admin_ProjectRegisterRequest,
    requestDeserialize: deserialize_flyteidl_admin_ProjectRegisterRequest,
    responseSerialize: serialize_flyteidl_admin_ProjectRegisterResponse,
    responseDeserialize: deserialize_flyteidl_admin_ProjectRegisterResponse,
  },
  // Updates an existing :ref:`ref_flyteidl.admin.Project` 
// flyteidl.admin.Project should be passed but the domains property should be empty;
// it will be ignored in the handler as domains cannot be updated via this API.
updateProject: {
    path: '/flyteidl.service.AdminService/UpdateProject',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_project_pb.Project,
    responseType: flyteidl_admin_project_pb.ProjectUpdateResponse,
    requestSerialize: serialize_flyteidl_admin_Project,
    requestDeserialize: deserialize_flyteidl_admin_Project,
    responseSerialize: serialize_flyteidl_admin_ProjectUpdateResponse,
    responseDeserialize: deserialize_flyteidl_admin_ProjectUpdateResponse,
  },
  // Fetches a list of :ref:`ref_flyteidl.admin.Project` 
listProjects: {
    path: '/flyteidl.service.AdminService/ListProjects',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_project_pb.ProjectListRequest,
    responseType: flyteidl_admin_project_pb.Projects,
    requestSerialize: serialize_flyteidl_admin_ProjectListRequest,
    requestDeserialize: deserialize_flyteidl_admin_ProjectListRequest,
    responseSerialize: serialize_flyteidl_admin_Projects,
    responseDeserialize: deserialize_flyteidl_admin_Projects,
  },
  // Indicates a :ref:`ref_flyteidl.event.WorkflowExecutionEvent` has occurred.
createWorkflowEvent: {
    path: '/flyteidl.service.AdminService/CreateWorkflowEvent',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_event_pb.WorkflowExecutionEventRequest,
    responseType: flyteidl_admin_event_pb.WorkflowExecutionEventResponse,
    requestSerialize: serialize_flyteidl_admin_WorkflowExecutionEventRequest,
    requestDeserialize: deserialize_flyteidl_admin_WorkflowExecutionEventRequest,
    responseSerialize: serialize_flyteidl_admin_WorkflowExecutionEventResponse,
    responseDeserialize: deserialize_flyteidl_admin_WorkflowExecutionEventResponse,
  },
  // Indicates a :ref:`ref_flyteidl.event.NodeExecutionEvent` has occurred.
createNodeEvent: {
    path: '/flyteidl.service.AdminService/CreateNodeEvent',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_event_pb.NodeExecutionEventRequest,
    responseType: flyteidl_admin_event_pb.NodeExecutionEventResponse,
    requestSerialize: serialize_flyteidl_admin_NodeExecutionEventRequest,
    requestDeserialize: deserialize_flyteidl_admin_NodeExecutionEventRequest,
    responseSerialize: serialize_flyteidl_admin_NodeExecutionEventResponse,
    responseDeserialize: deserialize_flyteidl_admin_NodeExecutionEventResponse,
  },
  // Indicates a :ref:`ref_flyteidl.event.TaskExecutionEvent` has occurred.
createTaskEvent: {
    path: '/flyteidl.service.AdminService/CreateTaskEvent',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_event_pb.TaskExecutionEventRequest,
    responseType: flyteidl_admin_event_pb.TaskExecutionEventResponse,
    requestSerialize: serialize_flyteidl_admin_TaskExecutionEventRequest,
    requestDeserialize: deserialize_flyteidl_admin_TaskExecutionEventRequest,
    responseSerialize: serialize_flyteidl_admin_TaskExecutionEventResponse,
    responseDeserialize: deserialize_flyteidl_admin_TaskExecutionEventResponse,
  },
  // Fetches a :ref:`ref_flyteidl.admin.TaskExecution`.
getTaskExecution: {
    path: '/flyteidl.service.AdminService/GetTaskExecution',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_task_execution_pb.TaskExecutionGetRequest,
    responseType: flyteidl_admin_task_execution_pb.TaskExecution,
    requestSerialize: serialize_flyteidl_admin_TaskExecutionGetRequest,
    requestDeserialize: deserialize_flyteidl_admin_TaskExecutionGetRequest,
    responseSerialize: serialize_flyteidl_admin_TaskExecution,
    responseDeserialize: deserialize_flyteidl_admin_TaskExecution,
  },
  // Fetches a list of :ref:`ref_flyteidl.admin.TaskExecution`.
listTaskExecutions: {
    path: '/flyteidl.service.AdminService/ListTaskExecutions',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_task_execution_pb.TaskExecutionListRequest,
    responseType: flyteidl_admin_task_execution_pb.TaskExecutionList,
    requestSerialize: serialize_flyteidl_admin_TaskExecutionListRequest,
    requestDeserialize: deserialize_flyteidl_admin_TaskExecutionListRequest,
    responseSerialize: serialize_flyteidl_admin_TaskExecutionList,
    responseDeserialize: deserialize_flyteidl_admin_TaskExecutionList,
  },
  // Fetches input and output data for a :ref:`ref_flyteidl.admin.TaskExecution`.
getTaskExecutionData: {
    path: '/flyteidl.service.AdminService/GetTaskExecutionData',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_task_execution_pb.TaskExecutionGetDataRequest,
    responseType: flyteidl_admin_task_execution_pb.TaskExecutionGetDataResponse,
    requestSerialize: serialize_flyteidl_admin_TaskExecutionGetDataRequest,
    requestDeserialize: deserialize_flyteidl_admin_TaskExecutionGetDataRequest,
    responseSerialize: serialize_flyteidl_admin_TaskExecutionGetDataResponse,
    responseDeserialize: deserialize_flyteidl_admin_TaskExecutionGetDataResponse,
  },
  // Creates or updates custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project and domain.
updateProjectDomainAttributes: {
    path: '/flyteidl.service.AdminService/UpdateProjectDomainAttributes',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_project_domain_attributes_pb.ProjectDomainAttributesUpdateRequest,
    responseType: flyteidl_admin_project_domain_attributes_pb.ProjectDomainAttributesUpdateResponse,
    requestSerialize: serialize_flyteidl_admin_ProjectDomainAttributesUpdateRequest,
    requestDeserialize: deserialize_flyteidl_admin_ProjectDomainAttributesUpdateRequest,
    responseSerialize: serialize_flyteidl_admin_ProjectDomainAttributesUpdateResponse,
    responseDeserialize: deserialize_flyteidl_admin_ProjectDomainAttributesUpdateResponse,
  },
  // Fetches custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project and domain.
getProjectDomainAttributes: {
    path: '/flyteidl.service.AdminService/GetProjectDomainAttributes',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_project_domain_attributes_pb.ProjectDomainAttributesGetRequest,
    responseType: flyteidl_admin_project_domain_attributes_pb.ProjectDomainAttributesGetResponse,
    requestSerialize: serialize_flyteidl_admin_ProjectDomainAttributesGetRequest,
    requestDeserialize: deserialize_flyteidl_admin_ProjectDomainAttributesGetRequest,
    responseSerialize: serialize_flyteidl_admin_ProjectDomainAttributesGetResponse,
    responseDeserialize: deserialize_flyteidl_admin_ProjectDomainAttributesGetResponse,
  },
  // Deletes custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project and domain.
deleteProjectDomainAttributes: {
    path: '/flyteidl.service.AdminService/DeleteProjectDomainAttributes',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_project_domain_attributes_pb.ProjectDomainAttributesDeleteRequest,
    responseType: flyteidl_admin_project_domain_attributes_pb.ProjectDomainAttributesDeleteResponse,
    requestSerialize: serialize_flyteidl_admin_ProjectDomainAttributesDeleteRequest,
    requestDeserialize: deserialize_flyteidl_admin_ProjectDomainAttributesDeleteRequest,
    responseSerialize: serialize_flyteidl_admin_ProjectDomainAttributesDeleteResponse,
    responseDeserialize: deserialize_flyteidl_admin_ProjectDomainAttributesDeleteResponse,
  },
  // Creates or updates custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project, domain and workflow.
updateWorkflowAttributes: {
    path: '/flyteidl.service.AdminService/UpdateWorkflowAttributes',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_workflow_attributes_pb.WorkflowAttributesUpdateRequest,
    responseType: flyteidl_admin_workflow_attributes_pb.WorkflowAttributesUpdateResponse,
    requestSerialize: serialize_flyteidl_admin_WorkflowAttributesUpdateRequest,
    requestDeserialize: deserialize_flyteidl_admin_WorkflowAttributesUpdateRequest,
    responseSerialize: serialize_flyteidl_admin_WorkflowAttributesUpdateResponse,
    responseDeserialize: deserialize_flyteidl_admin_WorkflowAttributesUpdateResponse,
  },
  // Fetches custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project, domain and workflow.
getWorkflowAttributes: {
    path: '/flyteidl.service.AdminService/GetWorkflowAttributes',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_workflow_attributes_pb.WorkflowAttributesGetRequest,
    responseType: flyteidl_admin_workflow_attributes_pb.WorkflowAttributesGetResponse,
    requestSerialize: serialize_flyteidl_admin_WorkflowAttributesGetRequest,
    requestDeserialize: deserialize_flyteidl_admin_WorkflowAttributesGetRequest,
    responseSerialize: serialize_flyteidl_admin_WorkflowAttributesGetResponse,
    responseDeserialize: deserialize_flyteidl_admin_WorkflowAttributesGetResponse,
  },
  // Deletes custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project, domain and workflow.
deleteWorkflowAttributes: {
    path: '/flyteidl.service.AdminService/DeleteWorkflowAttributes',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_workflow_attributes_pb.WorkflowAttributesDeleteRequest,
    responseType: flyteidl_admin_workflow_attributes_pb.WorkflowAttributesDeleteResponse,
    requestSerialize: serialize_flyteidl_admin_WorkflowAttributesDeleteRequest,
    requestDeserialize: deserialize_flyteidl_admin_WorkflowAttributesDeleteRequest,
    responseSerialize: serialize_flyteidl_admin_WorkflowAttributesDeleteResponse,
    responseDeserialize: deserialize_flyteidl_admin_WorkflowAttributesDeleteResponse,
  },
  // Lists custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a specific resource type.
listMatchableAttributes: {
    path: '/flyteidl.service.AdminService/ListMatchableAttributes',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_matchable_resource_pb.ListMatchableAttributesRequest,
    responseType: flyteidl_admin_matchable_resource_pb.ListMatchableAttributesResponse,
    requestSerialize: serialize_flyteidl_admin_ListMatchableAttributesRequest,
    requestDeserialize: deserialize_flyteidl_admin_ListMatchableAttributesRequest,
    responseSerialize: serialize_flyteidl_admin_ListMatchableAttributesResponse,
    responseDeserialize: deserialize_flyteidl_admin_ListMatchableAttributesResponse,
  },
  // Returns a list of :ref:`ref_flyteidl.admin.NamedEntity` objects.
listNamedEntities: {
    path: '/flyteidl.service.AdminService/ListNamedEntities',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_common_pb.NamedEntityListRequest,
    responseType: flyteidl_admin_common_pb.NamedEntityList,
    requestSerialize: serialize_flyteidl_admin_NamedEntityListRequest,
    requestDeserialize: deserialize_flyteidl_admin_NamedEntityListRequest,
    responseSerialize: serialize_flyteidl_admin_NamedEntityList,
    responseDeserialize: deserialize_flyteidl_admin_NamedEntityList,
  },
  // Returns a :ref:`ref_flyteidl.admin.NamedEntity` object.
getNamedEntity: {
    path: '/flyteidl.service.AdminService/GetNamedEntity',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_common_pb.NamedEntityGetRequest,
    responseType: flyteidl_admin_common_pb.NamedEntity,
    requestSerialize: serialize_flyteidl_admin_NamedEntityGetRequest,
    requestDeserialize: deserialize_flyteidl_admin_NamedEntityGetRequest,
    responseSerialize: serialize_flyteidl_admin_NamedEntity,
    responseDeserialize: deserialize_flyteidl_admin_NamedEntity,
  },
  // Updates a :ref:`ref_flyteidl.admin.NamedEntity` object.
updateNamedEntity: {
    path: '/flyteidl.service.AdminService/UpdateNamedEntity',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_common_pb.NamedEntityUpdateRequest,
    responseType: flyteidl_admin_common_pb.NamedEntityUpdateResponse,
    requestSerialize: serialize_flyteidl_admin_NamedEntityUpdateRequest,
    requestDeserialize: deserialize_flyteidl_admin_NamedEntityUpdateRequest,
    responseSerialize: serialize_flyteidl_admin_NamedEntityUpdateResponse,
    responseDeserialize: deserialize_flyteidl_admin_NamedEntityUpdateResponse,
  },
  getVersion: {
    path: '/flyteidl.service.AdminService/GetVersion',
    requestStream: false,
    responseStream: false,
    requestType: flyteidl_admin_version_pb.GetVersionRequest,
    responseType: flyteidl_admin_version_pb.GetVersionResponse,
    requestSerialize: serialize_flyteidl_admin_GetVersionRequest,
    requestDeserialize: deserialize_flyteidl_admin_GetVersionRequest,
    responseSerialize: serialize_flyteidl_admin_GetVersionResponse,
    responseDeserialize: deserialize_flyteidl_admin_GetVersionResponse,
  },
};

exports.AdminServiceClient = grpc.makeGenericClientConstructor(AdminServiceService);
