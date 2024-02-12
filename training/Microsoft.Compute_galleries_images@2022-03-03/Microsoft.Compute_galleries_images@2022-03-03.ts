import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface ComputeGalleriesImagesProps extends IAzAPIBaseProps {

}

export class ComputeGalleriesImages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeGalleriesImagesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/galleries/images@2022-03-03";
  }

  protected getResourceBody(props: ComputeGalleriesImagesProps): string {
    return JSON.stringify(
      {properties: {architecture: "string", description: "string", disallowed: {diskTypes: ["string"]}, endOfLifeDate: "string", eula: "string", features: [{name: "string", value: "string"}], hyperVGeneration: "string", identifier: {offer: "string", publisher: "string", sku: "string"}, osState: "string", osType: "string", privacyStatementUri: "string", purchasePlan: {name: "string", product: "string", publisher: "string"}, recommended: {memory: {max: int, min: int}, vCPUs: {max: int, min: int}}, releaseNoteUri: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, hyphens, and periods.Start and end with alphanumeric. |
// | location | Resource location | string (required) |
// | tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:galleries |
// | properties | Describes the properties of a gallery image definition. | GalleryImageProperties |

// | Name | Description | Value |
// |-|-|-|
// | architecture | The architecture of the image. Applicable to OS disks only. | 'Arm64''x64' |
// | description | The description of this gallery image definition resource. This property is updatable. | string |
// | disallowed | Describes the disallowed disk types. | Disallowed |
// | endOfLifeDate | The end of life date of the gallery image definition. This property can be used for decommissioning purposes. This property is updatable. | string |
// | eula | The Eula agreement for the gallery image definition. | string |
// | features | A list of gallery image features. | GalleryImageFeature[] |
// | hyperVGeneration | The hypervisor generation of the Virtual Machine. Applicable to OS disks only. | 'V1''V2' |
// | identifier | This is the gallery image definition identifier. | GalleryImageIdentifier(required) |
// | osState | This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'. | 'Generalized''Specialized' (required) |
// | osType | This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image.Possible values are:WindowsLinux | 'Linux''Windows' (required) |
// | privacyStatementUri | The privacy statement uri. | string |
// | purchasePlan | Describes the gallery image definition purchase plan. This is used by marketplace images. | ImagePurchasePlan |
// | recommended | The properties describe the recommended machine configuration for this Image Definition. These properties are updatable. | RecommendedMachineConfiguration |
// | releaseNoteUri | The release note uri. | string |

// | Name | Description | Value |
// |-|-|-|
// | diskTypes | A list of disk types. | string[] |

// | Name | Description | Value |
// |-|-|-|
// | name | The name of the gallery image feature. | string |
// | value | The value of the gallery image feature. | string |

// | Name | Description | Value |
// |-|-|-|
// | offer | The name of the gallery image definition offer. | string (required) |
// | publisher | The name of the gallery image definition publisher. | string (required) |
// | sku | The name of the gallery image definition SKU. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | name | The plan ID. | string |
// | product | The product ID. | string |
// | publisher | The publisher ID. | string |

// | Name | Description | Value |
// |-|-|-|
// | memory | Describes the resource range. | ResourceRange |
// | vCPUs | Describes the resource range. | ResourceRange |

// | Name | Description | Value |
// |-|-|-|
// | max | The maximum number of the resource. | int |
// | min | The minimum number of the resource. | int |
