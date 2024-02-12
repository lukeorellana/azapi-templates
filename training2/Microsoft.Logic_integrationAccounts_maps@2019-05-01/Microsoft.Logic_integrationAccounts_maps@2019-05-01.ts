import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationaccountsMapsProps extends IAzAPIBaseProps {
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
   * The map type.
   */
readonly mapType: 'Liquid''NotSpecified''Xslt''Xslt20''Xslt30';

/**
   * The metadata.
   */
readonly metadata?: For Bicep, you can use theany()function.;

/**
   * The parameters schema of integration account map.
   */
readonly parametersSchema?: IntegrationAccountMapPropertiesParametersSchema;

/**
   * The reference name.
   */
readonly ref?: string;
}

/**
 * LogicIntegrationaccountsMaps resource
 */
export class LogicIntegrationaccountsMaps extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsMapsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts/maps@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsMapsProps): string {
    return JSON.stringify(
        {properties: {content: "string", contentType: "string", mapType: "string", parametersSchema: {ref: "string"}}}
    );
  }
}
