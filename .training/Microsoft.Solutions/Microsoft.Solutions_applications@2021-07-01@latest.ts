import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SolutionsApplicationsProps extends IAzAPIBaseProps {

}

/**
 * SolutionsApplications resource
 */
export class SolutionsApplications extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SolutionsApplicationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Solutions/applications@2021-07-01";
  }

  protected getResourceBody(props: SolutionsApplicationsProps): string {
    return JSON.stringify(
        {properties: {applicationDefinitionId: "string", jitAccessPolicy: {jitAccessEnabled: "${bool}", jitApprovalMode: "string", jitApprovers: [{displayName: "string", id: "string", type: "string"}], maximumJitAccessDuration: "string"}, managedResourceGroupId: "string"}, sku: {capacity: "${int}", family: "string", model: "string", name: "string", size: "string", tier: "string"}, kind: "string", managedBy: "string", plan: {name: "string", product: "string", promotionCode: "string", publisher: "string", version: "string"}}
    );
  }
}
