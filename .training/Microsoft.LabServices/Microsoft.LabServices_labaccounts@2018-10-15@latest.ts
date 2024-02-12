import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabaccountsProps extends IAzAPIBaseProps {

}

/**
 * LabservicesLabaccounts resource
 */
export class LabservicesLabaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LabservicesLabaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.LabServices/labaccounts@2018-10-15";
  }

  protected getResourceBody(props: LabservicesLabaccountsProps): string {
    return JSON.stringify(
        {properties: {enabledRegionSelection: "${bool}", provisioningState: "string", uniqueIdentifier: "string"}}
    );
  }
}
