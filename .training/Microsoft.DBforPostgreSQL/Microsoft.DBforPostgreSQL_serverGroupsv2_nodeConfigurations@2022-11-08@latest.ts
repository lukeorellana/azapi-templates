import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServergroupsv2NodeconfigurationsProps extends IAzAPIBaseProps {

}

/**
 * DbforpostgresqlServergroupsv2Nodeconfigurations resource
 */
export class DbforpostgresqlServergroupsv2Nodeconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServergroupsv2NodeconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/serverGroupsv2/nodeConfigurations@2022-11-08";
  }

  protected getResourceBody(props: DbforpostgresqlServergroupsv2NodeconfigurationsProps): string {
    return JSON.stringify(
        {properties: {value: "string"}}
    );
  }
}
