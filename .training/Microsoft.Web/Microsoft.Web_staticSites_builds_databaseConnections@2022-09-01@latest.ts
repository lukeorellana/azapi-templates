import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebStaticsitesBuildsDatabaseconnectionsProps extends IAzAPIBaseProps {

}

/**
 * WebStaticsitesBuildsDatabaseconnections resource
 */
export class WebStaticsitesBuildsDatabaseconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebStaticsitesBuildsDatabaseconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/staticSites/builds/databaseConnections@2022-09-01";
  }

  protected getResourceBody(props: WebStaticsitesBuildsDatabaseconnectionsProps): string {
    return JSON.stringify(
        {properties: {connectionIdentity: "string", connectionString: "string", region: "string", resourceId: "string"}, kind: "string"}
    );
  }
}
