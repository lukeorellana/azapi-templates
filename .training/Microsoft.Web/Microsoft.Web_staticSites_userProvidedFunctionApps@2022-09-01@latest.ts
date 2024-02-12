import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebStaticsitesUserprovidedfunctionappsProps extends IAzAPIBaseProps {

}

/**
 * WebStaticsitesUserprovidedfunctionapps resource
 */
export class WebStaticsitesUserprovidedfunctionapps extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebStaticsitesUserprovidedfunctionappsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/staticSites/userProvidedFunctionApps@2022-09-01";
  }

  protected getResourceBody(props: WebStaticsitesUserprovidedfunctionappsProps): string {
    return JSON.stringify(
        {properties: {functionAppRegion: "string", functionAppResourceId: "string"}, kind: "string"}
    );
  }
}
