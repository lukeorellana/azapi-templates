import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsIncidentsCommentsProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsIncidentsComments resource
 */
export class SecurityinsightsIncidentsComments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsIncidentsCommentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/incidents/comments@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsIncidentsCommentsProps): string {
    return JSON.stringify(
        {properties: {message: "string"}, etag: "string"}
    );
  }
}
