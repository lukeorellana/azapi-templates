import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CostmanagementExternalsubscriptionsProps extends IAzAPIBaseProps {

}

/**
 * CostmanagementExternalsubscriptions resource
 */
export class CostmanagementExternalsubscriptions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CostmanagementExternalsubscriptionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CostManagement/externalSubscriptions@2019-03-01-preview";
  }

  protected getResourceBody(props: CostmanagementExternalsubscriptionsProps): string {
    return JSON.stringify(
        
    );
  }
}
