import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationsmanagementSolutionsProps extends IAzAPIBaseProps {

}

/**
 * OperationsmanagementSolutions resource
 */
export class OperationsmanagementSolutions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationsmanagementSolutionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationsManagement/solutions@2015-11-01-preview";
  }

  protected getResourceBody(props: OperationsmanagementSolutionsProps): string {
    return JSON.stringify(
        {properties: {containedResources: ["string"], referencedResources: ["string"], workspaceResourceId: "string"}, plan: {name: "string", product: "string", promotionCode: "string", publisher: "string"}}
    );
  }
}
