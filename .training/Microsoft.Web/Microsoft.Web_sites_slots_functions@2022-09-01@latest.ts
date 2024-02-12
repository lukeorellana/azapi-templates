import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsFunctionsProps extends IAzAPIBaseProps {

}

/**
 * WebSitesSlotsFunctions resource
 */
export class WebSitesSlotsFunctions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsFunctionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/functions@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsFunctionsProps): string {
    return JSON.stringify(
        {properties: {config_href: "string", files: {}, function_app_id: "string", href: "string", invoke_url_template: "string", isDisabled: "${bool}", language: "string", script_href: "string", script_root_path_href: "string", secrets_file_href: "string", test_data: "string", test_data_href: "string"}, kind: "string"}
    );
  }
}