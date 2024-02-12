import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface SecurityAdvancedthreatprotectionsettingsProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | 'current' |
// | scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
// | properties | The Advanced Threat Protection settings. | AdvancedThreatProtectionProperties |

// | Name | Description | Value |
// |-|-|-|
// | isEnabled | Indicates whether Advanced Threat Protection is enabled. | bool |
