import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsRoleassignmentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:hubs;

/**
   * Widget types set for the assignment.
   */
readonly conflationPolicies?: ResourceSetDescription;

/**
   * Connectors set for the assignment.
   */
readonly connectors?: ResourceSetDescription;

/**
   * Localized description for the metadata.
   */
readonly description?: object;

/**
   * Localized display names for the metadata.
   */
readonly displayName?: object;

/**
   * Interactions set for the assignment.
   */
readonly interactions?: ResourceSetDescription;

/**
   * Kpis set for the assignment.
   */
readonly kpis?: ResourceSetDescription;

/**
   * Links set for the assignment.
   */
readonly links?: ResourceSetDescription;

/**
   * The principals being assigned to.
   */
readonly principals: AssignmentPrincipal[];

/**
   * Profiles set for the assignment.
   */
readonly profiles?: ResourceSetDescription;

/**
   * The Role assignments set for the relationship links.
   */
readonly relationshipLinks?: ResourceSetDescription;

/**
   * The Role assignments set for the relationships.
   */
readonly relationships?: ResourceSetDescription;

/**
   * Type of roles.
   */
readonly role: 'Admin''DataAdmin''DataReader''ManageAdmin''ManageReader''Reader';

/**
   * The Role assignments set for the assignment.
   */
readonly roleAssignments?: ResourceSetDescription;

/**
   * Sas Policies set for the assignment.
   */
readonly sasPolicies?: ResourceSetDescription;

/**
   * The Role assignments set for the assignment.
   */
readonly segments?: ResourceSetDescription;

/**
   * Views set for the assignment.
   */
readonly views?: ResourceSetDescription;

/**
   * Widget types set for the assignment.
   */
readonly widgetTypes?: ResourceSetDescription;

/**
   * The elements included in the set.
   */
readonly elements?: string[];

/**
   * The elements that are not included in the set, in case elements contains '*' indicating 'all'.
   */
readonly exceptions?: string[];

/**
   * The principal id being assigned to.
   */
readonly principalId: string;

/**
   * Other metadata for the principal.
   */
readonly principalMetadata?: object;

/**
   * The Type of the principal ID.
   */
readonly principalType: string;
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
