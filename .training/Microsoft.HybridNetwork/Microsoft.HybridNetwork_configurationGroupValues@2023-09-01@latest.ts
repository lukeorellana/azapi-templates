import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkConfigurationgroupvaluesProps extends IAzAPIBaseProps {

}

/**
 * HybridnetworkConfigurationgroupvalues resource
 */
export class HybridnetworkConfigurationgroupvalues extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkConfigurationgroupvaluesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/configurationGroupValues@2023-09-01";
  }

  protected getResourceBody(props: HybridnetworkConfigurationgroupvaluesProps): string {
    return JSON.stringify(
        {properties: {configurationGroupSchemaResourceReference: {idType: "string"}, configurationType: "string"}}
    );
  }
}
