import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsDatatransferjobsProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsDatatransferjobs resource
 */
export class DocumentdbDatabaseaccountsDatatransferjobs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsDatatransferjobsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/dataTransferJobs@2023-03-01-preview";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsDatatransferjobsProps): string {
    return JSON.stringify(
        {properties: {destination: {component: "string"}, source: {component: "string"}, workerCount: "${int}"}}
    );
  }
}
