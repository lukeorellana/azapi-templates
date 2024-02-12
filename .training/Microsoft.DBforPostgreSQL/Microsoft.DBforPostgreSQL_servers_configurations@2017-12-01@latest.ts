import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServersConfigurationsProps extends IAzAPIBaseProps {

}

/**
 * DbforpostgresqlServersConfigurations resource
 */
export class DbforpostgresqlServersConfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServersConfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/servers/configurations@2017-12-01";
  }

  protected getResourceBody(props: DbforpostgresqlServersConfigurationsProps): string {
    return JSON.stringify(
        {properties: {source: "string", value: "string"}}
    );
  }
}
