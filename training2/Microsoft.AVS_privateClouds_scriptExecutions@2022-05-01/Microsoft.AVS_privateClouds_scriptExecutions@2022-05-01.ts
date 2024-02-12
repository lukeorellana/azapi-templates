import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsScriptexecutionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:privateClouds;

/**
   * Error message if the script was able to run, but if the script itself had errors or powershell threw an exception
   */
readonly failureReason?: string;

/**
   * Parameters that will be hidden/not visible to ARM, such as passwords and credentials
   */
readonly hiddenParameters?: ScriptExecutionParameter[];

/**
   * User-defined dictionary.
   */
readonly namedOutputs?: object;

/**
   * Standard output stream from the powershell execution
   */
readonly output?: string[];

/**
   * Parameters the script will accept
   */
readonly parameters?: ScriptExecutionParameter[];

/**
   * Time to live for the resource. If not provided, will be available for 60 days
   */
readonly retention?: string;

/**
   * A reference to the script cmdlet resource if user is running a AVS script
   */
readonly scriptCmdletId?: string;

/**
   * Time limit for execution
   */
readonly timeout: string;

/**
   * Set the object type
   */
readonly type: CredentialSecureValueValue;

/**
   * The type of execution parameter
   */
readonly type: 'Credential';

/**
   * password for login
   */
readonly password?: string;

/**
   * username for login
   */
readonly username?: string;

/**
   * The type of execution parameter
   */
readonly type: 'SecureValue';

/**
   * A secure value for the passed parameter, not to be stored in logs
   */
readonly secureValue?: string;

/**
   * The type of execution parameter
   */
readonly type: 'Value';

/**
   * The value for the passed parameter
   */
readonly value?: string;
}

/**
 * AvsPrivatecloudsScriptexecutions resource
 */
export class AvsPrivatecloudsScriptexecutions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsScriptexecutionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/scriptExecutions@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsScriptexecutionsProps): string {
    return JSON.stringify(
        {properties: {failureReason: "string", hiddenParameters: [{name: "string", type: "string"}], namedOutputs: {}, output: ["string"], parameters: [{name: "string", type: "string"}], retention: "string", scriptCmdletId: "string", timeout: "string"}}
    );
  }
}
