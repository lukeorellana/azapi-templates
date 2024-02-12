import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevicesProvisioningservicesCertificatesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:provisioningServices;

/**
   * base-64 representation of X509 certificate .cer file or just .pem file content.
   */
readonly certificate?: For Bicep, you can use theany()function.;

/**
   * Determines whether certificate has been verified.
   */
readonly isVerified?: bool;
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
