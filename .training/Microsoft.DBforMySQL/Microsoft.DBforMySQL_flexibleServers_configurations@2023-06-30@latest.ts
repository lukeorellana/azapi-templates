import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlFlexibleserversConfigurationsProps extends IAzAPIBaseProps {

}

/**
 * DbformysqlFlexibleserversConfigurations resource
 */
export class DbformysqlFlexibleserversConfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlFlexibleserversConfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMySQL/flexibleServers/configurations@2023-06-30";
  }

  protected getResourceBody(props: DbformysqlFlexibleserversConfigurationsProps): string {
    return JSON.stringify(
        {properties: {currentValue: "string", source: "string", value: "string"}}
    );
  }
}
