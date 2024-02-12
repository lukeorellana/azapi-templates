import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServergroupsv2CoordinatorconfigurationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:serverGroupsv2;

/**
   * Value of the configuration.
   */
readonly value: string;
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
