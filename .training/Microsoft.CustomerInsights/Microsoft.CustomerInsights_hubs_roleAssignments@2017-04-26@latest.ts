import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsRoleassignmentsProps extends IAzAPIBaseProps {

}

/**
 * CustomerinsightsHubsRoleassignments resource
 */
export class CustomerinsightsHubsRoleassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CustomerinsightsHubsRoleassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CustomerInsights/hubs/roleAssignments@2017-04-26";
  }

  protected getResourceBody(props: CustomerinsightsHubsRoleassignmentsProps): string {
    return JSON.stringify(
        {properties: {conflationPolicies: {elements: ["string"], exceptions: ["string"]}, connectors: {elements: ["string"], exceptions: ["string"]}, description: {}, displayName: {}, interactions: {elements: ["string"], exceptions: ["string"]}, kpis: {elements: ["string"], exceptions: ["string"]}, links: {elements: ["string"], exceptions: ["string"]}, principals: [{principalId: "string", principalMetadata: {}, principalType: "string"}], profiles: {elements: ["string"], exceptions: ["string"]}, relationshipLinks: {elements: ["string"], exceptions: ["string"]}, relationships: {elements: ["string"], exceptions: ["string"]}, role: "string", roleAssignments: {elements: ["string"], exceptions: ["string"]}, sasPolicies: {elements: ["string"], exceptions: ["string"]}, segments: {elements: ["string"], exceptions: ["string"]}, views: {elements: ["string"], exceptions: ["string"]}, widgetTypes: {elements: ["string"], exceptions: ["string"]}}}
    );
  }
}
