import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDnsaliasesProps extends IAzAPIBaseProps {

}

/**
 * SqlServersDnsaliases resource
 */
export class SqlServersDnsaliases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDnsaliasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/dnsAliases@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDnsaliasesProps): string {
    return JSON.stringify(
        
    );
  }
}
