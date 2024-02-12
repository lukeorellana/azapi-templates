import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsMongodbuserdefinitionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databaseAccounts;

/**
   * A custom definition for the USer Definition.
   */
readonly customData?: string;

/**
   * The database name for which access is being granted for this User Definition.
   */
readonly databaseName?: string;

/**
   * The Mongo Auth mechanism. For now, we only support auth mechanism SCRAM-SHA-256.
   */
readonly mechanisms?: string;

/**
   * The password for User Definition. Response does not contain user password.
   */
readonly password?: string;

/**
   * The set of roles inherited by the User Definition.
   */
readonly roles?: Role[];

/**
   * The user name for User Definition.
   */
readonly userName?: string;

/**
   * The database name the role is applied.
   */
readonly db?: string;

/**
   * The role name.
   */
readonly role?: string;
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
