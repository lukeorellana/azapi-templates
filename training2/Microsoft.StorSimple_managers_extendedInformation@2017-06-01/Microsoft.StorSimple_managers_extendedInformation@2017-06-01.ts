import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersExtendedinformationProps extends IAzAPIBaseProps {
/**
   * The Kind of the object. Currently only Series8000 is supported
   */
readonly kind?: 'Series8000';

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managers;

/**
   * The etag of the resource.
   */
readonly etag?: string;

/**
   * Represents the encryption algorithm used to encrypt the keys. None - if Key is saved in plain text format. Algorithm name - if key is encrypted
   */
readonly algorithm: string;

/**
   * Represents the CEK of the resource.
   */
readonly encryptionKey?: string;

/**
   * Represents the Cert thumbprint that was used to encrypt the CEK.
   */
readonly encryptionKeyThumbprint?: string;

/**
   * Represents the CIK of the resource.
   */
readonly integrityKey: string;

/**
   * Represents the portal thumbprint which can be used optionally to encrypt the entire data before storing it.
   */
readonly portalCertificateThumbprint?: string;

/**
   * The version of the extended info being persisted.
   */
readonly version?: string;
}

/**
 * StorsimpleManagersExtendedinformation resource
 */
export class StorsimpleManagersExtendedinformation extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersExtendedinformationProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/extendedInformation@2017-06-01";
  }

  protected getResourceBody(props: StorsimpleManagersExtendedinformationProps): string {
    return JSON.stringify(
        {properties: {algorithm: "string", encryptionKey: "string", encryptionKeyThumbprint: "string", integrityKey: "string", portalCertificateThumbprint: "string", version: "string"}, kind: "Series8000", etag: "string"}
    );
  }
}
