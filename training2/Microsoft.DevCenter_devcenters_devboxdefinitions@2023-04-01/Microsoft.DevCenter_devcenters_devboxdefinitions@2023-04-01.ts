import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterDevcentersDevboxdefinitionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:devcenters;

/**
   * Indicates whether Dev Boxes created with this definition are capable of hibernation. Not all images are capable of supporting hibernation. To find out more seehttps://aka.ms/devbox/hibernate
   */
readonly hibernateSupport?: 'Disabled''Enabled';

/**
   * Image reference information.
   */
readonly imageReference?: ImageReference;

/**
   * The storage type used for the Operating System disk of Dev Boxes created using this definition.
   */
readonly osStorageType?: string;

/**
   * The SKU for Dev Boxes created using this definition.
   */
readonly sku?: Sku;

/**
   * Image ID, or Image version ID. When Image ID is provided, its latest version will be used.
   */
readonly id?: string;

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
 * DevcenterDevcentersDevboxdefinitions resource
 */
export class DevcenterDevcentersDevboxdefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevcenterDevcentersDevboxdefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevCenter/devcenters/devboxdefinitions@2023-04-01";
  }

  protected getResourceBody(props: DevcenterDevcentersDevboxdefinitionsProps): string {
    return JSON.stringify(
        {properties: {hibernateSupport: "string", imageReference: {id: "string"}, osStorageType: "string", sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}}}
    );
  }
}
