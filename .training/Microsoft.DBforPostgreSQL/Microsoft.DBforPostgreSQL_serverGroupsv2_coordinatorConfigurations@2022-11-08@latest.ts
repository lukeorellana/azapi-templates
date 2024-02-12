import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServergroupsv2CoordinatorconfigurationsProps extends IAzAPIBaseProps {

}

/**
 * DbforpostgresqlServergroupsv2Coordinatorconfigurations resource
 */
export class DbforpostgresqlServergroupsv2Coordinatorconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServergroupsv2CoordinatorconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/serverGroupsv2/coordinatorConfigurations@2022-11-08";
  }

  protected getResourceBody(props: DbforpostgresqlServergroupsv2CoordinatorconfigurationsProps): string {
    return JSON.stringify(
        {properties: {value: "string"}}
    );
  }
}
