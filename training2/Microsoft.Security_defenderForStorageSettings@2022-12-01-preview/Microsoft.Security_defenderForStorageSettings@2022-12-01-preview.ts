import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityDefenderforstoragesettingsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Indicates whether Defender for Storage is enabled on this storage account.
   */
readonly isEnabled?: bool;

/**
   * Properties of Malware Scanning.
   */
readonly malwareScanning?: MalwareScanningProperties;

/**
   * Indicates whether the settings defined for this storage account should override the settings defined for the subscription.
   */
readonly overrideSubscriptionLevelSettings?: bool;

/**
   * Properties of Sensitive Data Discovery.
   */
readonly sensitiveDataDiscovery?: SensitiveDataDiscoveryProperties;

/**
   * Properties of On Upload malware scanning.
   */
readonly onUpload?: OnUploadProperties;

/**
   * Optional. Resource id of an Event Grid Topic to send scan results to.
   */
readonly scanResultsEventGridTopicResourceId?: string;

/**
   * Defines the max GB to be scanned per Month. Set to -1 if no capping is needed.
   */
readonly capGBPerMonth?: number;

/**
   * Indicates whether On Upload malware scanning should be enabled.
   */
readonly isEnabled?: bool;

/**
   * Indicates whether Sensitive Data Discovery should be enabled.
   */
readonly isEnabled?: bool;
}

/**
 * SecurityDefenderforstoragesettings resource
 */
export class SecurityDefenderforstoragesettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityDefenderforstoragesettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/defenderForStorageSettings@2022-12-01-preview";
  }

  protected getResourceBody(props: SecurityDefenderforstoragesettingsProps): string {
    return JSON.stringify(
        {properties: {isEnabled: "${bool}", malwareScanning: {onUpload: {capGBPerMonth: "${int}", isEnabled: "${bool}"}, scanResultsEventGridTopicResourceId: "string"}, overrideSubscriptionLevelSettings: "${bool}", sensitiveDataDiscovery: {isEnabled: "${bool}"}}}
    );
  }
}
