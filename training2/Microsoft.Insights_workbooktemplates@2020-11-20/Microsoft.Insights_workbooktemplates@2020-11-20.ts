import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsWorkbooktemplatesProps extends IAzAPIBaseProps {
/**
   * Information about the author of the workbook template.
   */
readonly author?: string;

/**
   * Workbook galleries supported by the template.
   */
readonly galleries: WorkbookTemplateGallery[];

/**
   * Key value pair of localized gallery. Each key is the locale code of languages supported by the Azure portal.
   */
readonly localized?: object;

/**
   * Priority of the template. Determines which template to open when a workbook gallery is opened in viewer mode.
   */
readonly priority?: number;

/**
   * Valid JSON object containing workbook template payload.
   */
readonly templateData: For Bicep, you can use theany()function.;

/**
   * Category for the gallery.
   */
readonly category?: string;

/**
   * Order of the template within the gallery.
   */
readonly order?: number;

/**
   * Azure resource type supported by the gallery.
   */
readonly resourceType?: string;

/**
   * Type of workbook supported by the workbook template.
   */
readonly type?: string;
}

/**
 * InsightsWorkbooktemplates resource
 */
export class InsightsWorkbooktemplates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsWorkbooktemplatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/workbooktemplates@2020-11-20";
  }

  protected getResourceBody(props: InsightsWorkbooktemplatesProps): string {
    return JSON.stringify(
        {properties: {author: "string", galleries: [{category: "string", name: "string", order: "${int}", resourceType: "string", type: "string"}], localized: {}, priority: "${int}"}}
    );
  }
}
