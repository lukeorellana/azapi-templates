import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationAccessreviewscheduledefinitionsInstancesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:accessReviewScheduleDefinitions;

/**
   * This is the collection of backup reviewers.
   */
readonly backupReviewers?: AccessReviewReviewer[];

/**
   * The DateTime when the review instance is scheduled to end.
   */
readonly endDateTime?: string;

/**
   * This is the collection of reviewers.
   */
readonly reviewers?: AccessReviewReviewer[];

/**
   * The DateTime when the review instance is scheduled to be start.
   */
readonly startDateTime?: string;

/**
   * The id of the reviewer(user/servicePrincipal)
   */
readonly principalId?: string;
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
