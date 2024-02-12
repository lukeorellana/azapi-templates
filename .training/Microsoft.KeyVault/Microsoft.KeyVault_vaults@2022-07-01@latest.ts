import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KeyvaultVaultsProps extends IAzAPIBaseProps {

}

/**
 * KeyvaultVaults resource
 */
export class KeyvaultVaults extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KeyvaultVaultsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KeyVault/vaults@2022-07-01";
  }

  protected getResourceBody(props: KeyvaultVaultsProps): string {
    return JSON.stringify(
        {properties: {accessPolicies: [{applicationId: "string", objectId: "string", permissions: {certificates: ["string"], keys: ["string"], secrets: ["string"], storage: ["string"]}, tenantId: "string"}], createMode: "string", enabledForDeployment: "${bool}", enabledForDiskEncryption: "${bool}", enabledForTemplateDeployment: "${bool}", enablePurgeProtection: "${bool}", enableRbacAuthorization: "${bool}", enableSoftDelete: "${bool}", networkAcls: {bypass: "string", defaultAction: "string", ipRules: [{value: "string"}], virtualNetworkRules: [{id: "string", ignoreMissingVnetServiceEndpoint: "${bool}"}]}, provisioningState: "string", publicNetworkAccess: "string", sku: {family: "A", name: "string"}, softDeleteRetentionInDays: "${int}", tenantId: "string", vaultUri: "string"}}
    );
  }
}
