import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsAddonsProps extends IAzAPIBaseProps {

}

/**
 * AvsPrivatecloudsAddons resource
 */
export class AvsPrivatecloudsAddons extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsAddonsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/addons@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsAddonsProps): string {
    return JSON.stringify(
        {properties: {addonType: "string"}}
    );
  }
}
