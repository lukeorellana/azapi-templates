import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlLocationsServertrustgroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: locations;

/**
   * Group members information for the server trust group.
   */
readonly groupMembers: ServerInfo[];

/**
   * Trust scope of the server trust group.
   */
readonly trustScopes: String array containing any of:'GlobalTransactions''ServiceBroker';

/**
   * Server Id.
   */
readonly serverId: string;
}

/**
 * SqlLocationsServertrustgroups resource
 */
export class SqlLocationsServertrustgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlLocationsServertrustgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/locations/serverTrustGroups@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlLocationsServertrustgroupsProps): string {
    return JSON.stringify(
        {properties: {groupMembers: [{serverId: "string"}], trustScopes: ["string"]}}
    );
  }
}
