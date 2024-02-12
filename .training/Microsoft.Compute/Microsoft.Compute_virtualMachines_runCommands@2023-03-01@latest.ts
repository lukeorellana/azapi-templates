import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeVirtualmachinesRuncommandsProps extends IAzAPIBaseProps {

}

/**
 * ComputeVirtualmachinesRuncommands resource
 */
export class ComputeVirtualmachinesRuncommands extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeVirtualmachinesRuncommandsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/virtualMachines/runCommands@2023-03-01";
  }

  protected getResourceBody(props: ComputeVirtualmachinesRuncommandsProps): string {
    return JSON.stringify(
        {properties: {asyncExecution: "${bool}", errorBlobManagedIdentity: {clientId: "string", objectId: "string"}, errorBlobUri: "string", outputBlobManagedIdentity: {clientId: "string", objectId: "string"}, outputBlobUri: "string", parameters: [{name: "string", value: "string"}], protectedParameters: [{name: "string", value: "string"}], runAsPassword: "string", runAsUser: "string", source: {commandId: "string", script: "string", scriptUri: "string", scriptUriManagedIdentity: {clientId: "string", objectId: "string"}}, timeoutInSeconds: "${int}", treatFailureAsDeploymentFailure: "${bool}"}}
    );
  }
}