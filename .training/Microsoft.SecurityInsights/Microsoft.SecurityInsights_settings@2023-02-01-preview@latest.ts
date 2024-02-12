import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsSettingsProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsSettings resource
 */
export class SecurityinsightsSettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsSettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/settings@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsSettingsProps): string {
    return JSON.stringify(
        {kind: "string", etag: "string"}
    );
  }
}
