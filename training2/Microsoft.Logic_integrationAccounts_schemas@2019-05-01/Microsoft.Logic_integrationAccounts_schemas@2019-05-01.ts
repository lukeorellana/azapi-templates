import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationaccountsSchemasProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:numberegrationAccounts;

/**
   * The content.
   */
readonly content?: string;

/**
   * The content type.
   */
readonly contentType?: string;

/**
   * The document name.
   */
readonly documentName?: string;

/**
   * The file name.
   */
readonly fileName?: string;

/**
   * The metadata.
   */
readonly metadata?: For Bicep, you can use theany()function.;

/**
   * The schema type.
   */
readonly schemaType: 'NotSpecified''Xml';

/**
   * The target namespace of the schema.
   */
readonly targetNamespace?: string;
}

/**
 * LogicIntegrationaccountsSchemas resource
 */
export class LogicIntegrationaccountsSchemas extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsSchemasProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts/schemas@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsSchemasProps): string {
    return JSON.stringify(
        {properties: {content: "string", contentType: "string", documentName: "string", fileName: "string", schemaType: "string", targetNamespace: "string"}}
    );
  }
}