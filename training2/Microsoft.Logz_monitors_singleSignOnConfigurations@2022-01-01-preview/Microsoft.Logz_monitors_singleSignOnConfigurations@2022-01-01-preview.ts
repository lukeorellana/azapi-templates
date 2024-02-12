import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogzMonitorsSinglesignonconfigurationsProps extends IAzAPIBaseProps {
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

/**
   * The login URL specific to this Logz Organization.
   */
readonly singleSignOnUrl?: string;
}

/**
 * LogzMonitorsSinglesignonconfigurations resource
 */
export class LogzMonitorsSinglesignonconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogzMonitorsSinglesignonconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logz/monitors/singleSignOnConfigurations@2022-01-01-preview";
  }

  protected getResourceBody(props: LogzMonitorsSinglesignonconfigurationsProps): string {
    return JSON.stringify(
        {properties: {enterpriseAppId: "string", singleSignOnState: "string", singleSignOnUrl: "string"}}
    );
  }
}
