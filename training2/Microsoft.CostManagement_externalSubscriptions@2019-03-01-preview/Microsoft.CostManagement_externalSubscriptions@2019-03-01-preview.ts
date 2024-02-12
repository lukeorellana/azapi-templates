import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CostmanagementExternalsubscriptionsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;
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
