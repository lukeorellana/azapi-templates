import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PurviewAccountsProps extends IAzAPIBaseProps {

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
