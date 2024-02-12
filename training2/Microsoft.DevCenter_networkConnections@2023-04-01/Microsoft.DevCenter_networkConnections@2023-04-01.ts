import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterNetworkconnectionsProps extends IAzAPIBaseProps {
/**
   * AAD Join type.
   */
readonly domainJoinType: 'AzureADJoin''HybridAzureADJoin';

/**
   * Active Directory domain name
   */
readonly domainName?: string;

/**
   * The password for the account used to join domain
   */
readonly domainPassword?: string;

/**
   * The username of an Active Directory account (user or service account) that has permissions to create computer objects in Active Directory. Required format: admin@contoso.com.
   */
readonly domainUsername?: string;

/**
   * The name for resource group where NICs will be placed.
   */
readonly networkingResourceGroupName?: string;

/**
   * Active Directory domain Organization Unit (OU)
   */
readonly organizationUnit?: string;

/**
   * The subnet to attach Virtual Machines to
   */
readonly subnetId?: string;
}

/**
 * DevcenterNetworkconnections resource
 */
export class DevcenterNetworkconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevcenterNetworkconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevCenter/networkConnections@2023-04-01";
  }

  protected getResourceBody(props: DevcenterNetworkconnectionsProps): string {
    return JSON.stringify(
        {properties: {domainJoinType: "string", domainName: "string", domainPassword: "string", domainUsername: "string", networkingResourceGroupName: "string", organizationUnit: "string", subnetId: "string"}}
    );
  }
}
