import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsNotebookworkspacesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databaseAccounts;
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
