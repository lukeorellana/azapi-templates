import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkPublishersConfigurationgroupschemasProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:publishers;

/**
   * Description of what schema can contain.
   */
readonly description?: string;

/**
   * Name and value pairs that define the configuration value. It can be a well formed escaped JSON string.
   */
readonly schemaDefinition?: string;
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
