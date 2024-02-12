import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesVolumecontainersProps extends IAzAPIBaseProps {
/**
   * The Kind of the object. Currently only Series8000 is supported
   */
readonly kind?: 'Series8000';

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: devices;

/**
   * The bandwidth-rate set on the volume container.
   */
readonly bandWidthRateInMbps?: number;

/**
   * The ID of the bandwidth setting associated with the volume container.
   */
readonly bandwidthSettingId?: string;

/**
   * The key used to encrypt data in the volume container. It is required when property 'EncryptionStatus' is "Enabled".
   */
readonly encryptionKey?: AsymmetricEncryptedSecret;

/**
   * The path ID of storage account associated with the volume container.
   */
readonly storageAccountCredentialId: string;

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
 * StorsimpleManagersDevicesVolumecontainers resource
 */
export class StorsimpleManagersDevicesVolumecontainers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersDevicesVolumecontainersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/devices/volumeContainers@2017-06-01";
  }

  protected getResourceBody(props: StorsimpleManagersDevicesVolumecontainersProps): string {
    return JSON.stringify(
        {properties: {bandWidthRateInMbps: "${int}", bandwidthSettingId: "string", encryptionKey: {encryptionAlgorithm: "string", encryptionCertThumbprint: "string", value: "string"}, storageAccountCredentialId: "string"}, kind: "Series8000"}
    );
  }
}
