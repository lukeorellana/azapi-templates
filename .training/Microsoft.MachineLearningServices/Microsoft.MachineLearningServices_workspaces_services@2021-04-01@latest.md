```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/services@2021-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      {customized property} = "string"
    }
    computeType = "string"
    // For remaining properties, see workspaces/services objects
    description = "string"
    environmentImageRequest = {
      assets = [
        {
          id = "string"
          mimeType = "string"
          unpack = bool
          url = "string"
        }
      ]
      driverProgram = "string"
      environment = {
        docker = {
          baseDockerfile = "string"
          baseImage = "string"
          baseImageRegistry = {
            address = "string"
            password = "string"
            username = "string"
          }
        }
        environmentVariables = {
          {customized property} = "string"
        }
        inferencingStackVersion = "string"
        name = "string"
        python = {
          baseCondaEnvironment = "string"
          interpreterPath = "string"
          userManagedDependencies = bool
        }
        r = {
          bioConductorPackages = [
            "string"
          ]
          cranPackages = [
            {
              name = "string"
              repository = "string"
            }
          ]
          customUrlPackages = [
            "string"
          ]
          gitHubPackages = [
            {
              authToken = "string"
              repository = "string"
            }
          ]
          rscriptPath = "string"
          rVersion = "string"
          snapshotDate = "string"
          userManaged = bool
        }
        spark = {
          packages = [
            {
              artifact = "string"
              group = "string"
              version = "string"
            }
          ]
          precachePackages = bool
          repositories = [
            "string"
          ]
        }
        version = "string"
      }
      environmentReference = {
        name = "string"
        version = "string"
      }
      modelIds = [
        "string"
      ]
      models = [
        {
          createdTime = "string"
          datasets = [
            {
              id = "string"
              name = "string"
            }
          ]
          derivedModelIds = [
            "string"
          ]
          description = "string"
          experimentName = "string"
          framework = "string"
          frameworkVersion = "string"
          id = "string"
          kvTags = {
            {customized property} = "string"
          }
          mimeType = "string"
          modifiedTime = "string"
          name = "string"
          parentModelId = "string"
          properties = {
            {customized property} = "string"
          }
          resourceRequirements = {
            cpu = int
            cpuLimit = int
            fpga = int
            gpu = int
            memoryInGB = int
            memoryInGBLimit = int
          }
          runId = "string"
          sampleInputData = "string"
          sampleOutputData = "string"
          unpack = bool
          url = "string"
          version = int
        }
      ]
    }
    keys = {
      primaryKey = "string"
      secondaryKey = "string"
    }
    kvTags = {
      {customized property} = "string"
    }
  })
}

```

### workspaces/services

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The name of the Azure location/region. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| description | The description of the service. | string |
| environmentImageRequest | The Environment, models and assets needed for inferencing. | CreateServiceRequestEnvironmentImageRequest |
| keys | The authentication keys. | CreateServiceRequestKeys |
| kvTags | The service tag dictionary. Tags are mutable. | CreateServiceRequestKvTags |
| properties | The service properties dictionary. Properties are immutable. | CreateServiceRequestProperties |
| computeType | Set the object type | ACIAKS(required) |


### ACIServiceCreateRequest

| Name | Description | Value |
|-|-|-|
| computeType | The compute environment type for the service. | 'ACI' (required) |
| appInsightsEnabled | Whether or not Application Insights is enabled. | bool |
| authEnabled | Whether or not authentication is enabled on the service. | bool |
| cname | The CName for the service. | string |
| containerResourceRequirements | The container resource requirements. | ContainerResourceRequirements |
| dataCollection | Details of the data collection options specified. | ACIServiceCreateRequestDataCollection |
| dnsNameLabel | The Dns label for the service. | string |
| encryptionProperties | The encryption properties. | ACIServiceCreateRequestEncryptionProperties |
| sslCertificate | The public SSL certificate in PEM format to use if SSL is enabled. | string |
| sslEnabled | Whether or not SSL is enabled. | bool |
| sslKey | The public SSL key in PEM format for the certificate. | string |
| vnetConfiguration | The virtual network configuration. | ACIServiceCreateRequestVnetConfiguration |


### ContainerResourceRequirements

| Name | Description | Value |
|-|-|-|
| cpu | The minimum amount of CPU cores to be used by the container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ | int |
| cpuLimit | The maximum amount of CPU cores allowed to be used by the container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ | int |
| fpga | The number of FPGA PCIE devices exposed to the container. Must be multiple of 2. | int |
| gpu | The number of GPU cores in the container. | int |
| memoryInGB | The minimum amount of memory (in GB) to be used by the container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ | int |
| memoryInGBLimit | The maximum amount of memory (in GB) allowed to be used by the container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ | int |


### ACIServiceCreateRequestDataCollection

| Name | Description | Value |
|-|-|-|
| eventHubEnabled | Option for enabling/disabling Event Hub. | bool |
| storageEnabled | Option for enabling/disabling storage. | bool |


### ACIServiceCreateRequestEncryptionProperties

| Name | Description | Value |
|-|-|-|
| keyName | Encryption Key name | string (required) |
| keyVersion | Encryption Key Version | string (required) |
| vaultBaseUrl | vault base Url | string (required) |


### ACIServiceCreateRequestVnetConfiguration

| Name | Description | Value |
|-|-|-|
| subnetName | The name of the virtual network subnet. | string |
| vnetName | The name of the virtual network. | string |


### AKSServiceCreateRequest

| Name | Description | Value |
|-|-|-|
| computeType | The compute environment type for the service. | 'AKS' (required) |
| aadAuthEnabled | Whether or not AAD authentication is enabled. | bool |
| appInsightsEnabled | Whether or not Application Insights is enabled. | bool |
| authEnabled | Whether or not authentication is enabled. | bool |
| autoScaler | The auto scaler properties. | AKSServiceCreateRequestAutoScaler |
| computeName | The name of the compute resource. | string |
| containerResourceRequirements | The container resource requirements. | ContainerResourceRequirements |
| dataCollection | Details of the data collection options specified. | AKSServiceCreateRequestDataCollection |
| isDefault | Is this the default variant. | bool |
| livenessProbeRequirements | The liveness probe requirements. | AKSServiceCreateRequestLivenessProbeRequirements |
| maxConcurrentRequestsPerContainer | The maximum number of concurrent requests per container. | int |
| maxQueueWaitMs | Maximum time a request will wait in the queue (in milliseconds). After this time, the service will return 503 (Service Unavailable) | int |
| namespace | Kubernetes namespace for the service. | string |
| numReplicas | The number of replicas on the cluster. | int |
| scoringTimeoutMs | The scoring timeout in milliseconds. | int |
| trafficPercentile | The amount of traffic variant receives. | int |
| type | The type of the variant. | 'Control''Treatment' |


### AKSServiceCreateRequestAutoScaler

| Name | Description | Value |
|-|-|-|
| autoscaleEnabled | Option to enable/disable auto scaling. | bool |
| maxReplicas | The maximum number of replicas in the cluster. | int |
| minReplicas | The minimum number of replicas to scale down to. | int |
| refreshPeriodInSeconds | The amount of seconds to wait between auto scale updates. | int |
| targetUtilization | The target utilization percentage to use for determining whether to scale the cluster. | int |


### AKSServiceCreateRequestDataCollection

| Name | Description | Value |
|-|-|-|
| eventHubEnabled | Option for enabling/disabling Event Hub. | bool |
| storageEnabled | Option for enabling/disabling storage. | bool |


### AKSServiceCreateRequestLivenessProbeRequirements

| Name | Description | Value |
|-|-|-|
| failureThreshold | The number of failures to allow before returning an unhealthy status. | int |
| initialDelaySeconds | The delay before the first probe in seconds. | int |
| periodSeconds | The length of time between probes in seconds. | int |
| successThreshold | The number of successful probes before returning a healthy status. | int |
| timeoutSeconds | The probe timeout in seconds. | int |


### CreateServiceRequestEnvironmentImageRequest

| Name | Description | Value |
|-|-|-|
| assets | The list of assets. | ImageAsset[] |
| driverProgram | The name of the driver file. | string |
| environment | The details of the AZURE ML environment. | EnvironmentImageRequestEnvironment |
| environmentReference | The unique identifying details of the AZURE ML environment. | EnvironmentImageRequestEnvironmentReference |
| modelIds | The list of model Ids. | string[] |
| models | The list of models. | Model[] |


### ImageAsset

| Name | Description | Value |
|-|-|-|
| id | The Asset Id. | string |
| mimeType | The mime type. | string |
| unpack | Whether the Asset is unpacked. | bool |
| url | The Url of the Asset. | string |


### EnvironmentImageRequestEnvironment

| Name | Description | Value |
|-|-|-|
| docker | The definition of a Docker container. | ModelEnvironmentDefinitionDocker |
| environmentVariables | Definition of environment variables to be defined in the environment. | ModelEnvironmentDefinitionEnvironmentVariables |
| inferencingStackVersion | The inferencing stack version added to the image. To avoid adding an inferencing stack, do not set this value. Valid values: "latest". | string |
| name | The name of the environment. | string |
| python | Settings for a Python environment. | ModelEnvironmentDefinitionPython |
| r | Settings for a R environment. | ModelEnvironmentDefinitionR |
| spark | The configuration for a Spark environment. | ModelEnvironmentDefinitionSpark |
| version | The environment version. | string |


### ModelEnvironmentDefinitionDocker

| Name | Description | Value |
|-|-|-|
| baseDockerfile | Base Dockerfile used for Docker-based runs. Mutually exclusive with BaseImage. | string |
| baseImage | Base image used for Docker-based runs. Mutually exclusive with BaseDockerfile. | string |
| baseImageRegistry | Image registry that contains the base image. | ModelDockerSectionBaseImageRegistry |


### ModelDockerSectionBaseImageRegistry

| Name | Description | Value |
|-|-|-|
| address |  | string |
| password |  | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| username |  | stringConstraints:Sensitive value. Pass in as a secure parameter. |


### ModelEnvironmentDefinitionEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### ModelEnvironmentDefinitionPython

| Name | Description | Value |
|-|-|-|
| baseCondaEnvironment |  | string |
| condaDependencies | A JObject containing Conda dependencies. | For Bicep, you can use theany()function. |
| interpreterPath | The python interpreter path to use if an environment build is not required. The path specified gets used to call the user script. | string |
| userManagedDependencies | True means that AzureML reuses an existing python environment; False means that AzureML will create a python environment based on the Conda dependencies specification. | bool |


### ModelEnvironmentDefinitionR

| Name | Description | Value |
|-|-|-|
| bioConductorPackages | The packages from Bioconductor. | string[] |
| cranPackages | The CRAN packages to use. | RCranPackage[] |
| customUrlPackages | The packages from custom urls. | string[] |
| gitHubPackages | The packages directly from GitHub. | RGitHubPackage[] |
| rscriptPath | The Rscript path to use if an environment build is not required.The path specified gets used to call the user script. | string |
| rVersion | The version of R to be installed | string |
| snapshotDate | Date of MRAN snapshot to use in YYYY-MM-DD format, e.g. "2019-04-17" | string |
| userManaged | Indicates whether the environment is managed by user or by AzureML. | bool |


### RCranPackage

| Name | Description | Value |
|-|-|-|
| name | The package name. | string |
| repository | The repository name. | string |


### RGitHubPackage

| Name | Description | Value |
|-|-|-|
| authToken | Personal access token to install from a private repo | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| repository | Repository address in the format username/repo[/subdir][@ref,#pull]. | string |


### ModelEnvironmentDefinitionSpark

| Name | Description | Value |
|-|-|-|
| packages | The Spark packages to use. | SparkMavenPackage[] |
| precachePackages | Whether to precache the packages. | bool |
| repositories | The list of spark repositories. | string[] |


### SparkMavenPackage

| Name | Description | Value |
|-|-|-|
| artifact |  | string |
| group |  | string |
| version |  | string |


### EnvironmentImageRequestEnvironmentReference

| Name | Description | Value |
|-|-|-|
| name | Name of the environment. | string |
| version | Version of the environment. | string |


### Model

| Name | Description | Value |
|-|-|-|
| createdTime | The Model creation time (UTC). | string |
| datasets | The list of datasets associated with the model. | DatasetReference[] |
| derivedModelIds | Models derived from this model | string[] |
| description | The Model description text. | string |
| experimentName | The name of the experiment where this model was created. | string |
| framework | The Model framework. | string |
| frameworkVersion | The Model framework version. | string |
| id | The Model Id. | string |
| kvTags | The Model tag dictionary. Items are mutable. | ModelKvTags |
| mimeType | The MIME type of Model content. For more details about MIME type, please openhttps://www.iana.org/assignments/media-types/media-types.xhtml | string (required) |
| modifiedTime | The Model last modified time (UTC). | string |
| name | The Model name. | string (required) |
| parentModelId | The Parent Model Id. | string |
| properties | The Model property dictionary. Properties are immutable. | ModelProperties |
| resourceRequirements | Resource requirements for the model | ContainerResourceRequirements |
| runId | The RunId that created this model. | string |
| sampleInputData | Sample Input Data for the Model. A reference to a dataset in the workspace in the format aml://dataset/{datasetId} | string |
| sampleOutputData | Sample Output Data for the Model. A reference to a dataset in the workspace in the format aml://dataset/{datasetId} | string |
| unpack | Indicates whether we need to unpack the Model during docker Image creation. | bool |
| url | The URL of the Model. Usually a SAS URL. | string (required) |
| version | The Model version assigned by Model Management Service. | int |


### DatasetReference

| Name | Description | Value |
|-|-|-|
| id | The id of the dataset reference. | string |
| name | The name of the dataset reference. | string |


### ModelKvTags

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### ModelProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### CreateServiceRequestKeys

| Name | Description | Value |
|-|-|-|
| primaryKey | The primary key. | string |
| secondaryKey | The secondary key. | string |


### CreateServiceRequestKvTags

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### CreateServiceRequestProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


