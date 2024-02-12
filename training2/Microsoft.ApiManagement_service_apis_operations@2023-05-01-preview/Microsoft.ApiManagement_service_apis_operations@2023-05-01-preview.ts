import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:apis;

/**
   * Description of the operation. May include HTML formatting tags.
   */
readonly description?: string;

/**
   * Operation Name.
   */
readonly displayName: string;

/**
   * A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
   */
readonly method: string;

/**
   * Operation Policies
   */
readonly policies?: string;

/**
   * An entity containing request details.
   */
readonly request?: RequestContract;

/**
   * Array of Operation responses.
   */
readonly responses?: ResponseContract[];

/**
   * Collection of URL template parameters.
   */
readonly templateParameters?: ParameterContract[];

/**
   * Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
   */
readonly urlTemplate: string;

/**
   * Operation request description.
   */
readonly description?: string;

/**
   * Collection of operation request headers.
   */
readonly headers?: ParameterContract[];

/**
   * Collection of operation request query parameters.
   */
readonly queryParameters?: ParameterContract[];

/**
   * Collection of operation request representations.
   */
readonly representations?: RepresentationContract[];

/**
   * Default parameter value.
   */
readonly defaultValue?: string;

/**
   * Parameter description.
   */
readonly description?: string;

/**
   * Exampled defined for the parameter.
   */
readonly examples?: ParameterExamplesContract;

/**
   * Specifies whether parameter is required or not.
   */
readonly required?: bool;

/**
   * Schema identifier.
   */
readonly schemaId?: string;

/**
   * Parameter type.
   */
readonly type: string;

/**
   * Type name defined by the schema.
   */
readonly typeName?: string;

/**
   * Parameter values.
   */
readonly values?: string[];

/**
   * 
   */
readonly {customized property}?: ParameterExampleContract;

/**
   * 
   */
readonly {customized property}?: ParameterExampleContract;

/**
   * Long description for the example
   */
readonly description?: string;

/**
   * A URL that points to the literal example
   */
readonly externalValue?: string;

/**
   * Short description for the example
   */
readonly summary?: string;

/**
   * Example value. May be a primitive value, or an object.
   */
readonly value?: For Bicep, you can use theany()function.;

/**
   * Specifies a registered or custom content type for this representation, e.g. application/xml.
   */
readonly contentType: string;

/**
   * Exampled defined for the representation.
   */
readonly examples?: ParameterExamplesContract;

/**
   * Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'..
   */
readonly formParameters?: ParameterContract[];

/**
   * Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
   */
readonly schemaId?: string;

/**
   * Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
   */
readonly typeName?: string;

/**
   * Operation response description.
   */
readonly description?: string;

/**
   * Collection of operation response headers.
   */
readonly headers?: ParameterContract[];

/**
   * Collection of operation response representations.
   */
readonly representations?: RepresentationContract[];

/**
   * Operation response HTTP status code.
   */
readonly statusCode: number;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
