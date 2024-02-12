import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesChapsettingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: devices;

/**
   * The chap password.
   */
readonly password: AsymmetricEncryptedSecret;

/**
   * Algorithm used to encrypt "Value"
   */
readonly encryptionAlgorithm: 'AES256''None''RSAES_PKCS1_v_1_5';

/**
   * Thumbprint certificate that was used to encrypt "Value"
   */
readonly encryptionCertificateThumbprint?: string;

/**
   * The value of the secret itself. If the secret is in plaintext then EncryptionAlgorithm will be none and EncryptionCertThumbprint will be null.
   */
readonly value: string;
}

/**
 * StorsimpleManagersDevicesChapsettings resource
 */
export class StorsimpleManagersDevicesChapsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersDevicesChapsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/devices/chapSettings@2016-10-01";
  }

  protected getResourceBody(props: StorsimpleManagersDevicesChapsettingsProps): string {
    return JSON.stringify(
        {properties: {password: {encryptionAlgorithm: "string", encryptionCertificateThumbprint: "string", value: "string"}}}
    );
  }
}
