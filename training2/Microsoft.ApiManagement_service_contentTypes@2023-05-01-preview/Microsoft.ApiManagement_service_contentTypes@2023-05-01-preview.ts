import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceContenttypesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Content type description.
   */
readonly description?: string;

/**
   * Content type identifier
   */
readonly id?: string;

/**
   * Content type schema.
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * Content type version.
   */
readonly version?: string;
}

/**
 * ApimanagementServiceContenttypes resource
 */
export class ApimanagementServiceContenttypes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceContenttypesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/contentTypes@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceContenttypesProps): string {
    return JSON.stringify(
        {properties: {description: "string", id: "string", name: "string", version: "string"}}
    );
  }
}
