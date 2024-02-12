import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningservicesWorkspacesServerlessendpointsProps extends IAzAPIBaseProps {
/**
   * Sku details required for ARM contract for Autoscaling.
   */
readonly sku?: Sku;

/**
   * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

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
   * Specifies the authentication mode for the Serverless endpoint.
   */
readonly authMode?: 'AAD''Key';

/**
   * Optional capacity reservation information for the endpoint. When specified, the Serverless Endpointwill be allocated capacity from the specified capacity reservation group.
   */
readonly capacityReservation?: ServerlessEndponumberCapacityReservation;

/**
   * [Required] The publisher-defined Serverless Offer to provision the endpoint with.
   */
readonly offer: ServerlessOffer;

/**
   * [Required] Specifies a capacity reservation group ID to allocate capacity from.
   */
readonly capacityReservationGroupId: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * Specifies a capacity amount to reserve for this endpoint within the parent capacity reservation group.
   */
readonly endpointReservedCapacity?: number;

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
 * MachinelearningservicesWorkspacesServerlessendpoints resource
 */
export class MachinelearningservicesWorkspacesServerlessendpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MachinelearningservicesWorkspacesServerlessendpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MachineLearningServices/workspaces/serverlessEndpoints@2023-08-01-preview";
  }

  protected getResourceBody(props: MachinelearningservicesWorkspacesServerlessendpointsProps): string {
    return JSON.stringify(
        {properties: {authMode: "string", capacityReservation: {capacityReservationGroupId: "string", endpointReservedCapacity: "${int}"}, offer: {offerName: "string", publisher: "string"}}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}, kind: "string"}
    );
  }
}
