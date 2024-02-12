import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApicenterServicesProps extends IAzAPIBaseProps {

}

/**
 * ApicenterServices resource
 */
export class ApicenterServices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApicenterServicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiCenter/services@2024-03-01";
  }

  protected getResourceBody(props: ApicenterServicesProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
