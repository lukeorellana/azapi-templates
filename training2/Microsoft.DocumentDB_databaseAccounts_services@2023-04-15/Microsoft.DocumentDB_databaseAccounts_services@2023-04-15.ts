import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsServicesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databaseAccounts;

/**
   * Instance count for the service.
   */
readonly instanceCount?: number;

/**
   * Instance type for the service.
   */
readonly instanceSize?: 'Cosmos.D16s''Cosmos.D4s''Cosmos.D8s';
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
