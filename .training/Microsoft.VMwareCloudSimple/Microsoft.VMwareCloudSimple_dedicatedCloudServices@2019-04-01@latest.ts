import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface VmwarecloudsimpleDedicatedcloudservicesProps extends IAzAPIBaseProps {

}

/**
 * VmwarecloudsimpleDedicatedcloudservices resource
 */
export class VmwarecloudsimpleDedicatedcloudservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: VmwarecloudsimpleDedicatedcloudservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.VMwareCloudSimple/dedicatedCloudServices@2019-04-01";
  }

  protected getResourceBody(props: VmwarecloudsimpleDedicatedcloudservicesProps): string {
    return JSON.stringify(
        {properties: {gatewaySubnet: "string"}}
    );
  }
}
