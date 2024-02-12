import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciClustersArcsettingsProps extends IAzAPIBaseProps {

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
