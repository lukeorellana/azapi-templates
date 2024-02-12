import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:videoAnalyzers;

/**
   * Authentication method to be used when validating client API access.
   */
readonly authentication?: AuthenticationBase;

/**
   * Defines the access level granted by this policy.
   */
readonly role?: 'Reader';

/**
   * Set the object type
   */
readonly @type: #Microsoft.VideoAnalyzer.JwtAuthentication;

/**
   * The discriminator for derived types.
   */
readonly @type: '#Microsoft.VideoAnalyzer.JwtAuthentication';

/**
   * List of expected token audiences. Token audience is valid if it matches at least one of the given values.
   */
readonly audiences?: string[];

/**
   * List of additional token claims to be validated. Token must contains all claims and respective values for it to be valid.
   */
readonly claims?: TokenClaim[];

/**
   * List of expected token issuers. Token issuer is valid if it matches at least one of the given values.
   */
readonly issuers?: string[];

/**
   * List of keys which can be used to validate access tokens. Having multiple keys allow for seamless key rotation of the token signing key. Token signature must match exactly one key.
   */
readonly keys?: TokenKey[];

/**
   * Expected value of the claim to be present on the token.
   */
readonly value: string;

/**
   * JWT token key id. Validation keys are looked up based on the key id present on the JWT token header.
   */
readonly kid: string;

/**
   * Set the object type
   */
readonly @type: #Microsoft.VideoAnalyzer.EccTokenKey#Microsoft.VideoAnalyzer.RsaTokenKey;

/**
   * The discriminator for derived types.
   */
readonly @type: '#Microsoft.VideoAnalyzer.EccTokenKey';

/**
   * Elliptical curve algorithm to be used: ES256, ES384 or ES512.
   */
readonly alg: 'ES256''ES384''ES512';

/**
   * X coordinate.
   */
readonly x: string;

/**
   * Y coordinate.
   */
readonly y: string;

/**
   * The discriminator for derived types.
   */
readonly @type: '#Microsoft.VideoAnalyzer.RsaTokenKey';

/**
   * RSA algorithm to be used: RS256, RS384 or RS512.
   */
readonly alg: 'RS256''RS384''RS512';

/**
   * RSA public key exponent.
   */
readonly e: string;

/**
   * RSA public key modulus.
   */
readonly n: string;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
