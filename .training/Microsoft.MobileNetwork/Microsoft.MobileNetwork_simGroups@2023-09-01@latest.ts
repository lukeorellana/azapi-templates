import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkSimgroupsProps extends IAzAPIBaseProps {

}

/**
 * MobilenetworkSimgroups resource
 */
export class MobilenetworkSimgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MobilenetworkSimgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MobileNetwork/simGroups@2023-09-01";
  }

  protected getResourceBody(props: MobilenetworkSimgroupsProps): string {
    return JSON.stringify(
        {properties: {encryptionKey: {keyUrl: "string"}, mobileNetwork: {id: "string"}}}
    );
  }
}
