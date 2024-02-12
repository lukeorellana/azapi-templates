import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersCommunicationlinksProps extends IAzAPIBaseProps {

}

/**
 * SqlServersCommunicationlinks resource
 */
export class SqlServersCommunicationlinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersCommunicationlinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/communicationLinks@2014-04-01";
  }

  protected getResourceBody(props: SqlServersCommunicationlinksProps): string {
    return JSON.stringify(
        {properties: {partnerServer: "string"}}
    );
  }
}
