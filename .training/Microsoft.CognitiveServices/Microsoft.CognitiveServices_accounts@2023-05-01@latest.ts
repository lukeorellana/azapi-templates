import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CognitiveservicesAccountsProps extends IAzAPIBaseProps {

}

/**
 * CognitiveservicesAccounts resource
 */
export class CognitiveservicesAccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CognitiveservicesAccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CognitiveServices/accounts@2023-05-01";
  }

  protected getResourceBody(props: CognitiveservicesAccountsProps): string {
    return JSON.stringify(
        {properties: {allowedFqdnList: ["string"], apiProperties: {aadClientId: "string", aadTenantId: "string", eventHubConnectionString: "string", qnaAzureSearchEndpointId: "string", qnaAzureSearchEndpointKey: "string", qnaRuntimeEndpoint: "string", statisticsEnabled: "${bool}", storageAccountConnectionString: "string", superUser: "string", websiteName: "string"}, customSubDomainName: "string", disableLocalAuth: "${bool}", dynamicThrottlingEnabled: "${bool}", encryption: {keySource: "string", keyVaultProperties: {identityClientId: "string", keyName: "string", keyVaultUri: "string", keyVersion: "string"}}, locations: {regions: [{customsubdomain: "string", name: "string", value: "${int}"}], routingMethod: "string"}, migrationToken: "string", networkAcls: {defaultAction: "string", ipRules: [{value: "string"}], virtualNetworkRules: [{id: "string", ignoreMissingVnetServiceEndpoint: "${bool}", state: "string"}]}, publicNetworkAccess: "string", restore: "${bool}", restrictOutboundNetworkAccess: "${bool}", userOwnedStorage: [{identityClientId: "string", resourceId: "string"}]}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}, kind: "string"}
    );
  }
}
