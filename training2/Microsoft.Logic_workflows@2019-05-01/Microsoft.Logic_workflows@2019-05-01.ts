import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * Managed service identity properties.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity. The type 'SystemAssigned' includes an implicitly created identity. The type 'None' will remove any identities from the resource.
   */
readonly type: 'None''SystemAssigned''UserAssigned';

/**
   * The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
   */
readonly userAssignedIdentities?: object;

/**
   * The access control configuration.
   */
readonly accessControl?: FlowAccessControlConfiguration;

/**
   * The definition. SeeSchema reference for Workflow Definition Language in Azure Logic Apps.
   */
readonly definition?: For Bicep, you can use theany()function.;

/**
   * The endpoints configuration.
   */
readonly endpointsConfiguration?: FlowEndponumbersConfiguration;

/**
   * The integration account.
   */
readonly integrationAccount?: ResourceReference;

/**
   * The integration service environment.
   */
readonly integrationServiceEnvironment?: ResourceReference;

/**
   * The parameters.
   */
readonly parameters?: object;

/**
   * The state.
   */
readonly state?: 'Completed''Deleted''Disabled''Enabled''NotSpecified''Suspended';

/**
   * The access control configuration for workflow actions.
   */
readonly actions?: FlowAccessControlConfigurationPolicy;

/**
   * The access control configuration for accessing workflow run contents.
   */
readonly contents?: FlowAccessControlConfigurationPolicy;

/**
   * The access control configuration for invoking workflow triggers.
   */
readonly triggers?: FlowAccessControlConfigurationPolicy;

/**
   * The access control configuration for workflow management.
   */
readonly workflowManagement?: FlowAccessControlConfigurationPolicy;

/**
   * The allowed caller IP address ranges.
   */
readonly allowedCallerIpAddresses?: IpAddressRange[];

/**
   * The authentication policies for workflow.
   */
readonly openAuthenticationPolicies?: OpenAuthenticationAccessPolicies;

/**
   * The IP address range.
   */
readonly addressRange?: string;

/**
   * Open authentication policies.
   */
readonly policies?: OpenAuthenticationAccessPolicies;

/**
   * The connector endpoints.
   */
readonly connector?: FlowEndponumbers;

/**
   * The workflow endpoints.
   */
readonly workflow?: FlowEndponumbers;

/**
   * The access endpoint ip address.
   */
readonly accessEndpointIpAddresses?: IpAddress[];

/**
   * The outgoing ip address.
   */
readonly outgoingIpAddresses?: IpAddress[];

/**
   * The address.
   */
readonly address?: string;

/**
   * The resource id.
   */
readonly id?: string;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
