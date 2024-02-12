import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * 
   */
readonly sku?: ResourceModelWithAllowedPropertySetSku;

/**
   * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
   */
readonly kind?: stringConstranumbers:Pattern =^[-\w\._,\(\)]+$;

/**
   * 
   */
readonly identity?: ResourceModelWithAllowedPropertySetIdentity;

/**
   * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
   */
readonly managedBy?: string;

/**
   * 
   */
readonly plan?: ResourceModelWithAllowedPropertySetPlan;

/**
   * The identity type.
   */
readonly type?: 'SystemAssigned';

/**
   * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding.
   */
readonly product: string;

/**
   * A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
   */
readonly promotionCode?: string;

/**
   * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
   */
readonly publisher: string;

/**
   * The version of the desired product/artifact.
   */
readonly version?: string;

/**
   * List of applicationGroup resource Ids.
   */
readonly applicationGroupReferences?: string[];

/**
   * Description of Workspace.
   */
readonly description?: string;

/**
   * Friendly name of Workspace.
   */
readonly friendlyName?: string;

/**
   * Enabled allows this resource to be accessed from both public and private networks, Disabled allows this resource to only be accessed via private endpoints
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
   */
readonly capacity?: number;

/**
   * If the service has different generations of hardware, for the same SKU, then that can be captured here.
   */
readonly family?: string;

/**
   * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
   */
readonly size?: string;

/**
   * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
   */
readonly tier?: 'Basic''Free''Premium''Standard';
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
