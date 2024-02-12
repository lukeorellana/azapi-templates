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
readonly parent?: Symbolic name for resource of type:mediaServices;

/**
   * A description for the Policy.
   */
readonly description?: string;

/**
   * The Key Policy options.
   */
readonly options: ContentKeyPolicyOption[];

/**
   * The key delivery configuration.
   */
readonly configuration: ContentKeyPolicyConfiguration;

/**
   * The requirements that must be met to deliver keys with this configuration
   */
readonly restriction: ContentKeyPolicyRestriction;

/**
   * Set the object type
   */
readonly @odata.type: #Microsoft.Media.ContentKeyPolicyClearKeyConfiguration#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration#Microsoft.Media.ContentKeyPolicyUnknownConfiguration#Microsoft.Media.ContentKeyPolicyWidevineConfiguration;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration';

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration';

/**
   * The key that must be used as FairPlay Application Secret key. This needs to be base64 encoded.
   */
readonly ask: For Bicep, you can use theany()function.;

/**
   * The Base64 representation of FairPlay certificate in PKCS 12 (pfx) format (including private key).
   */
readonly fairPlayPfx: string;

/**
   * The password encrypting FairPlay certificate in PKCS 12 (pfx) format.
   */
readonly fairPlayPfxPassword: string;

/**
   * Offline rental policy
   */
readonly offlineRentalConfiguration?: ContentKeyPolicyFairPlayOfflineRentalConfiguration;

/**
   * The rental and lease key type.
   */
readonly rentalAndLeaseKeyType: 'DualExpiry''PersistentLimited''PersistentUnlimited''Undefined''Unknown';

/**
   * The rental duration. Must be greater than or equal to 0.
   */
readonly rentalDuration: number;

/**
   * Playback duration
   */
readonly playbackDurationSeconds: number;

/**
   * Storage duration
   */
readonly storageDurationSeconds: number;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration';

/**
   * The PlayReady licenses.
   */
readonly licenses: ContentKeyPolicyPlayReadyLicense[];

/**
   * The custom response data.
   */
readonly responseCustomData?: string;

/**
   * A flag indicating whether test devices can use the license.
   */
readonly allowTestDevices: bool;

/**
   * The begin date of license
   */
readonly beginDate?: string;

/**
   * The content key location.
   */
readonly contentKeyLocation: ContentKeyPolicyPlayReadyContentKeyLocation;

/**
   * The PlayReady content type.
   */
readonly contentType: 'UltraVioletDownload''UltraVioletStreaming''Unknown''Unspecified';

/**
   * The expiration date of license.
   */
readonly expirationDate?: string;

/**
   * The grace period of license.
   */
readonly gracePeriod?: string;

/**
   * The license type.
   */
readonly licenseType: 'NonPersistent''Persistent''Unknown';

/**
   * The license PlayRight
   */
readonly playRight?: ContentKeyPolicyPlayReadyPlayRight;

/**
   * The relative begin date of license.
   */
readonly relativeBeginDate?: string;

/**
   * The relative expiration date of license.
   */
readonly relativeExpirationDate?: string;

/**
   * The security level.
   */
readonly securityLevel?: 'SL150''SL2000''SL3000''Unknown';

/**
   * Set the object type
   */
readonly @odata.type: #Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader';

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier';

/**
   * The content key ID.
   */
readonly keyId: string;

/**
   * Configures Automatic Gain Control (AGC) and Color Stripe in the license. Must be between 0 and 3 inclusive.
   */
readonly agcAndColorStripeRestriction?: number;

/**
   * Configures Unknown output handling settings of the license.
   */
readonly allowPassingVideoContentToUnknownOutput: 'Allowed''AllowedWithVideoConstriction''NotAllowed''Unknown';

/**
   * Specifies the output protection level for compressed digital audio.
   */
readonly analogVideoOpl?: number;

/**
   * Specifies the output protection level for compressed digital audio.
   */
readonly compressedDigitalAudioOpl?: number;

/**
   * Specifies the output protection level for compressed digital video.
   */
readonly compressedDigitalVideoOpl?: number;

/**
   * Enables the Image Constraint For Analog Component Video Restriction in the license.
   */
readonly digitalVideoOnlyContentRestriction: bool;

/**
   * Configures the Explicit Analog Television Output Restriction in the license. Configuration data must be between 0 and 3 inclusive.
   */
readonly explicitAnalogTelevisionOutputRestriction?: ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRes...;

/**
   * The amount of time that the license is valid after the license is first used to play content.
   */
readonly firstPlayExpiration?: string;

/**
   * Enables the Image Constraint For Analog Component Video Restriction in the license.
   */
readonly imageConstraintForAnalogComponentVideoRestriction: bool;

/**
   * Enables the Image Constraint For Analog Component Video Restriction in the license.
   */
readonly imageConstraintForAnalogComputerMonitorRestriction: bool;

/**
   * Configures the Serial Copy Management System (SCMS) in the license. Must be between 0 and 3 inclusive.
   */
readonly scmsRestriction?: number;

/**
   * Specifies the output protection level for uncompressed digital audio.
   */
readonly uncompressedDigitalAudioOpl?: number;

/**
   * Specifies the output protection level for uncompressed digital video.
   */
readonly uncompressedDigitalVideoOpl?: number;

/**
   * Indicates whether this restriction is enforced on a Best Effort basis.
   */
readonly bestEffort: bool;

/**
   * Configures the restriction control bits. Must be between 0 and 3 inclusive.
   */
readonly configurationData: number;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.ContentKeyPolicyUnknownConfiguration';

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.ContentKeyPolicyWidevineConfiguration';

/**
   * The Widevine template.
   */
readonly widevineTemplate: string;

/**
   * Set the object type
   */
readonly @odata.type: #Microsoft.Media.ContentKeyPolicyOpenRestriction#Microsoft.Media.ContentKeyPolicyTokenRestriction#Microsoft.Media.ContentKeyPolicyUnknownRestriction;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.ContentKeyPolicyOpenRestriction';

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.ContentKeyPolicyTokenRestriction';

/**
   * A list of alternative verification keys.
   */
readonly alternateVerificationKeys?: ContentKeyPolicyRestrictionTokenKey[];

/**
   * The audience for the token.
   */
readonly audience: string;

/**
   * The token issuer.
   */
readonly issuer: string;

/**
   * The OpenID connect discovery document.
   */
readonly openIdConnectDiscoveryDocument?: string;

/**
   * The primary verification key.
   */
readonly primaryVerificationKey: ContentKeyPolicyRestrictionTokenKey;

/**
   * A list of required token claims.
   */
readonly requiredClaims?: ContentKeyPolicyTokenClaim[];

/**
   * The type of token.
   */
readonly restrictionTokenType: 'Jwt''Swt''Unknown';

/**
   * Set the object type
   */
readonly @odata.type: #Microsoft.Media.ContentKeyPolicyRsaTokenKey#Microsoft.Media.ContentKeyPolicySymmetricTokenKey#Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.ContentKeyPolicyRsaTokenKey';

/**
   * The RSA Parameter exponent
   */
readonly exponent: For Bicep, you can use theany()function.;

/**
   * The RSA Parameter modulus
   */
readonly modulus: For Bicep, you can use theany()function.;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey';

/**
   * The key value of the key
   */
readonly keyValue: For Bicep, you can use theany()function.;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey';

/**
   * The raw data field of a certificate in PKCS 12 format (X509Certificate2 in .NET)
   */
readonly rawBody: For Bicep, you can use theany()function.;

/**
   * Token claim type.
   */
readonly claimType?: string;

/**
   * Token claim value.
   */
readonly claimValue?: string;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.ContentKeyPolicyUnknownRestriction';
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
