import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningservicesWorkspacesConnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * Category of the connection
   */
readonly category?: 'ContainerRegistry''Git''PythonFeed';

/**
   * 
   */
readonly target?: string;

/**
   * Value details of the workspace connection.
   */
readonly value?: string;

/**
   * format for the workspace connection value
   */
readonly valueFormat?: 'JSON';

/**
   * Set the object type
   */
readonly authType: ManagedIdentityNonePATSASUsernamePassword;

/**
   * Authentication type of the connection target
   */
readonly authType: 'ManagedIdentity';

/**
   * 
   */
readonly credentials?: WorkspaceConnectionManagedIdentity;

/**
   * 
   */
readonly clientId?: string;

/**
   * 
   */
readonly resourceId?: string;

/**
   * Authentication type of the connection target
   */
readonly authType: 'None';

/**
   * Authentication type of the connection target
   */
readonly authType: 'PAT';

/**
   * 
   */
readonly credentials?: WorkspaceConnectionPersonalAccessToken;

/**
   * 
   */
readonly pat?: string;

/**
   * Authentication type of the connection target
   */
readonly authType: 'SAS';

/**
   * 
   */
readonly credentials?: WorkspaceConnectionSharedAccessSignature;

/**
   * 
   */
readonly sas?: string;

/**
   * Authentication type of the connection target
   */
readonly authType: 'UsernamePassword';

/**
   * 
   */
readonly credentials?: WorkspaceConnectionUsernamePassword;

/**
   * 
   */
readonly password?: string;

/**
   * 
   */
readonly username?: string;
}

/**
 * MachinelearningservicesWorkspacesConnections resource
 */
export class MachinelearningservicesWorkspacesConnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MachinelearningservicesWorkspacesConnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MachineLearningServices/workspaces/connections@2023-10-01";
  }

  protected getResourceBody(props: MachinelearningservicesWorkspacesConnectionsProps): string {
    return JSON.stringify(
        {properties: {category: "string", target: "string", value: "string", valueFormat: "JSON", authType: "string"}}
    );
  }
}
