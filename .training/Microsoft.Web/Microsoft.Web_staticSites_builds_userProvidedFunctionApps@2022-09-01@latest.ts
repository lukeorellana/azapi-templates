import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebStaticsitesBuildsUserprovidedfunctionappsProps extends IAzAPIBaseProps {

}

/**
 * WebStaticsitesBuildsUserprovidedfunctionapps resource
 */
export class WebStaticsitesBuildsUserprovidedfunctionapps extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebStaticsitesBuildsUserprovidedfunctionappsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/staticSites/builds/userProvidedFunctionApps@2022-09-01";
  }

  protected getResourceBody(props: WebStaticsitesBuildsUserprovidedfunctionappsProps): string {
    return JSON.stringify(
        {properties: {functionAppRegion: "string", functionAppResourceId: "string"}, kind: "string"}
    );
  }
}
