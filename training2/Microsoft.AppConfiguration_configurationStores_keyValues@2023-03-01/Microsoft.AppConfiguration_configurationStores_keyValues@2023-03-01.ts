import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppconfigurationConfigurationstoresKeyvaluesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:configurationStores;

/**
   * The content type of the key-value's value.Providing a proper content-type can enable transformations of values when they are retrieved by applications.
   */
readonly contentType?: string;

/**
   * The value of the key-value.
   */
readonly value?: string;
}

/**
 * AppconfigurationConfigurationstoresKeyvalues resource
 */
export class AppconfigurationConfigurationstoresKeyvalues extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppconfigurationConfigurationstoresKeyvaluesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppConfiguration/configurationStores/keyValues@2023-03-01";
  }

  protected getResourceBody(props: AppconfigurationConfigurationstoresKeyvaluesProps): string {
    return JSON.stringify(
        {properties: {contentType: "string", tags: {}, value: "string"}}
    );
  }
}
