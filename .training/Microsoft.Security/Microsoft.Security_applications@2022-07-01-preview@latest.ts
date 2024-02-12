import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityApplicationsProps extends IAzAPIBaseProps {

}

/**
 * SecurityApplications resource
 */
export class SecurityApplications extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityApplicationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/applications@2022-07-01-preview";
  }

  protected getResourceBody(props: SecurityApplicationsProps): string {
    return JSON.stringify(
        {properties: {conditionSets: ["${object}"], description: "string", displayName: "string", sourceResourceType: "Assessments"}}
    );
  }
}
