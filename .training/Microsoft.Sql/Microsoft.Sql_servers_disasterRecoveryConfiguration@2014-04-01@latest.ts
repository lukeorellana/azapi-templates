import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDisasterrecoveryconfigurationProps extends IAzAPIBaseProps {

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
