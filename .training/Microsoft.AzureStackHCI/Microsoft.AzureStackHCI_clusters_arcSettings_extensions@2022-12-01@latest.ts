import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciClustersArcsettingsExtensionsProps extends IAzAPIBaseProps {

}

/**
 * AzurestackhciClustersArcsettingsExtensions resource
 */
export class AzurestackhciClustersArcsettingsExtensions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciClustersArcsettingsExtensionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/clusters/arcSettings/extensions@2022-12-01";
  }

  protected getResourceBody(props: AzurestackhciClustersArcsettingsExtensionsProps): string {
    return JSON.stringify(
        {properties: {extensionParameters: {autoUpgradeMinorVersion: "${bool}", enableAutomaticUpgrade: "${bool}", forceUpdateTag: "string", publisher: "string", type: "string", typeHandlerVersion: "string"}}}
    );
  }
}
