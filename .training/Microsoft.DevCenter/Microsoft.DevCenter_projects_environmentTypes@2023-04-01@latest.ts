import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterProjectsEnvironmenttypesProps extends IAzAPIBaseProps {

}

/**
 * DevcenterProjectsEnvironmenttypes resource
 */
export class DevcenterProjectsEnvironmenttypes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevcenterProjectsEnvironmenttypesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevCenter/projects/environmentTypes@2023-04-01";
  }

  protected getResourceBody(props: DevcenterProjectsEnvironmenttypesProps): string {
    return JSON.stringify(
        {properties: {creatorRoleAssignment: {roles: {}}, deploymentTargetId: "string", status: "string", userRoleAssignments: {}}}
    );
  }
}
