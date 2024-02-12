import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciClustersProps extends IAzAPIBaseProps {

}

/**
 * AzurestackhciClusters resource
 */
export class AzurestackhciClusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciClustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/clusters@2022-12-01";
  }

  protected getResourceBody(props: AzurestackhciClustersProps): string {
    return JSON.stringify(
        {properties: {aadApplicationObjectId: "string", aadClientId: "string", aadServicePrincipalObjectId: "string", aadTenantId: "string", cloudManagementEndpoint: "string", desiredProperties: {diagnosticLevel: "string", windowsServerSubscription: "string"}, softwareAssuranceProperties: {softwareAssuranceIntent: "string", softwareAssuranceStatus: "string"}}}
    );
  }
}
