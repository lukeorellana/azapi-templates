import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersStoragedomainsProps extends IAzAPIBaseProps {

}

/**
 * StorsimpleManagersStoragedomains resource
 */
export class StorsimpleManagersStoragedomains extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersStoragedomainsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/storageDomains@2016-10-01";
  }

  protected getResourceBody(props: StorsimpleManagersStoragedomainsProps): string {
    return JSON.stringify(
        {properties: {encryptionKey: {encryptionAlgorithm: "string", encryptionCertificateThumbprint: "string", value: "string"}, encryptionStatus: "string", storageAccountCredentialIds: ["string"]}}
    );
  }
}
