import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface TimeseriesinsightsEnvironmentsAccesspoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:environments;

/**
   * An description of the access policy.
   */
readonly description?: string;

/**
   * The objectId of the principal in Azure Active Directory.
   */
readonly principalObjectId?: string;

/**
   * The list of roles the principal is assigned on the environment.
   */
readonly roles?: String array containing any of:'Contributor''Reader';
}

/**
 * TimeseriesinsightsEnvironmentsAccesspolicies resource
 */
export class TimeseriesinsightsEnvironmentsAccesspolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: TimeseriesinsightsEnvironmentsAccesspoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.TimeSeriesInsights/environments/accessPolicies@2021-06-30-preview";
  }

  protected getResourceBody(props: TimeseriesinsightsEnvironmentsAccesspoliciesProps): string {
    return JSON.stringify(
        {properties: {description: "string", principalObjectId: "string", roles: ["string"]}}
    );
  }
}
