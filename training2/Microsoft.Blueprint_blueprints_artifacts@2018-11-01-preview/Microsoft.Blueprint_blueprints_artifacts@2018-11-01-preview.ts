import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BlueprintBlueprintsArtifactsProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: policyAssignmentroleAssignmenttemplate;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:blueprnumbers;

/**
   * Specifies the kind of blueprint artifact.
   */
readonly kind: 'policyAssignment';

/**
   * Artifacts which need to be deployed before the specified artifact.
   */
readonly dependsOn?: string[];

/**
   * Multi-line explain this resource.
   */
readonly description?: string;

/**
   * One-liner string explain this resource.
   */
readonly displayName?: string;

/**
   * Parameter values for the policy definition.
   */
readonly parameters: object;

/**
   * Azure resource ID of the policy definition.
   */
readonly policyDefinitionId: string;

/**
   * Name of the resource group placeholder to which the policy will be assigned.
   */
readonly resourceGroup?: string;

/**
   * Specifies the kind of blueprint artifact.
   */
readonly kind: 'roleAssignment';

/**
   * Artifacts which need to be deployed before the specified artifact.
   */
readonly dependsOn?: string[];

/**
   * Multi-line explain this resource.
   */
readonly description?: string;

/**
   * One-liner string explain this resource.
   */
readonly displayName?: string;

/**
   * Array of user or group identities in Azure Active Directory. The roleDefinition will apply to each identity.
   */
readonly principalIds: For Bicep, you can use theany()function.;

/**
   * RoleAssignment will be scope to this resourceGroup. If empty, it scopes to the subscription.
   */
readonly resourceGroup?: string;

/**
   * Azure resource ID of the RoleDefinition.
   */
readonly roleDefinitionId: string;

/**
   * Specifies the kind of blueprint artifact.
   */
readonly kind: 'template';

/**
   * Artifacts which need to be deployed before the specified artifact.
   */
readonly dependsOn?: string[];

/**
   * Multi-line explain this resource.
   */
readonly description?: string;

/**
   * One-liner string explain this resource.
   */
readonly displayName?: string;

/**
   * Resource Manager template blueprint artifact parameter values.
   */
readonly parameters: object;

/**
   * If applicable, the name of the resource group placeholder to which the Resource Manager template blueprint artifact will be deployed.
   */
readonly resourceGroup?: string;

/**
   * The Resource Manager template blueprint artifact body.
   */
readonly template: For Bicep, you can use theany()function.;
}

/**
 * BlueprintBlueprintsArtifacts resource
 */
export class BlueprintBlueprintsArtifacts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BlueprintBlueprintsArtifactsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Blueprint/blueprints/artifacts@2018-11-01-preview";
  }

  protected getResourceBody(props: BlueprintBlueprintsArtifactsProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
