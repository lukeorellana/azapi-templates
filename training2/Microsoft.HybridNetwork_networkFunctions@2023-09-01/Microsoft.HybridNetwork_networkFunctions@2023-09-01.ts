import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkNetworkfunctionsProps extends IAzAPIBaseProps {
/**
   * A unique read-only string that changes whenever the resource is updated.
   */
readonly etag?: string;

/**
   * The managed identity of the network function.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: UserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentity;

/**
   * Indicates if software updates are allowed during deployment.
   */
readonly allowSoftwareUpdate?: bool;

/**
   * The network function definition version resource reference.
   */
readonly networkFunctionDefinitionVersionResourceReference?: DeploymentResourceIdReference;

/**
   * The nfviId for the network function.
   */
readonly nfviId?: string;

/**
   * The nfvi type for the network function.
   */
readonly nfviType?: 'AzureArcKubernetes''AzureCore''AzureOperatorNexus''Unknown';

/**
   * The role configuration override values from the user.
   */
readonly roleOverrideValues?: string[];

/**
   * Set the object type
   */
readonly configurationType: OpenSecret;

/**
   * Set the object type
   */
readonly idType: OpenSecret;

/**
   * The resource reference arm id type.
   */
readonly idType: 'Open';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The resource reference arm id type.
   */
readonly idType: 'Secret';

/**
   * Resource ID.
   */
readonly id?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * The value which indicates if NF  values are secrets
   */
readonly configurationType: 'Open';

/**
   * The JSON-serialized deployment values from the user.
   */
readonly deploymentValues?: string;

/**
   * The value which indicates if NF  values are secrets
   */
readonly configurationType: 'Secret';

/**
   * The JSON-serialized secret deployment values from the user. This contains secrets like passwords,keys etc
   */
readonly secretDeploymentValues?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;
}

/**
 * HybridnetworkNetworkfunctions resource
 */
export class HybridnetworkNetworkfunctions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkNetworkfunctionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/networkFunctions@2023-09-01";
  }

  protected getResourceBody(props: HybridnetworkNetworkfunctionsProps): string {
    return JSON.stringify(
        {properties: {allowSoftwareUpdate: "${bool}", networkFunctionDefinitionVersionResourceReference: {idType: "string"}, nfviId: "string", nfviType: "string", roleOverrideValues: ["string"], configurationType: "string"}, etag: "string"}
    );
  }
}
