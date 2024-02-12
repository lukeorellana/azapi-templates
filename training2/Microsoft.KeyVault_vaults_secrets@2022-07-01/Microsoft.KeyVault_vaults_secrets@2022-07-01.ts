import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KeyvaultVaultsSecretsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vaults;

/**
   * The attributes of the secret.
   */
readonly attributes?: SecretAttributes;

/**
   * The content type of the secret.
   */
readonly contentType?: string;

/**
   * The value of the secret. NOTE: 'value' will never be returned from the service, as APIs using this model are is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.
   */
readonly value?: string;

/**
   * Determines whether the object is enabled.
   */
readonly enabled?: bool;

/**
   * Expiry date in seconds since 1970-01-01T00:00:00Z.
   */
readonly exp?: number;

/**
   * Not before date in seconds since 1970-01-01T00:00:00Z.
   */
readonly nbf?: number;
}

/**
 * KeyvaultVaultsSecrets resource
 */
export class KeyvaultVaultsSecrets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KeyvaultVaultsSecretsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KeyVault/vaults/secrets@2022-07-01";
  }

  protected getResourceBody(props: KeyvaultVaultsSecretsProps): string {
    return JSON.stringify(
        {properties: {attributes: {enabled: "${bool}", exp: "${int}", nbf: "${int}"}, contentType: "string", value: "string"}}
    );
  }
}
