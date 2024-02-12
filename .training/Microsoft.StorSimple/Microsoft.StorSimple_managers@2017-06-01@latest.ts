import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersProps extends IAzAPIBaseProps {

}

/**
 * StorsimpleManagers resource
 */
export class StorsimpleManagers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers@2017-06-01";
  }

  protected getResourceBody(props: StorsimpleManagersProps): string {
    return JSON.stringify(
        {properties: {cisIntrinsicSettings: {type: "string"}, provisioningState: "string", sku: {name: "Standard"}}, etag: "string"}
    );
  }
}
