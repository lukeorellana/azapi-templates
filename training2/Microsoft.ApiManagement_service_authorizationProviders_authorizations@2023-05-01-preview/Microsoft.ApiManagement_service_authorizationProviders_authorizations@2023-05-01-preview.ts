import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:authorizationProviders;

/**
   * Authorization type options
   */
readonly authorizationType?: 'OAuth2';

/**
   * Authorization error details.
   */
readonly error?: AuthorizationError;

/**
   * OAuth2 grant type options
   */
readonly oauth2grantType?: 'AuthorizationCode''ClientCredentials';

/**
   * Authorization parameters
   */
readonly parameters?: AuthorizationContractPropertiesParameters;

/**
   * Status of the Authorization
   */
readonly status?: string;

/**
   * Error code
   */
readonly code?: string;

/**
   * Error message
   */
readonly message?: string;

/**
   * 
   */
readonly {customized property}?: string;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
