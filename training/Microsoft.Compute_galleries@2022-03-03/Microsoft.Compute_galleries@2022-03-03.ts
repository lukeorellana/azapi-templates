import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface ComputeGalleriesProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics and periods.Start and end with alphanumeric. |
// | location | Resource location | string (required) |
// | tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
// | properties | Describes the properties of a Shared Image Gallery. | GalleryProperties |

// | Name | Description | Value |
// |-|-|-|
// | description | The description of this Shared Image Gallery resource. This property is updatable. | string |
// | identifier | Describes the gallery unique name. | GalleryIdentifier |
// | sharingProfile | Profile for gallery sharing to subscription or tenant | SharingProfile |
// | softDeletePolicy | Contains information about the soft deletion policy of the gallery. | SoftDeletePolicy |

// | Name | Description | Value |
// |-|-|-|
// | communityGalleryInfo | Information of community gallery if current gallery is shared to community. | CommunityGalleryInfo |
// | permissions | This property allows you to specify the permission of sharing gallery.Possible values are:PrivateGroupsCommunity | 'Community''Groups''Private' |

// | Name | Description | Value |
// |-|-|-|
// | eula | End-user license agreement for community gallery image. | string |
// | publicNamePrefix | The prefix of the gallery name that will be displayed publicly. Visible to all users. | string |
// | publisherContact | Community gallery publisher support email. The email address of the publisher. Visible to all users. | string |
// | publisherUri | The link to the publisher website. Visible to all users. | string |

// | Name | Description | Value |
// |-|-|-|
// | isSoftDeleteEnabled | Enables soft-deletion for resources in this gallery, allowing them to be recovered within retention time. | bool |
