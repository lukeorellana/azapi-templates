import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningservicesCapacityreserverationgroupsProps extends IAzAPIBaseProps {
/**
   * Sku details required for ARM contract for Autoscaling.
   */
readonly sku?: Sku;

/**
   * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
   */
readonly kind?: string;

/**
   * Managed service identity (system assigned and/or user assigned identities)
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: UserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentity;

/**
   * Offer used by this capacity reservation group.
   */
readonly offer?: ServerlessOffer;

/**
   * [Required] Specifies the amount of capacity to reserve.
   */
readonly reservedCapacity: number;

/**
   * [Required] The name of the Serverless Offer
   */
readonly offerName: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * [Required] Publisher name of the Serverless Offer
   */
readonly publisher: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

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
 * MachinelearningservicesCapacityreserverationgroups resource
 */
export class MachinelearningservicesCapacityreserverationgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MachinelearningservicesCapacityreserverationgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MachineLearningServices/capacityReserverationGroups@2023-08-01-preview";
  }

  protected getResourceBody(props: MachinelearningservicesCapacityreserverationgroupsProps): string {
    return JSON.stringify(
        {properties: {offer: {offerName: "string", publisher: "string"}, reservedCapacity: "${int}"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}, kind: "string"}
    );
  }
}
