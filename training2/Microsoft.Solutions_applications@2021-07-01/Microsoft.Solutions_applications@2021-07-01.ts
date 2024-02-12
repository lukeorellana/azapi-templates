import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SolutionsApplicationsProps extends IAzAPIBaseProps {
/**
   * The SKU of the resource.
   */
readonly sku?: Sku;

/**
   * The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
   */
readonly kind: string;

/**
   * The identity of the resource.
   */
readonly identity?: Identity;

/**
   * ID of the resource that manages this resource.
   */
readonly managedBy?: string;

/**
   * The plan information.
   */
readonly plan?: Plan;

/**
   * The identity type.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with the resource. The user identity dictionary key references will be resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * The product code.
   */
readonly product: string;

/**
   * The promotion code.
   */
readonly promotionCode?: string;

/**
   * The publisher ID.
   */
readonly publisher: string;

/**
   * The plan's version.
   */
readonly version: string;

/**
   * The fully qualified path of managed application definition Id.
   */
readonly applicationDefinitionId?: string;

/**
   * The managed application Jit access policy.
   */
readonly jitAccessPolicy?: ApplicationJitAccessPolicy;

/**
   * The managed resource group Id.
   */
readonly managedResourceGroupId?: string;

/**
   * Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string.
   */
readonly parameters?: For Bicep, you can use theany()function.;

/**
   * Whether the JIT access is enabled.
   */
readonly jitAccessEnabled: bool;

/**
   * JIT approval mode.
   */
readonly jitApprovalMode?: 'AutoApprove''ManualApprove''NotSpecified';

/**
   * The JIT approvers
   */
readonly jitApprovers?: JitApproverDefinition[];

/**
   * The maximum duration JIT access is granted. This is an ISO8601 time period value.
   */
readonly maximumJitAccessDuration?: string;

/**
   * The approver display name.
   */
readonly displayName?: string;

/**
   * The approver service principal Id.
   */
readonly id: string;

/**
   * The approver type.
   */
readonly type?: 'group''user';

/**
   * The SKU capacity.
   */
readonly capacity?: number;

/**
   * The SKU family.
   */
readonly family?: string;

/**
   * The SKU model.
   */
readonly model?: string;

/**
   * The SKU size.
   */
readonly size?: string;

/**
   * The SKU tier.
   */
readonly tier?: string;
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
