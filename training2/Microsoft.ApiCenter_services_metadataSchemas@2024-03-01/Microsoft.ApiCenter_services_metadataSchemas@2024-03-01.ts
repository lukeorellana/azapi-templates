import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApicenterServicesMetadataschemasProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:services;

/**
   * 
   */
readonly assignedTo?: MetadataAssignment[];

/**
   * The schema defining the type.
   */
readonly schema: string;

/**
   * 
   */
readonly deprecated?: bool;

/**
   * The entities this metadata schema component gets applied to.
   */
readonly entity?: 'api''deployment''environment';

/**
   * 
   */
readonly required?: bool;
}

/**
 * ApicenterServicesMetadataschemas resource
 */
export class ApicenterServicesMetadataschemas extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApicenterServicesMetadataschemasProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiCenter/services/metadataSchemas@2024-03-01";
  }

  protected getResourceBody(props: ApicenterServicesMetadataschemasProps): string {
    return JSON.stringify(
        {properties: {assignedTo: [{deprecated: "${bool}", entity: "string", required: "${bool}"}], schema: "string"}}
    );
  }
}
