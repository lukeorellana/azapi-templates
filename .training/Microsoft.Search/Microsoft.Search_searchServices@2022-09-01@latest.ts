import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SearchSearchservicesProps extends IAzAPIBaseProps {

}

/**
 * SearchSearchservices resource
 */
export class SearchSearchservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SearchSearchservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Search/searchServices@2022-09-01";
  }

  protected getResourceBody(props: SearchSearchservicesProps): string {
    return JSON.stringify(
        {properties: {authOptions: {aadOrApiKey: {aadAuthFailureMode: "string"}}, disableLocalAuth: "${bool}", encryptionWithCmk: {enforcement: "string"}, hostingMode: "string", networkRuleSet: {ipRules: [{value: "string"}]}, partitionCount: "${int}", publicNetworkAccess: "string", replicaCount: "${int}"}, sku: {name: "string"}}
    );
  }
}
