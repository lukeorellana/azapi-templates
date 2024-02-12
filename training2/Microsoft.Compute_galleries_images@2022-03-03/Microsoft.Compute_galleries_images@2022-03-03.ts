import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeGalleriesImagesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:galleries;

/**
   * The architecture of the image. Applicable to OS disks only.
   */
readonly architecture?: 'Arm64''x64';

/**
   * The description of this gallery image definition resource. This property is updatable.
   */
readonly description?: string;

/**
   * Describes the disallowed disk types.
   */
readonly disallowed?: Disallowed;

/**
   * The end of life date of the gallery image definition. This property can be used for decommissioning purposes. This property is updatable.
   */
readonly endOfLifeDate?: string;

/**
   * The Eula agreement for the gallery image definition.
   */
readonly eula?: string;

/**
   * A list of gallery image features.
   */
readonly features?: GalleryImageFeature[];

/**
   * The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
   */
readonly hyperVGeneration?: 'V1''V2';

/**
   * This is the gallery image definition identifier.
   */
readonly identifier: GalleryImageIdentifier;

/**
   * This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'.
   */
readonly osState: 'Generalized''Specialized';

/**
   * This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image.Possible values are:WindowsLinux
   */
readonly osType: 'Linux''Windows';

/**
   * The privacy statement uri.
   */
readonly privacyStatementUri?: string;

/**
   * Describes the gallery image definition purchase plan. This is used by marketplace images.
   */
readonly purchasePlan?: ImagePurchasePlan;

/**
   * The properties describe the recommended machine configuration for this Image Definition. These properties are updatable.
   */
readonly recommended?: RecommendedMachineConfiguration;

/**
   * The release note uri.
   */
readonly releaseNoteUri?: string;

/**
   * A list of disk types.
   */
readonly diskTypes?: string[];

/**
   * The value of the gallery image feature.
   */
readonly value?: string;

/**
   * The name of the gallery image definition offer.
   */
readonly offer: string;

/**
   * The name of the gallery image definition publisher.
   */
readonly publisher: string;

/**
   * The name of the gallery image definition SKU.
   */
readonly sku: string;

/**
   * The product ID.
   */
readonly product?: string;

/**
   * The publisher ID.
   */
readonly publisher?: string;

/**
   * Describes the resource range.
   */
readonly memory?: ResourceRange;

/**
   * Describes the resource range.
   */
readonly vCPUs?: ResourceRange;

/**
   * The maximum number of the resource.
   */
readonly max?: number;

/**
   * The minimum number of the resource.
   */
readonly min?: number;
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
