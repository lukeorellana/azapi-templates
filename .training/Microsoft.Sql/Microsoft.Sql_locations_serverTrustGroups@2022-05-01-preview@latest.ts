import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlLocationsServertrustgroupsProps extends IAzAPIBaseProps {

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
