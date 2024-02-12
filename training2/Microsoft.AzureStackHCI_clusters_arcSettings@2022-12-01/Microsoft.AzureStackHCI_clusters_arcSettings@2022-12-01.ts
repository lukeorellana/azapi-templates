import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciClustersArcsettingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:clusters;

/**
   * App id of arc AAD identity.
   */
readonly arcApplicationClientId?: string;

/**
   * Object id of arc AAD identity.
   */
readonly arcApplicationObjectId?: string;

/**
   * Tenant id of arc AAD identity.
   */
readonly arcApplicationTenantId?: string;

/**
   * The resource group that hosts the Arc agents, ie. Hybrid Compute Machine resources.
   */
readonly arcInstanceResourceGroup?: string;

/**
   * Object id of arc AAD service principal.
   */
readonly arcServicePrincipalObjectId?: string;

/**
   * contains connectivity related configuration for ARC resources
   */
readonly connectivityProperties?: For Bicep, you can use theany()function.;
}

/**
 * AzurestackhciClustersArcsettings resource
 */
export class AzurestackhciClustersArcsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciClustersArcsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/clusters/arcSettings@2022-12-01";
  }

  protected getResourceBody(props: AzurestackhciClustersArcsettingsProps): string {
    return JSON.stringify(
        {properties: {arcApplicationClientId: "string", arcApplicationObjectId: "string", arcApplicationTenantId: "string", arcInstanceResourceGroup: "string", arcServicePrincipalObjectId: "string"}}
    );
  }
}
