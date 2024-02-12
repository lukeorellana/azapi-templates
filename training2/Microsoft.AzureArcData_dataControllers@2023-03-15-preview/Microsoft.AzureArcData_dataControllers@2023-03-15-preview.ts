import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataDatacontrollersProps extends IAzAPIBaseProps {
/**
   * The extendedLocation of the resource.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The type of the extended location.
   */
readonly type?: 'CustomLocation';

/**
   * Deprecated. Azure Arc Data Services data controller no longer expose any endpoint. All traffic are exposed through Kubernetes native API.
   */
readonly basicLoginInformation?: BasicLoginInformation;

/**
   * If a CustomLocation is provided, this contains the ARM id of the connected cluster the custom location belongs to.
   */
readonly clusterId?: string;

/**
   * If a CustomLocation is provided, this contains the ARM id of the extension the custom location belongs to.
   */
readonly extensionId?: string;

/**
   * The infrastructure the data controller is running on.
   */
readonly infrastructure?: 'alibaba''aws''azure''gcp''onpremises''other';

/**
   * The raw kubernetes information
   */
readonly k8sRaw?: For Bicep, you can use theany()function.;

/**
   * Last uploaded date from Kubernetes cluster. Defaults to current date time
   */
readonly lastUploadedDate?: string;

/**
   * Log analytics workspace id and primary key
   */
readonly logAnalyticsWorkspaceConfig?: LogAnalyticsWorkspaceConfig;

/**
   * Login credential for logs dashboard on the Kubernetes cluster.
   */
readonly logsDashboardCredential?: BasicLoginInformation;

/**
   * Login credential for metrics dashboard on the Kubernetes cluster.
   */
readonly metricsDashboardCredential?: BasicLoginInformation;

/**
   * Properties from the Kubernetes data controller
   */
readonly onPremiseProperty?: OnPremiseProperty;

/**
   * Deprecated. Service principal is deprecated in favor of Arc Kubernetes service extension managed identity.
   */
readonly uploadServicePrincipal?: UploadServicePrincipal;

/**
   * Properties on upload watermark.  Mostly timestamp for each upload data type
   */
readonly uploadWatermark?: UploadWatermark;

/**
   * Login password.
   */
readonly password?: string;

/**
   * Login username.
   */
readonly username?: string;

/**
   * Primary key of the workspace
   */
readonly primaryKey?: string;

/**
   * Azure Log Analytics workspace ID
   */
readonly workspaceId?: string;

/**
   * A globally unique ID identifying the associated Kubernetes cluster
   */
readonly id: string;

/**
   * Certificate that contains the Kubernetes cluster public key used to verify signing
   */
readonly publicSigningKey: string;

/**
   * Unique thumbprint returned to customer to verify the certificate being uploaded
   */
readonly signingCertificateThumbprint?: string;

/**
   * Authority for the service principal. Example:https://login.microsoftonline.com/
   */
readonly authority?: string;

/**
   * Client ID of the service principal for uploading data.
   */
readonly clientId?: string;

/**
   * Secret of the service principal
   */
readonly clientSecret?: string;

/**
   * Tenant ID of the service principal.
   */
readonly tenantId?: string;

/**
   * Last uploaded date for logs from kubernetes cluster. Defaults to current date time
   */
readonly logs?: string;

/**
   * Last uploaded date for metrics from kubernetes cluster. Defaults to current date time
   */
readonly metrics?: string;

/**
   * Last uploaded date for usages from kubernetes cluster. Defaults to current date time
   */
readonly usages?: string;
}

/**
 * AzurearcdataDatacontrollers resource
 */
export class AzurearcdataDatacontrollers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataDatacontrollersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/dataControllers@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataDatacontrollersProps): string {
    return JSON.stringify(
        {properties: {basicLoginInformation: {password: "string", username: "string"}, clusterId: "string", extensionId: "string", infrastructure: "string", lastUploadedDate: "string", logAnalyticsWorkspaceConfig: {primaryKey: "string", workspaceId: "string"}, logsDashboardCredential: {password: "string", username: "string"}, metricsDashboardCredential: {password: "string", username: "string"}, onPremiseProperty: {id: "string", publicSigningKey: "string", signingCertificateThumbprint: "string"}, uploadServicePrincipal: {authority: "string", clientId: "string", clientSecret: "string", tenantId: "string"}, uploadWatermark: {logs: "string", metrics: "string", usages: "string"}}, extendedLocation: {name: "string", type: "CustomLocation"}}
    );
  }
}
