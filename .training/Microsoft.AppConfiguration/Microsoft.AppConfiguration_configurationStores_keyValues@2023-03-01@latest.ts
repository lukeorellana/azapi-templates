import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppconfigurationConfigurationstoresKeyvaluesProps extends IAzAPIBaseProps {

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
