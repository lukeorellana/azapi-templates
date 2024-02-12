import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsSourcecontrolsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:automationAccounts;

/**
   * The auto async of the source control. Default is false.
   */
readonly autoSync?: bool;

/**
   * The repo branch of the source control. Include branch as empty string for VsoTfvc.
   */
readonly branch?: stringConstranumbers:Max length = 255;

/**
   * The user description of the source control.
   */
readonly description?: stringConstranumbers:Max length = 512;

/**
   * The folder path of the source control. Path must be relative.
   */
readonly folderPath?: stringConstranumbers:Max length = 255;

/**
   * The auto publish of the source control. Default is true.
   */
readonly publishRunbook?: bool;

/**
   * The repo url of the source control.
   */
readonly repoUrl?: stringConstranumbers:Max length = 2000;

/**
   * The authorization token for the repo of the source control.
   */
readonly securityToken?: SourceControlSecurityTokenProperties;

/**
   * The source type. Must be one of VsoGit, VsoTfvc, GitHub, case sensitive.
   */
readonly sourceType?: 'GitHub''VsoGit''VsoTfvc';

/**
   * The access token.
   */
readonly accessToken?: stringConstranumbers:Max length = 1024;

/**
   * The refresh token.
   */
readonly refreshToken?: stringConstranumbers:Max length = 1024;

/**
   * The token type. Must be either PersonalAccessToken or Oauth.
   */
readonly tokenType?: 'Oauth''PersonalAccessToken';
}

/**
 * AutomationAutomationaccountsSourcecontrols resource
 */
export class AutomationAutomationaccountsSourcecontrols extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AutomationAutomationaccountsSourcecontrolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Automation/automationAccounts/sourceControls@2023-11-01";
  }

  protected getResourceBody(props: AutomationAutomationaccountsSourcecontrolsProps): string {
    return JSON.stringify(
        {properties: {autoSync: "${bool}", branch: "string", description: "string", folderPath: "string", publishRunbook: "${bool}", repoUrl: "string", securityToken: {accessToken: "string", refreshToken: "string", tokenType: "string"}, sourceType: "string"}}
    );
  }
}
