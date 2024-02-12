import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatadogMonitorsSinglesignonconfigurationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:monitors;

/**
   * The Id of the Enterprise App used for Single sign-on.
   */
readonly enterpriseAppId?: string;

/**
   * Various states of the SSO resource
   */
readonly singleSignOnState?: 'Disable''Enable''Existing''Initial';
}

/**
 * DatadogMonitorsSinglesignonconfigurations resource
 */
export class DatadogMonitorsSinglesignonconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatadogMonitorsSinglesignonconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Datadog/monitors/singleSignOnConfigurations@2022-06-01";
  }

  protected getResourceBody(props: DatadogMonitorsSinglesignonconfigurationsProps): string {
    return JSON.stringify(
        {properties: {enterpriseAppId: "string", singleSignOnState: "string"}}
    );
  }
}
