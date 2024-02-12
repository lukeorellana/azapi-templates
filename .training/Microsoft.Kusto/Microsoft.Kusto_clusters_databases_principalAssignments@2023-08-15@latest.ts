import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersDatabasesPrincipalassignmentsProps extends IAzAPIBaseProps {

}

/**
 * KustoClustersDatabasesPrincipalassignments resource
 */
export class KustoClustersDatabasesPrincipalassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KustoClustersDatabasesPrincipalassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kusto/clusters/databases/principalAssignments@2023-08-15";
  }

  protected getResourceBody(props: KustoClustersDatabasesPrincipalassignmentsProps): string {
    return JSON.stringify(
        {properties: {principalId: "string", principalType: "string", role: "string", tenantId: "string"}}
    );
  }
}
