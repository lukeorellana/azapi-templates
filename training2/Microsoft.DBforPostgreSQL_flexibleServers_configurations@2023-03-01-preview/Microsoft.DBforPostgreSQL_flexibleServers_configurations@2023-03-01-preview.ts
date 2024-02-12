import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlFlexibleserversConfigurationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:flexibleServers;

/**
   * Source of the configuration.
   */
readonly source?: string;

/**
   * Value of the configuration.
   */
readonly value?: string;
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
