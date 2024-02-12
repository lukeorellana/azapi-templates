import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BlueprintBlueprintassignmentsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Managed identity for this blueprint assignment.
   */
readonly identity: ManagedServiceIdentity;

/**
   * Azure Active Directory principal ID associated with this Identity.
   */
readonly principalId?: string;

/**
   * ID of the Azure Active Directory.
   */
readonly tenantId?: string;

/**
   * Type of the managed identity.
   */
readonly type: 'None''SystemAssigned''UserAssigned';

/**
   * The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity.
   */
readonly userAssignedIdentities?: object;

/**
   * ID of the published version of a blueprint definition.
   */
readonly blueprintId?: string;

/**
   * Multi-line explain this resource.
   */
readonly description?: string;

/**
   * One-liner string explain this resource.
   */
readonly displayName?: string;

/**
   * Defines how resources deployed by a blueprint assignment are locked.
   */
readonly locks?: AssignmentLockSettings;

/**
   * Blueprint assignment parameter values.
   */
readonly parameters: object;

/**
   * Names and locations of resource group placeholders.
   */
readonly resourceGroups: object;

/**
   * The target subscription scope of the blueprint assignment (format: '/subscriptions/{subscriptionId}'). For management group level assignments, the property is required.
   */
readonly scope?: string;

/**
   * List of AAD principals excluded from blueprint locks. Up to 5 principals are permitted.
   */
readonly excludedPrincipals?: string[];

/**
   * Lock mode.
   */
readonly mode?: 'AllResourcesDoNotDelete''AllResourcesReadOnly''None';
}

/**
 * BlueprintBlueprintassignments resource
 */
export class BlueprintBlueprintassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BlueprintBlueprintassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Blueprint/blueprintAssignments@2018-11-01-preview";
  }

  protected getResourceBody(props: BlueprintBlueprintassignmentsProps): string {
    return JSON.stringify(
        {properties: {blueprintId: "string", description: "string", displayName: "string", locks: {excludedPrincipals: ["string"], mode: "string"}, parameters: {}, resourceGroups: {}, scope: "string"}}
    );
  }
}
