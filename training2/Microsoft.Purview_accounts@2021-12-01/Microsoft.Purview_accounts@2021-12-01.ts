import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PurviewAccountsProps extends IAzAPIBaseProps {
/**
   * Identity Info on the tracked resource
   */
readonly identity?: Identity;

/**
   * Identity Type
   */
readonly type?: 'None''SystemAssigned''UserAssigned';

/**
   * User Assigned Identities
   */
readonly userAssignedIdentities?: object;

/**
   * Cloud connectors.External cloud identifier used as part of scanning configuration.
   */
readonly cloudConnectors?: CloudConnectors;

/**
   * Gets or sets the state of managed eventhub. If enabled managed eventhub will be created, if disabled the managed eventhub will be removed.
   */
readonly managedEventHubState?: 'Disabled''Enabled''NotSpecified';

/**
   * Gets or sets the managed resource group name
   */
readonly managedResourceGroupName?: string;

/**
   * Gets or sets the public network access for managed resources.
   */
readonly managedResourcesPublicNetworkAccess?: 'Disabled''Enabled''NotSpecified';

/**
   * Gets or sets the public network access.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled''NotSpecified';
}

/**
 * PurviewAccounts resource
 */
export class PurviewAccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PurviewAccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Purview/accounts@2021-12-01";
  }

  protected getResourceBody(props: PurviewAccountsProps): string {
    return JSON.stringify(
        {properties: {cloudConnectors: {}, managedEventHubState: "string", managedResourceGroupName: "string", managedResourcesPublicNetworkAccess: "string", publicNetworkAccess: "string"}}
    );
  }
}
