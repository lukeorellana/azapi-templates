import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersStorageaccountcredentialsProps extends IAzAPIBaseProps {

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
