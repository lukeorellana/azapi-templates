import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesExtensionsProps extends IAzAPIBaseProps {

}

/**
 * WebSitesExtensions resource
 */
export class WebSitesExtensions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesExtensionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/extensions@2022-09-01";
  }

  protected getResourceBody(props: WebSitesExtensionsProps): string {
    return JSON.stringify(
        {properties: {appOffline: "${bool}", connectionString: "string", dbType: "string", packageUri: "string", setParameters: {}, setParametersXmlFileUri: "string", skipAppData: "${bool}"}, kind: "string"}
    );
  }
}
