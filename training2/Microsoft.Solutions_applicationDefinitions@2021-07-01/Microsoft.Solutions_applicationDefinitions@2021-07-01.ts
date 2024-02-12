import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SolutionsApplicationdefinitionsProps extends IAzAPIBaseProps {
/**
   * The SKU of the resource.
   */
readonly sku?: Sku;

/**
   * ID of the resource that manages this resource.
   */
readonly managedBy?: string;

/**
   * The collection of managed application artifacts. The portal will use the files specified as artifacts to construct the user experience of creating a managed application from a managed application definition.
   */
readonly artifacts?: ApplicationDefinitionArtifact[];

/**
   * The managed application provider authorizations.
   */
readonly authorizations?: ApplicationAuthorization[];

/**
   * The createUiDefinition json for the backing template with Microsoft.Solutions/applications resource. It can be a JObject or well-formed JSON string.
   */
readonly createUiDefinition?: For Bicep, you can use theany()function.;

/**
   * The managed application deployment policy.
   */
readonly deploymentPolicy?: ApplicationDeploymentPolicy;

/**
   * The managed application definition description.
   */
readonly description?: string;

/**
   * The managed application definition display name.
   */
readonly displayName?: string;

/**
   * A value indicating whether the package is enabled or not.
   */
readonly isEnabled?: bool;

/**
   * The managed application locking policy.
   */
readonly lockingPolicy?: ApplicationPackageLockingPolicyDefinition;

/**
   * The inline main template json which has resources to be provisioned. It can be a JObject or well-formed JSON string.
   */
readonly mainTemplate?: For Bicep, you can use theany()function.;

/**
   * The managed application management policy that determines publisher's access to the managed resource group.
   */
readonly managementPolicy?: ApplicationManagementPolicy;

/**
   * The managed application notification policy.
   */
readonly notificationPolicy?: ApplicationNotificationPolicy;

/**
   * The managed application definition package file Uri. Use this element
   */
readonly packageFileUri?: string;

/**
   * The managed application provider policies.
   */
readonly policies?: ApplicationPolicy[];

/**
   * The storage account id for bring your own storage scenario.
   */
readonly storageAccountId?: string;

/**
   * The managed application definition artifact type.
   */
readonly type: 'Custom''NotSpecified''Template';

/**
   * The managed application definition artifact blob uri.
   */
readonly uri: string;

/**
   * The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the managed application resources.
   */
readonly principalId: string;

/**
   * The provider's role definition identifier. This role will define all the permissions that the provider must have on the managed application's container resource group. This role definition cannot have permission to delete the resource group.
   */
readonly roleDefinitionId: string;

/**
   * The managed application deployment mode.
   */
readonly deploymentMode: 'Complete''Incremental''NotSpecified';

/**
   * The deny assignment excluded actions.
   */
readonly allowedActions?: string[];

/**
   * The deny assignment excluded data actions.
   */
readonly allowedDataActions?: string[];

/**
   * The managed application management mode.
   */
readonly mode?: 'Managed''NotSpecified''Unmanaged';

/**
   * The managed application notification endpoint.
   */
readonly notificationEndpoints: ApplicationNotificationEndponumber[];

/**
   * The managed application notification endpoint uri.
   */
readonly uri: string;

/**
   * The policy parameters.
   */
readonly parameters?: string;

/**
   * The policy definition Id.
   */
readonly policyDefinitionId?: string;

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
 * SolutionsApplicationdefinitions resource
 */
export class SolutionsApplicationdefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SolutionsApplicationdefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Solutions/applicationDefinitions@2021-07-01";
  }

  protected getResourceBody(props: SolutionsApplicationdefinitionsProps): string {
    return JSON.stringify(
        {properties: {artifacts: [{name: "string", type: "string", uri: "string"}], authorizations: [{principalId: "string", roleDefinitionId: "string"}], deploymentPolicy: {deploymentMode: "string"}, description: "string", displayName: "string", isEnabled: "${bool}", lockingPolicy: {allowedActions: ["string"], allowedDataActions: ["string"]}, managementPolicy: {mode: "string"}, notificationPolicy: {notificationEndpoints: [{uri: "string"}]}, packageFileUri: "string", policies: [{name: "string", parameters: "string", policyDefinitionId: "string"}], storageAccountId: "string"}, sku: {capacity: "${int}", family: "string", model: "string", name: "string", size: "string", tier: "string"}, managedBy: "string"}
    );
  }
}
