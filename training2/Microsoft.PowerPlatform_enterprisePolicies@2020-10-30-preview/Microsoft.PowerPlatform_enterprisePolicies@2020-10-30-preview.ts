import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PowerplatformEnterprisepoliciesProps extends IAzAPIBaseProps {
/**
   * The kind (type) of Enterprise Policy.
   */
readonly kind: 'Encryption''Identity''Lockbox''NetworkInjection''PrivateEndponumber';

/**
   * The identity of the EnterprisePolicy.
   */
readonly identity?: EnterprisePolicyIdentity;

/**
   * The type of identity used for the EnterprisePolicy. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.
   */
readonly type?: 'None''SystemAssigned';

/**
   * The encryption settings for a configuration store.
   */
readonly encryption?: PropertiesEncryption;

/**
   * Settings concerning lockbox.
   */
readonly lockbox?: PropertiesLockbox;

/**
   * Settings concerning network injection.
   */
readonly networkInjection?: PropertiesNetworkInjection;

/**
   * Key vault properties.
   */
readonly keyVault?: KeyVaultProperties;

/**
   * The state of onboarding, which only appears in the response.
   */
readonly state?: 'Disabled''Enabled''NotConfigured';

/**
   * Uri of KeyVault
   */
readonly id?: string;

/**
   * Identity of the secret that includes name and version.
   */
readonly key?: KeyProperties;

/**
   * The version of the identity which will be used to access key vault.
   */
readonly version?: string;

/**
   * lockbox configuration
   */
readonly state?: 'Disabled''Enabled''NotConfigured';

/**
   * Network injection configuration
   */
readonly virtualNetworks?: VirtualNetworkPropertiesList;

/**
   * Next page link if any.
   */
readonly nextLink?: string;

/**
   * Array of virtual networks.
   */
readonly value?: VirtualNetworkProperties[];

/**
   * Uri of the virtual network.
   */
readonly id?: string;

/**
   * Properties of a subnet.
   */
readonly subnet?: SubnetProperties;
}

/**
 * PowerplatformEnterprisepolicies resource
 */
export class PowerplatformEnterprisepolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PowerplatformEnterprisepoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.PowerPlatform/enterprisePolicies@2020-10-30-preview";
  }

  protected getResourceBody(props: PowerplatformEnterprisepoliciesProps): string {
    return JSON.stringify(
        {properties: {encryption: {keyVault: {id: "string", key: {name: "string", version: "string"}}, state: "string"}, lockbox: {state: "string"}, networkInjection: {virtualNetworks: {nextLink: "string", value: [{id: "string", subnet: {name: "string"}}]}}}, kind: "string"}
    );
  }
}
