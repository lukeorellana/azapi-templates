import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeGalleriesImagesProps extends IAzAPIBaseProps {

}

/**
 * ComputeGalleriesImages resource
 */
export class ComputeGalleriesImages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeGalleriesImagesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/galleries/images@2022-03-03";
  }

  protected getResourceBody(props: ComputeGalleriesImagesProps): string {
    return JSON.stringify(
        {properties: {architecture: "string", description: "string", disallowed: {diskTypes: ["string"]}, endOfLifeDate: "string", eula: "string", features: [{name: "string", value: "string"}], hyperVGeneration: "string", identifier: {offer: "string", publisher: "string", sku: "string"}, osState: "string", osType: "string", privacyStatementUri: "string", purchasePlan: {name: "string", product: "string", publisher: "string"}, recommended: {memory: {max: "${int}", min: "${int}"}, vCPUs: {max: "${int}", min: "${int}"}}, releaseNoteUri: "string"}}
    );
  }
}
