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
readonly parent?: Symbolic name for resource of type:service;

/**
   * Authorization Provider name. Must be 1 to 300 characters long.
   */
readonly displayName?: string;

/**
   * Identity provider name. Must be 1 to 300 characters long.
   */
readonly identityProvider?: string;

/**
   * OAuth2 settings
   */
readonly oauth2?: AuthorizationProviderOAuth2Settings;

/**
   * OAuth2 settings
   */
readonly grantTypes?: AuthorizationProviderOAuth2GrantTypes;

/**
   * Redirect URL to be set in the OAuth application.
   */
readonly redirectUrl?: string;

/**
   * OAuth2 authorization code grant parameters
   */
readonly authorizationCode?: AuthorizationProviderOAuth2GrantTypesAuthorizationCo...;

/**
   * OAuth2 client credential grant parameters
   */
readonly clientCredentials?: AuthorizationProviderOAuth2GrantTypesClientCredentia...;

/**
   * 
   */
readonly {customized property}?: string;

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
