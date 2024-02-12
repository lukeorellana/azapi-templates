import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersStorageaccountcredentialsProps extends IAzAPIBaseProps {
/**
   * The Kind of the object. Currently only Series8000 is supported
   */
readonly kind?: 'Series8000';

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managers;

/**
   * The details of the storage account password.
   */
readonly accessKey?: AsymmetricEncryptedSecret;

/**
   * The storage endpoint
   */
readonly endPoint: string;

/**
   * Signifies whether SSL needs to be enabled or not.
   */
readonly sslStatus: 'Disabled''Enabled';

/**
   * The algorithm used to encrypt "Value".
   */
readonly encryptionAlgorithm: 'AES256''None''RSAES_PKCS1_v_1_5';

/**
   * Thumbprint certificate that was used to encrypt "Value". If the value in unencrypted, it will be null.
   */
readonly encryptionCertThumbprint?: string;

/**
   * The value of the secret.
   */
readonly value: string;
}

/**
 * StorsimpleManagersStorageaccountcredentials resource
 */
export class StorsimpleManagersStorageaccountcredentials extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersStorageaccountcredentialsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/storageAccountCredentials@2017-06-01";
  }

  protected getResourceBody(props: StorsimpleManagersStorageaccountcredentialsProps): string {
    return JSON.stringify(
        {properties: {accessKey: {encryptionAlgorithm: "string", encryptionCertThumbprint: "string", value: "string"}, endPoint: "string", sslStatus: "string"}, kind: "Series8000"}
    );
  }
}
