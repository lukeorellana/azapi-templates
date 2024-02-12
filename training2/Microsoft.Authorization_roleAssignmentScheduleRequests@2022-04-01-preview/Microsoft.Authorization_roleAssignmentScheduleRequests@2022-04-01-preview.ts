import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationRoleassignmentschedulerequestsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.This resource type can also be applied to a tenant.For Bicep, usetenant().;

/**
   * The conditions on the role assignment. This limits the resources it can be assigned to. e.g.:@Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
   */
readonly condition?: string;

/**
   * Version of the condition. Currently accepted value is '2.0'
   */
readonly conditionVersion?: string;

/**
   * Justification for the role assignment
   */
readonly justification?: string;

/**
   * The linked role eligibility schedule id - to activate an eligibility.
   */
readonly linkedRoleEligibilityScheduleId?: string;

/**
   * The principal ID.
   */
readonly principalId: string;

/**
   * The type of the role assignment schedule request. Eg: SelfActivate, AdminAssign etc
   */
readonly requestType: 'AdminAssign''AdminExtend''AdminRemove''AdminRenew''AdminUpdate''SelfActivate''SelfDeactivate''SelfExtend''SelfRenew';

/**
   * The role definition ID.
   */
readonly roleDefinitionId: string;

/**
   * Schedule info of the role assignment schedule
   */
readonly scheduleInfo?: RoleAssignmentScheduleRequestPropertiesScheduleInfo;

/**
   * The resultant role assignment schedule id or the role assignment schedule id being updated
   */
readonly targetRoleAssignmentScheduleId?: string;

/**
   * The role assignment schedule instance id being updated
   */
readonly targetRoleAssignmentScheduleInstanceId?: string;

/**
   * Ticket Info of the role assignment
   */
readonly ticketInfo?: RoleAssignmentScheduleRequestPropertiesTicketInfo;

/**
   * Expiration of the role assignment schedule
   */
readonly expiration?: RoleAssignmentScheduleRequestPropertiesScheduleInfoE...;

/**
   * Start DateTime of the role assignment schedule.
   */
readonly startDateTime?: string;

/**
   * Duration of the role assignment schedule in TimeSpan.
   */
readonly duration?: string;

/**
   * End DateTime of the role assignment schedule.
   */
readonly endDateTime?: string;

/**
   * Type of the role assignment schedule expiration
   */
readonly type?: 'AfterDateTime''AfterDuration''NoExpiration';

/**
   * Ticket number for the role assignment
   */
readonly ticketNumber?: string;

/**
   * Ticket system name for the role assignment
   */
readonly ticketSystem?: string;
}

/**
 * AuthorizationRoleassignmentschedulerequests resource
 */
export class AuthorizationRoleassignmentschedulerequests extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationRoleassignmentschedulerequestsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/roleAssignmentScheduleRequests@2022-04-01-preview";
  }

  protected getResourceBody(props: AuthorizationRoleassignmentschedulerequestsProps): string {
    return JSON.stringify(
        {properties: {condition: "string", conditionVersion: "string", justification: "string", linkedRoleEligibilityScheduleId: "string", principalId: "string", requestType: "string", roleDefinitionId: "string", scheduleInfo: {expiration: {duration: "string", endDateTime: "string", type: "string"}, startDateTime: "string"}, targetRoleAssignmentScheduleId: "string", targetRoleAssignmentScheduleInstanceId: "string", ticketInfo: {ticketNumber: "string", ticketSystem: "string"}}}
    );
  }
}
