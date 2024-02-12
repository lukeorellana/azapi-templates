import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesApisSchemasProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:apis;

/**
   * Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml).-SwaggerSchema useapplication/vnd.ms-azure-apim.swagger.definitions+json-WSDLSchema useapplication/vnd.ms-azure-apim.xsd+xml-OpenApiSchema useapplication/vnd.oai.openapi.components+json-WADL Schemauseapplication/vnd.ms-azure-apim.wadl.grammars+xml-OData Schemauseapplication/vnd.ms-azure-apim.odata.schema-gRPC Schemausetext/protobuf.
   */
readonly contentType: string;

/**
   * Create or update Properties of the API Schema Document.
   */
readonly document: SchemaDocumentProperties;

/**
   * Types definitions. Used for Swagger/OpenAPI v2/v3 schemas only, null otherwise.
   */
readonly components?: For Bicep, you can use theany()function.;

/**
   * Types definitions. Used for Swagger/OpenAPI v1 schemas only, null otherwise.
   */
readonly definitions?: For Bicep, you can use theany()function.;

/**
   * Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI.
   */
readonly value?: string;
}

/**
 * ApimanagementServiceWorkspacesApisSchemas resource
 */
export class ApimanagementServiceWorkspacesApisSchemas extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesApisSchemasProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/apis/schemas@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesApisSchemasProps): string {
    return JSON.stringify(
        {properties: {contentType: "string", document: {value: "string"}}}
    );
  }
}
