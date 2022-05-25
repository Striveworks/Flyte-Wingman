const vscode = require("vscode");

const dockerfile = `FROM python:3.8-slim-buster

WORKDIR /root
ENV VENV /opt/venv
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8
ENV PYTHONPATH /root

RUN apt-get update && apt-get install -y build-essential

# Install the AWS cli separately to prevent issues with boto being written over
RUN pip3 install awscli
# Similarly, if you're using GCP be sure to update this command to install gsutil
# RUN curl -sSL https://sdk.cloud.google.com | bash
# ENV PATH="$PATH:/root/google-cloud-sdk/bin"

ENV VENV /opt/venv
# Virtual environment
RUN python3 -m venv \${VENV}
ENV PATH="\${VENV}/bin:$PATH"

# Install Python dependencies
COPY ./requirements.txt /root
RUN pip install -r /root/requirements.txt

# Copy the actual code
COPY . /root

# This tag is supplied by the build script and will be used to determine the version
# when registering tasks, workflows, and launch plans
ARG tag
ENV FLYTE_INTERNAL_IMAGE $tag
`;

const sidecarRequirements = `# do not remove section
flytekit>=0.20.0
flytekitplugins-pod
kubernetes
# safe to edit below
`;

const requirements = `# do not remove section
flytekit>=0.20.0
# safe to edit below
`;

const workflowSkeleton = `import typing
from flytekit import task, workflow

@task
def say_hello() -> str:
    return "hello world"

@workflow
def my_wf() -> str:
    res = say_hello()
    return res


if __name__ == "__main__":
    print(f"Running my_wf() { my_wf() }")
`;

const sidecarWorkflowSkeleton = `import typing
from flytekit import task, workflow, Resources
from flytekitplugins.pod import Pod
from kubernetes.client.models import V1Container, V1PodSpec

container_name = "primary"
container_requests = Resources(cpu=".5", mem="250Mi")
container_limits = Resources(cpu="1", mem="500Mi")


def generate_pod_spec_for_task():
    primary_container = V1Container(name=container_name)
    return V1PodSpec(containers=[primary_container])


@task(
    task_config=Pod(
        pod_spec=generate_pod_spec_for_task(), primary_container_name=container_name
    ),
    requests=container_requests,
    limits=container_limits,
)
def say_hello() -> str:
    return "hello world"


@workflow
def my_wf() -> str:
    res = say_hello()
    return res


if __name__ == "__main__":
    print(f"Running my_wf() { my_wf() }")`;

const configTemplate = `admin:
  # For GRPC endpoints you might want to use dns:///flyte.myexample.com
  endpoint: dns:///localhost:30081
  authType: Pkce
  insecure: true
logger:
  show-source: true
  level: 0
storage:
  connection:
    access-key: minio
    auth-type: accesskey
    disable-ssl: true
    endpoint: http://localhost:30084
    region: us-east-1
    secret-key: miniostorage
  type: minio
  container: "my-s3-bucket"
  enable-multicontainer: true
`;

const templates = {
  kubernetes_pod: {
    dockerfile: dockerfile,
    requirements: sidecarRequirements,
    workflowSkeleton: sidecarWorkflowSkeleton,
    configTemplate: configTemplate,
  },
  python: {
    dockerfile: dockerfile,
    requirements: requirements,
    workflowSkeleton: workflowSkeleton,
    configTemplate: configTemplate,
  },
};

async function chooseTemplate() {
  const templateName = await vscode.window.showQuickPick(
    Object.getOwnPropertyNames(templates)
  );
  return templates[templateName];
}

module.exports = { chooseTemplate, templates };
