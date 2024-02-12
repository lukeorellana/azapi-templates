import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:assets;

/**
   * Detailed information about a track in the asset.
   */
readonly track?: TrackBase;

/**
   * Set the object type
   */
readonly @odata.type: #Microsoft.Media.AudioTrack#Microsoft.Media.TextTrack#Microsoft.Media.VideoTrack;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.AudioTrack';

/**
   * The DASH specific setting for the audio track.
   */
readonly dashSettings?: DashSettings;

/**
   * The display name of the audio track on a video player. In HLS, this maps to the NAME attribute of EXT-X-MEDIA.
   */
readonly displayName?: string;

/**
   * The file name to the source file. This file is located in the storage container of the asset.
   */
readonly fileName?: string;

/**
   * The HLS specific setting for the audio track.
   */
readonly hlsSettings?: HlsSettings;

/**
   * The RFC5646 language code for the audio track.
   */
readonly languageCode?: string;

/**
   * The MPEG-4 audio track ID for the audio track.
   */
readonly mpeg4TrackId?: number;

/**
   * The role for the DASH setting.
   */
readonly role?: string;

/**
   * The characteristics for the HLS setting.
   */
readonly characteristics?: string;

/**
   * The default for the HLS setting.
   */
readonly default?: bool;

/**
   * The forced for the HLS setting.
   */
readonly forced?: bool;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.TextTrack';

/**
   * The display name of the text track on a video player. In HLS, this maps to the NAME attribute of EXT-X-MEDIA.
   */
readonly displayName?: string;

/**
   * The file name to the source file. This file is located in the storage container of the asset.
   */
readonly fileName?: string;

/**
   * The HLS specific setting for the text track.
   */
readonly hlsSettings?: HlsSettings;

/**
   * When PlayerVisibility is set to "Visible", the text track will be present in the DASH manifest or HLS playlist when requested by a client. When the PlayerVisibility is set to "Hidden", the text will not be available to the client. The default value is "Visible".
   */
readonly playerVisibility?: 'Hidden''Visible';

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.VideoTrack';
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
