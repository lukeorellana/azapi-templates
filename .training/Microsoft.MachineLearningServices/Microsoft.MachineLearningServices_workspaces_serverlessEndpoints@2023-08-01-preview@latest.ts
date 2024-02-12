import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningservicesWorkspacesServerlessendpointsProps extends IAzAPIBaseProps {

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
