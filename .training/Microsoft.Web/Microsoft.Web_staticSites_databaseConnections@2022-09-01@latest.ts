import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebStaticsitesDatabaseconnectionsProps extends IAzAPIBaseProps {

}

/**
 * WebStaticsitesDatabaseconnections resource
 */
export class WebStaticsitesDatabaseconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebStaticsitesDatabaseconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/staticSites/databaseConnections@2022-09-01";
  }

  protected getResourceBody(props: WebStaticsitesDatabaseconnectionsProps): string {
    return JSON.stringify(
        {properties: {connectionIdentity: "string", connectionString: "string", region: "string", resourceId: "string"}, kind: "string"}
    );
  }
}
