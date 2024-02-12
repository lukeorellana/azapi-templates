import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersFailovergroupsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersFailovergroups resource
 */
export class SqlServersFailovergroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersFailovergroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/failoverGroups@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersFailovergroupsProps): string {
    return JSON.stringify(
        {properties: {databases: ["string"], partnerServers: [{id: "string"}], readWriteEndpoint: {failoverPolicy: "string", failoverWithDataLossGracePeriodMinutes: "${int}"}}}
    );
  }
}
