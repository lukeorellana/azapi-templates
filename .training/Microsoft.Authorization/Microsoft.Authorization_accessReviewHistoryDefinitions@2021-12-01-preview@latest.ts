import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationAccessreviewhistorydefinitionsProps extends IAzAPIBaseProps {

}

/**
 * AuthorizationAccessreviewhistorydefinitions resource
 */
export class AuthorizationAccessreviewhistorydefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationAccessreviewhistorydefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/accessReviewHistoryDefinitions@2021-12-01-preview";
  }

  protected getResourceBody(props: AuthorizationAccessreviewhistorydefinitionsProps): string {
    return JSON.stringify(
        {decisions: ["string"], displayName: "string", instances: [{properties: {displayName: "string", expiration: "string", fulfilledDateTime: "string", reviewHistoryPeriodEndDateTime: "string", reviewHistoryPeriodStartDateTime: "string", runDateTime: "string"}}], scopes: [{excludeResourceId: "string", excludeRoleDefinitionId: "string", expandNestedMemberships: "${bool}", inactiveDuration: "string", includeAccessBelowResource: "${bool}", includeInheritedAccess: "${bool}"}], settings: {pattern: {interval: "${int}", type: "string"}, range: {endDate: "string", numberOfOccurrences: "${int}", startDate: "string", type: "string"}}}
    );
  }
}
