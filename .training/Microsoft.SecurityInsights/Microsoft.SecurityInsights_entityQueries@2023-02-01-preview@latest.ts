import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsEntityqueriesProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsEntityqueries resource
 */
export class SecurityinsightsEntityqueries extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsEntityqueriesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/entityQueries@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsEntityqueriesProps): string {
    return JSON.stringify(
        {kind: "string", etag: "string"}
    );
  }
}
