import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterProjectsEnvironmenttypesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:projects;

/**
   * Managed identity properties
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: object;

/**
   * The role definition assigned to the environment creator on backing resources.
   */
readonly creatorRoleAssignment?: ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAss...;

/**
   * Id of a subscription that the environment type will be mapped to. The environment's resources will be deployed into this subscription.
   */
readonly deploymentTargetId?: string;

/**
   * Defines whether this Environment Type can be used in this Project.
   */
readonly status?: 'Disabled''Enabled';

/**
   * Role Assignments created on environment backing resources. This is a mapping from a user object ID to an object of role definition IDs.
   */
readonly userRoleAssignments?: object;

/**
   * A map of roles to assign to the environment creator.
   */
readonly roles?: object;
}

/**
 * DevcenterProjectsEnvironmenttypes resource
 */
export class DevcenterProjectsEnvironmenttypes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevcenterProjectsEnvironmenttypesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevCenter/projects/environmentTypes@2023-04-01";
  }

  protected getResourceBody(props: DevcenterProjectsEnvironmenttypesProps): string {
    return JSON.stringify(
        {properties: {creatorRoleAssignment: {roles: {}}, deploymentTargetId: "string", status: "string", userRoleAssignments: {}}}
    );
  }
}
