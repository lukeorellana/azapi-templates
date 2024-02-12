import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisResolversProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:apis;

/**
   * Description of the resolver. May include HTML formatting tags.
   */
readonly description?: string;

/**
   * Resolver Name.
   */
readonly displayName?: string;

/**
   * Path is type/field being resolved.
   */
readonly path?: string;
}

/**
 * ApimanagementServiceApisResolvers resource
 */
export class ApimanagementServiceApisResolvers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceApisResolversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/apis/resolvers@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceApisResolversProps): string {
    return JSON.stringify(
        {properties: {description: "string", displayName: "string", path: "string"}}
    );
  }
}
