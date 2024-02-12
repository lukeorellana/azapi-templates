import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsUsersEnvironmentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:users;

/**
   * The display name of the Azure Resource Manager template that produced the environment.
   */
readonly armTemplateDisplayName?: string;

/**
   * The deployment properties of the environment.
   */
readonly deploymentProperties?: EnvironmentDeploymentProperties;

/**
   * The Azure Resource Manager template's identifier.
   */
readonly armTemplateId?: string;

/**
   * The parameters of the Azure Resource Manager template.
   */
readonly parameters?: ArmTemplateParameterProperties[];

/**
   * The value of the template parameter.
   */
readonly value?: string;
}

/**
 * DevtestlabLabsUsersEnvironments resource
 */
export class DevtestlabLabsUsersEnvironments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsUsersEnvironmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/users/environments@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsUsersEnvironmentsProps): string {
    return JSON.stringify(
        {properties: {armTemplateDisplayName: "string", deploymentProperties: {armTemplateId: "string", parameters: [{name: "string", value: "string"}]}}}
    );
  }
}
