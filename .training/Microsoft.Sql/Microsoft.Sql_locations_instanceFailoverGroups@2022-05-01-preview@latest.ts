import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlLocationsInstancefailovergroupsProps extends IAzAPIBaseProps {

}

/**
 * SqlLocationsInstancefailovergroups resource
 */
export class SqlLocationsInstancefailovergroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlLocationsInstancefailovergroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/locations/instanceFailoverGroups@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlLocationsInstancefailovergroupsProps): string {
    return JSON.stringify(
        {properties: {managedInstancePairs: [{partnerManagedInstanceId: "string", primaryManagedInstanceId: "string"}], partnerRegions: [{location: "string"}], readWriteEndpoint: {failoverPolicy: "string", failoverWithDataLossGracePeriodMinutes: "${int}"}, secondaryType: "string"}}
    );
  }
}
