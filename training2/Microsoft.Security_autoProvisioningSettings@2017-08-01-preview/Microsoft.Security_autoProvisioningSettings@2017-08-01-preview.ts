import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityAutoprovisioningsettingsProps extends IAzAPIBaseProps {
/**
   * Describes what kind of security agent provisioning action to take
   */
readonly autoProvision: 'Off''On';
}

/**
 * SecurityAutoprovisioningsettings resource
 */
export class SecurityAutoprovisioningsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityAutoprovisioningsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/autoProvisioningSettings@2017-08-01-preview";
  }

  protected getResourceBody(props: SecurityAutoprovisioningsettingsProps): string {
    return JSON.stringify(
        {properties: {autoProvision: "string"}}
    );
  }
}
