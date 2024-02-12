import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityAdvancedthreatprotectionsettingsProps extends IAzAPIBaseProps {

}

/**
 * SecurityAdvancedthreatprotectionsettings resource
 */
export class SecurityAdvancedthreatprotectionsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityAdvancedthreatprotectionsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/advancedThreatProtectionSettings@2019-01-01";
  }

  protected getResourceBody(props: SecurityAdvancedthreatprotectionsettingsProps): string {
    return JSON.stringify(
        {properties: {isEnabled: "${bool}"}}
    );
  }
}
