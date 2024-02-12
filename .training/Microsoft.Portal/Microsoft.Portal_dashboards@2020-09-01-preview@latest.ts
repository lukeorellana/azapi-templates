import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PortalDashboardsProps extends IAzAPIBaseProps {

}

/**
 * PortalDashboards resource
 */
export class PortalDashboards extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PortalDashboardsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Portal/dashboards@2020-09-01-preview";
  }

  protected getResourceBody(props: PortalDashboardsProps): string {
    return JSON.stringify(
        {properties: {lenses: [{metadata: {}, order: "${int}", parts: [{metadata: {type: "string"}, position: {colSpan: "${int}", metadata: {}, rowSpan: "${int}", x: "${int}", y: "${int}"}}]}], metadata: {}}}
    );
  }
}
