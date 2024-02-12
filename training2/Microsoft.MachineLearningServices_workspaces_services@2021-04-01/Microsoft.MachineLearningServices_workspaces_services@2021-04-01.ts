import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * The description of the service.
   */
readonly description?: string;

/**
   * The Environment, models and assets needed for inferencing.
   */
readonly environmentImageRequest?: CreateServiceRequestEnvironmentImageRequest;

/**
   * The authentication keys.
   */
readonly keys?: CreateServiceRequestKeys;

/**
   * The service tag dictionary. Tags are mutable.
   */
readonly kvTags?: CreateServiceRequestKvTags;

/**
   * Set the object type
   */
readonly computeType: ACIAKS;

/**
   * The compute environment type for the service.
   */
readonly computeType: 'ACI';

/**
   * Whether or not Application Insights is enabled.
   */
readonly appInsightsEnabled?: bool;

/**
   * Whether or not authentication is enabled on the service.
   */
readonly authEnabled?: bool;

/**
   * The CName for the service.
   */
readonly cname?: string;

/**
   * The container resource requirements.
   */
readonly containerResourceRequirements?: ContainerResourceRequirements;

/**
   * Details of the data collection options specified.
   */
readonly dataCollection?: ACIServiceCreateRequestDataCollection;

/**
   * The Dns label for the service.
   */
readonly dnsNameLabel?: string;

/**
   * The encryption properties.
   */
readonly encryptionProperties?: ACIServiceCreateRequestEncryptionProperties;

/**
   * The public SSL certificate in PEM format to use if SSL is enabled.
   */
readonly sslCertificate?: string;

/**
   * Whether or not SSL is enabled.
   */
readonly sslEnabled?: bool;

/**
   * The public SSL key in PEM format for the certificate.
   */
readonly sslKey?: string;

/**
   * The virtual network configuration.
   */
readonly vnetConfiguration?: ACIServiceCreateRequestVnetConfiguration;

/**
   * The minimum amount of CPU cores to be used by the container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
   */
readonly cpu?: number;

/**
   * The maximum amount of CPU cores allowed to be used by the container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
   */
readonly cpuLimit?: number;

/**
   * The number of FPGA PCIE devices exposed to the container. Must be multiple of 2.
   */
readonly fpga?: number;

/**
   * The number of GPU cores in the container.
   */
readonly gpu?: number;

/**
   * The minimum amount of memory (in GB) to be used by the container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
   */
readonly memoryInGB?: number;

/**
   * The maximum amount of memory (in GB) allowed to be used by the container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
   */
readonly memoryInGBLimit?: number;

/**
   * Option for enabling/disabling Event Hub.
   */
readonly eventHubEnabled?: bool;

/**
   * Option for enabling/disabling storage.
   */
readonly storageEnabled?: bool;

/**
   * Encryption Key name
   */
readonly keyName: string;

/**
   * Encryption Key Version
   */
readonly keyVersion: string;

/**
   * vault base Url
   */
readonly vaultBaseUrl: string;

/**
   * The name of the virtual network subnet.
   */
readonly subnetName?: string;

/**
   * The name of the virtual network.
   */
readonly vnetName?: string;

/**
   * The compute environment type for the service.
   */
readonly computeType: 'AKS';

/**
   * Whether or not AAD authentication is enabled.
   */
readonly aadAuthEnabled?: bool;

/**
   * Whether or not Application Insights is enabled.
   */
readonly appInsightsEnabled?: bool;

/**
   * Whether or not authentication is enabled.
   */
readonly authEnabled?: bool;

/**
   * The auto scaler properties.
   */
readonly autoScaler?: AKSServiceCreateRequestAutoScaler;

/**
   * The name of the compute resource.
   */
readonly computeName?: string;

/**
   * The container resource requirements.
   */
readonly containerResourceRequirements?: ContainerResourceRequirements;

/**
   * Details of the data collection options specified.
   */
readonly dataCollection?: AKSServiceCreateRequestDataCollection;

/**
   * Is this the default variant.
   */
readonly isDefault?: bool;

/**
   * The liveness probe requirements.
   */
readonly livenessProbeRequirements?: AKSServiceCreateRequestLivenessProbeRequirements;

/**
   * The maximum number of concurrent requests per container.
   */
readonly maxConcurrentRequestsPerContainer?: number;

/**
   * Maximum time a request will wait in the queue (in milliseconds). After this time, the service will return 503 (Service Unavailable)
   */
readonly maxQueueWaitMs?: number;

/**
   * Kubernetes namespace for the service.
   */
readonly namespace?: string;

/**
   * The number of replicas on the cluster.
   */
readonly numReplicas?: number;

/**
   * The scoring timeout in milliseconds.
   */
readonly scoringTimeoutMs?: number;

/**
   * The amount of traffic variant receives.
   */
readonly trafficPercentile?: number;

/**
   * The type of the variant.
   */
readonly type?: 'Control''Treatment';

/**
   * Option to enable/disable auto scaling.
   */
readonly autoscaleEnabled?: bool;

/**
   * The maximum number of replicas in the cluster.
   */
readonly maxReplicas?: number;

/**
   * The minimum number of replicas to scale down to.
   */
readonly minReplicas?: number;

/**
   * The amount of seconds to wait between auto scale updates.
   */
readonly refreshPeriodInSeconds?: number;

/**
   * The target utilization percentage to use for determining whether to scale the cluster.
   */
readonly targetUtilization?: number;

/**
   * Option for enabling/disabling Event Hub.
   */
readonly eventHubEnabled?: bool;

/**
   * Option for enabling/disabling storage.
   */
readonly storageEnabled?: bool;

/**
   * The number of failures to allow before returning an unhealthy status.
   */
readonly failureThreshold?: number;

/**
   * The delay before the first probe in seconds.
   */
readonly initialDelaySeconds?: number;

/**
   * The length of time between probes in seconds.
   */
readonly periodSeconds?: number;

/**
   * The number of successful probes before returning a healthy status.
   */
readonly successThreshold?: number;

/**
   * The probe timeout in seconds.
   */
readonly timeoutSeconds?: number;

/**
   * The list of assets.
   */
readonly assets?: ImageAsset[];

/**
   * The name of the driver file.
   */
readonly driverProgram?: string;

/**
   * The details of the AZURE ML environment.
   */
readonly environment?: EnvironmentImageRequestEnvironment;

/**
   * The unique identifying details of the AZURE ML environment.
   */
readonly environmentReference?: EnvironmentImageRequestEnvironmentReference;

/**
   * The list of model Ids.
   */
readonly modelIds?: string[];

/**
   * The list of models.
   */
readonly models?: Model[];

/**
   * The Asset Id.
   */
readonly id?: string;

/**
   * The mime type.
   */
readonly mimeType?: string;

/**
   * Whether the Asset is unpacked.
   */
readonly unpack?: bool;

/**
   * The Url of the Asset.
   */
readonly url?: string;

/**
   * The definition of a Docker container.
   */
readonly docker?: ModelEnvironmentDefinitionDocker;

/**
   * Definition of environment variables to be defined in the environment.
   */
readonly environmentVariables?: ModelEnvironmentDefinitionEnvironmentVariables;

/**
   * The inferencing stack version added to the image. To avoid adding an inferencing stack, do not set this value. Valid values: "latest".
   */
readonly inferencingStackVersion?: string;

/**
   * Settings for a Python environment.
   */
readonly python?: ModelEnvironmentDefinitionPython;

/**
   * Settings for a R environment.
   */
readonly r?: ModelEnvironmentDefinitionR;

/**
   * The configuration for a Spark environment.
   */
readonly spark?: ModelEnvironmentDefinitionSpark;

/**
   * The environment version.
   */
readonly version?: string;

/**
   * Base Dockerfile used for Docker-based runs. Mutually exclusive with BaseImage.
   */
readonly baseDockerfile?: string;

/**
   * Base image used for Docker-based runs. Mutually exclusive with BaseDockerfile.
   */
readonly baseImage?: string;

/**
   * Image registry that contains the base image.
   */
readonly baseImageRegistry?: ModelDockerSectionBaseImageRegistry;

/**
   * 
   */
readonly address?: string;

/**
   * 
   */
readonly password?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * 
   */
readonly username?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly baseCondaEnvironment?: string;

/**
   * A JObject containing Conda dependencies.
   */
readonly condaDependencies?: For Bicep, you can use theany()function.;

/**
   * The python interpreter path to use if an environment build is not required. The path specified gets used to call the user script.
   */
readonly interpreterPath?: string;

/**
   * True means that AzureML reuses an existing python environment; False means that AzureML will create a python environment based on the Conda dependencies specification.
   */
readonly userManagedDependencies?: bool;

/**
   * The packages from Bioconductor.
   */
readonly bioConductorPackages?: string[];

/**
   * The CRAN packages to use.
   */
readonly cranPackages?: RCranPackage[];

/**
   * The packages from custom urls.
   */
readonly customUrlPackages?: string[];

/**
   * The packages directly from GitHub.
   */
readonly gitHubPackages?: RGitHubPackage[];

/**
   * The Rscript path to use if an environment build is not required.The path specified gets used to call the user script.
   */
readonly rscriptPath?: string;

/**
   * The version of R to be installed
   */
readonly rVersion?: string;

/**
   * Date of MRAN snapshot to use in YYYY-MM-DD format, e.g. "2019-04-17"
   */
readonly snapshotDate?: string;

/**
   * Indicates whether the environment is managed by user or by AzureML.
   */
readonly userManaged?: bool;

/**
   * The repository name.
   */
readonly repository?: string;

/**
   * Personal access token to install from a private repo
   */
readonly authToken?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * Repository address in the format username/repo[/subdir][@ref,#pull].
   */
readonly repository?: string;

/**
   * The Spark packages to use.
   */
readonly packages?: SparkMavenPackage[];

/**
   * Whether to precache the packages.
   */
readonly precachePackages?: bool;

/**
   * The list of spark repositories.
   */
readonly repositories?: string[];

/**
   * 
   */
readonly artifact?: string;

/**
   * 
   */
readonly group?: string;

/**
   * 
   */
readonly version?: string;

/**
   * Version of the environment.
   */
readonly version?: string;

/**
   * The Model creation time (UTC).
   */
readonly createdTime?: string;

/**
   * The list of datasets associated with the model.
   */
readonly datasets?: DatasetReference[];

/**
   * Models derived from this model
   */
readonly derivedModelIds?: string[];

/**
   * The Model description text.
   */
readonly description?: string;

/**
   * The name of the experiment where this model was created.
   */
readonly experimentName?: string;

/**
   * The Model framework.
   */
readonly framework?: string;

/**
   * The Model framework version.
   */
readonly frameworkVersion?: string;

/**
   * The Model Id.
   */
readonly id?: string;

/**
   * The Model tag dictionary. Items are mutable.
   */
readonly kvTags?: ModelKvTags;

/**
   * The MIME type of Model content. For more details about MIME type, please openhttps://www.iana.org/assignments/media-types/media-types.xhtml
   */
readonly mimeType: string;

/**
   * The Model last modified time (UTC).
   */
readonly modifiedTime?: string;

/**
   * The Parent Model Id.
   */
readonly parentModelId?: string;

/**
   * Resource requirements for the model
   */
readonly resourceRequirements?: ContainerResourceRequirements;

/**
   * The RunId that created this model.
   */
readonly runId?: string;

/**
   * Sample Input Data for the Model. A reference to a dataset in the workspace in the format aml://dataset/{datasetId}
   */
readonly sampleInputData?: string;

/**
   * Sample Output Data for the Model. A reference to a dataset in the workspace in the format aml://dataset/{datasetId}
   */
readonly sampleOutputData?: string;

/**
   * Indicates whether we need to unpack the Model during docker Image creation.
   */
readonly unpack?: bool;

/**
   * The URL of the Model. Usually a SAS URL.
   */
readonly url: string;

/**
   * The Model version assigned by Model Management Service.
   */
readonly version?: number;

/**
   * The id of the dataset reference.
   */
readonly id?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * The primary key.
   */
readonly primaryKey?: string;

/**
   * The secondary key.
   */
readonly secondaryKey?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
