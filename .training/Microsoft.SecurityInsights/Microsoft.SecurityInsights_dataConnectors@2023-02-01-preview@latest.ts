import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsDataconnectorsProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsDataconnectors resource
 */
export class SecurityinsightsDataconnectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsDataconnectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/dataConnectors@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsDataconnectorsProps): string {
    return JSON.stringify(
        {kind: "string", etag: "string"}
    );
  }
}
