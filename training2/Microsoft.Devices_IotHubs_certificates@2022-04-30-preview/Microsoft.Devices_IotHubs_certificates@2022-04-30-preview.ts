import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevicesIothubsCertificatesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:IotHubs;

/**
   * The certificate content
   */
readonly certificate?: string;

/**
   * Determines whether certificate has been verified.
   */
readonly isVerified?: bool;
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
