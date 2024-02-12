import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersPrincipalassignmentsProps extends IAzAPIBaseProps {

}

/**
 * KustoClustersPrincipalassignments resource
 */
export class KustoClustersPrincipalassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KustoClustersPrincipalassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kusto/clusters/principalAssignments@2023-08-15";
  }

  protected getResourceBody(props: KustoClustersPrincipalassignmentsProps): string {
    return JSON.stringify(
        {properties: {principalId: "string", principalType: "string", role: "string", tenantId: "string"}}
    );
  }
}
