import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApiversionsetsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Description of API Version Set.
   */
readonly description?: string;

/**
   * Name of API Version Set
   */
readonly displayName: string;

/**
   * Name of HTTP header parameter that indicates the API Version if versioningScheme is set toheader.
   */
readonly versionHeaderName?: string;

/**
   * An value that determines where the API Version identifier will be located in a HTTP request.
   */
readonly versioningScheme: 'Header''Query''Segment';

/**
   * Name of query parameter that indicates the API Version if versioningScheme is set toquery.
   */
readonly versionQueryName?: string;
}

/**
 * ApimanagementServiceApiversionsets resource
 */
export class ApimanagementServiceApiversionsets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceApiversionsetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/apiVersionSets@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceApiversionsetsProps): string {
    return JSON.stringify(
        {properties: {description: "string", displayName: "string", versionHeaderName: "string", versioningScheme: "string", versionQueryName: "string"}}
    );
  }
}
