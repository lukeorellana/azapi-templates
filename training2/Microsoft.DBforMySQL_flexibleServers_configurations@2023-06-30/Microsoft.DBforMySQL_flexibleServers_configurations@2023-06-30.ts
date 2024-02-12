import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlFlexibleserversConfigurationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:flexibleServers;

/**
   * Current value of the configuration.
   */
readonly currentValue?: string;

/**
   * Source of the configuration.
   */
readonly source?: 'system-default''user-override';

/**
   * Value of the configuration.
   */
readonly value?: string;
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