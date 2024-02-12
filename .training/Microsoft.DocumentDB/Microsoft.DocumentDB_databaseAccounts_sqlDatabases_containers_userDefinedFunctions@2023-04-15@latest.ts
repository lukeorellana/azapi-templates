import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsSqldatabasesContainersUserdefinedfunctionsProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsSqldatabasesContainersUserdefinedfunctions resource
 */
export class DocumentdbDatabaseaccountsSqldatabasesContainersUserdefinedfunctions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsSqldatabasesContainersUserdefinedfunctionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsSqldatabasesContainersUserdefinedfunctionsProps): string {
    return JSON.stringify(
        {properties: {options: {autoscaleSettings: {maxThroughput: "${int}"}, throughput: "${int}"}, resource: {body: "string", id: "string"}}}
    );
  }
}
