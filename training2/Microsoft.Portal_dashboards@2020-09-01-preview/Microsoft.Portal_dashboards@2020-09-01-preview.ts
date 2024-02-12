import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PortalDashboardsProps extends IAzAPIBaseProps {
/**
   * The dashboard lenses.
   */
readonly lenses?: DashboardLens[];

/**
   * The dashboard metadata.
   */
readonly metadata?: object;

/**
   * The dashboard len's metadata.
   */
readonly metadata?: object;

/**
   * The lens order.
   */
readonly order: number;

/**
   * The dashboard parts.
   */
readonly parts: DashboardParts[];

/**
   * The dashboard part's metadata.
   */
readonly metadata?: DashboardPartMetadata;

/**
   * The dashboard's part position.
   */
readonly position: DashboardPartsPosition;

/**
   * Set the object type
   */
readonly type: Extension/HubsExtension/PartType/MarkdownPart;

/**
   * The type of dashboard part.
   */
readonly type: 'Extension/HubsExtension/PartType/MarkdownPart';

/**
   * Input to dashboard part.
   */
readonly inputs?: any[];

/**
   * Markdown part settings.
   */
readonly settings?: MarkdownPartMetadataSettings;

/**
   * The content of markdown part.
   */
readonly content?: MarkdownPartMetadataSettingsContent;

/**
   * The setting of the content of markdown part.
   */
readonly settings?: MarkdownPartMetadataSettingsContentSettings;

/**
   * The content of the markdown part.
   */
readonly content?: string;

/**
   * The source of the content of the markdown part.
   */
readonly markdownSource?: number;

/**
   * The uri of markdown content.
   */
readonly markdownUri?: string;

/**
   * The subtitle of the markdown part.
   */
readonly subtitle?: string;

/**
   * The title of the markdown part.
   */
readonly title?: string;

/**
   * The dashboard's part column span.
   */
readonly colSpan: number;

/**
   * The dashboard part's metadata.
   */
readonly metadata?: object;

/**
   * The dashboard's part row span.
   */
readonly rowSpan: number;

/**
   * The dashboard's part x coordinate.
   */
readonly x: number;

/**
   * The dashboard's part y coordinate.
   */
readonly y: number;
}

/**
 * PortalDashboards resource
 */
export class PortalDashboards extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PortalDashboardsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Portal/dashboards@2020-09-01-preview";
  }

  protected getResourceBody(props: PortalDashboardsProps): string {
    return JSON.stringify(
        {properties: {lenses: [{metadata: {}, order: "${int}", parts: [{metadata: {type: "string"}, position: {colSpan: "${int}", metadata: {}, rowSpan: "${int}", x: "${int}", y: "${int}"}}]}], metadata: {}}}
    );
  }
}
