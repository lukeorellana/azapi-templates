import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ResourcesDeploymentsProps extends IAzAPIBaseProps {
/**
   * In tenant and management group deployments, provide the management group ID to target. Use the formatMicrosoft.Management/managementGroups/{managementGroupID}.
   */
readonly scope?: string;

/**
   * The name of the resource group to deploy to. If not provided, uses the resource group of the deployment operation.
   */
readonly resourceGroup?: string;

/**
   * The ID of the subscription to deploy to. If not provided, uses the subscription of the deployment operation.
   */
readonly subscriptionId?: string;

/**
   * The debug setting of the deployment.
   */
readonly debugSetting?: DebugSetting;

/**
   * Specifies whether template expressions are evaluated within the scope of the parent template or nested template. Only applicable to nested templates. If not specified, default value is outer.
   */
readonly expressionEvaluationOptions?: ExpressionEvaluationOptions;

/**
   * The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources.
   */
readonly mode: 'Complete''Incremental';

/**
   * The deployment on error behavior.
   */
readonly onErrorDeployment?: OnErrorDeploymentOrOnErrorDeploymentExtended;

/**
   * Name and value pairs that define the deployment parameters for the template. You use this element when you want to provide the parameter values directly in the request rather than link to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string.
   */
readonly parameters?: For Bicep, you can use theany()function.;

/**
   * The URI of parameters file. You use this element to link to an existing parameters file. Use either the parametersLink property or the parameters property, but not both.
   */
readonly parametersLink?: ParametersLink;

/**
   * The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both.
   */
readonly template?: For Bicep, you can use theany()function.;

/**
   * The URI of the template. Use either the templateLink property or the template property, but not both.
   */
readonly templateLink?: TemplateLink;

/**
   * Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information you are passing in during deployment. By logging information about the request or response, you could potentially expose sensitive data that is retrieved through the deployment operations.
   */
readonly detailLevel?: string;

/**
   * The scope to be used for evaluation of parameters, variables and functions in a nested template.
   */
readonly scope?: 'Inner''NotSpecified''Outer';

/**
   * The deployment to be used on error case.
   */
readonly deploymentName?: string;

/**
   * The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment.
   */
readonly type?: 'LastSuccessful''SpecificDeployment';

/**
   * If included, must match the ContentVersion in the template.
   */
readonly contentVersion?: string;

/**
   * The URI of the parameters file.
   */
readonly uri: string;

/**
   * If included, must match the ContentVersion in the template.
   */
readonly contentVersion?: string;

/**
   * The resource id of a Template Spec. Use either the id or uri property, but not both.
   */
readonly id?: string;

/**
   * The query string (for example, a SAS token) to be used with the templateLink URI.
   */
readonly queryString?: string;

/**
   * The relativePath property can be used to deploy a linked template at a location relative to the parent. If the parent template was linked with a TemplateSpec, this will reference an artifact in the TemplateSpec.  If the parent was linked with a URI, the child deployment will be a combination of the parent and relativePath URIs
   */
readonly relativePath?: string;

/**
   * The URI of the template to deploy. Use either the uri or id property, but not both.
   */
readonly uri?: string;
}

/**
 * ResourcesDeployments resource
 */
export class ResourcesDeployments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ResourcesDeploymentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Resources/deployments@2022-09-01";
  }

  protected getResourceBody(props: ResourcesDeploymentsProps): string {
    return JSON.stringify(
        {properties: {debugSetting: {detailLevel: "string"}, expressionEvaluationOptions: {scope: "string"}, mode: "string", onErrorDeployment: {deploymentName: "string", type: "string"}, parametersLink: {contentVersion: "string", uri: "string"}, templateLink: {contentVersion: "string", id: "string", queryString: "string", relativePath: "string", uri: "string"}}, resourceGroup: "string", subscriptionId: "string", scope: "string"}
    );
  }
}
