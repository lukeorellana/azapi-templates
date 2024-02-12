import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CostmanagementSettingsProps extends IAzAPIBaseProps {

}

/**
 * CostmanagementSettings resource
 */
export class CostmanagementSettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CostmanagementSettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CostManagement/settings@2022-10-05-preview";
  }

  protected getResourceBody(props: CostmanagementSettingsProps): string {
    return JSON.stringify(
        {kind: "string", eTag: "string"}
    );
  }
}
