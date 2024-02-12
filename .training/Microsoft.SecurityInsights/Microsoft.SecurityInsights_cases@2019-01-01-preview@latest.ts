import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsCasesProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsCases resource
 */
export class SecurityinsightsCases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsCasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/cases@2019-01-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsCasesProps): string {
    return JSON.stringify(
        {properties: {closedReasonText: "string", closeReason: "string", description: "string", endTimeUtc: "string", labels: ["string"], owner: {objectId: "string"}, severity: "string", startTimeUtc: "string", status: "string", title: "string"}, etag: "string"}
    );
  }
}
