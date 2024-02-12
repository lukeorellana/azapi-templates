import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataSqlmanagedinstancesProps extends IAzAPIBaseProps {
/**
   * Resource sku.
   */
readonly sku?: SqlManagedInstanceSku;

/**
   * The extendedLocation of the resource.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The type of the extended location.
   */
readonly type?: 'CustomLocation';

/**
   * Active Directory information related to this SQL Managed Instance.
   */
readonly activeDirectoryInformation?: ActiveDirectoryInformation;

/**
   * The instance admin user
   */
readonly admin?: string;

/**
   * Username and password for basic authentication.
   */
readonly basicLoginInformation?: BasicLoginInformation;

/**
   * If a CustomLocation is provided, this contains the ARM id of the connected cluster the custom location belongs to.
   */
readonly clusterId?: string;

/**
   * null
   */
readonly dataControllerId?: string;

/**
   * The instance end time
   */
readonly endTime?: string;

/**
   * If a CustomLocation is provided, this contains the ARM id of the extension the custom location belongs to.
   */
readonly extensionId?: string;

/**
   * The raw kubernetes information
   */
readonly k8sRaw?: SqlManagedInstanceK8SRaw;

/**
   * Last uploaded date from Kubernetes cluster. Defaults to current date time
   */
readonly lastUploadedDate?: string;

/**
   * The license type to apply for this managed instance.
   */
readonly licenseType?: 'BasePrice''DisasterRecovery''LicenseIncluded';

/**
   * The instance start time
   */
readonly startTime?: string;

/**
   * Keytab information that is used for the Sql Managed Instance when Active Directory authentication is used.
   */
readonly keytabInformation?: KeytabInformation;

/**
   * A base64-encoded keytab.
   */
readonly keytab?: string;

/**
   * Login password.
   */
readonly password?: string;

/**
   * Login username.
   */
readonly username?: string;

/**
   * The kubernetes spec information.
   */
readonly spec?: SqlManagedInstanceK8SSpec;

/**
   * This option specifies the number of SQL Managed Instance replicas that will be deployed in your Kubernetes cluster for high availability purposes. If sku.tier is BusinessCritical, allowed values are '2' or '3' with default of '3'. If sku.tier is GeneralPurpose, replicas must be '1'.
   */
readonly replicas?: number;

/**
   * The kubernetes scheduling information.
   */
readonly scheduling?: K8SScheduling;

/**
   * The kubernetes scheduling options. It describes restrictions used to help Kubernetes select appropriate nodes to host the database service
   */
readonly default?: K8SSchedulingOptions;

/**
   * The kubernetes resource limits and requests used to restrict or reserve resource usage.
   */
readonly resources?: K8SResourceRequirements;

/**
   * Limits for a kubernetes resource type (e.g 'cpu', 'memory'). The 'cpu' request must be less than or equal to 'cpu' limit. Default 'cpu' is 2, minimum is 1. Default 'memory' is '4Gi', minimum is '2Gi. If sku.tier is GeneralPurpose, maximum 'cpu' is 24 and maximum 'memory' is '128Gi'.
   */
readonly limits?: object;

/**
   * Requests for a kubernetes resource type (e.g 'cpu', 'memory'). The 'cpu' request must be less than or equal to 'cpu' limit. Default 'cpu' is 2, minimum is 1. Default 'memory' is '4Gi', minimum is '2Gi. If sku.tier is GeneralPurpose, maximum 'cpu' is 24 and maximum 'memory' is '128Gi'.
   */
readonly requests?: object;

/**
   * The SKU capacity
   */
readonly capacity?: number;

/**
   * Whether dev/test is enabled. When the dev field is set to true, the resource is used for dev/test purpose.
   */
readonly dev?: bool;

/**
   * The SKU family
   */
readonly family?: string;

/**
   * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
   */
readonly size?: string;

/**
   * The pricing tier for the instance.
   */
readonly tier?: 'BusinessCritical''GeneralPurpose';
}

/**
 * AzurearcdataSqlmanagedinstances resource
 */
export class AzurearcdataSqlmanagedinstances extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataSqlmanagedinstancesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/sqlManagedInstances@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataSqlmanagedinstancesProps): string {
    return JSON.stringify(
        {properties: {activeDirectoryInformation: {keytabInformation: {keytab: "string"}}, admin: "string", basicLoginInformation: {password: "string", username: "string"}, clusterId: "string", dataControllerId: "string", endTime: "string", extensionId: "string", k8sRaw: {spec: {replicas: "${int}", scheduling: {default: {resources: {limits: {}, requests: {}}}}}}, lastUploadedDate: "string", licenseType: "string", startTime: "string"}, sku: {capacity: "${int}", dev: "${bool}", family: "string", name: "vCore", size: "string", tier: "string"}, extendedLocation: {name: "string", type: "CustomLocation"}}
    );
  }
}
