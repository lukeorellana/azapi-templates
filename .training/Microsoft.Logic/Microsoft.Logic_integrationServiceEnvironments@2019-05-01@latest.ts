import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationserviceenvironmentsProps extends IAzAPIBaseProps {

}

/**
 * LogicIntegrationserviceenvironments resource
 */
export class LogicIntegrationserviceenvironments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationserviceenvironmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationServiceEnvironments@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationserviceenvironmentsProps): string {
    return JSON.stringify(
        {properties: {encryptionConfiguration: {encryptionKeyReference: {keyName: "string", keyVault: {id: "string"}, keyVersion: "string"}}, endpointsConfiguration: {connector: {accessEndpointIpAddresses: [{address: "string"}], outgoingIpAddresses: [{address: "string"}]}, workflow: {accessEndpointIpAddresses: [{address: "string"}], outgoingIpAddresses: [{address: "string"}]}}, integrationServiceEnvironmentId: "string", networkConfiguration: {accessEndpoint: {type: "string"}, subnets: [{id: "string"}], virtualNetworkAddressSpace: "string"}, provisioningState: "string", state: "string"}, sku: {capacity: "${int}", name: "string"}}
    );
  }
}
