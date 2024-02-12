import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityAdvancedthreatprotectionsettingsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Indicates whether Advanced Threat Protection is enabled.
   */
readonly isEnabled?: bool;
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
