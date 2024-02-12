import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesExtensionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databases;

/**
   * Administrator login name.
   */
readonly administratorLogin?: string;

/**
   * Administrator login password.
   */
readonly administratorLoginPassword?: string;

/**
   * Authentication type: SQL authentication or AD password.
   */
readonly authenticationType?: string;

/**
   * Database edition for the newly created database in the case of an import operation.
   */
readonly databaseEdition?: string;

/**
   * Database max size in bytes for the newly created database in the case of an import operation.
   */
readonly maxSizeBytes?: string;

/**
   * Optional resource information to enable network isolation for request.
   */
readonly networkIsolation?: NetworkIsolationSettings;

/**
   * Operation mode of the operation: Import, Export, or PolybaseImport.
   */
readonly operationMode: 'Export''Import''PolybaseImport';

/**
   * Database service level objective for the newly created database in the case of an import operation.
   */
readonly serviceObjectiveName?: string;

/**
   * Storage key for the storage account.
   */
readonly storageKey: string;

/**
   * Storage key type: StorageAccessKey or SharedAccessKey.
   */
readonly storageKeyType: 'SharedAccessKey''StorageAccessKey';

/**
   * Storage Uri for the storage account.
   */
readonly storageUri: string;

/**
   * The resource id for the SQL server which is the target of this request. If set, private endpoint connection will be created for the SQL server. Must match server which is target of the operation.
   */
readonly sqlServerResourceId?: string;

/**
   * The resource id for the storage account used to store BACPAC file. If set, private endpoint connection will be created for the storage account. Must match storage account used for StorageUri parameter.
   */
readonly storageAccountResourceId?: string;
}

/**
 * SqlServersDatabasesExtensions resource
 */
export class SqlServersDatabasesExtensions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDatabasesExtensionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/databases/extensions@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDatabasesExtensionsProps): string {
    return JSON.stringify(
        {properties: {administratorLogin: "string", administratorLoginPassword: "string", authenticationType: "string", databaseEdition: "string", maxSizeBytes: "string", networkIsolation: {sqlServerResourceId: "string", storageAccountResourceId: "string"}, operationMode: "string", serviceObjectiveName: "string", storageKey: "string", storageKeyType: "string", storageUri: "string"}}
    );
  }
}
