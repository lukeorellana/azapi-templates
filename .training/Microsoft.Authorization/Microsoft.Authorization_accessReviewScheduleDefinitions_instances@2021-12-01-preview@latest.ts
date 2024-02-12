import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationAccessreviewscheduledefinitionsInstancesProps extends IAzAPIBaseProps {

}

/**
 * AuthorizationAccessreviewscheduledefinitionsInstances resource
 */
export class AuthorizationAccessreviewscheduledefinitionsInstances extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationAccessreviewscheduledefinitionsInstancesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/accessReviewScheduleDefinitions/instances@2021-12-01-preview";
  }

  protected getResourceBody(props: AuthorizationAccessreviewscheduledefinitionsInstancesProps): string {
    return JSON.stringify(
        {backupReviewers: [{principalId: "string"}], endDateTime: "string", reviewers: [{principalId: "string"}], startDateTime: "string"}
    );
  }
}
