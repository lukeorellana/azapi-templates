import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersExtendedinformationProps extends IAzAPIBaseProps {

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
