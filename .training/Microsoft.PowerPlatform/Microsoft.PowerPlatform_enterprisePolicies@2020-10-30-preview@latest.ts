import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PowerplatformEnterprisepoliciesProps extends IAzAPIBaseProps {

}

/**
 * PowerplatformEnterprisepolicies resource
 */
export class PowerplatformEnterprisepolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PowerplatformEnterprisepoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.PowerPlatform/enterprisePolicies@2020-10-30-preview";
  }

  protected getResourceBody(props: PowerplatformEnterprisepoliciesProps): string {
    return JSON.stringify(
        {properties: {encryption: {keyVault: {id: "string", key: {name: "string", version: "string"}}, state: "string"}, lockbox: {state: "string"}, networkInjection: {virtualNetworks: {nextLink: "string", value: [{id: "string", subnet: {name: "string"}}]}}}, kind: "string"}
    );
  }
}
