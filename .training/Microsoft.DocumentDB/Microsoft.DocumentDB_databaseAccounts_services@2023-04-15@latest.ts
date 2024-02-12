import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsServicesProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsServices resource
 */
export class DocumentdbDatabaseaccountsServices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsServicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/services@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsServicesProps): string {
    return JSON.stringify(
        {properties: {instanceCount: "${int}", instanceSize: "string"}}
    );
  }
}
