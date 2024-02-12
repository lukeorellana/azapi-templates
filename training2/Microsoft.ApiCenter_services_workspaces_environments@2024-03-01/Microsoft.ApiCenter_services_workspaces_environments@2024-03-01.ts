import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApicenterServicesWorkspacesEnvironmentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * The custom metadata defined for API catalog entities.
   */
readonly customProperties?: For Bicep, you can use theany()function.;

/**
   * Description.
   */
readonly description?: string;

/**
   * Environment kind.
   */
readonly kind: 'development''production''staging''testing';

/**
   * 
   */
readonly onboarding?: Onboarding;

/**
   * Server information of the environment.
   */
readonly server?: EnvironmentServer;

/**
   * Environment title.
   */
readonly title: string Constranumbers:Min length = 1Max length = 50;

/**
   * 
   */
readonly developerPortalUri?: string[]Constranumbers:Max length = 1;

/**
   * Onboarding guide.
   */
readonly instructions?: string;

/**
   * 
   */
readonly managementPortalUri?: string[]Constranumbers:Max length = 1;

/**
   * Type of the server that represents the environment.
   */
readonly type?: 'AWS API Gateway''Apigee API Management''Azure API Management''Azure compute service''Kong API Gateway''Kubernetes''MuleSoft API Management';
}

/**
 * ApicenterServicesWorkspacesEnvironments resource
 */
export class ApicenterServicesWorkspacesEnvironments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApicenterServicesWorkspacesEnvironmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiCenter/services/workspaces/environments@2024-03-01";
  }

  protected getResourceBody(props: ApicenterServicesWorkspacesEnvironmentsProps): string {
    return JSON.stringify(
        {properties: {description: "string", kind: "string", onboarding: {developerPortalUri: ["string"], instructions: "string"}, server: {managementPortalUri: ["string"], type: "string"}, title: "string"}}
    );
  }
}
