import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationserviceenvironmentsProps extends IAzAPIBaseProps {
/**
   * The sku.
   */
readonly sku?: IntegrationServiceEnvironmentSku;

/**
   * Managed service identity properties.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity. The type 'SystemAssigned' includes an implicitly created identity. The type 'None' will remove any identities from the resource.
   */
readonly type: 'None''SystemAssigned''UserAssigned';

/**
   * The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
   */
readonly userAssignedIdentities?: object;

/**
   * The encryption configuration.
   */
readonly encryptionConfiguration?: IntegrationServiceEnvironmenEncryptionConfiguration;

/**
   * The endpoints configuration.
   */
readonly endpointsConfiguration?: FlowEndponumbersConfiguration;

/**
   * Gets the tracking id.
   */
readonly integrationServiceEnvironmentId?: string;

/**
   * The network configuration.
   */
readonly networkConfiguration?: NetworkConfiguration;

/**
   * The provisioning state.
   */
readonly provisioningState?: 'Accepted''Canceled''Completed''Created''Creating''Deleted''Deleting''Failed''InProgress''Moving''NotSpecified''Pending''Ready''Registered''Registering''Renewing''Running''Succeeded''Unregistered''Unregistering''Updating''Waiting';

/**
   * The integration service environment state.
   */
readonly state?: 'Completed''Deleted''Disabled''Enabled''NotSpecified''Suspended';

/**
   * The encryption key reference.
   */
readonly encryptionKeyReference?: IntegrationServiceEnvironmenEncryptionKeyReference;

/**
   * Gets the key name in the Key Vault.
   */
readonly keyName?: string;

/**
   * The key vault reference.
   */
readonly keyVault?: ResourceReference;

/**
   * Gets the version of the key specified in the keyName property.
   */
readonly keyVersion?: string;

/**
   * The resource id.
   */
readonly id?: string;

/**
   * The connector endpoints.
   */
readonly connector?: FlowEndponumbers;

/**
   * The workflow endpoints.
   */
readonly workflow?: FlowEndponumbers;

/**
   * The access endpoint ip address.
   */
readonly accessEndpointIpAddresses?: IpAddress[];

/**
   * The outgoing ip address.
   */
readonly outgoingIpAddresses?: IpAddress[];

/**
   * The address.
   */
readonly address?: string;

/**
   * The access endpoint.
   */
readonly accessEndpoint?: IntegrationServiceEnvironmentAccessEndponumber;

/**
   * The subnets.
   */
readonly subnets?: ResourceReference[];

/**
   * Gets the virtual network address space.
   */
readonly virtualNetworkAddressSpace?: string;

/**
   * The access endpoint type.
   */
readonly type?: 'External''Internal''NotSpecified';

/**
   * The sku capacity.
   */
readonly capacity?: number;
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
