import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkPublishersConfigurationgroupschemasProps extends IAzAPIBaseProps {

}

/**
 * HybridnetworkPublishersConfigurationgroupschemas resource
 */
export class HybridnetworkPublishersConfigurationgroupschemas extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkPublishersConfigurationgroupschemasProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/publishers/configurationGroupSchemas@2023-09-01";
  }

  protected getResourceBody(props: HybridnetworkPublishersConfigurationgroupschemasProps): string {
    return JSON.stringify(
        {properties: {description: "string", schemaDefinition: "string"}}
    );
  }
}
