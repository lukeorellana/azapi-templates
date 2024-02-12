import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsMongodbroledefinitionsProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsMongodbroledefinitions resource
 */
export class DocumentdbDatabaseaccountsMongodbroledefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsMongodbroledefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/mongodbRoleDefinitions@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsMongodbroledefinitionsProps): string {
    return JSON.stringify(
        {properties: {databaseName: "string", privileges: [{actions: ["string"], resource: {collection: "string", db: "string"}}], roleName: "string", roles: [{db: "string", role: "string"}], type: "string"}}
    );
  }
}
