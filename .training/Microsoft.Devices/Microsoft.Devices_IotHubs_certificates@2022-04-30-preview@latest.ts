import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevicesIothubsCertificatesProps extends IAzAPIBaseProps {

}

/**
 * DevicesIothubsCertificates resource
 */
export class DevicesIothubsCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevicesIothubsCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Devices/IotHubs/certificates@2022-04-30-preview";
  }

  protected getResourceBody(props: DevicesIothubsCertificatesProps): string {
    return JSON.stringify(
        {properties: {certificate: "string", isVerified: "${bool}"}}
    );
  }
}
