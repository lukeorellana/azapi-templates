import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsNotebookworkspacesProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsNotebookworkspaces resource
 */
export class DocumentdbDatabaseaccountsNotebookworkspaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsNotebookworkspacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsNotebookworkspacesProps): string {
    return JSON.stringify(
        
    );
  }
}
