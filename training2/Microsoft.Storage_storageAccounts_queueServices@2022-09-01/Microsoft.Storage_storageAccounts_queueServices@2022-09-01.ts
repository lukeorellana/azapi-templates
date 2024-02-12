import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsQueueservicesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:storageAccounts;

/**
   * Specifies CORS rules for the Queue service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Queue service.
   */
readonly cors?: CorsRules;

/**
   * The List of CORS rules. You can include up to five CorsRule elements in the request.
   */
readonly corsRules?: CorsRule[];

/**
   * Required if CorsRule element is present. A list of headers allowed to be part of the cross-origin request.
   */
readonly allowedHeaders: string[];

/**
   * Required if CorsRule element is present. A list of HTTP methods that are allowed to be executed by the origin.
   */
readonly allowedMethods: String array containing any of:'DELETE''GET''HEAD''MERGE''OPTIONS''PATCH''POST''PUT';

/**
   * Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains
   */
readonly allowedOrigins: string[];

/**
   * Required if CorsRule element is present. A list of response headers to expose to CORS clients.
   */
readonly exposedHeaders: string[];

/**
   * Required if CorsRule element is present. The number of seconds that the client/browser should cache a preflight response.
   */
readonly maxAgeInSeconds: number;
}

/**
 * StorageStorageaccountsQueueservices resource
 */
export class StorageStorageaccountsQueueservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsQueueservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/queueServices@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsQueueservicesProps): string {
    return JSON.stringify(
        {properties: {cors: {corsRules: [{allowedHeaders: ["string"], allowedMethods: ["string"], allowedOrigins: ["string"], exposedHeaders: ["string"], maxAgeInSeconds: "${int}"}]}}}
    );
  }
}
