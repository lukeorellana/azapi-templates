import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationsmanagementSolutionsProps extends IAzAPIBaseProps {
/**
   * Plan for solution object supported by the OperationsManagement resource provider.
   */
readonly plan?: SolutionPlan;

/**
   * name of the solution to enabled/add. For Microsoft published gallery solution it should be in the format of OMSGallery/{solutionType}. This is case sensitive
   */
readonly product?: string;

/**
   * promotionCode, Not really used now, can you left as empty
   */
readonly promotionCode?: string;

/**
   * Publisher name. For gallery solution, it is Microsoft.
   */
readonly publisher?: string;

/**
   * The azure resources that will be contained within the solutions. They will be locked and gets deleted automatically when the solution is deleted.
   */
readonly containedResources?: string[];

/**
   * The resources that will be referenced from this solution. Deleting any of those solution out of band will break the solution.
   */
readonly referencedResources?: string[];

/**
   * The azure resourceId for the workspace where the solution will be deployed/enabled.
   */
readonly workspaceResourceId: string;
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
