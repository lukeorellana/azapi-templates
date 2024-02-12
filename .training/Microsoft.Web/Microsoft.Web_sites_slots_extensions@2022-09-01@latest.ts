import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsExtensionsProps extends IAzAPIBaseProps {

}

/**
 * WebSitesSlotsExtensions resource
 */
export class WebSitesSlotsExtensions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsExtensionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/extensions@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsExtensionsProps): string {
    return JSON.stringify(
        {properties: {appOffline: "${bool}", connectionString: "string", dbType: "string", packageUri: "string", setParameters: {}, setParametersXmlFileUri: "string", skipAppData: "${bool}"}, kind: "string"}
    );
  }
}
