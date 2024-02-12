import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationRoleeligibilityschedulerequestsProps extends IAzAPIBaseProps {
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
   * Justification for the role eligibility
   */
readonly justification?: string;

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
   * Schedule info of the role eligibility schedule
   */
readonly scheduleInfo?: RoleEligibilityScheduleRequestPropertiesScheduleInfo;

/**
   * The resultant role eligibility schedule id or the role eligibility schedule id being updated
   */
readonly targetRoleEligibilityScheduleId?: string;

/**
   * The role eligibility schedule instance id being updated
   */
readonly targetRoleEligibilityScheduleInstanceId?: string;

/**
   * Ticket Info of the role eligibility
   */
readonly ticketInfo?: RoleEligibilityScheduleRequestPropertiesTicketInfo;

/**
   * Expiration of the role eligibility schedule
   */
readonly expiration?: RoleEligibilityScheduleRequestPropertiesScheduleInfo...;

/**
   * Start DateTime of the role eligibility schedule.
   */
readonly startDateTime?: string;

/**
   * Duration of the role eligibility schedule in TimeSpan.
   */
readonly duration?: string;

/**
   * End DateTime of the role eligibility schedule.
   */
readonly endDateTime?: string;

/**
   * Type of the role eligibility schedule expiration
   */
readonly type?: 'AfterDateTime''AfterDuration''NoExpiration';

/**
   * Ticket number for the role eligibility
   */
readonly ticketNumber?: string;

/**
   * Ticket system name for the role eligibility
   */
readonly ticketSystem?: string;
}

/**
 * AuthorizationRoleeligibilityschedulerequests resource
 */
export class AuthorizationRoleeligibilityschedulerequests extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationRoleeligibilityschedulerequestsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/roleEligibilityScheduleRequests@2022-04-01-preview";
  }

  protected getResourceBody(props: AuthorizationRoleeligibilityschedulerequestsProps): string {
    return JSON.stringify(
        {properties: {condition: "string", conditionVersion: "string", justification: "string", principalId: "string", requestType: "string", roleDefinitionId: "string", scheduleInfo: {expiration: {duration: "string", endDateTime: "string", type: "string"}, startDateTime: "string"}, targetRoleEligibilityScheduleId: "string", targetRoleEligibilityScheduleInstanceId: "string", ticketInfo: {ticketNumber: "string", ticketSystem: "string"}}}
    );
  }
}
