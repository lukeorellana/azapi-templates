import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsMongodbuserdefinitionsProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsMongodbuserdefinitions resource
 */
export class DocumentdbDatabaseaccountsMongodbuserdefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsMongodbuserdefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/mongodbUserDefinitions@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsMongodbuserdefinitionsProps): string {
    return JSON.stringify(
        {properties: {customData: "string", databaseName: "string", mechanisms: "string", password: "string", roles: [{db: "string", role: "string"}], userName: "string"}}
    );
  }
}
