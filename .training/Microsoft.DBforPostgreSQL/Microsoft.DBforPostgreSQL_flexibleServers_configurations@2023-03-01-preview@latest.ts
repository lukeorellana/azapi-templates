import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlFlexibleserversConfigurationsProps extends IAzAPIBaseProps {

}

/**
 * DbforpostgresqlFlexibleserversConfigurations resource
 */
export class DbforpostgresqlFlexibleserversConfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlFlexibleserversConfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/flexibleServers/configurations@2023-03-01-preview";
  }

  protected getResourceBody(props: DbforpostgresqlFlexibleserversConfigurationsProps): string {
    return JSON.stringify(
        {properties: {source: "string", value: "string"}}
    );
  }
}
