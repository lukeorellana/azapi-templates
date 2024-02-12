import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceSchemasProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Free-form schema entity description.
   */
readonly description?: string;

/**
   * Global Schema document object for json-based schema formats(e.g. json schema).
   */
readonly document?: For Bicep, you can use theany()function.;

/**
   * Schema Type. Immutable.
   */
readonly schemaType: 'json''xml';

/**
   * Json-encoded string for non json-based schema.
   */
readonly value?: For Bicep, you can use theany()function.;
}

/**
 * ApimanagementServiceSchemas resource
 */
export class ApimanagementServiceSchemas extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceSchemasProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/schemas@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceSchemasProps): string {
    return JSON.stringify(
        {properties: {description: "string", schemaType: "string"}}
    );
  }
}
