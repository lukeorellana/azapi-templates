import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicelinkerLocationsConnectorsProps extends IAzAPIBaseProps {

}

/**
 * ServicelinkerLocationsConnectors resource
 */
export class ServicelinkerLocationsConnectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicelinkerLocationsConnectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceLinker/locations/connectors@2022-11-01-preview";
  }

  protected getResourceBody(props: ServicelinkerLocationsConnectorsProps): string {
    return JSON.stringify(
        {properties: {authInfo: {authType: "string"}, clientType: "string", configurationInfo: {action: "string", additionalConfigurations: {}, customizedKeys: {}, deleteOrUpdateBehavior: "string"}, publicNetworkSolution: {action: "string", deleteOrUpdateBehavior: "string", firewallRules: {azureServices: "string", callerClientIP: "string", ipRanges: ["string"]}}, scope: "string", secretStore: {keyVaultId: "string", keyVaultSecretName: "string"}, targetService: {type: "string"}, vNetSolution: {deleteOrUpdateBehavior: "string", type: "string"}}}
    );
  }
}
