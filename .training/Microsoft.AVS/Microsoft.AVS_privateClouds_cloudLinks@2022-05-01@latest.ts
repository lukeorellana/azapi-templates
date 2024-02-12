import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsCloudlinksProps extends IAzAPIBaseProps {

}

/**
 * AvsPrivatecloudsCloudlinks resource
 */
export class AvsPrivatecloudsCloudlinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsCloudlinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/cloudLinks@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsCloudlinksProps): string {
    return JSON.stringify(
        {properties: {linkedCloud: "string"}}
    );
  }
}
