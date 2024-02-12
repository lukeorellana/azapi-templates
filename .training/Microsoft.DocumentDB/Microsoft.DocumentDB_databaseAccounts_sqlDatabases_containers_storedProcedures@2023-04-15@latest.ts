import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsSqldatabasesContainersStoredproceduresProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsSqldatabasesContainersStoredprocedures resource
 */
export class DocumentdbDatabaseaccountsSqldatabasesContainersStoredprocedures extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsSqldatabasesContainersStoredproceduresProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsSqldatabasesContainersStoredproceduresProps): string {
    return JSON.stringify(
        {properties: {options: {autoscaleSettings: {maxThroughput: "${int}"}, throughput: "${int}"}, resource: {body: "string", id: "string"}}}
    );
  }
}
