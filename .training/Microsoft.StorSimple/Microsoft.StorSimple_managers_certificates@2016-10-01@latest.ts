import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersCertificatesProps extends IAzAPIBaseProps {

}

/**
 * StorsimpleManagersCertificates resource
 */
export class StorsimpleManagersCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/certificates@2016-10-01";
  }

  protected getResourceBody(props: StorsimpleManagersCertificatesProps): string {
    return JSON.stringify(
        {properties: {authType: "string", certificate: "string"}}
    );
  }
}
