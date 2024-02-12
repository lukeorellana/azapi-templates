import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationRoleassignmentsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.This resource type can also be applied to a tenant.For Bicep, usetenant().;

/**
   * The conditions on the role assignment. This limits the resources it can be assigned to. e.g.:@Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
   */
readonly condition?: string;

/**
   * Version of the condition. Currently the only accepted value is '2.0'
   */
readonly conditionVersion?: string;

/**
   * Id of the delegated managed identity resource
   */
readonly delegatedManagedIdentityResourceId?: string;

/**
   * Description of role assignment
   */
readonly description?: string;

/**
   * The principal ID.
   */
readonly principalId: string;

/**
   * The principal type of the assigned principal ID.
   */
readonly principalType?: 'Device''ForeignGroup''Group''ServicePrincipal''User';

/**
   * The role definition ID.
   */
readonly roleDefinitionId: string;
}

/**
 * AuthorizationRoleassignments resource
 */
export class AuthorizationRoleassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationRoleassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/roleAssignments@2022-04-01";
  }

  protected getResourceBody(props: AuthorizationRoleassignmentsProps): string {
    return JSON.stringify(
        {properties: {condition: "string", conditionVersion: "string", delegatedManagedIdentityResourceId: "string", description: "string", principalId: "string", principalType: "string", roleDefinitionId: "string"}}
    );
  }
}
