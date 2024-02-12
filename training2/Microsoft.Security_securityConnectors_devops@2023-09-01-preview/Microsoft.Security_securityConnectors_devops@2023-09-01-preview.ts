import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecuritySecurityconnectorsDevopsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:securityConnectors;

/**
   * Authorization payload.
   */
readonly authorization?: Authorization;

/**
   * AutoDiscovery states.
   */
readonly autoDiscovery?: 'Disabled''Enabled''NotApplicable';

/**
   * The provisioning state of the resource.Pending - Provisioning pending.Failed - Provisioning failed.Succeeded - Successful provisioning.Canceled - Provisioning canceled.PendingDeletion - Deletion pending.DeletionSuccess - Deletion successful.DeletionFailure - Deletion failure.
   */
readonly provisioningState?: 'Canceled''DeletionFailure''DeletionSuccess''Failed''Pending''PendingDeletion''Succeeded';

/**
   * List of top-level inventory to select when AutoDiscovery is disabled.This field is ignored when AutoDiscovery is enabled.
   */
readonly topLevelInventoryList?: string[];

/**
   * Gets or sets one-time OAuth code to exchange for refresh and access tokens.Only used during PUT/PATCH operations. The secret is cleared during GET.
   */
readonly code?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;
}

/**
 * SecuritySecurityconnectorsDevops resource
 */
export class SecuritySecurityconnectorsDevops extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecuritySecurityconnectorsDevopsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/securityConnectors/devops@2023-09-01-preview";
  }

  protected getResourceBody(props: SecuritySecurityconnectorsDevopsProps): string {
    return JSON.stringify(
        {properties: {authorization: {code: "string"}, autoDiscovery: "string", provisioningState: "string", topLevelInventoryList: ["string"]}}
    );
  }
}
