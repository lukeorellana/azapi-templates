import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HealthbotHealthbotsProps extends IAzAPIBaseProps {
/**
   * SKU of the Azure Health Bot.
   */
readonly sku: Sku;

/**
   * The identity of the Azure Health Bot.
   */
readonly identity?: Identity;

/**
   * The identity type. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the Azure Health Bot
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * KeyVault properties for the resource encryption.
   */
readonly keyVaultProperties?: KeyVaultProperties;

/**
   * The name of the key vault key.
   */
readonly keyName: string;

/**
   * The Uri of the key vault.
   */
readonly keyVaultUri: string;

/**
   * The version of the key vault key.
   */
readonly keyVersion?: string;

/**
   * The user assigned identity (ARM resource id) that has access to the key.
   */
readonly userIdentity?: string;
}

/**
 * HealthbotHealthbots resource
 */
export class HealthbotHealthbots extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HealthbotHealthbotsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HealthBot/healthBots@2023-05-01";
  }

  protected getResourceBody(props: HealthbotHealthbotsProps): string {
    return JSON.stringify(
        {properties: {keyVaultProperties: {keyName: "string", keyVaultUri: "string", keyVersion: "string", userIdentity: "string"}}, sku: {name: "string"}}
    );
  }
}
