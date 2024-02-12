import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlServersConfigurationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

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
