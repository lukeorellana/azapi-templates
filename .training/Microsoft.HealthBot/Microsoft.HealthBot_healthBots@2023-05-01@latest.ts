import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HealthbotHealthbotsProps extends IAzAPIBaseProps {

}

/**
 * HealthbotHealthbots resource
 */
export class HealthbotHealthbots extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HealthbotHealthbotsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HealthBot/healthBots@2023-05-01";
  }

  protected getResourceBody(props: HealthbotHealthbotsProps): string {
    return JSON.stringify(
        {properties: {keyVaultProperties: {keyName: "string", keyVaultUri: "string", keyVersion: "string", userIdentity: "string"}}, sku: {name: "string"}}
    );
  }
}
