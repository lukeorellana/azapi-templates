import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KubernetesconfigurationExtensionsProps extends IAzAPIBaseProps {

}

/**
 * KubernetesconfigurationExtensions resource
 */
export class KubernetesconfigurationExtensions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KubernetesconfigurationExtensionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KubernetesConfiguration/extensions@2022-11-01";
  }

  protected getResourceBody(props: KubernetesconfigurationExtensionsProps): string {
    return JSON.stringify(
        {properties: {aksAssignedIdentity: {type: "string"}, autoUpgradeMinorVersion: "${bool}", configurationProtectedSettings: {}, configurationSettings: {}, extensionType: "string", releaseTrain: "string", scope: {cluster: {releaseNamespace: "string"}, namespace: {targetNamespace: "string"}}, statuses: [{code: "string", displayStatus: "string", level: "string", message: "string", time: "string"}], version: "string"}, plan: {name: "string", product: "string", promotionCode: "string", publisher: "string", version: "string"}}
    );
  }
}
