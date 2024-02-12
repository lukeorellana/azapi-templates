import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesDistributedavailabilitygroupsProps extends IAzAPIBaseProps {

}

/**
 * SqlManagedinstancesDistributedavailabilitygroups resource
 */
export class SqlManagedinstancesDistributedavailabilitygroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesDistributedavailabilitygroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/distributedAvailabilityGroups@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesDistributedavailabilitygroupsProps): string {
    return JSON.stringify(
        {properties: {primaryAvailabilityGroupName: "string", replicationMode: "string", secondaryAvailabilityGroupName: "string", sourceEndpoint: "string", targetDatabase: "string"}}
    );
  }
}
