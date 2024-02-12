import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDisasterrecoveryconfigurationProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;
}

/**
 * SqlServersDisasterrecoveryconfiguration resource
 */
export class SqlServersDisasterrecoveryconfiguration extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDisasterrecoveryconfigurationProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/disasterRecoveryConfiguration@2014-04-01";
  }

  protected getResourceBody(props: SqlServersDisasterrecoveryconfigurationProps): string {
    return JSON.stringify(
        
    );
  }
}
