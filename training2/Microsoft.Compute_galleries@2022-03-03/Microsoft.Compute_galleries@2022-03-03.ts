import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeGalleriesProps extends IAzAPIBaseProps {
/**
   * The description of this Shared Image Gallery resource. This property is updatable.
   */
readonly description?: string;

/**
   * Describes the gallery unique name.
   */
readonly identifier?: GalleryIdentifier;

/**
   * Profile for gallery sharing to subscription or tenant
   */
readonly sharingProfile?: SharingProfile;

/**
   * Contains information about the soft deletion policy of the gallery.
   */
readonly softDeletePolicy?: SoftDeletePolicy;

/**
   * Information of community gallery if current gallery is shared to community.
   */
readonly communityGalleryInfo?: CommunityGalleryInfo;

/**
   * This property allows you to specify the permission of sharing gallery.Possible values are:PrivateGroupsCommunity
   */
readonly permissions?: 'Community''Groups''Private';

/**
   * End-user license agreement for community gallery image.
   */
readonly eula?: string;

/**
   * The prefix of the gallery name that will be displayed publicly. Visible to all users.
   */
readonly publicNamePrefix?: string;

/**
   * Community gallery publisher support email. The email address of the publisher. Visible to all users.
   */
readonly publisherContact?: string;

/**
   * The link to the publisher website. Visible to all users.
   */
readonly publisherUri?: string;

/**
   * Enables soft-deletion for resources in this gallery, allowing them to be recovered within retention time.
   */
readonly isSoftDeleteEnabled?: bool;
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
