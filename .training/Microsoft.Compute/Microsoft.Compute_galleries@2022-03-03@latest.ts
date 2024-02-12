import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeGalleriesProps extends IAzAPIBaseProps {

}

/**
 * ComputeGalleries resource
 */
export class ComputeGalleries extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeGalleriesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/galleries@2022-03-03";
  }

  protected getResourceBody(props: ComputeGalleriesProps): string {
    return JSON.stringify(
        {properties: {description: "string", identifier: {}, sharingProfile: {communityGalleryInfo: {eula: "string", publicNamePrefix: "string", publisherContact: "string", publisherUri: "string"}, permissions: "string"}, softDeletePolicy: {isSoftDeleteEnabled: "${bool}"}}}
    );
  }
}
