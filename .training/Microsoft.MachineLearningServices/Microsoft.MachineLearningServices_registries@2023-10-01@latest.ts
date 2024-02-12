import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningservicesRegistriesProps extends IAzAPIBaseProps {

}

/**
 * MachinelearningservicesRegistries resource
 */
export class MachinelearningservicesRegistries extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MachinelearningservicesRegistriesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MachineLearningServices/registries@2023-10-01";
  }

  protected getResourceBody(props: MachinelearningservicesRegistriesProps): string {
    return JSON.stringify(
        {properties: {discoveryUrl: "string", intellectualPropertyPublisher: "string", managedResourceGroup: {resourceId: "string"}, mlFlowRegistryUri: "string", publicNetworkAccess: "string", regionDetails: [{acrDetails: [{systemCreatedAcrAccount: {acrAccountName: "string", acrAccountSku: "string", armResourceId: {resourceId: "string"}}, userCreatedAcrAccount: {armResourceId: {resourceId: "string"}}}], location: "string", storageAccountDetails: [{systemCreatedStorageAccount: {allowBlobPublicAccess: "${bool}", armResourceId: {resourceId: "string"}, storageAccountHnsEnabled: "${bool}", storageAccountName: "string", storageAccountType: "string"}, userCreatedStorageAccount: {armResourceId: {resourceId: "string"}}}]}], registryPrivateEndpointConnections: [{id: "string", location: "string", properties: {groupIds: ["string"], privateEndpoint: {subnetArmId: "string"}, provisioningState: "string", registryPrivateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}]}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}, kind: "string"}
    );
  }
}
