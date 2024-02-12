import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsAlertrulesProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsAlertrules resource
 */
export class SecurityinsightsAlertrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsAlertrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/alertRules@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsAlertrulesProps): string {
    return JSON.stringify(
        {kind: "string", etag: "string"}
    );
  }
}
