import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesProps extends IAzAPIBaseProps {

}

/**
 * ContainerregistryRegistries resource
 */
export class ContainerregistryRegistries extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries@2023-01-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesProps): string {
    return JSON.stringify(
        {properties: {adminUserEnabled: "${bool}", anonymousPullEnabled: "${bool}", dataEndpointEnabled: "${bool}", encryption: {keyVaultProperties: {identity: "string", keyIdentifier: "string"}, status: "string"}, networkRuleBypassOptions: "string", networkRuleSet: {defaultAction: "string", ipRules: [{action: "Allow", value: "string"}]}, policies: {azureADAuthenticationAsArmPolicy: {status: "string"}, exportPolicy: {status: "string"}, quarantinePolicy: {status: "string"}, retentionPolicy: {days: "${int}", status: "string"}, softDeletePolicy: {retentionDays: "${int}", status: "string"}, trustPolicy: {status: "string", type: "Notary"}}, publicNetworkAccess: "string", zoneRedundancy: "string"}, sku: {name: "string"}}
    );
  }
}
