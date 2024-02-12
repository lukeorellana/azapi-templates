import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlFlexibleserversBackupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:flexibleServers;
}

/**
 * DbformysqlFlexibleserversBackups resource
 */
export class DbformysqlFlexibleserversBackups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlFlexibleserversBackupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMySQL/flexibleServers/backups@2023-06-30";
  }

  protected getResourceBody(props: DbformysqlFlexibleserversBackupsProps): string {
    return JSON.stringify(
        
    );
  }
}
