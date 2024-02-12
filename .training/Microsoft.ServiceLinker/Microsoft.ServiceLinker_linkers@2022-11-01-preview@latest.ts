import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicelinkerLinkersProps extends IAzAPIBaseProps {

}

/**
 * ServicelinkerLinkers resource
 */
export class ServicelinkerLinkers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicelinkerLinkersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceLinker/linkers@2022-11-01-preview";
  }

  protected getResourceBody(props: ServicelinkerLinkersProps): string {
    return JSON.stringify(
        {properties: {authInfo: {authType: "string"}, clientType: "string", configurationInfo: {action: "string", additionalConfigurations: {}, customizedKeys: {}, deleteOrUpdateBehavior: "string"}, publicNetworkSolution: {action: "string", deleteOrUpdateBehavior: "string", firewallRules: {azureServices: "string", callerClientIP: "string", ipRanges: ["string"]}}, scope: "string", secretStore: {keyVaultId: "string", keyVaultSecretName: "string"}, targetService: {type: "string"}, vNetSolution: {deleteOrUpdateBehavior: "string", type: "string"}}}
    );
  }
}
