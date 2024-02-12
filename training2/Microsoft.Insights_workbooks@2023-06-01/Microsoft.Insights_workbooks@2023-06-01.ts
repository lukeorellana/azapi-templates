import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsWorkbooksProps extends IAzAPIBaseProps {
/**
   * The kind of workbook. Only valid value is shared.
   */
readonly kind?: 'shared';

/**
   * Resource etag
   */
readonly etag?: string;

/**
   * Identity used for BYOS
   */
readonly identity?: WorkbookResourceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: object;

/**
   * Workbook category, as defined by the user at creation time.
   */
readonly category: string;

/**
   * The description of the workbook.
   */
readonly description?: string;

/**
   * The user-defined name (display name) of the workbook.
   */
readonly displayName: string;

/**
   * Configuration of this particular workbook. Configuration data is a string containing valid JSON
   */
readonly serializedData: string;

/**
   * ResourceId for a source resource.
   */
readonly sourceId?: string;

/**
   * The resourceId to the storage account when bring your own storage is used
   */
readonly storageUri?: string;

/**
   * Workbook schema version format, like 'Notebook/1.0', which should match the workbook in serializedData
   */
readonly version?: string;
}

/**
 * InsightsWorkbooks resource
 */
export class InsightsWorkbooks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsWorkbooksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/workbooks@2023-06-01";
  }

  protected getResourceBody(props: InsightsWorkbooksProps): string {
    return JSON.stringify(
        {properties: {category: "string", description: "string", displayName: "string", serializedData: "string", sourceId: "string", storageUri: "string", tags: ["string"], version: "string"}, kind: "shared", etag: "string"}
    );
  }
}
