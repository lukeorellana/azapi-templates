import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsSecuritymlanalyticssettingsProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsSecuritymlanalyticssettings resource
 */
export class SecurityinsightsSecuritymlanalyticssettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsSecuritymlanalyticssettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/securityMLAnalyticsSettings@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsSecuritymlanalyticssettingsProps): string {
    return JSON.stringify(
        {kind: "string", etag: "string"}
    );
  }
}
