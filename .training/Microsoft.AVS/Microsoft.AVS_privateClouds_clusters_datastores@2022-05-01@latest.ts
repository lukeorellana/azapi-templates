import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsClustersDatastoresProps extends IAzAPIBaseProps {

}

/**
 * AvsPrivatecloudsClustersDatastores resource
 */
export class AvsPrivatecloudsClustersDatastores extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsClustersDatastoresProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/clusters/datastores@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsClustersDatastoresProps): string {
    return JSON.stringify(
        {properties: {diskPoolVolume: {lunName: "string", mountOption: "string", targetId: "string"}, netAppVolume: {id: "string"}}}
    );
  }
}
