import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformariadbServersConfigurationsProps extends IAzAPIBaseProps {

}

/**
 * DbformariadbServersConfigurations resource
 */
export class DbformariadbServersConfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformariadbServersConfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMariaDB/servers/configurations@2018-06-01";
  }

  protected getResourceBody(props: DbformariadbServersConfigurationsProps): string {
    return JSON.stringify(
        {properties: {source: "string", value: "string"}}
    );
  }
}
