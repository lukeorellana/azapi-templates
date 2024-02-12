import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlServersConfigurationsProps extends IAzAPIBaseProps {

}

/**
 * DbformysqlServersConfigurations resource
 */
export class DbformysqlServersConfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlServersConfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMySQL/servers/configurations@2017-12-01";
  }

  protected getResourceBody(props: DbformysqlServersConfigurationsProps): string {
    return JSON.stringify(
        {properties: {source: "string", value: "string"}}
    );
  }
}
