import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KeyvaultVaultsKeysProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vaults;

/**
   * The attributes of the key.
   */
readonly attributes?: KeyAttributes;

/**
   * The elliptic curve name. For valid values, see JsonWebKeyCurveName.
   */
readonly curveName?: 'P-256''P-256K''P-384''P-521';

/**
   * 
   */
readonly keyOps?: String array containing any of:'decrypt''encrypt''import''release''sign''unwrapKey''verify''wrapKey';

/**
   * The key size in bits. For example: 2048, 3072, or 4096 for RSA.
   */
readonly keySize?: number;

/**
   * The type of the key. For valid values, see JsonWebKeyType.
   */
readonly kty?: 'EC''EC-HSM''RSA''RSA-HSM';

/**
   * Key release policy in response. It will be used for both output and input. Omitted if empty
   */
readonly release_policy?: KeyReleasePolicy;

/**
   * Key rotation policy in response. It will be used for both output and input. Omitted if empty
   */
readonly rotationPolicy?: RotationPolicy;

/**
   * Determines whether or not the object is enabled.
   */
readonly enabled?: bool;

/**
   * Expiry date in seconds since 1970-01-01T00:00:00Z.
   */
readonly exp?: number;

/**
   * Indicates if the private key can be exported.
   */
readonly exportable?: bool;

/**
   * Not before date in seconds since 1970-01-01T00:00:00Z.
   */
readonly nbf?: number;

/**
   * Content type and version of key release policy
   */
readonly contentType?: string;

/**
   * Blob encoding the policy rules under which the key can be released.
   */
readonly data?: string;

/**
   * The attributes of key rotation policy.
   */
readonly attributes?: KeyRotationPolicyAttributes;

/**
   * The lifetimeActions for key rotation action.
   */
readonly lifetimeActions?: LifetimeAction[];

/**
   * The expiration time for the new key version. It should be in ISO8601 format. Eg: 'P90D', 'P1Y'.
   */
readonly expiryTime?: string;

/**
   * The action of key rotation policy lifetimeAction.
   */
readonly action?: Action;

/**
   * The trigger of key rotation policy lifetimeAction.
   */
readonly trigger?: Trigger;

/**
   * The type of action.
   */
readonly type?: 'notify''rotate';

/**
   * The time duration after key creation to rotate the key. It only applies to rotate. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'.
   */
readonly timeAfterCreate?: string;

/**
   * The time duration before key expiring to rotate or notify. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'.
   */
readonly timeBeforeExpiry?: string;
}

/**
 * KeyvaultVaultsKeys resource
 */
export class KeyvaultVaultsKeys extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KeyvaultVaultsKeysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KeyVault/vaults/keys@2022-07-01";
  }

  protected getResourceBody(props: KeyvaultVaultsKeysProps): string {
    return JSON.stringify(
        {properties: {attributes: {enabled: "${bool}", exp: "${int}", exportable: "${bool}", nbf: "${int}"}, curveName: "string", keyOps: ["string"], keySize: "${int}", kty: "string", release_policy: {contentType: "string", data: "string"}, rotationPolicy: {attributes: {expiryTime: "string"}, lifetimeActions: [{action: {type: "string"}, trigger: {timeAfterCreate: "string", timeBeforeExpiry: "string"}}]}}}
    );
  }
}
