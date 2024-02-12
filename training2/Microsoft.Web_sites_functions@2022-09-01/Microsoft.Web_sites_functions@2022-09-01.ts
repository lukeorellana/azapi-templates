import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesFunctionsProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sites;

/**
   * Config information.
   */
readonly config?: For Bicep, you can use theany()function.;

/**
   * Config URI.
   */
readonly config_href?: string;

/**
   * File list.
   */
readonly files?: object;

/**
   * Function App ID.
   */
readonly function_app_id?: string;

/**
   * Function URI.
   */
readonly href?: string;

/**
   * The invocation URL
   */
readonly invoke_url_template?: string;

/**
   * Gets or sets a value indicating whether the function is disabled
   */
readonly isDisabled?: bool;

/**
   * The function language
   */
readonly language?: string;

/**
   * Script URI.
   */
readonly script_href?: string;

/**
   * Script root path URI.
   */
readonly script_root_path_href?: string;

/**
   * Secrets file URI.
   */
readonly secrets_file_href?: string;

/**
   * Test data used when testing via the Azure Portal.
   */
readonly test_data?: string;

/**
   * Test data URI.
   */
readonly test_data_href?: string;
}

/**
 * WebSitesFunctions resource
 */
export class WebSitesFunctions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesFunctionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/functions@2022-09-01";
  }

  protected getResourceBody(props: WebSitesFunctionsProps): string {
    return JSON.stringify(
        {properties: {config_href: "string", files: {}, function_app_id: "string", href: "string", invoke_url_template: "string", isDisabled: "${bool}", language: "string", script_href: "string", script_root_path_href: "string", secrets_file_href: "string", test_data: "string", test_data_href: "string"}, kind: "string"}
    );
  }
}
