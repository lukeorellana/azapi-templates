import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesConnectedregistriesProps extends IAzAPIBaseProps {

}

/**
 * ContainerregistryRegistriesConnectedregistries resource
 */
export class ContainerregistryRegistriesConnectedregistries extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesConnectedregistriesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/connectedRegistries@2023-01-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesConnectedregistriesProps): string {
    return JSON.stringify(
        {properties: {clientTokenIds: ["string"], logging: {auditLogStatus: "string", logLevel: "string"}, loginServer: {}, mode: "string", notificationsList: ["string"], parent: {id: "string", syncProperties: {messageTtl: "string", schedule: "string", syncWindow: "string", tokenId: "string"}}}}
    );
  }
}
