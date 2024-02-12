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
readonly parent?: Symbolic name for resource of type:components;

/**
   * Favorite category, as defined by the user at creation time.
   */
readonly Category?: string;

/**
   * Configuration of this particular favorite, which are driven by the Azure portal UX. Configuration data is a string containing valid JSON
   */
readonly Config?: string;

/**
   * Enum indicating if this favorite definition is owned by a specific user or is shared between all users with access to the Application Insights component.
   */
readonly FavoriteType?: 'shared''user';

/**
   * Flag denoting wether or not this favorite was generated from a template.
   */
readonly IsGeneratedFromTemplate?: bool;

/**
   * The source of the favorite definition.
   */
readonly SourceType?: string;

/**
   * This instance's version of the data model. This can change as new features are added that can be marked favorite. Current examples include MetricsExplorer (ME) and Search.
   */
readonly Version?: string;
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
