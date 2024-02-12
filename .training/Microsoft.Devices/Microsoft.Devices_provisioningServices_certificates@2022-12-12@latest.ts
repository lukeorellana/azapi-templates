import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevicesProvisioningservicesCertificatesProps extends IAzAPIBaseProps {

}

/**
 * DevicesProvisioningservicesCertificates resource
 */
export class DevicesProvisioningservicesCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevicesProvisioningservicesCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Devices/provisioningServices/certificates@2022-12-12";
  }

  protected getResourceBody(props: DevicesProvisioningservicesCertificatesProps): string {
    return JSON.stringify(
        {properties: {isVerified: "${bool}"}}
    );
  }
}
